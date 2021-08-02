import { Entry } from './types';

export const splitEntries = (entries: Entry[] = [], latestCount = 1) => {
	const latest = entries.slice(0, latestCount);
	const recent = entries.slice(latestCount, entries.length);

	return { latest, recent };
}