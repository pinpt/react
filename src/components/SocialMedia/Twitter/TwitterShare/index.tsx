import React from 'react';
import useLinkTracking from '../../../../lib/hooks/useLinkTracking';
import ActionLink from '../../../Internal/ActionLink';
import { ISocialMediaShareProps } from '../../types';
import TwitterIcon from '../icon';

interface TwitterShareProps extends ISocialMediaShareProps {
	/**
	 * The text message of the tweet.
	 */
	text?: string;
}

const TwitterShare = (props: TwitterShareProps) => {
	const { className = '', href: _href, text, ...rest } = props;

	const href = useLinkTracking(_href, 'twitter');

	return (
		<ActionLink
			className={`Pinpoint SocialMedia ShareItem TwitterShare ${className}`}
			title="Twitter"
			href={`https://twitter.com/intent/tweet/?text=${text ? encodeURIComponent(text) : ''}&url=${encodeURIComponent(
				href
			)}`}
			{...rest}
		>
			<TwitterIcon />
		</ActionLink>
	);
};

export default TwitterShare;
