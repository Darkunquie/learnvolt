"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Paperclip,
  X,
  Loader2,
  Sparkles,
  FileText,
  Check,
  Copy,
  AlertTriangle,
  Upload,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { ToolConfig } from "@/lib/prompts";
import {
  getRemainingUses,
  hasReachedLimit,
  incrementUsage,
  FREE_DAILY_LIMIT,
} from "@/lib/usage";

/* ─── auto-resize textarea hook ─── */
function useAutoResizeTextarea(minHeight = 56, maxHeight = 200) {
  const ref = useRef<HTMLTextAreaElement>(null);

  const adjustHeight = useCallback(
    (reset?: boolean) => {
      const el = ref.current;
      if (!el) return;
      if (reset) {
        el.style.height = `${minHeight}px`;
        return;
      }
      el.style.height = `${minHeight}px`;
      el.style.height = `${Math.min(Math.max(el.scrollHeight, minHeight), maxHeight)}px`;
    },
    [minHeight, maxHeight]
  );

  useEffect(() => {
    if (ref.current) ref.current.style.height = `${minHeight}px`;
  }, [minHeight]);

  return { ref, adjustHeight };
}

/* ─── typing dots ─── */
function TypingDots() {
  return (
    <div className="flex items-center gap-1">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="h-1.5 w-1.5 rounded-full bg-blue-400"
          animate={{ opacity: [0.3, 1, 0.3], scale: [0.85, 1.1, 0.85] }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            delay: i * 0.15,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

/* ─── main component ─── */
export default function AITool({ tool }: { tool: ToolConfig }) {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [remaining, setRemaining] = useState(FREE_DAILY_LIMIT);

  // Sync with localStorage after mount to avoid hydration mismatch
  useEffect(() => {
    setRemaining(getRemainingUses());
  }, []);
  const [fields, setFields] = useState<Record<string, string>>(() => {
    const defaults: Record<string, string> = {};
    tool.fields?.forEach((f) => {
      if (f.default !== undefined) defaults[f.name] = String(f.default);
    });
    return defaults;
  });

  // PDF
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // auto-resize
  const { ref: textareaRef, adjustHeight } = useAutoResizeTextarea(56, 200);

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

  const removePdf = () => {
    setPdfFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const generate = async () => {
    const hasPdf = pdfFile !== null;
    const hasText = input.trim().length > 0;

    if (!hasPdf && !hasText) {
      setError(tool.supportsPdf ? "Enter text or attach a PDF." : "Please enter some text first.");
      return;
    }

    if (hasReachedLimit()) {
      setError("You've reached your daily free limit. Upgrade to Pro for unlimited access!");
      return;
    }

    setLoading(true);
    setError("");
    setResult("");

    try {
      let res: Response;

      if (hasPdf) {
        const formData = new FormData();
        formData.append("toolSlug", tool.slug);
        formData.append("pdf", pdfFile);
        for (const [key, value] of Object.entries(fields)) {
          formData.append(`field_${key}`, value);
        }
        res = await fetch("/api/generate", { method: "POST", body: formData });
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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (!isDisabled) generate();
    }
  };

  const isDisabled = loading || (!input.trim() && !pdfFile);

  return (
    <div className="space-y-5">
      {/* ── usage banner ── */}
      <div className="rounded-xl border border-white/10 bg-white/[0.05] p-4">
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
        <div className="mt-3 flex gap-1.5">
          {Array.from({ length: FREE_DAILY_LIMIT }).map((_, i) => (
            <div
              key={i}
              className={cn(
                "h-2 flex-1 rounded-full transition-colors",
                i < remaining
                  ? "bg-gradient-to-r from-blue-500 to-indigo-500"
                  : "bg-white/10"
              )}
            />
          ))}
        </div>
      </div>

      {/* ── field pills ── */}
      {tool.fields && tool.fields.length > 0 && (
        <div className="flex flex-wrap gap-3">
          {tool.fields.map((field) => (
            <div key={field.name} className="flex flex-col gap-1.5">
              <label className="text-[10px] font-semibold uppercase tracking-widest text-white/40">
                {field.label}
              </label>
              {field.type === "select" && field.options && (
                <select
                  className="rounded-lg border border-white/10 bg-white/[0.05] px-3 py-2 text-sm text-white/70 transition-colors focus:border-violet-500/50 focus:bg-white/[0.08] focus:outline-none focus:ring-2 focus:ring-violet-500/20"
                  value={fields[field.name] || ""}
                  onChange={(e) =>
                    setFields((prev) => ({ ...prev, [field.name]: e.target.value }))
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

      {/* ── input card ── */}
      <motion.div
        className={cn(
          "relative rounded-2xl border bg-white/[0.03] backdrop-blur-xl transition-colors",
          dragActive ? "border-violet-500/50 bg-violet-500/5" : "border-white/10"
        )}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        onDragOver={(e) => {
          if (!tool.supportsPdf) return;
          e.preventDefault();
          setDragActive(true);
        }}
        onDragLeave={() => setDragActive(false)}
        onDrop={(e) => {
          if (!tool.supportsPdf) return;
          e.preventDefault();
          setDragActive(false);
          const file = e.dataTransfer.files[0];
          if (file) handleFileSelect(file);
        }}
      >
        {/* PDF attachment chip */}
        <AnimatePresence>
          {pdfFile && (
            <motion.div
              className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-2.5"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="flex items-center gap-2 rounded-lg bg-blue-500/10 px-3 py-1.5 text-xs text-blue-400"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <FileText className="h-3.5 w-3.5" />
                <span className="max-w-[200px] truncate font-medium">{pdfFile.name}</span>
                <span className="text-blue-400/50">
                  {(pdfFile.size / 1024 / 1024).toFixed(1)} MB
                </span>
                <button
                  type="button"
                  onClick={removePdf}
                  className="ml-1 rounded-full p-0.5 text-blue-400/60 transition-colors hover:bg-blue-500/20 hover:text-blue-300"
                >
                  <X className="h-3 w-3" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* textarea */}
        <div className="px-4 pt-4 pb-2">
          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              adjustHeight();
            }}
            onKeyDown={handleKeyDown}
            placeholder={pdfFile ? "Add instructions for the PDF (optional)..." : tool.placeholder}
            maxLength={5000}
            className={cn(
              "w-full resize-none bg-transparent text-sm text-white/90",
              "placeholder:text-white/25",
              "focus:outline-none",
              "min-h-[56px]"
            )}
            style={{ overflow: "hidden" }}
          />
        </div>

        {/* bottom bar */}
        <div className="flex items-center justify-between border-t border-white/[0.06] px-4 py-3">
          <div className="flex items-center gap-1">
            {/* attach PDF button */}
            {tool.supportsPdf && (
              <motion.button
                type="button"
                whileTap={{ scale: 0.92 }}
                onClick={() => fileInputRef.current?.click()}
                className="group relative rounded-lg p-2 text-white/35 transition-colors hover:bg-white/[0.06] hover:text-white/70"
                title="Attach PDF"
              >
                <Paperclip className="h-4 w-4" />
              </motion.button>
            )}

            {/* char count */}
            <span className="ml-2 text-[11px] tabular-nums text-white/20">
              {input.length > 0 && `${input.length}/5000`}
            </span>
          </div>

          {/* send button */}
          <motion.button
            type="button"
            onClick={generate}
            disabled={isDisabled}
            whileHover={!isDisabled ? { scale: 1.02 } : undefined}
            whileTap={!isDisabled ? { scale: 0.97 } : undefined}
            className={cn(
              "flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition-all",
              !isDisabled
                ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30"
                : "bg-white/[0.06] text-white/25 cursor-not-allowed"
            )}
          >
            {loading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Sparkles className="h-4 w-4" />
            )}
            <span>{loading ? (pdfFile ? "Analyzing..." : "Generating...") : "Generate"}</span>
          </motion.button>
        </div>

        {/* hidden file input */}
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

        {/* drag overlay */}
        <AnimatePresence>
          {dragActive && (
            <motion.div
              className="absolute inset-0 z-10 flex items-center justify-center rounded-2xl border-2 border-dashed border-violet-500/50 bg-violet-500/10 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <div className="flex flex-col items-center gap-2 text-violet-300">
                <Upload className="h-8 w-8" />
                <span className="text-sm font-medium">Drop your PDF here</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* ── typing indicator ── */}
      <AnimatePresence>
        {loading && (
          <motion.div
            className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.03] px-5 py-3.5"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-500">
              <Sparkles className="h-3.5 w-3.5 text-white" />
            </div>
            <span className="text-sm text-white/50">LearnVolt is thinking</span>
            <TypingDots />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── error ── */}
      <AnimatePresence>
        {error && (
          <motion.div
            className="flex items-start gap-3 rounded-xl border border-red-500/20 bg-red-500/[0.07] p-4"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
            <span className="text-sm text-red-400">{error}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── result ── */}
      <AnimatePresence>
        {result && (
          <motion.div
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
            style={{ borderLeft: "3px solid #22c55e" }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500/15">
                  <Check className="h-3.5 w-3.5 text-green-500" />
                </div>
                <span className="text-sm font-semibold text-white">Result</span>
              </div>
              <motion.button
                onClick={copyToClipboard}
                whileTap={{ scale: 0.94 }}
                className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-medium text-white/50 transition-all hover:bg-white/[0.1] hover:text-white"
              >
                {copied ? (
                  <>
                    <Check className="h-3 w-3 text-green-500" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="h-3 w-3" />
                    Copy
                  </>
                )}
              </motion.button>
            </div>
            <div className="whitespace-pre-wrap text-sm leading-relaxed text-white/70">
              {result}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
