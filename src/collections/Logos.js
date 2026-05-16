export const Logos = {
  slug: "logos",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "order", "image"],
  },
  access: {
    read: () => true,
  },
  fields: [
    { name: "name", type: "text", required: true },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      admin: { description: "Logo image (PNG/SVG/WebP)" },
    },
    {
      name: "order",
      type: "number",
      admin: { description: "Sort order (lowest first)" },
    },
    {
      name: "visible",
      type: "checkbox",
      defaultValue: true,
      admin: { description: "Uncheck to hide from the marquee" },
    },
  ],
};
