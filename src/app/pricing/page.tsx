import type { Metadata } from "next";
import PricingSection from "@/components/ui/pricing-section";

export const metadata: Metadata = {
  title: "Pricing - LearnVolt",
  description:
    "LearnVolt pricing plans. Free tier with 5 daily generations or Pro for unlimited access.",
  openGraph: {
    title: "Pricing - LearnVolt",
    description:
      "LearnVolt pricing plans. Free tier with 5 daily generations or Pro for unlimited access.",
    type: "website",
    siteName: "LearnVolt",
  },
};

export default function PricingPage() {
  return (
    <div className="bg-[#060b18] min-h-screen pt-28">
      <PricingSection />

      {/* FAQ */}
      <div className="mx-auto max-w-5xl px-4 py-20">
        <h2 className="mb-8 text-center text-3xl font-bold text-white">
          Pricing FAQ
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/[0.05] p-6 transition-all hover:border-violet-500/30">
            <h3 className="font-semibold text-white">
              Do I need to create an account?
            </h3>
            <p className="mt-2 text-white/60">
              No! The free tier works without any signup. Just visit a tool and
              start generating.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.05] p-6 transition-all hover:border-violet-500/30">
            <h3 className="font-semibold text-white">
              When does the daily limit reset?
            </h3>
            <p className="mt-2 text-white/60">
              Your 5 free generations reset at midnight in your local timezone
              every day.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.05] p-6 transition-all hover:border-violet-500/30">
            <h3 className="font-semibold text-white">
              What payment methods do you accept?
            </h3>
            <p className="mt-2 text-white/60">
              We&apos;ll support credit/debit cards and other methods via Stripe
              when the Pro plan launches.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.05] p-6 transition-all hover:border-violet-500/30">
            <h3 className="font-semibold text-white">
              Can I cancel anytime?
            </h3>
            <p className="mt-2 text-white/60">
              Yes, you can cancel your Pro subscription anytime. No lock-in
              contracts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
