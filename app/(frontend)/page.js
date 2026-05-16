import HomeClient from "../_components/HomeClient";
import {
  getFooter,
  getLogos,
  getSiteSettings,
  getWorks,
} from "@/lib/payload";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const [works, settings, footer, logos] = await Promise.all([
    getWorks(),
    getSiteSettings(),
    getFooter(),
    getLogos(),
  ]);
  return (
    <HomeClient
      works={works}
      settings={settings}
      footer={footer}
      logos={logos}
    />
  );
}
