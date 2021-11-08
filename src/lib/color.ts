import { TagMapping, StyledTag } from './types';

/**
 * getTagColorStyles will safely destructure tag styles from the tag mapping for a given tag.
 * You can also just look them up directly in the tag mapping (eg. `site.tagMapping.tagName`)
 *
 * @param tag the name of the tag
 * @param tagMapping the site-wide tag mapping
 * @returns tag styles if they exist (which they should!), otherwise monochrome tag styles
 */
const getTagStyles = (
	tag: string,
	tagMapping: TagMapping = {}
): {
	color: string;
	backgroundColor: string;
	border: string;
} =>
	tagMapping[tag]
		? tagMapping[tag]
		: {
				backgroundColor: '#ffffff',
				border: '1px solid #575757',
				color: '#000000',
		  };

/**
 * @deprecated use getTagStyles, or just look them up directly in the tag mapping (eg. `site.tagMapping.tagName`)
 * @param tag the name of the tag
 * @param defaultColor @deprecated doesnt do anything
 * @param tagMapping the site-wide tag mapping
 * @returns tag styles if they exist, the same as a direct lookup on the tag mapping, otherwise monochrome tag styles
 */
export const getTagColorStyles = (tag: string, defaultColor?: string, tagMapping?: TagMapping) =>
	getTagStyles(tag, tagMapping);

export const getStyledTag = (tag: string, tagMapping: TagMapping = {}): StyledTag => ({
	name: tag,
	style: getTagStyles(tag, tagMapping),
});
