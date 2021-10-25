import React, { useCallback, useState } from 'react';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getFileUrl } from '../../../lib/file_metadata';
import useEmailAction from '../../../lib/hooks/useEmailAction';
import EmailAction from '../../EmailAction';

export interface IUnSubscribeProps {
	className?: string;
	logo?: string;
	name: string;
	fileApi?: string;
	subscribed?: boolean;
	email: string;
	handleUnsubscribe?: () => Promise<void>;
	handleSubscribe?: () => Promise<void>;
	manageSubscriptions?: () => void;
	showLogo?: boolean;
}

const baseClass = 'Pinpoint SubscriptionUnsubscribe';

const Unsubscribe = (props: IUnSubscribeProps) => {
	const {
		className = '',
		logo,
		fileApi,
		name,
		subscribed = false,
		email,
		handleSubscribe,
		handleUnsubscribe,
		manageSubscriptions,
		showLogo = false,
	} = props;
	const [pending, setPending] = useState<boolean>(false);
	const emailActionState = useEmailAction();

	const onSubscribe = useCallback(async () => {
		try {
			setPending(true);
			emailActionState.setters.setMessage('');
			if (handleSubscribe) {
				await handleSubscribe();
				emailActionState.setters.setMessage(
					'You were successfully re-subscribed. Please check your email to verify your subscription.'
				);
			}
		} catch (ex) {
			emailActionState.setters.setCritical(false);
			emailActionState.setters.setError(ex.message);
		} finally {
			setPending(false);
		}
	}, [emailActionState.setters, handleSubscribe]);

	const onUnSubscribe = useCallback(async () => {
		try {
			setPending(true);
			emailActionState.setters.setMessage('');
			if (handleUnsubscribe) {
				await handleUnsubscribe();
				emailActionState.setters.setMessage(
					'You were successfully unsubscribed. Unsubscribed by accident? Re-subscribe below.'
				);
			}
		} catch (ex) {
			emailActionState.setters.setCritical(false);
			emailActionState.setters.setError(ex.message);
		} finally {
			setPending(false);
		}
	}, [emailActionState.setters, handleUnsubscribe]);

	return (
		<div className={`${baseClass} Wrapper ${className}`}>
			<div className={`${baseClass} Container`}>
				<div className={`${baseClass} Content`}>
					<EmailAction {...emailActionState} />
					{showLogo && (
						<>
							{logo && <img src={getFileUrl(logo, fileApi)} alt="" className={`${baseClass} Logo`} />}
							<h3 className={`${baseClass} Name`}>{name}</h3>
						</>
					)}
					<p className={`${baseClass} Warning`}>
						You are about to {subscribed ? 'unsubscribe' : 'subscribe'} <strong>{email}</strong>{' '}
						{subscribed ? 'from' : 'to'} updates from {name}.
					</p>
					<div className="pt-6">
						{subscribed ? (
							<button className={`${baseClass} Button Unsubscribe`} onClick={onUnSubscribe} disabled={pending}>
								{pending ? <FontAwesomeIcon icon={faSpinner} pulse /> : 'Unsubscribe'}
							</button>
						) : (
							<button className={`${baseClass} Button Resubscribe`} onClick={onSubscribe} disabled={pending}>
								{pending ? <FontAwesomeIcon icon={faSpinner} pulse /> : 'Resubscribe'}
							</button>
						)}
					</div>
					<span className={`${baseClass} Manage`} onClick={manageSubscriptions}>
						manage all subscriptions
					</span>
				</div>
			</div>
		</div>
	);
};

export default Unsubscribe;
