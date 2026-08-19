"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { motion, FadeUp } from "./motion";
import PhoneFrame from "./PhoneFrame";

type Role = "members" | "coaches" | "owners";

interface ShowcaseImage {
  src: string;
  alt: string;
  caption: string;
}

interface RoleContent {
  key: Role;
  label: string;
  eyebrow: string;
  heading: string;
  body: string;
  images: ShowcaseImage[];
}

const roles: RoleContent[] = [
  {
    key: "members",
    label: "Members",
    eyebrow: "For Members",
    heading: "Booking a class takes seconds.",
    body: "Members browse the schedule, reserve a spot, and check in — all from the app. Retail and drop-ins at any participating studio are just as fast.",
    images: [
      { src: "/app/member-home.png", alt: "WheelPay member home screen", caption: "Home — classes, shop, and more" },
      { src: "/app/calendar-reservation.png", alt: "WheelPay class calendar and reservation screen", caption: "Reserve a class in one tap" },
      { src: "/app/drop-in.png", alt: "WheelPay drop-in studio search screen", caption: "Drop in at any participating studio" },
    ],
  },
  {
    key: "coaches",
    label: "Coaches",
    eyebrow: "For Coaches",
    heading: "Your schedule, wherever you are.",
    body: "Coaches see upcoming classes and rosters up to 30 days out, right from their phone — no desktop required.",
    images: [
      { src: "/app/coaches.png", alt: "WheelPay coach schedule screen", caption: "This week's classes and rosters" },
      { src: "/app/coach-add-member.png", alt: "WheelPay class details screen with attendee management", caption: "Manage attendees and track attendance" },
    ],
  },
  {
    key: "owners",
    label: "Owners & Admins",
    eyebrow: "For Owners & Admins",
    heading: "Run the whole studio from your pocket.",
    body: "One dashboard for today's classes, reservations, and attendance — plus flags for anything that needs your attention first.",
    images: [
      { src: "/app/owners.png", alt: "WheelPay studio admin dashboard screen", caption: "Today's studio, at a glance" },
    ],
  },
];

export default function AppShowcase() {
  const [active, setActive] = useState<Role>("members");
  const current = roles.find((r) => r.key === active)!;

  return (
    <section id="app" className="py-28 px-6 bg-navy-deep overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <FadeUp className="mb-12 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-green mb-4">The WheelPay App</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-ink leading-tight text-balance">
            One App. <span className="text-green">Every Role.</span>
          </h2>
        </FadeUp>

        <div className="flex items-center justify-center gap-2 mb-16 flex-wrap">
          {roles.map((r) => (
            <button
              key={r.key}
              onClick={() => setActive(r.key)}
              className={`px-5 py-2 rounded-full text-sm font-semibold tracking-wide transition-colors ${
                active === r.key
                  ? "bg-green text-white"
                  : "border border-white/15 text-mist hover:text-ink hover:border-white/40"
              }`}
            >
              {r.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.key}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
          >
            <div className="max-w-2xl mx-auto text-center mb-14">
              <p className="text-xs uppercase tracking-[0.4em] text-green mb-4">{current.eyebrow}</p>
              <h3 className="text-3xl sm:text-4xl font-bold text-ink leading-tight mb-5">{current.heading}</h3>
              <p className="text-lg text-mist leading-relaxed">{current.body}</p>
            </div>

            <div className="flex flex-wrap items-start justify-center gap-10">
              {current.images.map((img) => (
                <div key={img.src} className="flex flex-col items-center gap-4">
                  <PhoneFrame src={img.src} alt={img.alt} />
                  <p className="text-xs text-mist max-w-[220px] text-center">{img.caption}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
