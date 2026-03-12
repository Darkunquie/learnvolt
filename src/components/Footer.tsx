import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-20 px-8 border-t border-white/10 bg-[#040810]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <Image src="/images/logo.png" alt="LearnVolt" width={42} height={42} className="object-cover scale-[1.8]" />
              <span className="font-extrabold text-xl tracking-tighter uppercase text-white">
                LearnVolt
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-sm">
              Free AI-powered study tools for students. Write better essays,
              summarize notes, solve problems, and generate flashcards — all
              powered by cutting-edge AI.
            </p>
          </div>

          <div>
            <h5 className="font-bold text-xs uppercase tracking-widest mb-8 text-white">
              Tools
            </h5>
            <ul className="space-y-4 text-sm text-white/50">
              <li>
                <Link href="/tools/essay-generator" className="hover:text-violet-400 transition-colors">
                  Essay Generator
                </Link>
              </li>
              <li>
                <Link href="/tools/notes-summarizer" className="hover:text-violet-400 transition-colors">
                  Notes Summarizer
                </Link>
              </li>
              <li>
                <Link href="/tools/homework-solver" className="hover:text-violet-400 transition-colors">
                  Homework Solver
                </Link>
              </li>
              <li>
                <Link href="/tools/flashcard-generator" className="hover:text-violet-400 transition-colors">
                  Flashcard Generator
                </Link>
              </li>
              <li>
                <Link href="/tools/email-writer" className="hover:text-violet-400 transition-colors">
                  Email Writer
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-xs uppercase tracking-widest mb-8 text-white">
              Company
            </h5>
            <ul className="space-y-4 text-sm text-white/50">
              <li>
                <Link href="/about" className="hover:text-violet-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-violet-400 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-violet-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-xs uppercase tracking-widest mb-8 text-white">
              Legal
            </h5>
            <ul className="space-y-4 text-sm text-white/50">
              <li>
                <Link href="/privacy-policy" className="hover:text-violet-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-violet-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-bold tracking-widest text-white/40 uppercase">
            &copy; {new Date().getFullYear()} LearnVolt. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/40">
            <Link href="/privacy-policy" className="hover:text-violet-400 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-violet-400 transition-colors">
              Terms
            </Link>
            <Link href="/contact" className="hover:text-violet-400 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
