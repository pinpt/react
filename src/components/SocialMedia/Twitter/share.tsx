import React from 'react';
import useLinkTracking from 'src/lib/hooks/useLinkTracking';
import ActionLink from '../../Internal/ActionLink';
import { ISocialMediaShareProps } from '../types';
import Icon from './icon';

interface TwitterShareProps extends ISocialMediaShareProps {
	text: string;
}

const TwitterShare = (props: TwitterShareProps) => {
	const { className = '', url, text, ...rest } = props;

	const href = useLinkTracking(url, 'twitter');

	return (
		<ActionLink
			className={`Pinpoint SocialMedia Item TwitterShare ${className}`}
			title="Twitter"
			href={`https://twitter.com/intent/tweet/?text=${encodeURIComponent(text)}&url=${encodeURIComponent(href)}`}
			{...rest}
		>
			<Icon />
		</ActionLink>
	);
};

export default TwitterShare;
