import type { Metadata } from "next";
import { FadeUp } from "../components/motion";

export const metadata: Metadata = {
  title: "Delete Your Account — WheelPay",
};

export default function AccountDeletionPage() {
  return (
    <section className="pt-40 pb-28 px-6 min-h-screen">
      <div className="max-w-2xl mx-auto">
        <FadeUp>
          <p className="text-xs uppercase tracking-[0.4em] text-green mb-6">Account</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-ink leading-tight tracking-tight mb-8 text-balance">
            Delete Your Account
          </h1>

          <div className="space-y-6 text-mist leading-relaxed">
            <p>
              To delete your account please follow the steps below. Please
              keep in mind that deletion of your account does NOT cancel any
              contracts or subscriptions with your gym. To cancel any current
              contract you must reach out to your Gym owner or Administrator.
              The steps below will ONLY remove your account and data from
              WheelPay.
            </p>

            <ol className="list-decimal list-inside space-y-2">
              <li>From the Hamburger menu, navigate to the Profile section of the app</li>
              <li>Select &ldquo;Remove account&rdquo; button</li>
              <li>Confirm selection on the following screen.</li>
            </ol>

            <p>
              Should you experience any issues with this process, please
              email:{" "}
              <a
                href="mailto:Support@wheelpay.com"
                className="text-ink underline hover:text-green transition-colors"
              >
                Support@wheelpay.com
              </a>{" "}
              and request that your data and account be deleted.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
