const cookieName = 'subscription_id';

const getSubscriberCookie = () => {
	if (typeof window === 'undefined') {
		return undefined;
	}
	return document.cookie.split('; ').find((c) => c.startsWith(`${cookieName}=`));
};

export const getSubscriberId = () => {
	const cookie = getSubscriberCookie();
	if (cookie) {
		return cookie.split('=')[1];
	}
	return undefined;
};

export const isSubscriberCookieSet = () => {
	const cookie = getSubscriberCookie();
	return !!cookie;
};
