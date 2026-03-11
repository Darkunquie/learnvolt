"use client";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import NumberFlow from "@number-flow/react";
import { Check, Sparkles, Zap } from "lucide-react";
import { motion } from "motion/react";
import { useRef, useState } from "react";

const plans = [
  {
    name: "Free",
    description: "Perfect for occasional use and trying out our tools.",
    price: 0,
    yearlyPrice: 0,
    buttonText: "Get Started Free",
    buttonHref: "/#tools",
    popular: false,
    disabled: false,
    icon: <Zap size={20} />,
    features: [
      "5 generations per day",
      "All 5 AI tools",
      "Standard AI quality",
      "No signup required",
    ],
    includes: [
      "Free includes:",
      "Essay Generator",
      "Notes Summarizer",
      "Homework Solver",
    ],
  },
  {
    name: "Pro",
    description: "For students who need unlimited AI-powered study help.",
    price: 5,
    yearlyPrice: 49,
    buttonText: "Coming Soon",
    buttonHref: "#",
    popular: true,
    disabled: true,
    icon: <Sparkles size={20} />,
    features: [
      "Unlimited generations",
      "All current + future tools",
      "Higher quality AI (GPT-4o)",
      "Saved generation history",
      "Priority support",
    ],
    includes: [
      "Everything in Free, plus:",
      "Flashcard Generator",
      "Advanced formatting",
      "Export to PDF",
    ],
  },
];

