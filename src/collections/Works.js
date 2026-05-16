const imageSlot = (name, description) => ({
  name,
  type: "group",
  admin: { description },
  fields: [
    { name: "image", type: "upload", relationTo: "media" },
    {
      name: "visible",
      type: "checkbox",
      defaultValue: true,
      admin: { description: "Uncheck to hide this image from the site" },
    },
  ],
});

export const Works = {
  slug: "works",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["idx", "title", "client", "year", "tag"],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "visible",
      type: "checkbox",
      defaultValue: true,
      admin: {
        position: "sidebar",
        description: "Uncheck to hide this work from the home page listing",
      },
    },
    {
      type: "row",
      fields: [
        { name: "idx", type: "text", required: true, admin: { width: "20%", description: "Display index, e.g. 01" } },
        { name: "slug", type: "text", required: true, unique: true, admin: { width: "40%", description: "URL slug" } },
        { name: "order", type: "number", admin: { width: "20%", description: "Sort order (lowest first)" } },
        { name: "year", type: "text", admin: { width: "20%" } },
      ],
    },
    {
      type: "row",
      fields: [
        { name: "title", type: "text", required: true, admin: { width: "50%" } },
        { name: "italic", type: "text", admin: { width: "50%", description: "Italic subtitle after the title" } },
      ],
    },
    {
      type: "row",
      fields: [
        { name: "role", type: "text", admin: { width: "50%" } },
        { name: "tag", type: "text", admin: { width: "50%", description: "Category tag e.g. Fintech" } },
      ],
    },
    {
      type: "row",
      fields: [
        { name: "client", type: "text", admin: { width: "50%" } },
        { name: "sector", type: "text", admin: { width: "50%" } },
      ],
    },
    { name: "services", type: "text" },
    { name: "tagline", type: "textarea" },
    { name: "overview", type: "textarea" },
    { name: "problem", type: "textarea" },
    { name: "approach", type: "textarea" },
    { name: "quote", type: "textarea" },
    {
      name: "stats",
      type: "array",
      labels: { singular: "Stat", plural: "Stats" },
      fields: [
        { name: "label", type: "text", required: true },
        { name: "value", type: "text", required: true },
        {
          name: "visible",
          type: "checkbox",
          defaultValue: true,
          admin: { description: "Uncheck to hide this stat from the case study" },
        },
      ],
    },
    {
      name: "media",
      type: "group",
      fields: [
        imageSlot("thumbnail", "Home page card thumbnail"),
        imageSlot("b1", "Cover · 01 (16/8)"),
        imageSlot("b2", "Cover · 02 (16/10)"),
        imageSlot("b3a", "Detail · 01 (1/1, left)"),
        imageSlot("b3b", "Detail · 02 (1/1, right)"),
        imageSlot("b4", "Showcase · 01 (16/10)"),
        imageSlot("b5", "Showcase · 02 (16/10)"),
        imageSlot("b6a", "Detail · 03 (1/1, left)"),
        imageSlot("b6b", "Detail · 04 (1/1, right)"),
        imageSlot("b7", "Process · 01 (4/3)"),
        imageSlot("b8", "Final · 01 (4/3)"),
      ],
    },
  ],
};
