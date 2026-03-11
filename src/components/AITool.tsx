"use client";

import { useState, useRef } from "react";
import type { ToolConfig } from "@/lib/prompts";
import {
  getRemainingUses,
  hasReachedLimit,
  incrementUsage,
  FREE_DAILY_LIMIT,
} from "@/lib/usage";

export default function AITool({ tool }: { tool: ToolConfig }) {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [remaining, setRemaining] = useState(() => getRemainingUses());
  const [fields, setFields] = useState<Record<string, string>>(() => {
    const defaults: Record<string, string> = {};
    tool.fields?.forEach((f) => {
      if (f.default !== undefined) defaults[f.name] = String(f.default);
    });
    return defaults;
  });

  // PDF upload state
  const [inputMode, setInputMode] = useState<"text" | "pdf">("text");
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (file: File) => {
    if (file.type !== "application/pdf") {
      setError("Please upload a valid PDF file.");
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      setError("File is too large. Maximum size is 10MB.");
      return;
    }
    setError("");
    setPdfFile(file);
  };

  const generate = async () => {
    if (inputMode === "text" && !input.trim()) {
      setError("Please enter some text first.");
      return;
    }
    if (inputMode === "pdf" && !pdfFile) {
      setError("Please upload a PDF file first.");
      return;
    }

    if (hasReachedLimit()) {
      setError(
        "You've reached your daily free limit. Upgrade to Pro for unlimited access!"
      );
      return;
    }

    setLoading(true);
    setError("");
    setResult("");

    try {
      let res: Response;

      if (inputMode === "pdf" && pdfFile) {
        const formData = new FormData();
        formData.append("toolSlug", tool.slug);
        formData.append("pdf", pdfFile);
        for (const [key, value] of Object.entries(fields)) {
          formData.append(`field_${key}`, value);
        }
        res = await fetch("/api/generate", {
          method: "POST",
          body: formData,
        });
      } else {
        res = await fetch("/api/generate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ toolSlug: tool.slug, input, fields }),
        });
      }

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong.");
        return;
      }

      setResult(data.result);
      const updated = incrementUsage();
      setRemaining(FREE_DAILY_LIMIT - updated.count);
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isDisabled = loading || (inputMode === "text" ? !input.trim() : !pdfFile);

  return (
    <div>
      {/* Usage banner with progress segments */}
      <div className="mb-6 rounded-xl border border-white/10 bg-white/[0.05] p-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-blue-400">
            {remaining > 0
              ? `${remaining} of ${FREE_DAILY_LIMIT} free generations remaining`
              : "Daily free limit reached"}
          </span>
          {remaining <= 2 && (
            <a
              href="/pricing"
              className="text-sm font-semibold text-violet-400 transition-colors hover:text-violet-300"
            >
              Upgrade to Pro
            </a>
          )}
        </div>
        {/* Progress bar */}
        <div className="mt-3 flex gap-1.5">
          {Array.from({ length: FREE_DAILY_LIMIT }).map((_, i) => (
            <div
              key={i}
              className={`h-2 flex-1 rounded-full transition-colors ${
                i < remaining
                  ? "bg-gradient-to-r from-blue-500 to-indigo-500"
                  : "bg-white/10"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Input section */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-6">
        {/* Input mode toggle — only when tool supports PDF */}
        {tool.supportsPdf && (
          <div className="mb-4 flex rounded-lg border border-white/10 bg-white/[0.03] p-1">
            <button
              type="button"
              onClick={() => {
                setInputMode("text");
                setPdfFile(null);
                setError("");
              }}
              className={`flex flex-1 items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-all ${
                inputMode === "text"
                  ? "bg-white/[0.1] text-white shadow-sm"
                  : "text-white/40 hover:text-white/60"
              }`}
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
              Paste Text
            </button>
            <button
              type="button"
              onClick={() => {
                setInputMode("pdf");
                setInput("");
                setError("");
              }}
              className={`flex flex-1 items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-all ${
                inputMode === "pdf"
                  ? "bg-white/[0.1] text-white shadow-sm"
                  : "text-white/40 hover:text-white/60"
              }`}
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
              </svg>
              Upload PDF
            </button>
          </div>
        )}

        {/* Text input mode */}
        {inputMode === "text" && (
          <div className="relative">
            <textarea
              className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.05] p-4 text-white placeholder-white/30 transition-all focus:border-violet-500/50 focus:bg-white/[0.08] focus:outline-none focus:ring-2 focus:ring-violet-500/20"
              rows={5}
              placeholder={tool.placeholder}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              maxLength={5000}
            />
            <span className="absolute bottom-3 right-3 text-xs text-white/30">
              {input.length}/5000
            </span>
          </div>
        )}

        {/* PDF upload mode */}
        {inputMode === "pdf" && (
          <div
            onDragOver={(e) => {
              e.preventDefault();
              setDragActive(true);
            }}
            onDragLeave={() => setDragActive(false)}
            onDrop={(e) => {
              e.preventDefault();
              setDragActive(false);
              const file = e.dataTransfer.files[0];
              if (file) handleFileSelect(file);
            }}
            onClick={() => fileInputRef.current?.click()}
            className={`relative flex min-h-[200px] cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed transition-all ${
              dragActive
                ? "border-violet-500 bg-violet-500/10"
                : pdfFile
                  ? "border-green-500/30 bg-green-500/5"
                  : "border-white/20 bg-white/[0.03] hover:border-white/30 hover:bg-white/[0.05]"
            }`}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,application/pdf"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) handleFileSelect(file);
              }}
            />
            {pdfFile ? (
              <div className="flex flex-col items-center gap-3 text-center">
                <svg className="h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="text-sm font-medium text-white">{pdfFile.name}</p>
                  <p className="text-xs text-white/40">
                    {(pdfFile.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setPdfFile(null);
                    if (fileInputRef.current) fileInputRef.current.value = "";
                  }}
                  className="rounded-lg border border-white/10 bg-white/[0.08] px-3 py-1.5 text-xs text-white/60 transition-all hover:bg-white/[0.12] hover:text-white"
                >
                  Remove
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-3 text-center">
                <svg className="h-12 w-12 text-white/30" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                </svg>
                <div>
                  <p className="text-sm text-white/50">
                    <span className="font-medium text-violet-400">Click to browse</span>{" "}
                    or drag & drop your PDF
                  </p>
                  <p className="mt-1 text-xs text-white/30">PDF files up to 10MB</p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Additional fields */}
        {tool.fields && tool.fields.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-4">
            {tool.fields.map((field) => (
              <div key={field.name} className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase tracking-wide text-white/50">
                  {field.label}
                </label>
                {field.type === "select" && field.options && (
                  <select
                    className="rounded-lg border border-white/10 bg-white/[0.05] px-3 py-2 text-sm text-white/70 transition-colors focus:border-violet-500/50 focus:bg-white/[0.08] focus:outline-none focus:ring-2 focus:ring-violet-500/20"
                    value={fields[field.name] || ""}
                    onChange={(e) =>
                      setFields((prev) => ({
                        ...prev,
                        [field.name]: e.target.value,
                      }))
                    }
                  >
                    {field.options.map((opt) => (
                      <option key={opt.value} value={opt.value} className="bg-[#0a1628] text-white">
                        {opt.label}
                      </option>
                    ))}
                  </select>
                )}
              </div>
            ))}
          </div>
        )}

        <button
          onClick={generate}
          disabled={isDisabled}
          className="mt-4 w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3.5 font-medium text-white shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.01] hover:shadow-xl hover:shadow-blue-500/30 disabled:cursor-not-allowed disabled:from-white/10 disabled:to-white/10 disabled:text-white/30 disabled:shadow-none"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
              {inputMode === "pdf" ? "Analyzing PDF..." : "Generating..."}
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
              </svg>
              Generate
            </span>
          )}
        </button>
      </div>

      {/* Error */}
      {error && (
        <div className="mt-4 flex items-start gap-3 rounded-xl border border-red-500/30 bg-red-500/10 p-4">
          <svg className="mt-0.5 h-5 w-5 shrink-0 text-red-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
          </svg>
          <span className="text-sm text-red-400">{error}</span>
        </div>
      )}

      {/* Result */}
      {result && (
        <div className="mt-6 animate-fade-in-up rounded-2xl border border-white/10 bg-white/[0.05] p-6" style={{ borderLeft: "4px solid #22c55e" }}>
          <div className="mb-3 flex items-center justify-between">
            <h3 className="flex items-center gap-2 text-sm font-semibold text-white">
              <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Result
            </h3>
            <button
              onClick={copyToClipboard}
              className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.08] px-3 py-1.5 text-xs font-medium text-white/60 transition-all hover:bg-white/[0.12] hover:text-white"
            >
              {copied ? (
                <>
                  <svg className="h-3.5 w-3.5 text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  Copied!
                </>
              ) : (
                <>
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9.75a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                  </svg>
                  Copy
                </>
              )}
            </button>
          </div>
          <div className="whitespace-pre-wrap leading-relaxed text-white/70">
            {result}
          </div>
        </div>
      )}
    </div>
  );
}
