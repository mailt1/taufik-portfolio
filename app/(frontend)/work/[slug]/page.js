import { notFound } from "next/navigation";
import { getFooter, getWork, getWorks } from "@/lib/payload";
import WorkDetailClient from "./WorkDetailClient";

export async function generateStaticParams() {
  try {
    const works = await getWorks();
    return works.map((w) => ({ slug: w.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const work = await getWork(slug);
  if (!work) return {};
  return {
    title: `${work.title} — Taufik Ismail`,
    description: work.tagline,
  };
}

export default async function WorkPage({ params }) {
  const { slug } = await params;
  const [work, works, footer] = await Promise.all([
    getWork(slug),
    getWorks(),
    getFooter(),
  ]);
  if (!work) notFound();
  return <WorkDetailClient work={work} works={works} footer={footer} />;
}
