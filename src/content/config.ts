import {z, defineCollection} from "astro:content";

const postCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        pubDate: z.date(),
        eyecatch: z.object({
            url: z.string(),
            alt: z.string(),
        }),
        tags: z.array(z.string()),
    })
})

export const collections = {
    posts: postCollection,
};