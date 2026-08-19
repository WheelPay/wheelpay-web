"use client";

import { FadeUp, Stagger, StaggerItem } from "./motion";

const segments = [
  { title: "CrossFit Affiliates", description: "Full class scheduling, membership billing, and retail in one platform." },
  { title: "Boutique Fitness", description: "Simple setup with zero overhead costs." },
  { title: "Personal Trainers", description: "Manage clients, billing, and sessions in one place." },
  { title: "Fitness Studios", description: "Pilates, yoga, boxing — any format, one system." },
];

export default function BuiltFor() {
  return (
    <section id="built-for" className="py-28 px-6 bg-navy">
      <div className="max-w-7xl mx-auto">
        <FadeUp className="mb-16 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-green mb-4">Built For</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-ink leading-tight text-balance">
            <span className="text-green">Every Corner</span> of the Industry
          </h2>
        </FadeUp>

        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" staggerDelay={0.1}>
          {segments.map((segment) => (
            <StaggerItem key={segment.title}>
              <div className="border border-white/10 rounded-2xl p-8 h-full text-center hover:border-green/60 transition-colors duration-300">
                <h3 className="text-base font-bold text-ink mb-2">{segment.title}</h3>
                <p className="text-sm leading-relaxed text-mist">{segment.description}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
