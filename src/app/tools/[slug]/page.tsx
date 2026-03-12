import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { tools, getToolBySlug } from "@/lib/prompts";
import AITool from "@/components/AITool";
import { ToolSparkles } from "@/components/ui/tool-sparkles";

/* ─── Custom SVG illustration icons with gradients ─── */

function EssayIcon({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <defs>
        <linearGradient id="essay-bg" x1="0" y1="0" x2="48" y2="48">
          <stop stopColor="#3b82f6" />
          <stop offset="1" stopColor="#6366f1" />
        </linearGradient>
        <linearGradient id="essay-paper" x1="14" y1="8" x2="34" y2="40">
          <stop stopColor="#ffffff" />
          <stop offset="1" stopColor="#e0e7ff" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="14" fill="url(#essay-bg)" />
      <rect x="12" y="9" width="24" height="30" rx="3" fill="url(#essay-paper)" opacity="0.95" />
      <rect x="12" y="9" width="24" height="7" rx="3" fill="#6366f1" opacity="0.15" />
      <rect x="16" y="20" width="16" height="2" rx="1" fill="#6366f1" opacity="0.5" />
      <rect x="16" y="25" width="12" height="2" rx="1" fill="#6366f1" opacity="0.35" />
      <rect x="16" y="30" width="14" height="2" rx="1" fill="#6366f1" opacity="0.25" />
      <path d="M30 11 L34 11 L34 15" stroke="#818cf8" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
      <circle cx="35" cy="35" r="8" fill="#4f46e5" opacity="0.9" />
      <path d="M32 35 L35 32 L38 35 M35 32 V39" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function NotesIcon({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <defs>
        <linearGradient id="notes-bg" x1="0" y1="0" x2="48" y2="48">
          <stop stopColor="#8b5cf6" />
          <stop offset="1" stopColor="#a855f7" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="14" fill="url(#notes-bg)" />
      <rect x="10" y="10" width="20" height="28" rx="3" fill="white" opacity="0.9" />
      <rect x="14" y="15" width="12" height="1.5" rx="0.75" fill="#8b5cf6" opacity="0.5" />
      <rect x="14" y="19" width="10" height="1.5" rx="0.75" fill="#8b5cf6" opacity="0.35" />
      <rect x="14" y="23" width="8" height="1.5" rx="0.75" fill="#8b5cf6" opacity="0.25" />
      <rect x="14" y="27" width="11" height="1.5" rx="0.75" fill="#8b5cf6" opacity="0.2" />
      <rect x="18" y="10" width="20" height="28" rx="3" fill="white" opacity="0.55" transform="translate(4, -2)" />
      <circle cx="36" cy="36" r="8" fill="#7c3aed" opacity="0.9" />
      <path d="M33 36 H39 M36 33 V39" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M32 36 A4 4 0 0 1 36 32" stroke="white" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.5" />
    </svg>
  );
}

function HomeworkIcon({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <defs>
        <linearGradient id="hw-bg" x1="0" y1="0" x2="48" y2="48">
          <stop stopColor="#10b981" />
          <stop offset="1" stopColor="#0d9488" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="14" fill="url(#hw-bg)" />
      <circle cx="24" cy="20" r="10" fill="white" opacity="0.2" />
      <path d="M17 18 L24 13 L31 18 V26 L24 31 L17 26 Z" fill="white" opacity="0.9" />
      <path d="M24 13 V31 M17 18 L31 26 M31 18 L17 26" stroke="#0d9488" strokeWidth="0.8" opacity="0.3" />
      <circle cx="24" cy="22" r="3" fill="#10b981" opacity="0.7" />
      <text x="24" y="24" textAnchor="middle" fill="white" fontSize="5" fontWeight="bold">?</text>
      <circle cx="36" cy="36" r="8" fill="#059669" opacity="0.9" />
      <path d="M33 36 L35.5 38.5 L39 33.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function EmailIcon({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <defs>
        <linearGradient id="email-bg" x1="0" y1="0" x2="48" y2="48">
          <stop stopColor="#f59e0b" />
          <stop offset="1" stopColor="#ea580c" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="14" fill="url(#email-bg)" />
      <rect x="10" y="14" width="28" height="20" rx="3" fill="white" opacity="0.9" />
      <path d="M10 17 L24 27 L38 17" stroke="#ea580c" strokeWidth="1.5" fill="none" opacity="0.4" />
      <path d="M10 34 L20 26 M38 34 L28 26" stroke="#ea580c" strokeWidth="1" fill="none" opacity="0.2" />
      <circle cx="36" cy="36" r="8" fill="#dc2626" opacity="0.85" />
      <path d="M33 36 L36 33 L39 36 M36 33 V39" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FlashcardIcon({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <defs>
        <linearGradient id="flash-bg" x1="0" y1="0" x2="48" y2="48">
          <stop stopColor="#f43f5e" />
          <stop offset="1" stopColor="#ec4899" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="14" fill="url(#flash-bg)" />
      <rect x="8" y="14" width="22" height="16" rx="3" fill="white" opacity="0.3" transform="rotate(-6 19 22)" />
      <rect x="12" y="12" width="22" height="16" rx="3" fill="white" opacity="0.55" transform="rotate(-2 23 20)" />
      <rect x="14" y="16" width="22" height="16" rx="3" fill="white" opacity="0.9" />
      <rect x="18" y="21" width="14" height="1.5" rx="0.75" fill="#f43f5e" opacity="0.45" />
      <rect x="18" y="25" width="10" height="1.5" rx="0.75" fill="#f43f5e" opacity="0.3" />
      <circle cx="36" cy="36" r="8" fill="#be185d" opacity="0.9" />
      <path d="M34 33 L38 33 L38 37 M38 33 L33 38" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const toolIconMap: Record<string, (size: number) => React.ReactNode> = {
  "essay-generator": (s) => <EssayIcon size={s} />,
  "notes-summarizer": (s) => <NotesIcon size={s} />,
  "homework-solver": (s) => <HomeworkIcon size={s} />,
  "email-writer": (s) => <EmailIcon size={s} />,
  "flashcard-generator": (s) => <FlashcardIcon size={s} />,
};

function ToolIconBadge({ slug, size = "lg" }: { slug: string; size?: "lg" | "sm" }) {
  const render = toolIconMap[slug];
  if (!render) return null;
  return <>{render(size === "lg" ? 64 : 44)}</>;
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) return {};

  return {
    title: `${tool.title} - Free AI Tool | LearnVolt`,
    description: tool.metaDescription,
    openGraph: {
      title: `${tool.title} - Free AI Tool | LearnVolt`,
      description: tool.metaDescription,
      type: "website",
      siteName: "LearnVolt",
    },
  };
}

export default async function ToolPage({ params }: PageProps) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) notFound();

  const relatedTools = tools.filter((t) => t.slug !== slug);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://learnvolt.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Tools",
        item: "https://learnvolt.com/#tools",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: tool.title,
        item: `https://learnvolt.com/tools/${tool.slug}`,
      },
    ],
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: tool.title,
    description: tool.metaDescription,
    applicationCategory: "EducationalApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    operatingSystem: "Web",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: tool.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="mx-auto max-w-4xl px-4 py-10 bg-[#060b18]">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-white/40">
          <Link href="/" className="transition-colors hover:text-violet-400">Home</Link>
          <span className="mx-2 text-white/20">/</span>
          <Link href="/#tools" className="transition-colors hover:text-violet-400">Tools</Link>
          <span className="mx-2 text-white/20">/</span>
          <span className="font-medium text-white/70">{tool.title}</span>
        </nav>

        {/* Hero with sparkle background */}
        <div className="relative">
          <ToolSparkles />
          <div className="relative z-10 mb-8 animate-fade-in-up text-center">
            <div className="flex justify-center">
              <ToolIconBadge slug={tool.slug} size="lg" />
            </div>
            <h1 className="mt-5 text-4xl font-bold text-white">
              {tool.title}
            </h1>
            <p className="mt-3 text-lg text-white/50">{tool.description}</p>
          </div>
        </div>

        {/* Tool */}
        <AITool tool={tool} />

        {/* Examples */}
        {tool.examples.length > 0 && (
          <section className="mt-16">
            <h2 className="mb-6 text-2xl font-bold text-white">
              Example Outputs
            </h2>
            <div className="space-y-4">
              {tool.examples.map((ex, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-6"
                >
                  <p className="text-sm font-medium text-white/40">Input:</p>
                  <p className="mb-3 text-white/70">{ex.input}</p>
                  <p className="text-sm font-medium text-white/40">Output:</p>
                  <p className="whitespace-pre-wrap text-white/70">
                    {ex.output}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* How it works */}
        <section className="mt-16">
          <h2 className="mb-6 text-2xl font-bold text-white">
            How {tool.title} Works
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/[0.05] p-6 text-center transition-all hover:border-violet-500/30">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-lg font-bold text-white shadow-lg shadow-blue-500/25">1</div>
              <h3 className="mb-2 font-semibold text-white">Enter Input</h3>
              <p className="text-sm text-white/50">
                Type your topic, paste your notes, or describe what you need.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.05] p-6 text-center transition-all hover:border-violet-500/30">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-lg font-bold text-white shadow-lg shadow-blue-500/25">2</div>
              <h3 className="mb-2 font-semibold text-white">
                AI Generates
              </h3>
              <p className="text-sm text-white/50">
                Our AI processes your request and creates high-quality content.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.05] p-6 text-center transition-all hover:border-violet-500/30">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-lg font-bold text-white shadow-lg shadow-blue-500/25">3</div>
              <h3 className="mb-2 font-semibold text-white">
                Copy & Use
              </h3>
              <p className="text-sm text-white/50">
                Review, edit, and use the generated content for your work.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        {tool.faqs.length > 0 && (
          <section className="mt-16">
            <h2 className="mb-6 text-2xl font-bold text-white">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {tool.faqs.map((faq, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-white/10 bg-white/[0.05] p-6"
                >
                  <h3 className="font-semibold text-white">
                    {faq.question}
                  </h3>
                  <p className="mt-2 text-white/60">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Related Tools */}
        <section className="mt-16">
          <h2 className="mb-6 text-2xl font-bold text-white">
            Try Our Other Tools
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {relatedTools.map((rt) => (
              <Link
                key={rt.slug}
                href={`/tools/${rt.slug}`}
                className="group flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.05] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/30 hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.3)]"
              >
                <ToolIconBadge slug={rt.slug} size="sm" />
                <div>
                  <h3 className="font-semibold text-white group-hover:text-violet-400">
                    {rt.title}
                  </h3>
                  <p className="mt-1 text-sm text-white/50 line-clamp-2">
                    {rt.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
