"use client";

import { FadeUp, Stagger, StaggerItem } from "./motion";

interface Row {
  name: string;
  highlight?: boolean;
  fee: string;
  processing: string;
  monthlyTotal: string;
  yearlyTotal: string;
}

// Illustrative totals assume $20,000/mo in member card payments — see footnote.
const rows: Row[] = [
  {
    name: "WheelPay",
    highlight: true,
    fee: "$0 / mo",
    processing: "$0 — passed to the member",
    monthlyTotal: "$0",
    yearlyTotal: "$0",
  },
  {
    name: "Wodify (Essentials)",
    fee: "$99 / mo",
    processing: "as low as 2.6% + $0.25",
    monthlyTotal: "$619",
    yearlyTotal: "$7,428",
  },
  {
    name: "PushPress (Free)",
    fee: "$0 / mo",
    processing: "4.99% + $0.30",
    monthlyTotal: "$998",
    yearlyTotal: "$11,976",
  },
  {
    name: "PushPress (Pro)",
    fee: "$159 / mo",
    processing: "2.89% + $0.30",
    monthlyTotal: "$737",
    yearlyTotal: "$8,844",
  },
  {
    name: "Gymdesk",
    fee: "$75–$200 / mo",
    processing: "~2.9% + $0.30",
    monthlyTotal: "$655–$780",
    yearlyTotal: "$7,860–$9,360",
  },
  {
    name: "Zen Planner",
    fee: "$99–$348 / mo",
    processing: "Hidden — quoted per customer",
    monthlyTotal: "$99–$348†",
    yearlyTotal: "$1,188–$4,176†",
  },
  {
    name: "Glofox",
    fee: "$99+ / mo",
    processing: "Hidden — sales-gated",
    monthlyTotal: "$99+†",
    yearlyTotal: "$1,188+†",
  },
  {
    name: "StreamFit",
    fee: "$175 / mo",
    processing: "Unknown — not disclosed",
    monthlyTotal: "$175†",
    yearlyTotal: "$2,100†",
  },
];

export default function CostComparison() {
  return (
    <section id="compare" className="py-28 px-6 bg-navy-deep">
      <div className="max-w-5xl mx-auto">
        <FadeUp className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.4em] text-mist mb-4">Cost Comparison</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-ink leading-tight text-balance mb-5">
            Why Pay to Get Paid?
          </h2>
          <p className="max-w-xl mx-auto text-lg text-mist leading-relaxed">
            Every other gym platform charges a monthly fee, a processing fee,
            or both — straight out of your account. WheelPay charges the
            owner nothing. Ever.
          </p>
        </FadeUp>

        <FadeUp delay={0.1} className="text-center mb-6">
          <p className="text-xs uppercase tracking-widest text-mist">
            Based on $20,000 / mo in member card payments
          </p>
        </FadeUp>

        <div className="overflow-x-auto -mx-6 px-6">
          <div className="min-w-[880px] rounded-2xl border border-white/10 overflow-hidden">
            <div className="grid grid-cols-[1.2fr_0.9fr_1.3fr_0.9fr_1fr] bg-navy-card text-xs uppercase tracking-widest text-mist">
              <div className="px-6 py-4">Platform</div>
              <div className="px-6 py-4">Monthly Fee</div>
              <div className="px-6 py-4">Card Processing — You Pay</div>
              <div className="px-6 py-4">Monthly Total*</div>
              <div className="px-6 py-4">Yearly Total*</div>
            </div>

            <Stagger>
              {rows.map((row) => (
                <StaggerItem key={row.name}>
                  <div
                    className={`grid grid-cols-[1.2fr_0.9fr_1.3fr_0.9fr_1fr] border-t border-white/8 ${
                      row.highlight ? "bg-green/15" : ""
                    }`}
                  >
                    <div className={`px-6 py-5 font-semibold ${row.highlight ? "text-green" : "text-ink"}`}>
                      {row.name}
                    </div>
                    <div className={`px-6 py-5 ${row.highlight ? "text-ink font-semibold" : "text-mist"}`}>
                      {row.fee}
                    </div>
                    <div className={`px-6 py-5 ${row.highlight ? "text-ink font-semibold" : "text-mist"}`}>
                      {row.processing}
                    </div>
                    <div className={`px-6 py-5 font-semibold ${row.highlight ? "text-green" : "text-ink"}`}>
                      {row.monthlyTotal}
                    </div>
                    <div className={`px-6 py-5 font-semibold ${row.highlight ? "text-green" : "text-ink"}`}>
                      {row.yearlyTotal}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>

        <FadeUp delay={0.15} className="mt-10 text-center">
          <p className="text-mist leading-relaxed max-w-2xl mx-auto">
            That&rsquo;s up to{" "}
            <span className="text-ink font-semibold">$11,976 a year</span>{" "}
            leaving your account with the competition — before you count
            your own time. WheelPay: <span className="text-green font-semibold">$0</span>.
          </p>
        </FadeUp>

        <p className="mt-8 text-xs text-mist/70 text-center max-w-2xl mx-auto leading-relaxed">
          *Monthly/yearly totals are illustrative, based on $20,000/mo in
          member card payments run through each platform&rsquo;s lowest
          published processing rate, and exclude small per-transaction fixed
          fees, which vary by transaction count. Pricing reflects each
          provider&rsquo;s publicly published rates as of August 2026 and is
          subject to change — confirm current pricing directly with each
          provider. Wodify&rsquo;s processing rate is advertised as
          &ldquo;as low as&rdquo; and may vary by account. Published card
          processing rates apply to recurring membership dues the same as
          any other card transaction — providers differentiate pricing by
          payment method (card vs. ACH/bank transfer), not by transaction
          type, per each provider&rsquo;s own help documentation. &dagger;Zen
          Planner, Glofox, and StreamFit do not publicly disclose their card
          processing rate — &ldquo;Hidden&rdquo; means it&rsquo;s quoted only
          through a sales call or account setup; &ldquo;Unknown&rdquo; means
          no rate or processor is disclosed anywhere at all. Totals marked
          with &dagger; reflect the monthly fee only and understate the true
          cost once processing is included. Sources: wodify.com/pricing,
          pushpress.com/pricing, gymdesk.com/pricing, glofox.com/pricing,
          streamfit.com/streamfit-pricing; Zen Planner&rsquo;s fee is
          third-party-reported (its own pricing page could not be verified
          directly). WheelPay&rsquo;s $0 owner-side processing reflects its
          flat, member-paid transaction fee structure.
        </p>
      </div>
    </section>
  );
}
