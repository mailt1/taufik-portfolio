export const Media = {
  slug: "media",
  upload: {
    staticDir: "public/media",
    imageSizes: [
      {
        name: "thumbnail",
        width: 633,
        height: 792,
        position: "centre",
      },
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
