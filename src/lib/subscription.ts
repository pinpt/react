const cookieName = 'subscription_id';
const localStoreKey = 'pinpoint_subscriber_id';

const getSubscriberCookie = () => {
	if (typeof window === 'undefined') {
		return undefined;
	}
	return document.cookie.split('; ').find((c) => c.startsWith(`${cookieName}=`));
};

export const setSubscriberId = (id: string) => {
	localStorage.setItem(localStoreKey, id);
	document.cookie = `${cookieName}=${id}; path=/; max-age=31536000; SameSite=lax; Secure;`;
};

export const getSubscriberId = () => {
	const cookie = getSubscriberCookie();
	if (cookie) {
		return cookie.split('=')[1];
	}
	if (typeof localStorage !== 'undefined') {
		const val = localStorage.getItem(localStoreKey);
		if (val) {
			return val;
		}
	}
	return undefined;
};

export const isSubscriberCookieSet = () => {
	const cookie = getSubscriberId();
	return !!cookie;
};

const tester = /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

// Thanks to:
// http://fightingforalostcause.net/misc/2006/compare-email-regex.php
// http://thedailywtf.com/Articles/Validating_Email_Addresses.aspx
// http://stackoverflow.com/questions/201323/what-is-the-best-regular-expression-for-validating-email-addresses/201378#201378
export const validateEmail = (email: string): boolean => {
	if (!email) return false;
	if (email.length > 256) return false;
	if (!email.includes('@')) return false;
	return tester.test(email);
};
