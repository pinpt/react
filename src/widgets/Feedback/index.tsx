import React, { useCallback, useEffect, useState } from 'react';
import { faCheckCircle, faExclamationCircle, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { submitFeedback } from '../../lib/data/feedback';
import { getSubscriberId, isSubscriberCookieSet, validateEmail } from '../../lib/subscription';

import type { IFeedbackProps } from '../../lib/types/feedback';

const MessageInput = ({
	message,
	setMessage,
	disabled,
}: {
	message: string;
	setMessage: (val: string) => void;
	disabled: boolean;
}) => {
	return (
		<div className="message">
			<textarea
				disabled={disabled}
				value={message}
				onChange={(e) => setMessage(e.target.value)}
				placeholder="Your feedback..."
			/>
		</div>
	);
};

const EmailInput = ({
	email,
	setEmail,
	valid,
	disabled,
}: {
	email: string;
	setEmail: (val: string) => void;
	valid: boolean;
	disabled: boolean;
}) => {
	return (
		<div className="email">
			<input
				type="text"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				autoComplete="email"
				disabled={disabled}
				placeholder="Your email address"
			/>
			{email && (
				<FontAwesomeIcon
					icon={valid ? faCheckCircle : faExclamationCircle}
					className={`icon ${valid ? 'valid' : 'invalid'}`}
				/>
			)}
		</div>
	);
};

const Feedback = (props: IFeedbackProps) => {
	const {
		title,
		config,
		widgetId,
		className = '',
		pageTitle,
		pageType,
		contentId,
		url,
		showDisclaimer = true,
	} = props;
	const [isSubscriber, setIsSubscriber] = useState(false);
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [sending, setSending] = useState(false);
	const [success, setSuccess] = useState(false);
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
	const onClick = useCallback(async () => {
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
			setSuccess(true);
		} catch (ex: any) {
			console.error(ex);
			setError(ex.message);
		} finally {
			setSending(false);
		}
	}, [config, widgetId, isSubscriber, message, email]);
	return (
		<div className={`${className} Pinpoint Widget Feedback`}>
			{!success ? (
				<>
					<div className="title">{title}</div>
					<MessageInput message={message} setMessage={setMessage} disabled={sending} />
					{!isSubscriber && <EmailInput email={email} setEmail={setEmail} disabled={sending} valid={emailValid} />}
					<button
						disabled={sending || !(message && (isSubscriber ? true : email && emailValid))}
						onClick={onClick}
					>
						Submit
					</button>
					{showDisclaimer && (
						<div className="disclaimer">
							By submitting you agree to our allow us to communicate with you and send you occassional emails.
						</div>
					)}
					{sending && (
						<div className="spinner">
							<FontAwesomeIcon icon={faSpinner} pulse className={`icon ${sending ? 'sending' : ''}`} />
							<span>Sending...</span>
						</div>
					)}
					{error && (
						<div className="error">
							<FontAwesomeIcon icon={faExclamationCircle} className="icon" />
							<span>{error}</span>
						</div>
					)}
				</>
			) : (
				<div className="thankyou">
					<FontAwesomeIcon icon={faCheckCircle} className="icon" />
					Submitted! Thank you!
				</div>
			)}
		</div>
	);
};

export default Feedback;
