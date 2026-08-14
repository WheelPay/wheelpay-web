import type { Metadata } from "next";
import { FadeUp } from "../components/motion";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Book a Demo — WheelPay",
  description:
    "Tell us about your studio and book a personal walkthrough of WheelPay — zero monthly fees, zero setup costs.",
};

export default function ContactPage() {
  return (
    <section className="pt-40 pb-28 px-6 min-h-screen">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <FadeUp>
          <p className="text-xs uppercase tracking-[0.4em] text-green mb-6">Get in Touch</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-ink leading-[1.05] tracking-tight mb-6 text-balance">
            Let Us Introduce You to WheelPay.
          </h1>
          <p className="max-w-xl mx-auto text-lg text-mist leading-relaxed">
            Tell us a bit about your studio and we&rsquo;ll set up a personal
            walkthrough — no pressure, no obligation.
          </p>
        </FadeUp>
      </div>

      <ContactForm />
    </section>
  );
}
