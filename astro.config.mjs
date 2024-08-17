import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Chandanbir Singh",
      social: {
        github: "https://github.com/singh-chandanbir/training-diary-tr-103/",
      },
      sidebar: [
        // {
        //   label: "Home",
        //   items: [
        //     // Each item here is one entry in the navigation menu.
        //     { label: "Home", slug: "home/index" },
        //   ],
        // },
        {
          label: "Day 1",
          autogenerate: {
            directory: "day1",
          },
          // items: [
          //   // Each item here is one entry in the navigation menu.
          //   { label: "Example Guide", slug: "day1/intro" },
          // ],
        },
        {
          label: "Day 2",
          autogenerate: {
            directory: "day2",
          },
        },
        {
          label: "Day 3",
          autogenerate: {
            directory: "day3",
          },
        },
      ],
    }),
    tailwind(),
  ],
});
