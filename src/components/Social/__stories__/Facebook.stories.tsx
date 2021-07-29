import React from 'react';
import { Meta } from '@storybook/react';
import SocialComponent from '../Facebook';

export default {
	component: SocialComponent,
	title: 'Components/Social/Facebook',
	parameters: {
		jest: ['SocialFacebook.test.tsx'],
	},
} as Meta;

export const Facebook: React.VFC<{}> = () => (
	<SocialComponent href="https://www.facebook.com/Pinpoint.Engineering" newTab />
);
