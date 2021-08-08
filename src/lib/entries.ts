import type { IContent } from './types/content';

export const splitEntries = (entries: IContent[] = [], latestCount = 1) => {
	const latest = entries.slice(0, latestCount);
	const recent = entries.slice(latestCount, entries.length);

	return { latest, recent };
};
