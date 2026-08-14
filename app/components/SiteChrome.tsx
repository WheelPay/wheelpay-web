import Navigation from "./Navigation";
import Footer from "./Footer";

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
