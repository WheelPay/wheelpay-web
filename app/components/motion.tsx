"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";

const ease = [0.25, 0.1, 0.25, 1] as const;

const viewport = { once: true, margin: "-80px" };

interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  distance?: number;
}

export function FadeUp({ children, delay = 0, className, distance = 28 }: FadeUpProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.65, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

interface StaggerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  initialDelay?: number;
}

export function Stagger({ children, className, staggerDelay = 0.08, initialDelay = 0 }: StaggerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay, delayChildren: initialDelay } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
      }}
    >
      {children}
    </motion.div>
  );
}

function parseNumber(val: string): number | null {
  const n = parseFloat(val.replace(/[^0-9.]/g, ""));
  return isNaN(n) ? null : n;
}

interface CounterProps {
  value: string;
  className?: string;
}

export function AnimatedCounter({ value, className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const num = parseNumber(value);
  const suffix = num !== null ? value.replace(String(num), "").replace(String(Math.floor(num)), "") : "";

  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { duration: 1400, bounce: 0 });
  const display = useTransform(spring, (v) =>
    num !== null ? `${Math.round(v)}${suffix}` : value
  );

  useEffect(() => {
    if (inView && num !== null) motionVal.set(num);
  }, [inView, motionVal, num]);

  if (num === null) return <span className={className}>{value}</span>;

  return (
    <span ref={ref} className={className}>
      <motion.span>{display}</motion.span>
    </span>
  );
}

export function RevealLine({ className }: { className?: string }) {
  return (
    <motion.div
      className={`h-px ${className}`}
      initial={{ scaleX: 0, originX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={viewport}
      transition={{ duration: 0.8, ease }}
    />
  );
}

export { motion, useScroll, useTransform } from "framer-motion";
