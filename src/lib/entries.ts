import type { Content } from './types/content';

export const splitEntries = (entries: Content[] = [], latestCount = 1) => {
	const latest = entries.slice(0, latestCount);
	const recent = entries.slice(latestCount, entries.length);

	return { latest, recent };
};
