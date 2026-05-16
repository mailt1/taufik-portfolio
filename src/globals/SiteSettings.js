export const SiteSettings = {
  slug: "site-settings",
  label: "Site Settings",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "hero",
      type: "group",
      fields: [
        { name: "tagline", type: "textarea", admin: { description: "Aria-label / SEO description for the hero" } },
      ],
    },
    {
      name: "about",
      type: "group",
      fields: [
        { name: "lead", type: "textarea", admin: { description: "Large lead paragraph" } },
        { name: "body", type: "textarea", admin: { description: "Body paragraph below the lead" } },
      ],
    },
  ],
};
