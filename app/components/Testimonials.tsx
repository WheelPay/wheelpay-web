"use client";

import { FadeUp, Stagger, StaggerItem } from "./motion";

const testimonials = [
  {
    quote:
      "I didn't even realize how much money WheelPay is saving me in processing fees. With the savings I will be able to start paying myself and still put money away as of next month.",
    name: "Kevin Ogar",
    gym: "CrossFit WatchTower",
  },
  {
    quote:
      "Within the first month of using their innovative system I have already begun to save over $700 a month. I have seen an almost 30% increase in my retail sales over the first 3 months of use.",
    name: "John Prescott",
    gym: "Johnny P Fitness",
  },
  {
    quote:
      "WheelPay has been the easiest to use for both my clients and myself. It has saved my gym money, increased my retail sales, and offered us the opportunity to give to charity with every transaction.",
    name: "Justin Key",
    gym: "CrossFit Coweta",
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-28 px-6 bg-navy-deep">
      <div className="max-w-7xl mx-auto">
        <FadeUp className="mb-16">
          <p className="text-xs uppercase tracking-[0.4em] text-mist mb-4">From Gym Owners</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-ink leading-tight max-w-xl text-balance">
            Real Savings, Real Owners
          </h2>
        </FadeUp>

        <Stagger className="grid grid-cols-1 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <div className="bg-navy-card rounded-2xl p-8 h-full flex flex-col">
                <p className="text-sm leading-relaxed text-white/85 mb-6 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="text-sm font-bold text-ink">{t.name}</p>
                  <p className="text-xs text-mist">{t.gym}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
