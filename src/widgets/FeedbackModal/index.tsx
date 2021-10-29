/* eslint-disable react/jsx-no-target-blank */
import React, { useCallback, useRef, useState } from 'react';
import { faExclamationCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from '../../components/Modal';
import useFeedback from '../../lib/hooks/useFeedback';
import { EmailInput, MessageInput, SendButton } from '../Feedback';

import type { IPinpointConfig } from '../../lib/types';

interface PageProps {
	header?: {
		title: string;
		description: string;
	};
	footer?: {
		title: string;
	};
	button?: {
		text: string;
		background?: string;
		foreground?: string;
	};
	disclaimer?: string;
	onClose?: () => void;
	__previewMode?: boolean;
	className?: string;
	config: IPinpointConfig;
}

const FeedbackModal = (props: PageProps) => {
	const linkRef = useRef<any>();
	const modalRef = useRef<any>();
	const {
		button,
		header,
		footer,
		className = '',
		disclaimer = 'By submitting, you agree to allow us to communicate with you by email.',
		config,
	} = props;
	const { title: headerTitle = 'Send Feedback', description = 'How can we improve?' } = header ?? {};
	const { title: footerTitle = `We can't respond to every request but we read all of them.` } = footer ?? {};
	const {
		text: buttonText = 'Send Feedback',
		background: buttonBackground = 'rgb(243, 244, 246)',
		foreground: buttonForeground = 'black',
	} = button ?? {};
	const [visible, setVisible] = useState(true);
	const [message, setMessage] = useState('');
	const [email, setEmail] = useState('');
	const [success, setSuccess] = useState(false);
	const { submit, error, sending, emailValid, isSubscriber } = useFeedback({ config, email, message });

	const handleClose = useCallback(() => {
		setVisible(false);
		modalRef.current?.remove?.();
		props.onClose?.();
	}, [props.onClose]);

	const onClick = useCallback(async () => {
		await submit();
		setSuccess(true);
	}, [submit]);

	return (
		<Modal
			visible={visible}
			className={`Pinpoint Widget Feedback Modal ${className}`}
			__previewMode={props.__previewMode}
			ref={modalRef}
		>
			<div className="wrapper" style={{ minHeight: '365px' }}>
				{success ? (
					<>
						<div className="header">
							<div className="close" onClick={handleClose}>
								<FontAwesomeIcon icon={faTimes} />
							</div>
						</div>
						<div className="success">
							<div>Your feedback was submitted. Thank you!</div>
							<button onClick={handleClose}>Close</button>
						</div>
					</>
				) : (
					<>
						<div className="header">
							<div className="title">{headerTitle}</div>
							<div className="description">{description}</div>
							<div className="close" onClick={handleClose}>
								<FontAwesomeIcon icon={faTimes} />
							</div>
						</div>
						{error && (
							<div className="error">
								<FontAwesomeIcon icon={faExclamationCircle} className="icon" />
								{error}
							</div>
						)}
						<div className="body">
							<MessageInput message={message} setMessage={setMessage} rows={8} autoFocus />
							<EmailInput
								hide={isSubscriber}
								email={email}
								setEmail={setEmail}
								disabled={sending}
								valid={emailValid}
							/>
						</div>
						<div className="footer">
							<aside>
								<div className="title">{footerTitle}</div>
								<div className="disclaimer">{disclaimer}</div>
							</aside>
							<SendButton
								style={{ backgroundColor: buttonBackground, color: buttonForeground }}
								sending={sending}
								message={message}
								isSubscriber={isSubscriber}
								email={email}
								emailValid={emailValid}
								onClick={onClick}
							>
								{buttonText}
							</SendButton>
						</div>
					</>
				)}
			</div>
		</Modal>
	);
};

export default FeedbackModal;
