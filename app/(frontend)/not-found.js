import Link from "next/link";
import Footer from "../_components/Footer";
import { getFooter } from "@/lib/payload";

export const metadata = {
  title: "Not found — Taufik Ismail",
};

export const dynamic = "force-dynamic";

export default async function NotFound() {
  let footer = null;
  try {
    footer = await getFooter();
  } catch {
    footer = null;
  }

  return (
    <>
      <section className="not-found shell">
        <div className="nf-eyebrow">
          <span className="t-eyebrow">Error 404</span>
        </div>
        <h1 className="nf-title t-display">
          Page <em>not found</em>.
        </h1>
        <p className="nf-tagline">
          You’re lost. But at least the UI looks nice.
        </p>
        <div className="nf-actions">
          <Link href="/" className="nf-back-link">
            <span className="arr">←</span> Back to home
          </Link>
        </div>
      </section>
      <Footer email={footer?.email} socials={footer?.socials} />
    </>
  );
}
