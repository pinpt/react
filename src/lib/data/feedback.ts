import type { IPinpointConfig } from '../types/config';
import { executeAPI } from '../fetch';

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
	await executeAPI(config, `/site-api/v1/feedback/submit`, 'POST', { ...data, channel: 'widget' }, true);
};
