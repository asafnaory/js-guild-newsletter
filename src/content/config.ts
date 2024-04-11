import { defineCollection, z } from "astro:content";

const issueInfo = defineCollection({
  type: 'data',
  schema: z.object({
    issueNumber: z.number(),
    date: z.string(),
    text: z.string(),
  })
});

const newsletterSections = defineCollection({
  type: "content",
  schema:  z.object({
    mainTitle: z.string(),
    secondTitle: z.string(),
  }),
});
export const collections = {
  "newsletter-sections": newsletterSections,
  "issue-info": issueInfo,
};
