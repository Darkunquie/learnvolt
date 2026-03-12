import Link from "next/link";
import { tools } from "@/lib/prompts";
import type { Metadata } from "next";
import { HeroSection } from "@/components/ui/hero-section";
import { GlassCTA } from "@/components/ui/glass-cta";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { BookOpen, BrainCircuit, GraduationCap, Mail, Layers, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "LearnVolt - Free AI Tools for Students",
  description:
    "Free AI-powered study tools: essay generator, notes summarizer, homework solver, flashcard generator, and more. Learn faster with AI.",
  openGraph: {
    title: "LearnVolt - Free AI Tools for Students",
    description:
      "Free AI-powered study tools: essay generator, notes summarizer, homework solver, flashcard generator, and more.",
    type: "website",
    siteName: "LearnVolt",
  },
};

const toolIcons: Record<string, React.ReactNode> = {
  "essay-generator": <BookOpen className="w-10 h-10" />,
  "notes-summarizer": <BrainCircuit className="w-10 h-10" />,
  "homework-solver": <GraduationCap className="w-10 h-10" />,
  "email-writer": <Mail className="w-10 h-10" />,
  "flashcard-generator": <Layers className="w-10 h-10" />,
};


export default function Home() {
  const featuredTool = tools.find((t) => t.slug === "essay-generator")!;
  const notesTool = tools.find((t) => t.slug === "notes-summarizer")!;
  const homeworkTool = tools.find((t) => t.slug === "homework-solver")!;
  const flashcardTool = tools.find((t) => t.slug === "flashcard-generator")!;
  const emailTool = tools.find((t) => t.slug === "email-writer")!;

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "LearnVolt",
    url: "https://learnvolt.com",
    description:
      "Free AI-powered study tools for students: essay generator, notes summarizer, homework solver, flashcard generator, and more.",
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />

      {/* Hero */}
      <HeroSection />

      {/* Tools Section - Bento Grid */}
      <section id="tools" className="pt-16 pb-32 px-8 bg-[#060b18]">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 md:mb-24 gap-4">
            <TimelineContent as="h2" animationNum={0} className="text-6xl md:text-8xl font-extrabold tracking-tighter text-white uppercase">
              The Toolkit.
            </TimelineContent>
            <TimelineContent as="p" animationNum={1} className="text-white/40 font-medium max-w-xs uppercase tracking-widest text-xs">
              Curated AI instruments for the modern student.
            </TimelineContent>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">

            {/* 1. Essay Generator — Featured (col-span-2, row-span-2) */}
            <TimelineContent animationNum={2} className="md:col-span-2 md:row-span-2">
              <Link href={`/tools/${featuredTool.slug}`} className="group block h-full">
                <div className="relative h-full min-h-[400px] md:min-h-0 rounded-2xl overflow-hidden bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] hover:-translate-y-1 hover:border-violet-500/30 hover:shadow-[0_0_40px_-5px_rgba(139,92,246,0.3)] transition-all duration-300">
                  <img
                    src="/images/study-card.png"
                    alt="AI Essay Generator"
                    className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060b18] via-[#060b18]/80 to-[#060b18]/40" />
                  <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-12">
                    <span className="inline-block w-fit px-3 py-1 bg-gradient-to-r from-blue-500 to-violet-500 text-white text-[10px] font-bold tracking-widest uppercase mb-6 rounded-sm">
                      Featured
                    </span>
                    <div className="text-violet-400 mb-4">
                      <BookOpen className="w-12 h-12" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-white uppercase tracking-tight mb-4">
                      {featuredTool.title}
                    </h3>
                    <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-lg">
                      {featuredTool.description}
                    </p>
                    <span className="inline-flex items-center gap-2 font-bold text-xs uppercase tracking-[0.2em] text-white group-hover:text-violet-300 transition-colors">
                      Try Instrument
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            </TimelineContent>

            {/* 2. Notes Summarizer */}
            <TimelineContent animationNum={3}>
              <Link href={`/tools/${notesTool.slug}`} className="group block h-full">
                <div className="relative h-full p-8 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] hover:-translate-y-1 hover:border-violet-500/30 hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.3)] transition-all duration-300 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-violet-500/10 to-transparent rounded-bl-full" />
                  <div className="text-violet-400 mb-6">
                    <BrainCircuit className="w-10 h-10" />
                  </div>
                  <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-3">
                    {notesTool.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-6">
                    {notesTool.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-violet-400 group-hover:text-violet-300 transition-colors">
                    Try It
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </TimelineContent>

            {/* 3. Homework Solver */}
            <TimelineContent animationNum={4}>
              <Link href={`/tools/${homeworkTool.slug}`} className="group block h-full">
                <div className="relative h-full p-8 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] hover:-translate-y-1 hover:border-violet-500/30 hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.3)] transition-all duration-300 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-bl-full" />
                  <div className="text-violet-400 mb-6">
                    <GraduationCap className="w-10 h-10" />
                  </div>
                  <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-3">
                    {homeworkTool.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-6">
                    {homeworkTool.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-violet-400 group-hover:text-violet-300 transition-colors">
                    Try It
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </TimelineContent>

            {/* 4. Flashcard Generator */}
            <TimelineContent animationNum={5}>
              <Link href={`/tools/${flashcardTool.slug}`} className="group block h-full">
                <div className="relative h-full p-8 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] hover:-translate-y-1 hover:border-violet-500/30 hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.3)] transition-all duration-300 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-violet-500/10 to-transparent rounded-bl-full" />
                  <div className="text-violet-400 mb-6">
                    <Layers className="w-10 h-10" />
                  </div>
                  <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-3">
                    {flashcardTool.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-6">
                    {flashcardTool.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-violet-400 group-hover:text-violet-300 transition-colors">
                    Try It
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </TimelineContent>

            {/* 5. Email Writer — Wide (col-span-2) */}
            <TimelineContent animationNum={6} className="md:col-span-2">
              <Link href={`/tools/${emailTool.slug}`} className="group block h-full">
                <div className="relative h-full min-h-[220px] rounded-2xl overflow-hidden bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] hover:-translate-y-1 hover:border-violet-500/30 hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.3)] transition-all duration-300">
                  <img
                    src="/images/writing-card.png"
                    alt="AI Email Writer"
                    className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#060b18] via-[#060b18]/80 to-[#060b18]/40" />
                  <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-10">
                    <div className="text-violet-400 mb-4">
                      <Mail className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-extrabold text-white uppercase tracking-tight mb-2">
                      {emailTool.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed mb-4 max-w-md">
                      {emailTool.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-violet-400 group-hover:text-violet-300 transition-colors">
                      Try It
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            </TimelineContent>

          </div>
        </div>
      </section>

      {/* Stats - Editorial */}
      <section className="py-16 px-8 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-white/10">
          <div className="flex-1 py-8 md:px-12">
            <div className="text-[80px] font-extrabold tracking-tighter bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent leading-none mb-4">
              05
            </div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/40">
              AI Engines
            </p>
          </div>
          <div className="flex-1 py-8 md:px-12">
            <div className="text-[80px] font-extrabold tracking-tighter bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent leading-none mb-4">
              5.0
            </div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/40">
              Daily Sessions
            </p>
          </div>
          <div className="flex-1 py-8 md:px-12">
            <div className="text-[80px] font-extrabold tracking-tighter bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent leading-none mb-4">
              MS
            </div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/40">
              Processing Latency
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-8 bg-[#060b18]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white uppercase mb-16 text-center">
            How It Works.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 border border-white/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-extrabold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">1</span>
              </div>
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-3">Choose a Tool</h3>
              <p className="text-white/40 text-sm leading-relaxed">Pick from our suite of AI-powered study instruments — essays, summaries, flashcards, and more.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 border border-white/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-extrabold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">2</span>
              </div>
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-3">Enter Your Prompt</h3>
              <p className="text-white/40 text-sm leading-relaxed">Describe what you need — a topic, your notes, a question — and let AI do the heavy lifting.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 border border-white/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-extrabold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">3</span>
              </div>
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-3">Get Results Instantly</h3>
              <p className="text-white/40 text-sm leading-relaxed">Receive polished, well-structured output in seconds. Copy, edit, or regenerate as needed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials / Social Proof */}
      <section className="py-20 px-8 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xs font-bold uppercase tracking-widest text-white/40 text-center mb-12">
            What Students Are Saying
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-violet-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-6">&ldquo;LearnVolt saved me hours on my research paper. The essay generator gave me a solid outline and I just refined it from there.&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-violet-500" />
                <div>
                  <p className="text-white text-sm font-semibold">Sarah K.</p>
                  <p className="text-white/30 text-xs">University Student</p>
                </div>
              </div>
            </div>
            <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-violet-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-6">&ldquo;The flashcard generator is incredible. I used to spend an hour making cards manually — now it takes 30 seconds.&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-pink-500" />
                <div>
                  <p className="text-white text-sm font-semibold">Marcus T.</p>
                  <p className="text-white/30 text-xs">High School Senior</p>
                </div>
              </div>
            </div>
            <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-violet-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-6">&ldquo;I use the homework solver almost daily. It doesn&apos;t just give answers — it explains the steps so I actually learn.&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400" />
                <div>
                  <p className="text-white text-sm font-semibold">Priya M.</p>
                  <p className="text-white/30 text-xs">Graduate Student</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Editorial */}
      <section className="py-24 px-8 text-center bg-[#060b18] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-blue-500 to-violet-500" />
        <div className="max-w-4xl mx-auto">
          <h2 className="text-6xl md:text-8xl font-extrabold mb-8 tracking-tighter uppercase text-white">
            Ready to Transform?
          </h2>
          <p className="text-white/50 text-xl font-light mb-12 max-w-xl mx-auto">
            Join a new generation of learners who prioritize deep understanding
            and creative breakthrough.
          </p>
          <GlassCTA href="#tools" className="px-12 py-6 tracking-[0.3em]">
            Join the Collective
          </GlassCTA>
        </div>
      </section>
    </div>
  );
}
