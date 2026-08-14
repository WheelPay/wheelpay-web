"use client";

import { FadeUp, Stagger, StaggerItem } from "./motion";

const steps = [
  { number: "01", title: "Join Free", description: "Sign up at no cost. No credit card required to get started." },
  { number: "02", title: "Set Up in Minutes", description: "A 10–20 minute merchant account application is all it takes." },
  { number: "03", title: "Go Live", description: "Members use the app. You run everything from the admin portal." },
  { number: "04", title: "Get Paid", description: "Funds are deposited to your account within 24–48 hours." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 px-6 bg-navy">
      <div className="max-w-7xl mx-auto">
        <FadeUp className="mb-20">
          <p className="text-xs uppercase tracking-[0.4em] text-mist mb-4">How It Works</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-ink leading-tight max-w-lg text-balance">
            Live in Days, Not Weeks
          </h2>
        </FadeUp>

        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-l border-white/8" staggerDelay={0.1}>
          {steps.map((step) => (
            <StaggerItem key={step.number}>
              <div className="border-b border-r border-white/8 p-10 group hover:bg-green transition-colors duration-300 h-full">
                <span className="text-5xl font-bold text-white/10 group-hover:text-white/25 block mb-6 transition-colors">
                  {step.number}
                </span>
                <h3 className="text-lg font-bold text-ink mb-3">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-mist group-hover:text-white/85 transition-colors">
                  {step.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
