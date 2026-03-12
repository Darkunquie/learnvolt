import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - LearnVolt",
  description: "LearnVolt privacy policy. Learn how we collect, use, and protect your data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <nav className="mb-6 text-sm text-white/40">
        <Link href="/" className="transition-colors hover:text-violet-400">Home</Link>
        <span className="mx-2 text-white/20">/</span>
        <span className="font-medium text-white/70">Privacy Policy</span>
      </nav>

      <h1 className="mb-8 text-4xl font-bold text-white">Privacy Policy</h1>
      
      <div className="prose prose-invert max-w-none space-y-6 text-white/70">
        <p className="text-white/50">Last updated: March 12, 2026</p>

        <section className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
          <h2 className="mb-4 text-xl font-semibold text-white">1. Introduction</h2>
          <p>
            Welcome to LearnVolt ("we," "our," or "us"). We are committed to protecting your privacy 
            and personal information. This Privacy Policy explains how we collect, use, disclose, 
            and safeguard your information when you visit our website learnvolt.com and use our 
            AI-powered educational tools.
          </p>
        </section>

        <section className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
          <h2 className="mb-4 text-xl font-semibold text-white">2. Information We Collect</h2>
          
          <h3 className="mb-2 mt-4 text-lg font-medium text-white/90">2.1 Information You Provide</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>Text content you input into our AI tools (essays, notes, questions)</li>
            <li>PDF files you upload for processing</li>
            <li>Contact information if you reach out to us</li>
            <li>Account information if you create a Pro account</li>
          </ul>

          <h3 className="mb-2 mt-4 text-lg font-medium text-white/90">2.2 Automatically Collected Information</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>IP address (for rate limiting and abuse prevention)</li>
            <li>Browser type and version</li>
            <li>Device information</li>
            <li>Usage data (pages visited, features used)</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>
        </section>

        <section className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
          <h2 className="mb-4 text-xl font-semibold text-white">3. How We Use Your Information</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>To provide and maintain our AI educational tools</li>
            <li>To process your requests and generate AI content</li>
            <li>To improve and optimize our services</li>
            <li>To prevent abuse and enforce rate limits</li>
            <li>To communicate with you about updates or support</li>
            <li>To display relevant advertisements (via Google AdSense)</li>
          </ul>
        </section>

        <section className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
          <h2 className="mb-4 text-xl font-semibold text-white">4. Data Retention</h2>
          <p>
            We do not permanently store the content you input into our tools. Text and PDF content 
            is processed in real-time and is not saved after your session ends. We may retain 
            anonymized usage statistics for service improvement.
          </p>
        </section>

        <section className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
          <h2 className="mb-4 text-xl font-semibold text-white">5. Third-Party Services</h2>
          <p>We use the following third-party services:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li><strong>OpenAI:</strong> To power our AI content generation</li>
            <li><strong>Google AdSense:</strong> To display advertisements</li>
            <li><strong>Vercel:</strong> For website hosting</li>
            <li><strong>Google Analytics:</strong> For usage analytics (if enabled)</li>
          </ul>
          <p className="mt-4">
            These services may collect information as described in their respective privacy policies.
          </p>
        </section>

        <section className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
          <h2 className="mb-4 text-xl font-semibold text-white">6. Cookies</h2>
          <p>
            We use cookies to track usage limits (free tier), remember preferences, and analyze 
            site traffic. You can control cookie settings through your browser. Disabling cookies 
            may affect the functionality of our rate limiting system.
          </p>
        </section>

        <section className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
          <h2 className="mb-4 text-xl font-semibold text-white">7. Children's Privacy</h2>
          <p>
            Our services are intended for users aged 13 and older. We do not knowingly collect 
            personal information from children under 13. If you believe we have collected 
            information from a child under 13, please contact us immediately.
          </p>
        </section>

        <section className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
          <h2 className="mb-4 text-xl font-semibold text-white">8. Your Rights</h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to or restrict processing</li>
            <li>Data portability</li>
          </ul>
        </section>

        <section className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
          <h2 className="mb-4 text-xl font-semibold text-white">9. Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your 
            information. However, no method of transmission over the Internet is 100% secure, 
            and we cannot guarantee absolute security.
          </p>
        </section>

        <section className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
          <h2 className="mb-4 text-xl font-semibold text-white">10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any 
            changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
          </p>
        </section>

        <section className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
          <h2 className="mb-4 text-xl font-semibold text-white">11. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p className="mt-2">
            <strong>Email:</strong> privacy@learnvolt.com<br />
            <strong>Website:</strong> <Link href="/contact" className="text-violet-400 hover:underline">learnvolt.com/contact</Link>
          </p>
        </section>
      </div>
    </div>
  );
}
