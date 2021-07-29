import React from 'react';
import { Meta } from '@storybook/react';
import SocialComponent from '../LinkedIn';

export default {
	component: SocialComponent,
	title: 'Components/Social/Linkedin',
	parameters: {
		jest: ['SocialLinkedIn.test.tsx'],
	},
} as Meta;

export const Linkedin: React.VFC<{}> = () => (
	<SocialComponent href="https://linkedin.com/company/pinpoint-software" newTab />
);
