import React from 'react';
import ActionLink from '../../../Internal/ActionLink';
import { ISocialMediaLinkProps } from '../../types';
import TwitterIcon from '../icon';

const TwitterLink = (props: ISocialMediaLinkProps) => {
	const { className = '', ...rest } = props;

	return (
		<ActionLink className={`Pinpoint SocialMedia Item TwitterLink ${className}`} title="Twitter" {...rest}>
			<TwitterIcon />
		</ActionLink>
	);
};

export default TwitterLink;
