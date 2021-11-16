import React, { useCallback, useState } from 'react';
import { faCheckCircle, faExclamationCircle, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useFeedback from '../../lib/hooks/useFeedback';
import type { IFeedbackProps } from '../../lib/types/feedback';

export const SendButton = ({
	sending,
	message,
	isSubscriber,
	email,
	emailValid,
	onClick,
	children,
	style,
}: {
	sending: boolean;
	message: string;
	isSubscriber: boolean;
	email: string;
	emailValid: boolean;
	children?: React.ReactNode;
	style?: React.CSSProperties;
	onClick: () => Promise<void>;
}) => (
	<button
		disabled={sending || !(message && (isSubscriber ? true : email && emailValid))}
		style={style}
		onClick={onClick}
	>
		{children}
	</button>
);

export const MessageInput = ({
	message,
	setMessage,
	disabled,
	rows,
	autoFocus,
}: {
	message: string;
	setMessage: (val: string) => void;
	disabled?: boolean;
	rows?: number;
	autoFocus?: boolean;
}) => {
	return (
		<div className="message">
			<textarea
				disabled={disabled}
				value={message}
				onChange={(e) => setMessage(e.target.value)}
				placeholder="Your feedback..."
				rows={rows}
				autoFocus={autoFocus}
			/>
		</div>
	);
};

export const EmailInput = ({
	email,
	setEmail,
	valid,
	disabled,
	hide,
}: {
	email: string;
	setEmail: (val: string) => void;
	valid: boolean;
	disabled: boolean;
	hide: boolean;
}) => {
	if (hide) {
		return null;
	}
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
		className = '',
		showDisclaimer = true,
		disclaimer = 'By submitting, you agree to allow us to communicate with you by email.',
		button,
	} = props;
	const { text: buttonText = 'Send Feedback' } = button ?? {};
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [success, setSuccess] = useState(false);
	const { submit, error, sending, emailValid, isSubscriber } = useFeedback({ ...props, email, message });
	const onClick = useCallback(async () => {
		await submit();
		setSuccess(true);
	}, []);
	return (
		<div className={`Pinpoint Widget Feedback ${className}`}>
			{!success ? (
				<>
					<div className="title">{title}</div>
					<MessageInput message={message} setMessage={setMessage} disabled={sending} />
					<EmailInput
						hide={isSubscriber}
						email={email}
						setEmail={setEmail}
						disabled={sending}
						valid={emailValid}
					/>
					<SendButton
						sending={sending}
						message={message}
						isSubscriber={isSubscriber}
						email={email}
						emailValid={emailValid}
						onClick={onClick}
					>
						{buttonText}
					</SendButton>
					{showDisclaimer && <div className="disclaimer">{disclaimer}</div>}
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
