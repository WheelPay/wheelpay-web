"use client";

import Link from "next/link";
import { FadeUp } from "./motion";

export default function CTA() {
  return (
    <section id="contact" className="py-28 px-6 bg-navy">
      <FadeUp className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-ink leading-tight mb-6 text-balance">
          Ready to Pay Better and Do Better?
        </h2>
        <p className="text-lg text-mist leading-relaxed mb-10 max-w-xl mx-auto">
          Book a demo and see exactly how much WheelPay can put back in your
          pocket — no credit card, no pressure.
        </p>
        <div className="flex items-center justify-center">
          <Link
            href="/contact"
            className="px-10 py-4 rounded-full bg-green text-white text-sm tracking-wide font-semibold hover:bg-green-bright transition-colors"
          >
            Book a Demo
          </Link>
        </div>
      </FadeUp>
    </section>
  );
}
