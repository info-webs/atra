import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

const isProd = process.env.NODE_ENV === "production";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel(),
  integrations: [react(), tailwind()],
  site: "https://atrayobesidad.com",
  base: "/",
});
