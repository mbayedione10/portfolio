import { defineCollection, z } from 'astro:content';

export const collections = {
	work: defineCollection({
		schema: z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			img: z.string(),
			img_alt: z.string().optional(),
			category: z.enum(['Dev', 'Odoo', 'Civic Tech', 'Project Management']).default('Dev'),
			highlights: z.array(z.string()).optional(),
			link: z.string().optional(),
			github: z.string().optional(),
		}),
	}),
};
