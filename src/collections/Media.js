export const Media = {
  slug: "media",
  upload: {
    staticDir: "public/media",
    imageSizes: [
      { name: "thumbnail", width: 480 },
      { name: "card", width: 900 },
      { name: "feature", width: 1600 },
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
