import path from "path";
import { fileURLToPath } from "url";
import { buildConfig } from "payload";
import { sqliteAdapter } from "@payloadcms/db-sqlite";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";
import sharp from "sharp";

import { Users } from "./collections/Users.js";
import { Media } from "./collections/Media.js";
import { Works } from "./collections/Works.js";
import { Skills } from "./collections/Skills.js";
import { Logos } from "./collections/Logos.js";
import { SiteSettings } from "./globals/SiteSettings.js";
import { Footer } from "./globals/Footer.js";
import { seedIfEmpty } from "./seed.js";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Works, Skills, Logos],
  globals: [SiteSettings, Footer],
  editor: lexicalEditor(),
  plugins: [
    ...(process.env.BLOB_READ_WRITE_TOKEN
      ? [
          vercelBlobStorage({
            collections: { media: true },
            token: process.env.BLOB_READ_WRITE_TOKEN,
          }),
        ]
      : []),
  ],
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URI || "file:./payload.db",
      // Turso / hosted libSQL requires an auth token; ignored for local file:// URIs.
      authToken: process.env.DATABASE_AUTH_TOKEN,
    },
  }),
  sharp,
  onInit: async (payload) => {
    payload.logger.info("[onInit] running seedIfEmpty");
    await seedIfEmpty(payload);
    payload.logger.info("[onInit] seedIfEmpty complete");
  },
});
