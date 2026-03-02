import { defineCollection, z } from "astro:content";

const aktuelles = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
    image: z.string().optional(),
  }),
});

export const collections = { aktuelles };
