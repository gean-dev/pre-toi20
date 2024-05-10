import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://gean-dev.github.io/pre-toi20",
  base: "/pre-toi20/",
  integrations: [tailwind()],
});