const PricingSwitch = ({
  onSwitch,
}: {
  onSwitch: (value: string) => void;
}) => {
  const [selected, setSelected] = useState("0");

  const handleSwitch = (value: string) => {
    setSelected(value);
    onSwitch(value);
  };

  return (
    <div className="flex justify-center">
      <div className="relative z-50 mx-auto flex w-fit rounded-full bg-white/10 border border-white/20 p-1">
        <button
          onClick={() => handleSwitch("0")}
          className={`relative z-10 w-fit sm:h-12 h-10 rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors ${
            selected === "0"
              ? "text-white"
              : "text-white/50 hover:text-white"
          }`}
        >
          {selected === "0" && (
            <motion.span
              layoutId="pricing-switch"
              className="absolute top-0 left-0 sm:h-12 h-10 w-full rounded-full border-4 shadow-sm shadow-violet-500 border-violet-500 bg-gradient-to-t from-blue-500 via-violet-400 to-violet-500"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative">Monthly</span>
        </button>

        <button
          onClick={() => handleSwitch("1")}
          className={`relative z-10 w-fit sm:h-12 h-10 flex-shrink-0 rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors ${
            selected === "1"
              ? "text-white"
              : "text-white/50 hover:text-white"
          }`}
        >
          {selected === "1" && (
            <motion.span
              layoutId="pricing-switch"
              className="absolute top-0 left-0 sm:h-12 h-10 w-full rounded-full border-4 shadow-sm shadow-violet-500 border-violet-500 bg-gradient-to-t from-blue-500 via-violet-400 to-violet-500"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative flex items-center gap-2">
            Yearly
            <span className="rounded-full bg-violet-500/20 px-2 py-0.5 text-xs font-medium text-violet-300">
              Save 18%
            </span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);
  const pricingRef = useRef<HTMLDivElement>(null);

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  const togglePricingPeriod = (value: string) =>
    setIsYearly(Number.parseInt(value) === 1);

  return (
    <div
      className="px-4 pt-20 min-h-[80vh] mx-auto relative bg-[#0a1628] rounded-3xl"
      ref={pricingRef}
    >
      <div
        className="absolute top-0 left-[10%] right-[10%] w-[80%] h-full z-0 rounded-3xl"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, #8b5cf6 0%, transparent 70%)",
          opacity: 0.6,
          mixBlendMode: "multiply",
        }}
      />

      <div className="text-center mb-6 max-w-3xl mx-auto">
        <TimelineContent
          as="h2"
          animationNum={0}
          timelineRef={pricingRef}
          customVariants={revealVariants}
          className="md:text-6xl sm:text-4xl text-3xl font-medium text-white mb-4"
        >
          Simple, Transparent{" "}
          <TimelineContent
            as="span"
            animationNum={1}
            timelineRef={pricingRef}
            customVariants={revealVariants}
            className="border border-dashed border-violet-400 px-2 py-1 rounded-xl bg-violet-500/20 capitalize inline-block"
          >
            Pricing
          </TimelineContent>
        </TimelineContent>

        <TimelineContent
          as="p"
          animationNum={2}
          timelineRef={pricingRef}
          customVariants={revealVariants}
          className="sm:text-base text-sm text-white/60 sm:w-[70%] w-[80%] mx-auto"
        >
          Start free. Upgrade when you need more. Trusted by students worldwide.
        </TimelineContent>
      </div>

      <TimelineContent
        as="div"
        animationNum={3}
        timelineRef={pricingRef}
        customVariants={revealVariants}
      >
        <PricingSwitch onSwitch={togglePricingPeriod} />
      </TimelineContent>

      <div className="grid md:grid-cols-2 max-w-4xl gap-6 py-6 mx-auto">
        {plans.map((plan, index) => (
          <TimelineContent
            key={plan.name}
            as="div"
            animationNum={4 + index}
            timelineRef={pricingRef}
            customVariants={revealVariants}
          >
            <Card
              className={`relative ${
                plan.popular
                  ? "ring-2 ring-violet-500 bg-violet-500/10 border-violet-500/30"
                  : "bg-white/[0.05] border-white/10"
              }`}
            >
              <CardHeader className="text-left">
                <div className="flex justify-between">
                  <h3 className="text-3xl font-semibold text-white mb-2">
                    {plan.name}
                  </h3>
                  {plan.popular && (
                    <span className="bg-violet-500 text-white px-3 py-1 rounded-full text-sm font-medium h-fit">
                      Popular
                    </span>
                  )}
                </div>
                <p className="text-sm text-white/60 mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-semibold text-white">
                    $
                    <NumberFlow
                      value={isYearly ? plan.yearlyPrice : plan.price}
                      className="text-4xl font-semibold"
                    />
                  </span>
                  <span className="text-white/50 ml-1">
                    /{isYearly ? "year" : "month"}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                {plan.disabled ? (
                  <LiquidButton
                    disabled
                    size="xxl"
                    className="w-full mb-6 p-4 text-xl rounded-xl text-white opacity-70 cursor-not-allowed"
                  >
                    {plan.buttonText}
                  </LiquidButton>
                ) : (
                  <a href={plan.buttonHref} className="block mb-6">
                    <LiquidButton
                      size="xxl"
                      className="w-full p-4 text-xl rounded-xl text-white"
                    >
                      {plan.buttonText}
                    </LiquidButton>
                  </a>
                )}

                <ul className="space-y-2 font-semibold py-5">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <span className="text-violet-400 grid place-content-center mt-0.5 mr-3">
                        <Check size={20} />
                      </span>
                      <span className="text-sm text-white/60">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-3 pt-4 border-t border-white/10">
                  <h4 className="font-medium text-base text-white mb-3">
                    {plan.includes[0]}
                  </h4>
                  <ul className="space-y-2 font-semibold">
                    {plan.includes.slice(1).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <span className="h-6 w-6 bg-violet-500/20 border border-violet-400 rounded-full grid place-content-center mt-0.5 mr-3">
                          <Check className="h-4 w-4 text-violet-500" />
                        </span>
                        <span className="text-sm text-white/60">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>

              <CardFooter>
                {plan.disabled && (
                  <p className="text-center text-xs text-gray-400 w-full">
                    Stripe integration coming soon
                  </p>
                )}
              </CardFooter>
            </Card>
          </TimelineContent>
        ))}
      </div>
    </div>
  );
}
