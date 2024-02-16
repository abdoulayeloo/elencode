/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { locate } from "@/sanity/presentation/locate";
// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";
import { presentationTool } from "sanity/presentation";
import Logo from "@/components/Logo";
import NavbarStudio from "@/components/NavbarStudio";

export default defineConfig({
  basePath: "/studio",
  name: "Loddev_s_Blog",
  title: "Loddev's Blog Studio",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    structureTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    presentationTool({
      locate,
      previewUrl: {
        draftMode: {
          enable: "/api/draft",
        },
      },
    }),
  ],
  studio: {
    components: {
      logo: Logo,
      navbar: NavbarStudio,
    },
  },
});
