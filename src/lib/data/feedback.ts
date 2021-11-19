import { executeAPI } from '../fetch';
import { getSubscriberId, setSubscriberId } from '../subscription';
import type { IPinpointConfig } from '../types/config';
import { ContentTemplateType, IContent } from '../types/content';
import type { ISite } from '../types/site';

interface FeedbackLink {
	id: string; // unique id for the link
	url: string; // url to the external linkage
	type: string; // type of link
	text: string; // what to display for the link in the app
}

interface Feedback {
	message: string;
	widgetId?: string;
	subscriberId?: string;
	email?: string;
	properties?: any;
	referrer?: FeedbackLink;
	tags?: string[];
}

export const submitFeedback = async (config: IPinpointConfig, data: Feedback): Promise<void> => {
	let _data = { ...data, channel: 'widget' };
	if (!data.subscriberId) {
		const id = getSubscriberId();
		if (id) {
			_data.subscriberId = id;
		}
	}
	const { subscriber_id } = await executeAPI(config, `/site-api/v1/feedback/submit`, 'POST', _data, true);
	if (subscriber_id) {
		setSubscriberId(subscriber_id);
	}
};

export const feedbackTitleFromContent = (content: IContent): string => {
	switch (content.type) {
		case ContentTemplateType.Changelog: {
			return `Have product feedback? We'd love to hear from you!`;
		}
		case ContentTemplateType.Documentation: {
			return `Have documentation feedback? We'd love to hear from you!`;
		}
		case ContentTemplateType.Blog: {
			return `Have feedback on this post? We'd love to hear from you!`;
		}
		default:
			break;
	}
	return `Have feedback? We'd love to hear from you!`;
};

export const feedbackTitleFromSite = (site: ISite): string => {
	switch (site.type) {
		case 'changelog': {
			return `Have product feedback? We'd love to hear from you!`;
		}
		case 'documentation': {
			return `Have documentation feedback? We'd love to hear from you!`;
		}
		case 'blog': {
			return `Have feedback on this post? We'd love to hear from you!`;
		}
		default:
			break;
	}
	return `Have feedback? We'd love to hear from you!`;
};
