import { WORKS, SKILLS } from "../lib/works.js";

const DEFAULT_HERO_TAGLINE =
  "Senior UI designer crafting pixel-perfect interfaces and scalable systems.";

const DEFAULT_ABOUT_LEAD =
  "I'm Taufik — a designer obsessed with turning complex systems into seamless, intuitive experiences through thoughtful details and precise execution.";

const DEFAULT_ABOUT_BODY =
  "Over the past six years, I've designed digital products across various industries — focusing on clean interfaces, thoughtful details, and experiences that feel simple, and useful.";

const DEFAULT_FOOTER = {
  email: "taufikismail891@gmail.com",
  socials: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/taufikismails/" },
    { label: "Instagram", url: "https://www.instagram.com/taufik.ismails/" },
    { label: "Dribbble", url: "https://dribbble.com/Mailtfk" },
  ],
};

const DEFAULT_LOGOS = [
  "Lattice",
  "Helio Health",
  "North Atlas",
  "Folio",
  "Quanta",
  "Sundial",
  "Northbeam",
  "Kuro Labs",
];

const DEFAULT_ADMIN_EMAIL = "admin@example.com";
const DEFAULT_ADMIN_PASSWORD = "ChangeMe123!";

export async function seedIfEmpty(payload) {
  try {
    await seedAdminUser(payload);
    await seedWorks(payload);
    await seedSkills(payload);
    await seedLogos(payload);
    await seedSiteSettings(payload);
    await seedFooter(payload);
  } catch (err) {
    payload.logger.error({ msg: "Seed failed", err });
  }
}

async function seedAdminUser(payload) {
  const existing = await payload.find({ collection: "users", limit: 1 });
  if (existing.totalDocs > 0) return;
  await payload.create({
    collection: "users",
    data: {
      email: DEFAULT_ADMIN_EMAIL,
      password: DEFAULT_ADMIN_PASSWORD,
    },
  });
  payload.logger.info(
    `Seeded admin user → ${DEFAULT_ADMIN_EMAIL} / ${DEFAULT_ADMIN_PASSWORD}`
  );
}

async function seedWorks(payload) {
  const existing = await payload.find({ collection: "works", limit: 1 });
  if (existing.totalDocs > 0) return;
  for (let i = 0; i < WORKS.length; i++) {
    const w = WORKS[i];
    await payload.create({
      collection: "works",
      data: {
        slug: w.slug,
        idx: w.idx,
        order: i,
        title: w.title,
        italic: w.italic,
        role: w.role,
        year: w.year,
        tag: w.tag,
        client: w.client,
        sector: w.sector,
        services: w.services,
        tagline: w.tagline,
        overview: w.overview,
        problem: w.problem,
        approach: w.approach,
        quote: w.quote,
        stats: w.stats,
      },
    });
  }
  payload.logger.info(`Seeded ${WORKS.length} works`);
}

async function seedSkills(payload) {
  const existing = await payload.find({ collection: "skills", limit: 1 });
  if (existing.totalDocs > 0) return;
  for (let i = 0; i < SKILLS.length; i++) {
    await payload.create({
      collection: "skills",
      data: { name: SKILLS[i], order: i },
    });
  }
  payload.logger.info(`Seeded ${SKILLS.length} skills`);
}

async function seedLogos(payload) {
  const existing = await payload.find({ collection: "logos", limit: 1 });
  if (existing.totalDocs > 0) return;
  for (let i = 0; i < DEFAULT_LOGOS.length; i++) {
    await payload.create({
      collection: "logos",
      data: { name: DEFAULT_LOGOS[i], order: i, visible: true },
    });
  }
  payload.logger.info(`Seeded ${DEFAULT_LOGOS.length} logos (no images yet)`);
}

async function seedSiteSettings(payload) {
  const current = await payload.findGlobal({ slug: "site-settings" });
  if (current?.hero?.tagline) return;
  await payload.updateGlobal({
    slug: "site-settings",
    data: {
      hero: { tagline: DEFAULT_HERO_TAGLINE },
      about: { lead: DEFAULT_ABOUT_LEAD, body: DEFAULT_ABOUT_BODY },
    },
  });
  payload.logger.info("Seeded site-settings global");
}

async function seedFooter(payload) {
  const current = await payload.findGlobal({ slug: "footer" });
  if (current?.email) return;
  await payload.updateGlobal({
    slug: "footer",
    data: DEFAULT_FOOTER,
  });
  payload.logger.info("Seeded footer global");
}
