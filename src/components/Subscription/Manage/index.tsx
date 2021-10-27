import React, { useMemo } from 'react';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getFileUrl } from '../../../lib/file_metadata';
import { SubscriptionInfo } from '../../../lib/types/subscription';

export interface IManageProps {
	className?: string;
	subscriptions: SubscriptionInfo;
	handleClickUpdate?: (subscriptionId: string) => void;
	handleClickUnsubscribe?: (subscriptionId: string) => void;
	handleClickReSubscribe?: (subscriptionId: string) => void;
	fileApi?: string;
	pendingState?: Record<string, boolean>;
}
const baseClass = 'Pinpoint SubscriptionManage';
const Manage = (props: IManageProps) => {
	const {
		className = '',
		subscriptions,
		handleClickUpdate,
		handleClickUnsubscribe,
		handleClickReSubscribe,
		fileApi = 'https://file.pinpoint.com',
		pendingState,
	} = props;

	const filteredSubscriptions = useMemo(() => {
		return subscriptions.subscriptions.filter((sub) => subscriptions.sites[sub.siteId]);
	}, [subscriptions]);

	return (
		<div className={`${baseClass} Wrapper ${className}`}>
			<h2 className={`${baseClass} Title`}>Your Subscriptions</h2>
			<p className={`${baseClass} Description`}>
				Manage your subscriptions below. Missing subscriptions you expect to see? You may have subscribed with a
				different email address.
			</p>
			{filteredSubscriptions.map((sub) => {
				return (
					<div className={`${baseClass} Entry`} key={sub.subscriptionId}>
						<div>
							<div className={`${baseClass} Container`}>
								<img
									className={`${baseClass} SiteLogo`}
									src={getFileUrl(subscriptions.sites[sub.siteId].logoUrl, fileApi)}
								/>
								<span>
									<h2 className={`${baseClass} SiteName`}>{subscriptions.sites[sub.siteId].name}</h2>
									<p className={`${baseClass} SubscriptionDate`}>
										You subscribed {new Date(sub.createdAt).toLocaleString()}
									</p>
								</span>
								<div className={`${baseClass} Buttons`}>
									{sub.subscribed ? (
										<button
											className={`${baseClass} UpdateButton`}
											onClick={() => handleClickUpdate?.(sub.subscriptionId)}
										>
											Update
										</button>
									) : (
										<></>
									)}
									{!!sub.subscribed ? (
										<button
											className={`${baseClass} UnsubscribeButton`}
											onClick={() => handleClickUnsubscribe?.(sub.subscriptionId)}
										>
											{pendingState?.[sub.subscriptionId] ? (
												<FontAwesomeIcon icon={faSpinner} pulse />
											) : (
												'Unsubscribe'
											)}
										</button>
									) : (
										<button
											className={`${baseClass} UpdateButton`}
											onClick={() => handleClickReSubscribe?.(sub.subscriptionId)}
										>
											{pendingState?.[sub.subscriptionId] ? (
												<FontAwesomeIcon icon={faSpinner} pulse />
											) : (
												'Resubscribe'
											)}
										</button>
									)}
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Manage;
