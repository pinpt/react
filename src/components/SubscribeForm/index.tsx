import React, { useCallback, useEffect, useState } from 'react';
import { faCheckCircle, faExclamationCircle, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { subscribe } from '../../lib/data/subscription';
import { isSubscriberCookieSet } from '../../lib/subscription';

import type { IPinpointConfig } from '../../lib/types';

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

export interface SubscribeFormProps {
	config: IPinpointConfig;
	className?: string;
	inputClassName?: string;
	buttonClassName?: string;
	successClassName?: string;
	errorClassName?: string;
	spinnerClassName?: string;
	buttonText?: React.ReactNode;
	renderError?: (error: string) => React.ReactNode;
	renderSuccess?: () => React.ReactNode;
	autoFocus?: boolean;
	placeholder?: string;
	onSuccess?: (email: string) => void | Promise<void>;
}

const defaultRenderSuccess = () => (
	<div className="flex flex-row items-center">
		<FontAwesomeIcon icon={faCheckCircle} fixedWidth className="icon" />
		Subscribed!
	</div>
);

const defaultRenderError = (error: string) => (
	<div className="flex flex-row items-center">
		<FontAwesomeIcon icon={faExclamationCircle} fixedWidth className="icon" />
		{error}
	</div>
);

const SubscribeForm = (props: SubscribeFormProps) => {
	const {
		config,
		className = '',
		inputClassName = '',
		buttonClassName = '',
		errorClassName = '',
		successClassName = '',
		spinnerClassName = '',
		buttonText = 'Subscribe',
		placeholder = 'Your email address',
		autoFocus = false,
		renderError = defaultRenderError,
		renderSuccess = defaultRenderSuccess,
		onSuccess,
	} = props;
	const [email, setEmail] = useState('');
	const [disabled, setDisabled] = useState(true);
	const [saving, setSaving] = useState(false);
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState('');
	const [hidden, setHidden] = useState(false);
	const [ready, setReady] = useState(false);
	useEffect(() => {
		setHidden(isSubscriberCookieSet());
		setReady(true);
	}, []);
	useEffect(() => {
		setDisabled(!validateEmail(email));
		if (!email) {
			setError('');
		}
	}, [email]);
	const onSubmit = useCallback(async () => {
		setSaving(true);
		try {
			await subscribe(config, email);
			setSuccess(true);
			onSuccess?.(email);
			setEmail('');
		} catch (ex: any) {
			setError(ex.message);
			setSuccess(false);
		} finally {
			setSaving(false);
		}
	}, [email]);
	const _hidden = ready ? !success && hidden : true;
	return (
		<div className={`Pinpoint SubscribeForm wrapper ${_hidden ? 'invisible' : 'visible'} ${className}`}>
			<div className="inner">
				<div className="input">
					<input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						autoComplete="email"
						className={inputClassName}
						autoFocus={autoFocus}
						disabled={saving || success}
						placeholder={placeholder}
					/>
					<FontAwesomeIcon
						icon={faSpinner}
						pulse
						className={`spinner ${saving ? 'visible' : 'invisible'} ${spinnerClassName}`}
					/>
				</div>
				<button onClick={onSubmit} className={buttonClassName} disabled={disabled || saving || success}>
					{buttonText}
				</button>
			</div>
			{success ? (
				<div className={`success ${successClassName}`}>{renderSuccess()}</div>
			) : (
				<div className={`error ${error ? 'visible' : 'invisible'} ${errorClassName}`}>{renderError(error)}</div>
			)}
		</div>
	);
};

export default SubscribeForm;
