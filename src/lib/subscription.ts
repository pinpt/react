const cookieName = 'subscription_id';

export const isSubscriberCookieSet = () => {
	if (typeof window === 'undefined') {
		return false;
	}
	return document.cookie.split(';').some((c) => c.startsWith(`${cookieName}=`));
};
