"use client";

import { FadeUp } from "./motion";

const stats = [
  { value: "$0", label: "Monthly Platform Fee" },
  { value: "$0", label: "Setup or Training Cost" },
  { value: "Next-Day", label: "Funding Available" },
];

export default function Stats() {
  return (
    <section className="border-y border-white/8 bg-navy-deep">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
        {stats.map((stat) => (
          <FadeUp key={stat.label}>
            <div className="text-5xl sm:text-6xl font-bold text-green mb-3 tracking-tight">
              {stat.value}
            </div>
            <p className="text-sm uppercase tracking-widest text-mist">{stat.label}</p>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
