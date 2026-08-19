"use client";

import { FadeUp, Stagger, StaggerItem } from "./motion";

const benefits = [
  { title: "Zero Fee Processing", description: "Processing fees are passed to the member, not you. Keep 100% of what you earn." },
  { title: "Automated Tax Calculations", description: "Accurate tax handling built into every transaction — no manual tracking needed." },
  { title: "PCI-Compliant Security", description: "Every transaction processed to the highest security standard in the industry." },
  { title: "Custom Affiliate Program", description: "Pass 100% of processing fees to your members, or choose your own rates with custom processing — you decide what your members pay in affiliate fees." },
  { title: "Gym-Branded Experience", description: "Your members see your brand — custom checkout and onboarding, start to finish." },
  { title: "AI-Powered Insights", description: "AI tools surface data analytics and manage lead follow-up for new member signups, so nothing falls through the cracks." },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-28 px-6 bg-navy-deep">
      <div className="max-w-7xl mx-auto">
        <FadeUp className="mb-16">
          <p className="text-xs uppercase tracking-[0.4em] text-green mb-4">Platform Benefits</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-ink leading-tight max-w-xl text-balance">
            <span className="text-green">Everything</span> a <span className="text-green">Modern Gym</span> Needs
          </h2>
        </FadeUp>

        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/8">
          {benefits.map((benefit) => (
            <StaggerItem key={benefit.title}>
              <div className="bg-navy-card group h-full p-10 hover:bg-green transition-colors duration-300">
                <h3 className="text-lg font-bold text-ink mb-3">{benefit.title}</h3>
                <p className="text-sm leading-relaxed text-mist group-hover:text-white/85 transition-colors">
                  {benefit.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
