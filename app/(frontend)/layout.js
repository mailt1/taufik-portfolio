import Script from "next/script";
import Header from "../_components/Header";
import LenisProvider from "../_components/LenisProvider";
import ScrollReset from "../_components/ScrollReset";
import TweaksProvider from "../_components/Tweaks";
import "../globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Taufik Ismail — Senior UI Designer",
  description:
    "Senior UI designer crafting pixel-perfect interfaces and scalable systems.",
  openGraph: {
    title: "Taufik Ismail — Portfolio",
    description:
      "Senior UI designer crafting pixel-perfect interfaces and scalable systems.",
    url: "/",
    siteName: "Taufik Ismail",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Taufik Ismail — Portfolio" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Taufik Ismail — Portfolio",
    description:
      "Senior UI designer crafting pixel-perfect interfaces and scalable systems.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Geist:wght@300;400;500;600&family=Geist+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LenisProvider />
        <ScrollReset />
        <TweaksProvider>
          <Header />
          <main>{children}</main>
        </TweaksProvider>
        <Script src="/image-slot.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
