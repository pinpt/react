import { useState, useEffect } from 'react';
import { getSubscriberId } from '../../subscription';

type Medium = 'twitter' | 'facebook' | 'linkedin';

const addTracking = (url: string, tracking: Medium) => {
	const _url = new URL(url);
	_url.searchParams.set('utm_source', 'pinpt_web');
	_url.searchParams.set('utm_medium', `pinpt_social_${tracking}`);
	const subId = getSubscriberId();
	if (subId) {
		_url.searchParams.set('utm_campaign', subId);
	}
	return _url.toString();
};

const useLinkTracking = (url: string, medium: Medium, disabled = false): string => {
	const [href, setHref] = useState<string>(url);

	useEffect(() => {
		if (disabled) {
			setHref(url);
			return;
		}
		if (url) {
			setHref(addTracking(url, medium));
		} else {
			setHref(url);
		}
	}, [url]);

	return href;
};

export default useLinkTracking;
