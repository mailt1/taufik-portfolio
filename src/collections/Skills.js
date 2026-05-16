export const Skills = {
  slug: "skills",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "order"],
  },
  access: {
    read: () => true,
  },
  fields: [
    { name: "name", type: "text", required: true },
    { name: "order", type: "number", admin: { description: "Sort order (lowest first)" } },
  ],
};
