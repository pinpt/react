import { executeAPI } from '../fetch';
import { getSubscriberId, setSubscriberId } from '../subscription';
import type { IPinpointConfig } from '../types/config';

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
