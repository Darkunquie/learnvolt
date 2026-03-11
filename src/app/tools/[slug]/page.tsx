import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { tools, getToolBySlug } from "@/lib/prompts";
import AITool from "@/components/AITool";

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

      <div className="mx-auto max-w-4xl px-4 py-10">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-gray-500">
          <Link href="/" className="transition-colors hover:text-gray-900">Home</Link>
          <span className="mx-2 text-gray-300">/</span>
          <Link href="/#tools" className="transition-colors hover:text-gray-900">Tools</Link>
          <span className="mx-2 text-gray-300">/</span>
          <span className="font-medium text-gray-900">{tool.title}</span>
        </nav>

        {/* Hero */}
        <div className="mb-8 animate-fade-in-up text-center">
          <span className="inline-block text-5xl">{tool.icon}</span>
          <h1 className="mt-4 text-4xl font-bold text-gray-900">
            {tool.title}
          </h1>
          <p className="mt-3 text-lg text-gray-500">{tool.description}</p>
        </div>

        {/* Tool */}
        <AITool tool={tool} />

        {/* Examples */}
        {tool.examples.length > 0 && (
          <section className="mt-16">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">
              Example Outputs
            </h2>
            <div className="space-y-4">
              {tool.examples.map((ex, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-gray-200 bg-gray-50 p-6"
                >
                  <p className="text-sm font-medium text-gray-500">Input:</p>
                  <p className="mb-3 text-gray-700">{ex.input}</p>
                  <p className="text-sm font-medium text-gray-500">Output:</p>
                  <p className="whitespace-pre-wrap text-gray-700">
                    {ex.output}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* How it works */}
        <section className="mt-16">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            How {tool.title} Works
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-white p-6 text-center transition-all hover:shadow-md">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-lg font-bold text-white shadow-lg shadow-blue-500/25">1</div>
              <h3 className="mb-2 font-semibold text-gray-900">Enter Input</h3>
              <p className="text-sm text-gray-500">
                Type your topic, paste your notes, or describe what you need.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6 text-center transition-all hover:shadow-md">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-lg font-bold text-white shadow-lg shadow-blue-500/25">2</div>
              <h3 className="mb-2 font-semibold text-gray-900">
                AI Generates
              </h3>
              <p className="text-sm text-gray-500">
                Our AI processes your request and creates high-quality content.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6 text-center transition-all hover:shadow-md">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-lg font-bold text-white shadow-lg shadow-blue-500/25">3</div>
              <h3 className="mb-2 font-semibold text-gray-900">
                Copy & Use
              </h3>
              <p className="text-sm text-gray-500">
                Review, edit, and use the generated content for your work.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        {tool.faqs.length > 0 && (
          <section className="mt-16">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {tool.faqs.map((faq, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-gray-200 bg-white p-6"
                >
                  <h3 className="font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  <p className="mt-2 text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Related Tools */}
        <section className="mt-16">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            Try Our Other Tools
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {relatedTools.map((rt) => (
              <Link
                key={rt.slug}
                href={`/tools/${rt.slug}`}
                className="group flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:scale-[1.02] hover:border-blue-300 hover:shadow-xl"
              >
                <span className="text-3xl">{rt.icon}</span>
                <div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">
                    {rt.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 line-clamp-2">
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
