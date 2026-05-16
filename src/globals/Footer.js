export const Footer = {
  slug: "footer",
  label: "Footer",
  access: {
    read: () => true,
  },
  fields: [
    { name: "email", type: "email", required: true },
    {
      name: "socials",
      type: "array",
      labels: { singular: "Social link", plural: "Social links" },
      fields: [
        { name: "label", type: "text", required: true },
        { name: "url", type: "text", required: true },
      ],
    },
  ],
};
