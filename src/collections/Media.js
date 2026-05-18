export const Media = {
  slug: "media",
  upload: {
    staticDir: "public/media",
    imageSizes: [
      { name: "thumbnail", width: 960 },
      { name: "card", width: 1800 },
      { name: "feature", width: 3200 },
    ],
    mimeTypes: ["image/*"],
  },
  fields: [
    { name: "alt", type: "text" },
  ],
  access: {
    read: () => true,
  },
};
