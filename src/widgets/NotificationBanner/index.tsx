import React from 'react';
import {
	faBullhorn, faExclamationCircle, faFlag, faInfoCircle, IconDefinition
} from '@fortawesome/free-solid-svg-icons';
import Banner from '../../components/Banner';

interface Props {
	background: string;
	foreground: string;
	icon: string;
	message: string;
	previewData: {
		title: string;
		url: string;
	};
	onClose?: () => void;
}

const NotificationBanner = (props: Props) => {
	let icon: IconDefinition | undefined = undefined;
	switch (props.icon) {
		case 'info_circle': {
			icon = faInfoCircle;
			break;
		}
		case 'exclamation_circle': {
			icon = faExclamationCircle;
			break;
		}
		case 'flag': {
			icon = faFlag;
			break;
		}
		case 'bullhorn': {
			icon = faBullhorn;
			break;
		}
		default:
			break;
	}
	const message = props.message.replace('{title}', props.previewData.title);
	return (
		<Banner
			className="Widget Notification Banner"
			icon={icon}
			message={
				// allow it for tracking purposes
				// eslint-disable-next-line react/jsx-no-target-blank
				<a href={props.previewData.url} rel="noopener">
					{message}
				</a>
			}
			style={{ backgroundColor: props.background, color: props.foreground }}
			closeable
			onClose={props.onClose}
		/>
	);
};

export default NotificationBanner;
