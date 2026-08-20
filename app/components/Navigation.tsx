"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { label: "Compare", href: "/#compare" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Benefits", href: "/#benefits" },
  { label: "Built For", href: "/#built-for" },
  { label: "The App", href: "/#app" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy/80 backdrop-blur-xl border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Image
            src="/wheelpay-mark.svg"
            alt=""
            width={28}
            height={26}
            style={{
              height: "26px",
              width: "auto",
              filter: [
                "drop-shadow(1px 0 0 #00DE72)",
                "drop-shadow(-1px 0 0 #00DE72)",
                "drop-shadow(0 1px 0 #00DE72)",
                "drop-shadow(0 -1px 0 #00DE72)",
              ].join(" "),
            }}
            priority
          />
          <span className="text-lg font-bold text-ink tracking-tight">WheelPay</span>
        </Link>

        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm tracking-wide text-mist hover:text-ink transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className="text-sm tracking-wide bg-green text-white px-5 py-1.5 rounded-full font-semibold hover:bg-green-bright transition-colors"
            >
              Book a Demo
            </Link>
          </li>
        </ul>

        <button
          className="lg:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-ink transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block w-6 h-0.5 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-ink transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-navy/95 border-t border-white/10 rounded-b-2xl px-6 py-6 shadow-2xl">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-base text-mist hover:text-ink transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="inline-block text-base bg-green text-white px-5 py-2 rounded-full font-semibold hover:bg-green-bright transition-colors"
              >
                Book a Demo
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
