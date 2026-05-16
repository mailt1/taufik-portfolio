/* eslint-disable react/jsx-no-undef */
import config from "@payload-config";
import "@payloadcms/next/css";
import {
  RootLayout,
  handleServerFunctions,
} from "@payloadcms/next/layouts";
import { importMap } from "./admin/importMap.js";

const serverFunction = async (args) => {
  "use server";
  return handleServerFunctions({
    ...args,
    config,
    importMap,
  });
};

export default async function Layout({ children }) {
  return (
    <RootLayout
      config={config}
      importMap={importMap}
      serverFunction={serverFunction}
    >
      {children}
    </RootLayout>
  );
}

export const metadata = {
  title: "Admin",
};
