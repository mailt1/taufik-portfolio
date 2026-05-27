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

const RATIO_OPTIONS = [
  { label: "Wide · 16:8", value: "16/8" },
  { label: "Wide · 16:9", value: "16/9" },
  { label: "Wide · 16:10", value: "16/10" },
  { label: "Landscape · 4:3", value: "4/3" },
  { label: "Square · 1:1", value: "1/1" },
  { label: "Portrait · 3:4", value: "3/4" },
];

const blockVisible = (description = "Uncheck to hide this block") => ({
  name: "visible",
  type: "checkbox",
  defaultValue: true,
  admin: { description },
});

// ── Content builder blocks (drag to reorder the case-study body) ──
const TextSectionBlock = {
  slug: "textSection",
  labels: { singular: "Text section", plural: "Text sections" },
  fields: [
    {
      type: "row",
      fields: [
        { name: "subtitle", type: "text", admin: { width: "34%", description: "Subtitle, e.g. Overview" } },
        { name: "title", type: "text", admin: { width: "33%", description: "Title — roman part, e.g. The" } },
        { name: "italic", type: "text", admin: { width: "33%", description: "Title — italic part, e.g. brief" } },
      ],
    },
    { name: "body", type: "textarea" },
    blockVisible("Uncheck to hide this whole section"),
  ],
};

const ImageBlock = {
  slug: "image",
  labels: { singular: "Image", plural: "Images" },
  fields: [
    {
      type: "row",
      fields: [
        { name: "image", type: "upload", relationTo: "media", admin: { width: "70%" } },
        { name: "ratio", type: "select", defaultValue: "16/9", options: RATIO_OPTIONS, admin: { width: "30%" } },
      ],
    },
    blockVisible("Uncheck to hide this image"),
  ],
};

const ImagePairBlock = {
  slug: "imagePair",
  labels: { singular: "Image pair", plural: "Image pairs" },
  admin: { description: "Two images shown side by side" },
  fields: [
    {
      type: "row",
      fields: [
        { name: "imageLeft", type: "upload", relationTo: "media", admin: { width: "50%" } },
        { name: "imageRight", type: "upload", relationTo: "media", admin: { width: "50%" } },
      ],
    },
    { name: "ratio", type: "select", defaultValue: "1/1", options: RATIO_OPTIONS, admin: { description: "Aspect ratio of each image" } },
    blockVisible("Uncheck to hide this pair"),
  ],
};

const QuoteBlock = {
  slug: "quote",
  labels: { singular: "Quote", plural: "Quotes" },
  fields: [
    { name: "quote", type: "textarea" },
    blockVisible("Uncheck to hide this quote"),
  ],
};

const StatsBlock = {
  slug: "stats",
  labels: { singular: "Stats", plural: "Stats" },
  fields: [
    {
      type: "row",
      fields: [
        { name: "subtitle", type: "text", defaultValue: "Outcome", admin: { width: "34%", description: "Subtitle" } },
        { name: "title", type: "text", defaultValue: "By the", admin: { width: "33%", description: "Title — roman part" } },
        { name: "italic", type: "text", defaultValue: "numbers", admin: { width: "33%", description: "Title — italic part" } },
      ],
    },
    {
      name: "items",
      type: "array",
      labels: { singular: "Stat", plural: "Stats" },
      fields: [
        { name: "label", type: "text", required: true },
        { name: "value", type: "text", required: true },
        blockVisible("Uncheck to hide this stat"),
      ],
    },
    blockVisible("Uncheck to hide this section"),
  ],
};

const CONTENT_BLOCKS = [TextSectionBlock, ImageBlock, ImagePairBlock, QuoteBlock, StatsBlock];

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
    {
      name: "media",
      type: "group",
      fields: [imageSlot("thumbnail", "Home page card thumbnail")],
    },
    {
      name: "content",
      type: "blocks",
      labels: { singular: "Block", plural: "Content blocks" },
      admin: {
        description:
          "The case-study body. Add, remove and drag blocks to reorder. Hidden blocks won't render.",
      },
      blocks: CONTENT_BLOCKS,
    },
  ],
};
