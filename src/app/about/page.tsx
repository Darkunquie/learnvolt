import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, Zap, Shield, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "About LearnVolt - Free AI Tools for Students",
  description: "Learn about LearnVolt's mission to make AI-powered education accessible to every student. Free tools for essays, notes, homework, and more.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <nav className="mb-6 text-sm text-white/40">
        <Link href="/" className="transition-colors hover:text-violet-400">Home</Link>
        <span className="mx-2 text-white/20">/</span>
        <span className="font-medium text-white/70">About</span>
      </nav>

      {/* Hero */}
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-white">
          About <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">LearnVolt</span>
        </h1>
        <p className="text-xl text-white/60">
          Making AI-powered education accessible to every student
        </p>
      </div>

      {/* Mission */}
      <section className="mb-12 rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-violet-500/10 p-8">
        <h2 className="mb-4 text-2xl font-bold text-white">Our Mission</h2>
        <p className="text-lg text-white/70">
          We believe every student deserves access to powerful AI tools that can help them learn 
          faster, study smarter, and achieve their academic goals. LearnVolt was built to 
          democratize AI education tools — making them free, accessible, and easy to use.
        </p>
        <p className="mt-4 text-lg text-white/70">
          No complicated signups. No expensive subscriptions. Just powerful AI tools that work 
          instantly, helping millions of students around the world succeed in their studies.
        </p>
      </section>

      {/* Values */}
      <section className="mb-12">
        <h2 className="mb-8 text-center text-2xl font-bold text-white">What We Stand For</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6 transition-all hover:border-blue-500/30">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20">
              <Zap className="h-6 w-6 text-blue-400" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-white">Accessibility</h3>
            <p className="text-white/60">
              Free tools for everyone. No account required. We believe cost should never be a 
              barrier to quality education.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6 transition-all hover:border-violet-500/30">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/20">
              <Sparkles className="h-6 w-6 text-violet-400" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-white">Simplicity</h3>
            <p className="text-white/60">
              Purpose-built tools that do one thing perfectly. No overwhelming features — just 
              what students need.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6 transition-all hover:border-green-500/30">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/20">
              <Shield className="h-6 w-6 text-green-400" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-white">Privacy</h3>
            <p className="text-white/60">
              Your content is not stored. We process requests in real-time and respect your 
              privacy at every step.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6 transition-all hover:border-pink-500/30">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500/20">
              <Heart className="h-6 w-6 text-pink-400" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-white">Learning First</h3>
            <p className="text-white/60">
              Our tools are designed to help you learn, not just get answers. We encourage 
              understanding over copying.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mb-12 rounded-2xl border border-white/10 bg-white/[0.03] p-8">
        <h2 className="mb-8 text-center text-2xl font-bold text-white">LearnVolt by Numbers</h2>
        <div className="grid gap-8 text-center md:grid-cols-3">
          <div>
            <div className="text-4xl font-bold text-blue-400">5+</div>
            <div className="mt-2 text-white/60">AI-Powered Tools</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-violet-400">Free</div>
            <div className="mt-2 text-white/60">5 Uses Per Day</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-green-400">0</div>
            <div className="mt-2 text-white/60">Signup Required</div>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-bold text-white">Our Tools</h2>
        <div className="space-y-4">
          <Link 
            href="/tools/essay-generator"
            className="block rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-all hover:border-blue-500/30"
          >
            <span className="mr-3 text-2xl">📝</span>
            <span className="font-medium text-white">AI Essay Generator</span>
            <span className="ml-2 text-white/50">- Create well-structured essays instantly</span>
          </Link>
          <Link 
            href="/tools/notes-summarizer"
            className="block rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-all hover:border-violet-500/30"
          >
            <span className="mr-3 text-2xl">📋</span>
            <span className="font-medium text-white">AI Notes Summarizer</span>
            <span className="ml-2 text-white/50">- Condense long notes into key points</span>
          </Link>
          <Link 
            href="/tools/homework-solver"
            className="block rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-all hover:border-green-500/30"
          >
            <span className="mr-3 text-2xl">🎓</span>
            <span className="font-medium text-white">AI Homework Solver</span>
            <span className="ml-2 text-white/50">- Step-by-step explanations for any problem</span>
          </Link>
          <Link 
            href="/tools/flashcard-generator"
            className="block rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-all hover:border-pink-500/30"
          >
            <span className="mr-3 text-2xl">🃏</span>
            <span className="font-medium text-white">AI Flashcard Generator</span>
            <span className="ml-2 text-white/50">- Create study cards for active recall</span>
          </Link>
          <Link 
            href="/tools/email-writer"
            className="block rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-all hover:border-yellow-500/30"
          >
            <span className="mr-3 text-2xl">✉️</span>
            <span className="font-medium text-white">AI Email Writer</span>
            <span className="ml-2 text-white/50">- Professional emails in seconds</span>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-2xl border border-white/10 bg-gradient-to-r from-blue-500/20 to-violet-500/20 p-8 text-center">
        <h2 className="mb-4 text-2xl font-bold text-white">Ready to Study Smarter?</h2>
        <p className="mb-6 text-white/60">
          Start using LearnVolt's AI tools for free. No signup required.
        </p>
        <Link 
          href="/#tools"
          className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-3 font-semibold text-white transition-all hover:shadow-lg hover:shadow-blue-500/25"
        >
          <Sparkles className="h-5 w-5" />
          Try Our Tools
        </Link>
      </section>

      {/* Footer links */}
      <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-white/40">
        <Link href="/privacy-policy" className="hover:text-violet-400">Privacy Policy</Link>
        <Link href="/terms" className="hover:text-violet-400">Terms of Service</Link>
        <Link href="/contact" className="hover:text-violet-400">Contact Us</Link>
      </div>
    </div>
  );
}
