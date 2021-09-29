import React from 'react';
import ActionLink from '../../Internal/ActionLink';
import { ISocialMediaLinkProps } from '../types';
import Icon from './icon';

const TwitterLink = (props: ISocialMediaLinkProps) => {
	const { className = '', ...rest } = props;

	return (
		<ActionLink className={`Pinpoint SocialMedia Item Twitter link ${className}`} title="Twitter" {...rest}>
			<Icon />
		</ActionLink>
	);
};

export default TwitterLink;
