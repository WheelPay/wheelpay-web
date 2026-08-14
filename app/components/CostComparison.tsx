"use client";

import { FadeUp, Stagger, StaggerItem } from "./motion";

interface Row {
  name: string;
  highlight?: boolean;
  fee: string;
  processing: string;
}

const rows: Row[] = [
  { name: "WheelPay", highlight: true, fee: "$0 / mo", processing: "$0 — passed to the member" },
  { name: "Wodify (Essentials)", fee: "$99 / mo", processing: "as low as 2.6% + $0.25" },
  { name: "PushPress (Free)", fee: "$0 / mo", processing: "4.99% + $0.30" },
  { name: "PushPress (Pro)", fee: "$159 / mo", processing: "2.89% + $0.30" },
  { name: "Gymdesk", fee: "$75–$200 / mo", processing: "~2.9% + $0.30" },
];

export default function CostComparison() {
  return (
    <section id="compare" className="py-28 px-6 bg-navy-deep">
      <div className="max-w-4xl mx-auto">
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

        <div className="overflow-x-auto -mx-6 px-6">
          <div className="min-w-[600px] rounded-2xl border border-white/10 overflow-hidden">
            <div className="grid grid-cols-[1.3fr_1fr_1.4fr] bg-navy-card text-xs uppercase tracking-widest text-mist">
              <div className="px-6 py-4">Platform</div>
              <div className="px-6 py-4">Monthly Fee</div>
              <div className="px-6 py-4">Card Processing — You Pay</div>
            </div>

            <Stagger>
              {rows.map((row) => (
                <StaggerItem key={row.name}>
                  <div
                    className={`grid grid-cols-[1.3fr_1fr_1.4fr] border-t border-white/8 ${
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
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>

        <FadeUp delay={0.15} className="mt-10 text-center">
          <p className="text-mist leading-relaxed max-w-2xl mx-auto">
            On $10,000 a month in member payments, that&rsquo;s roughly{" "}
            <span className="text-ink font-semibold">$260–$500</span> in
            processing fees alone with the competition — before their
            monthly platform fee. WheelPay: <span className="text-green font-semibold">$0</span>.
            Every month.
          </p>
        </FadeUp>

        <p className="mt-8 text-xs text-mist/70 text-center max-w-2xl mx-auto leading-relaxed">
          Pricing reflects each provider&rsquo;s publicly published rates as
          of August 2026 and is subject to change — confirm current pricing
          directly with each provider. Wodify&rsquo;s processing rate is
          advertised as &ldquo;as low as&rdquo; and may vary by account.
          Sources: wodify.com/pricing, pushpress.com/pricing,
          gymdesk.com/pricing. WheelPay&rsquo;s $0 owner-side processing
          reflects its flat, member-paid transaction fee structure.
        </p>
      </div>
    </section>
  );
}
