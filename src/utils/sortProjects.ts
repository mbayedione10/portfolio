import type { CollectionEntry } from 'astro:content';

/** Featured projects first (by rank), then the rest by most recent date. */
export function sortProjects(projects: CollectionEntry<'work'>[]) {
	return [...projects].sort((a, b) => {
		const fa = a.data.featured ?? Infinity;
		const fb = b.data.featured ?? Infinity;
		if (fa !== fb) return fa - fb;
		return b.data.publishDate.valueOf() - a.data.publishDate.valueOf();
	});
}
