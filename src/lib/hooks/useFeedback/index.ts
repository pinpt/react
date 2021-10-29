import React, { useCallback, useEffect, useState } from 'react';
import { submitFeedback } from '../../data/feedback';
import { getSubscriberId, isSubscriberCookieSet, validateEmail } from '../../subscription';

import type { IFeedbackProps } from '../../types/feedback';

type FeedbackProps = Omit<IFeedbackProps, 'title' | 'className' | 'showDisclaimer' | 'disclaimer'> & {
	email?: string;
	message: string;
};

const useFeedback = (props: FeedbackProps) => {
	const { widgetId, config, contentId, url, pageType, pageTitle, email = '', message } = props;
	const [isSubscriber, setIsSubscriber] = useState(false);
	const [sending, setSending] = useState(false);
	const [emailValid, setEmailValid] = useState(false);
	const [error, setError] = useState('');
	useEffect(() => setIsSubscriber(isSubscriberCookieSet()), []);
	useEffect(() => {
		if (email) {
			setEmailValid(validateEmail(email));
		} else {
			setEmailValid(false);
		}
	}, [email]);
	const submit = useCallback(async () => {
		setSending(true);
		setError('');
		try {
			const feedback = {
				widgetId,
				email,
				subscriberId: getSubscriberId(),
				message,
				referrer:
					contentId && pageTitle && url && pageType
						? {
								id: contentId,
								url,
								type: pageType,
								text: pageTitle,
						  }
						: undefined,
			};
			await submitFeedback(config, feedback);
		} catch (ex: any) {
			console.error(ex);
			setError(ex.message);
		} finally {
			setSending(false);
		}
	}, [config, widgetId, isSubscriber, message, email]);
	return {
		submit,
		sending,
		error,
		emailValid,
		isSubscriber,
	};
};

export default useFeedback;
