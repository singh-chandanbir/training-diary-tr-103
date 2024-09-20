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
        {
          label: "Day 4",
          autogenerate: {
            directory: "day4",
          },
        },
        {
          label: "Day 5",
          autogenerate: {
            directory: "day5",
          },
        },
        {
          label: "Day 6",
          autogenerate: {
            directory: "day6",
          },
        },
        {
          label: "Day 7",
          autogenerate: {
            directory: "day7",
          },
        },
        {
          label: "Day 8",
          autogenerate: {
            directory: "day8",
          },
        },
        {
          label: "Day 9",
          autogenerate: {
            directory: "day9",
          },
        },
        {
          label: "Day 10",
          autogenerate: {
            directory: "day10",
          },
        },
        {
          label: "Day 11",
          autogenerate: {
            directory: "day11",
          },
        },
        {
          label: "Day 12",
          autogenerate: {
            directory: "day12",
          },
        },
        {
          label: "Day 13",  
          autogenerate: {
            directory: "day13",
          },
        },
        {
          label: "Day 14",
          autogenerate: {
            directory: "day14",
          },
        },
        {
          label: "Day 15",
          autogenerate: {
            directory: "day15",
          },
        },
        {
          label: "Day 16",
          autogenerate: {
            directory: "day16",
          },
        },
        {
          label: "Day 17",
          autogenerate: {
            directory: "day17",
          },
        },
        {
          label: "Day 18",
          autogenerate: {
            directory: "day18",
          },
        },
        {
          label: "Day 19",
          autogenerate: {
            directory: "day19",
          },

        },
        {
          label: "Day 20",
          autogenerate: {
            directory: "day20",
          },
        },
        {
          label: "Day 21",
          autogenerate: {
            directory: "day21",
          },

        },
        {
          label: "Day 22",
          autogenerate: {
            directory: "day22",
          },
        },
        {
        label: "Day 23",
        autogenerate: {
          directory: "day23",
        },
        },
        {
          label: "Day 24",
          autogenerate: {
            directory: "day24",
          },
        },
        {
          label: "Day 25",
          autogenerate: {
            directory: "day25",
          },
        },
        {
          label: "Day 26",
          autogenerate: {
            directory: "day26",
          },
        },
        {
          label: "Day 27",
          autogenerate: {
            directory: "day27",
          },
        },
        {
          label: "Day 28",
          autogenerate: {
            directory: "day28",
          },
        },
        {
          label: "Day 29",
          autogenerate: {
            directory: "day29",
          },

        },
        {
          label: "Day 30",
          autogenerate: {
            directory: "day30",
          },
        
        }
      ],
    }),
    tailwind(),
  ],
});
