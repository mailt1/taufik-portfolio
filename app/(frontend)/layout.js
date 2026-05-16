import Script from "next/script";
import Header from "../_components/Header";
import LenisProvider from "../_components/LenisProvider";
import ScrollReset from "../_components/ScrollReset";
import TweaksProvider from "../_components/Tweaks";
import "../globals.css";

export const metadata = {
  title: "Taufik Ismail — Senior UI Designer",
  description:
    "Senior UI designer crafting pixel-perfect interfaces and scalable systems.",
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
