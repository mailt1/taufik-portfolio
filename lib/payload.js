import "server-only";
import { getPayload } from "payload";
import config from "@payload-config";

let payloadPromise;

function getClient() {
  if (!payloadPromise) {
    payloadPromise = getPayload({ config });
  }
  return payloadPromise;
}

export async function getWorks({ includeHidden = false } = {}) {
  const payload = await getClient();
  const result = await payload.find({
    collection: "works",
    sort: "order",
    limit: 100,
    depth: 1,
    where: includeHidden ? undefined : { visible: { not_equals: false } },
  });
  return result.docs;
}

export async function getWork(slug) {
  const payload = await getClient();
  const result = await payload.find({
    collection: "works",
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 1,
  });
  return result.docs[0] || null;
}

export async function getSiteSettings() {
  const payload = await getClient();
  return payload.findGlobal({ slug: "site-settings" });
}

export async function getFooter() {
  const payload = await getClient();
  return payload.findGlobal({ slug: "footer" });
}

export async function getSkills() {
  const payload = await getClient();
  const result = await payload.find({
    collection: "skills",
    sort: "order",
    limit: 100,
  });
  return result.docs;
}

export async function getLogos() {
  const payload = await getClient();
  const result = await payload.find({
    collection: "logos",
    sort: "order",
    limit: 100,
    depth: 1,
    where: { visible: { not_equals: false } },
  });
  return result.docs;
}
