import React from 'react';
import useLinkTracking from '../../../../lib/hooks/useLinkTracking';
import ActionLink from '../../../Internal/ActionLink';
import { ISocialMediaShareProps } from '../../types';

const FacebookShare = (props: ISocialMediaShareProps) => {
	const { className = '', href: _href, ...rest } = props;

	const href = useLinkTracking(_href, 'facebook');

	return (
		<ActionLink
			className={`Pinpoint SocialMedia ShareItem FacebookShare ${className}`}
			title="Twitter"
			href={`https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(href)}`}
			{...rest}
		>
			<svg
				width={10}
				height={16}
				aria-hidden="true"
				focusable="false"
				data-prefix="fab"
				data-icon="facebook-f"
				role="img"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 320 512"
			>
				<path
					fill="currentColor"
					d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
				></path>
			</svg>
		</ActionLink>
	);
};

export default FacebookShare;
