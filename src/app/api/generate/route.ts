import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { getToolBySlug, buildPrompt } from "@/lib/prompts";
import { PDFParse } from "pdf-parse";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const MAX_PDF_SIZE = 10 * 1024 * 1024; // 10MB
const MAX_EXTRACTED_CHARS = 50000;

export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get("content-type") || "";

    let toolSlug: string;
    let input: string;
    let fields: Record<string, string> = {};

    if (contentType.includes("multipart/form-data")) {
      // PDF upload path
      const formData = await req.formData();
      toolSlug = formData.get("toolSlug") as string;
      const pdfFile = formData.get("pdf") as File | null;

      if (!toolSlug || !pdfFile) {
        return NextResponse.json(
          { error: "Missing required fields" },
          { status: 400 }
        );
      }

      if (pdfFile.type !== "application/pdf") {
        return NextResponse.json(
          { error: "Invalid file type. Please upload a PDF." },
          { status: 400 }
        );
      }

      if (pdfFile.size > MAX_PDF_SIZE) {
        return NextResponse.json(
          { error: "File too large. Maximum size is 10MB." },
          { status: 400 }
        );
      }

      try {
        const arrayBuffer = await pdfFile.arrayBuffer();
        const parser = new PDFParse({ data: new Uint8Array(arrayBuffer) });
        const textResult = await parser.getText();
        input = textResult.text;
        await parser.destroy();
      } catch {
        return NextResponse.json(
          {
            error:
              "Could not read PDF. The file may be corrupted or password-protected.",
          },
          { status: 400 }
        );
      }

      if (!input?.trim()) {
        return NextResponse.json(
          {
            error:
              "No readable text found in the PDF. It may contain only images or scanned content.",
          },
          { status: 400 }
        );
      }

      if (input.length > MAX_EXTRACTED_CHARS) {
        input = input.substring(0, MAX_EXTRACTED_CHARS);
      }

      // Extract fields (prefixed with "field_")
      for (const [key, value] of formData.entries()) {
        if (key.startsWith("field_")) {
          fields[key.replace("field_", "")] = value as string;
        }
      }
    } else {
      // Existing JSON path
      const body = await req.json();
      toolSlug = body.toolSlug;
      input = body.input;
      fields = body.fields || {};

      if (!toolSlug || !input) {
        return NextResponse.json(
          { error: "Missing required fields" },
          { status: 400 }
        );
      }

      if (input.length > 5000) {
        return NextResponse.json(
          { error: "Input too long. Maximum 5000 characters." },
          { status: 400 }
        );
      }
    }

    const tool = getToolBySlug(toolSlug);
    if (!tool) {
      return NextResponse.json({ error: "Tool not found" }, { status: 404 });
    }

    const prompt = buildPrompt(tool, input, fields);

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are a helpful AI assistant. Provide clear, well-formatted, and accurate responses.",
        },
        { role: "user", content: prompt },
      ],
      max_tokens: 2000,
      temperature: 0.7,
    });

    const result = completion.choices[0]?.message?.content;

    if (!result) {
      return NextResponse.json(
        { error: "Failed to generate content" },
        { status: 500 }
      );
    }

    return NextResponse.json({ result });
  } catch (error: unknown) {
    console.error("Generation error:", error);

    if (error instanceof OpenAI.APIError) {
      const msg = error.message || "OpenAI API error";
      const status = error.status || 500;
      return NextResponse.json(
        { error: `AI service error: ${msg}` },
        { status }
      );
    }

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
