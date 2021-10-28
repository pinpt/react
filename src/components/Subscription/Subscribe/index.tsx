import React, { ChangeEvent, useCallback, useState } from 'react';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useEmailAction from '../../../lib/hooks/useEmailAction';
import useEmailValidation from '../../../lib/hooks/useEmailValidation';
import EmailAction from '../../EmailAction';
import Field from '../../Form/field';
import Form from '../../Form/form';

export interface ISubscribeProps {
	className?: string;
	name?: string;
	handleSubmit?: (email: string) => Promise<boolean>;
	pending?: boolean;
}

const baseClass = `Pinpoint SubscriptionSubscribe`;

const validate = async () => true;

const Subscribe = (props: ISubscribeProps) => {
	const { className = '', name, pending = false } = props;
	const emailActionState = useEmailAction();
	const { email, setEmail, statusText, emailValid } = useEmailValidation(validate);

	const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	}, []);

	const handleSubmit = useCallback(async () => {
		if (props.handleSubmit) {
			try {
				const result = await props.handleSubmit(email);
				if (result) {
					emailActionState.setters.setError('');
					emailActionState.setters.setCanClear(false);
					emailActionState.setters.setMessage('You were successfully subscribed!');
				} else {
					emailActionState.setters.setMessage('');
					emailActionState.setters.setError('You could not be subscribed at this time');
					emailActionState.setters.setCanClear(true);
				}
			} catch (ex: any) {
				emailActionState.setters.setMessage('');
				emailActionState.setters.setError(ex?.message ?? 'An unknown error occurred creating your subscription');
				emailActionState.setters.setCanClear(true);
			}
		}
	}, [props.handleSubmit, email]);

	return (
		<div className={`${baseClass} Wrapper ${className}`}>
			<h2 className={`${baseClass} Title`}>{`Subscribe to Updates${name ? ` for ${name}` : ''}`}</h2>
			<p className={`${baseClass} Description`}>
				Enter your email to be notified of new content{name ? ` from ${name}` : ''}!
			</p>
			<EmailAction {...emailActionState} />
			<Form
				title=""
				description=""
				buttonLocation="bottom"
				buttons={
					<button disabled={!emailValid} className={`${baseClass} Submit`} onClick={handleSubmit}>
						{pending ? <FontAwesomeIcon icon={faSpinner} pulse /> : 'Submit'}
					</button>
				}
			>
				<Field label="Email">
					<>
						<input
							value={email}
							className={`${baseClass} Field`}
							placeholder="Enter your email address"
							onChange={handleChange}
						/>
						{statusText}
					</>
				</Field>
			</Form>
		</div>
	);
};

export default Subscribe;
