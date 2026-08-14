import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white/50 border-t border-white/8">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <Image src="/wheelpay-mark.svg" alt="" width={24} height={22} className="text-green" />
              <span className="text-xl font-bold text-ink tracking-tight">WheelPay</span>
            </div>
            <p className="text-sm leading-relaxed text-mist">
              Pay Better. Do Better.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-mist mb-4">Navigate</p>
            <ul className="space-y-2 text-sm">
              {[
                ["How It Works", "/#how-it-works"],
                ["Benefits", "/#benefits"],
                ["Built For", "/#built-for"],
                ["The App", "/#app"],
                ["Reviews", "/#reviews"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-white/50 hover:text-ink transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-mist mb-4">Get in Touch</p>
            <p className="text-sm leading-relaxed text-white/50 mb-4">
              Ready to pay better? Let&rsquo;s talk.
            </p>
            <a href="mailto:info@wheelpay.com" className="block text-sm text-mist hover:text-ink transition-colors mb-1">
              info@wheelpay.com
            </a>
            <a href="tel:19192892025" className="block text-sm text-mist hover:text-ink transition-colors mb-4">
              (919) 289-2025
            </a>
            <Link
              href="/contact"
              className="inline-block text-sm border border-white/20 text-ink rounded-full px-5 py-2 hover:bg-green hover:border-green transition-colors"
            >
              Book a Demo
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/8 text-xs text-center text-mist">
          &copy; {new Date().getFullYear()} WheelPay. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
