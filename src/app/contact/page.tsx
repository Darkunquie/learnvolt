"use client";

import { useState } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageSquare, Send, CheckCircle, Twitter, Github } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "general",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just show success - integrate with email service later
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-20 text-center">
        <div className="mb-6 flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-500/20">
            <CheckCircle className="h-10 w-10 text-green-400" />
          </div>
        </div>
        <h1 className="mb-4 text-3xl font-bold text-white">Message Sent!</h1>
        <p className="mb-8 text-white/60">
          Thank you for reaching out. We'll get back to you as soon as possible.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 font-semibold text-white transition-all hover:shadow-lg"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <nav className="mb-6 text-sm text-white/40">
        <Link href="/" className="transition-colors hover:text-violet-400">Home</Link>
        <span className="mx-2 text-white/20">/</span>
        <span className="font-medium text-white/70">Contact</span>
      </nav>

      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-white">Contact Us</h1>
        <p className="text-xl text-white/60">
          Have questions, feedback, or need help? We'd love to hear from you.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20">
              <Mail className="h-6 w-6 text-blue-400" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-white">Email Us</h3>
            <p className="text-white/60">
              For general inquiries and support
            </p>
            <a 
              href="mailto:hello@learnvolt.com" 
              className="mt-3 block font-medium text-violet-400 hover:underline"
            >
              hello@learnvolt.com
            </a>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/20">
              <MessageSquare className="h-6 w-6 text-violet-400" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-white">Quick Answers</h3>
            <p className="text-white/60">
              Check our FAQ sections on each tool page for instant answers to common questions.
            </p>
            <Link 
              href="/#tools" 
              className="mt-3 block font-medium text-violet-400 hover:underline"
            >
              Browse Tools →
            </Link>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="mb-4 text-xl font-semibold text-white">Follow Us</h3>
            <div className="flex gap-4">
              <a 
                href="https://twitter.com/learnvolt" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-white/60 transition-colors hover:bg-blue-500/20 hover:text-blue-400"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com/learnvolt" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
          <h2 className="mb-6 text-xl font-semibold text-white">Send a Message</h2>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-white/70">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full rounded-lg border border-white/10 bg-white/[0.05] px-4 py-3 text-white placeholder:text-white/30 focus:border-violet-500/50 focus:outline-none focus:ring-2 focus:ring-violet-500/20"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-white/70">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full rounded-lg border border-white/10 bg-white/[0.05] px-4 py-3 text-white placeholder:text-white/30 focus:border-violet-500/50 focus:outline-none focus:ring-2 focus:ring-violet-500/20"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="mb-2 block text-sm font-medium text-white/70">
                Subject
              </label>
              <select
                id="subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full rounded-lg border border-white/10 bg-white/[0.05] px-4 py-3 text-white focus:border-violet-500/50 focus:outline-none focus:ring-2 focus:ring-violet-500/20"
              >
                <option value="general" className="bg-[#0a1628]">General Inquiry</option>
                <option value="support" className="bg-[#0a1628]">Technical Support</option>
                <option value="feedback" className="bg-[#0a1628]">Feedback</option>
                <option value="bug" className="bg-[#0a1628]">Report a Bug</option>
                <option value="partnership" className="bg-[#0a1628]">Partnership</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-white/70">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full resize-none rounded-lg border border-white/10 bg-white/[0.05] px-4 py-3 text-white placeholder:text-white/30 focus:border-violet-500/50 focus:outline-none focus:ring-2 focus:ring-violet-500/20"
                placeholder="How can we help you?"
              />
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 font-semibold text-white transition-all hover:shadow-lg hover:shadow-blue-500/25"
            >
              <Send className="h-5 w-5" />
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/* FAQ Link */}
      <div className="mt-12 rounded-xl border border-white/10 bg-white/[0.03] p-6 text-center">
        <h3 className="mb-2 text-lg font-semibold text-white">Looking for quick answers?</h3>
        <p className="text-white/60">
          Each tool has a comprehensive FAQ section. Check them out for instant help!
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <Link href="/tools/essay-generator#faq" className="rounded-lg bg-white/5 px-4 py-2 text-sm text-white/70 hover:bg-white/10">
            Essay Generator FAQ
          </Link>
          <Link href="/tools/notes-summarizer#faq" className="rounded-lg bg-white/5 px-4 py-2 text-sm text-white/70 hover:bg-white/10">
            Notes Summarizer FAQ
          </Link>
          <Link href="/tools/homework-solver#faq" className="rounded-lg bg-white/5 px-4 py-2 text-sm text-white/70 hover:bg-white/10">
            Homework Solver FAQ
          </Link>
        </div>
      </div>
    </div>
  );
}
