"use client";

import { useState } from "react";
import { FadeUp } from "./motion";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [studio, setStudio] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Demo request — ${studio || name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nStudio / Gym: ${studio}\nEmail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:info@wheelpay.com?subject=${subject}&body=${body}`;
  }

  const fieldClass =
    "w-full bg-navy-card border border-white/10 rounded-xl px-5 py-3.5 text-ink placeholder:text-mist/60 text-sm focus:outline-none focus:border-green transition-colors";

  return (
    <FadeUp delay={0.15}>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <input
            type="text"
            required
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={fieldClass}
          />
          <input
            type="text"
            required
            placeholder="Gym / studio name"
            value={studio}
            onChange={(e) => setStudio(e.target.value)}
            className={fieldClass}
          />
        </div>
        <input
          type="email"
          required
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={fieldClass}
        />
        <textarea
          rows={5}
          placeholder="Tell us a bit about your studio (optional)"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${fieldClass} resize-none`}
        />
        <button
          type="submit"
          className="w-full px-10 py-4 rounded-full bg-green text-white text-sm tracking-wide font-semibold hover:bg-green-bright transition-colors"
        >
          Book a Demo
        </button>
        <p className="text-xs text-mist text-center pt-2">
          Or email us directly at{" "}
          <a href="mailto:info@wheelpay.com" className="text-mist underline hover:text-ink transition-colors">
            info@wheelpay.com
          </a>
        </p>
      </form>
    </FadeUp>
  );
}
