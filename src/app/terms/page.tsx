import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service - LearnVolt",
  description: "LearnVolt terms of service. Read our terms and conditions for using our AI educational tools.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <nav className="mb-6 text-sm text-white/40">
        <Link href="/" className="transition-colors hover:text-violet-400">Home</Link>
        <span className="mx-2 text-white/20">/</span>
        <span className="font-medium text-white/70">Terms of Service</span>
      </nav>

      <h1 className="mb-8 text-4xl font-bold text-white">Terms of Service</h1>
      
      <div className="prose prose-invert max-w-none space-y-6 text-white/70">
        <p className="text-white/50">Last updated: March 12, 2026</p>

        <section className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
          <h2 className="mb-4 text-xl font-semibold text-white">1. Acceptance of Terms</h2>
          <p>
            By accessing and using LearnVolt ("the Service"), you agree to be bound by these 
            Terms of Service. If you do not agree to these terms, please do not use our Service.
          </p>
        </section>

        <section className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
          <h2 className="mb-4 text-xl font-semibold text-white">2. Description of Service</h2>
          <p>
            LearnVolt provides AI-powered educational tools including but not limited to:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Essay generation</li>
            <li>Notes summarization</li>
            <li>Homework assistance</li>
            <li>Flashcard generation</li>
            <li>Email writing assistance</li>
          </ul>
          <p className="mt-4">
            These tools are designed to assist with learning and should be used as educational aids.
          </p>
        </section>

        <section className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
          <h2 className="mb-4 text-xl font-semibold text-white">3. Free and Pro Services</h2>
          <h3 className="mb-2 mt-4 text-lg font-medium text-white/90">3.1 Free Tier</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>5 generations per day per user</li>
            <li>Access to all basic tools</li>
            <li>No account required</li>
          </ul>
          
          <h3 className="mb-2 mt-4 text-lg font-medium text-white/90">3.2 Pro Tier</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>Unlimited generations</li>
            <li>Priority processing</li>
            <li>Additional features as described on our pricing page</li>
          </ul>
        </section>

        <section className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
          <h2 className="mb-4 text-xl font-semibold text-white">4. Acceptable Use</h2>
          <p>You agree NOT to use LearnVolt to:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Generate content that violates academic integrity policies (plagiarism)</li>
            <li>Create harmful, illegal, or offensive content</li>
            <li>Attempt to bypass rate limits or security measures</li>
            <li>Reverse engineer or copy our services</li>
            <li>Use automated systems to abuse the service</li>
            <li>Impersonate others or misrepresent your identity</li>
            <li>Upload malicious files or content</li>
          </ul>
        </section>

        <section className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
          <h2 className="mb-4 text-xl font-semibold text-white">5. Academic Integrity</h2>
          <div className="rounded-lg border border-yellow-500/30 bg-yellow-500/10 p-4">
            <p className="font-medium text-yellow-200">⚠️ Important Notice</p>
            <p className="mt-2 text-yellow-100/80">
              LearnVolt is designed as a learning aid and study tool. Content generated should be 
              used for inspiration, learning, and creating first drafts. Users are responsible for 
              ensuring their use complies with their institution's academic integrity policies.
            </p>
          </div>
          <p className="mt-4">
            We encourage users to:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Use generated content as a starting point, not final submission</li>
            <li>Add their own research and insights</li>
            <li>Properly cite any sources</li>
            <li>Follow their school's guidelines on AI tool usage</li>
          </ul>
        </section>

        <section className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
          <h2 className="mb-4 text-xl font-semibold text-white">6. Intellectual Property</h2>
          <h3 className="mb-2 mt-4 text-lg font-medium text-white/90">6.1 Our Content</h3>
          <p>
            The LearnVolt website, branding, and underlying technology are owned by us and 
            protected by intellectual property laws.
          </p>
          
          <h3 className="mb-2 mt-4 text-lg font-medium text-white/90">6.2 Generated Content</h3>
          <p>
            Content generated by our AI tools based on your input is provided for your personal 
            use. You may use generated content as permitted by applicable law and your 
            institution's policies.
          </p>
        </section>

        <section className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
          <h2 className="mb-4 text-xl font-semibold text-white">7. Disclaimer of Warranties</h2>
          <p>
            THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. WE DO NOT GUARANTEE:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>The accuracy or completeness of generated content</li>
            <li>Uninterrupted or error-free service</li>
            <li>That the service will meet your specific requirements</li>
            <li>That generated content is free from factual errors</li>
          </ul>
          <p className="mt-4">
            Users should verify important information and not rely solely on AI-generated content 
            for critical decisions.
          </p>
        </section>

        <section className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
          <h2 className="mb-4 text-xl font-semibold text-white">8. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, LearnVolt shall not be liable for any 
            indirect, incidental, special, consequential, or punitive damages resulting from 
            your use of or inability to use the Service, including but not limited to:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Academic consequences from misuse</li>
            <li>Loss of data or content</li>
            <li>Errors in generated content</li>
            <li>Service interruptions</li>
          </ul>
        </section>

        <section className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
          <h2 className="mb-4 text-xl font-semibold text-white">9. Termination</h2>
          <p>
            We reserve the right to suspend or terminate your access to LearnVolt at any time, 
            without notice, for conduct that we believe violates these Terms or is harmful to 
            other users, us, or third parties.
          </p>
        </section>

        <section className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
          <h2 className="mb-4 text-xl font-semibold text-white">10. Changes to Terms</h2>
          <p>
            We may modify these Terms at any time. Continued use of the Service after changes 
            constitutes acceptance of the new Terms. We encourage you to review these Terms 
            periodically.
          </p>
        </section>

        <section className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
          <h2 className="mb-4 text-xl font-semibold text-white">11. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of India, 
            without regard to its conflict of law provisions.
          </p>
        </section>

        <section className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
          <h2 className="mb-4 text-xl font-semibold text-white">12. Contact</h2>
          <p>
            For questions about these Terms, please contact us at:
          </p>
          <p className="mt-2">
            <strong>Email:</strong> legal@learnvolt.com<br />
            <strong>Website:</strong> <Link href="/contact" className="text-violet-400 hover:underline">learnvolt.com/contact</Link>
          </p>
        </section>
      </div>
    </div>
  );
}
