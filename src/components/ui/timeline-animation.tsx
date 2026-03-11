"use client";

import React, { useRef, type ElementType, type ReactNode } from "react";
import { motion, useInView, type Variants } from "motion/react";
import { cn } from "@/lib/utils";

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

interface TimelineContentProps {
  as?: ElementType;
  children: ReactNode;
  animationNum: number;
  timelineRef?: React.RefObject<HTMLElement | null>;
  customVariants?: Variants;
  className?: string;
}

export function TimelineContent({
  as: Component = "div",
  children,
  animationNum,
  timelineRef,
  customVariants,
  className,
}: TimelineContentProps) {
  const internalRef = useRef<HTMLDivElement>(null);
  const observedRef = timelineRef || internalRef;
  const isInView = useInView(observedRef, {
    once: true,
    amount: 0.1,
  });

  const variants = customVariants || defaultVariants;
  const MotionComponent = motion.create(Component);

  return (
    <MotionComponent
      ref={!timelineRef ? internalRef : undefined}
      className={cn(className)}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      custom={animationNum}
      transition={{
        duration: 0.5,
        delay: animationNum * 0.15,
        ease: "easeOut",
      }}
    >
      {children}
    </MotionComponent>
  );
}
