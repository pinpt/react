import React from 'react';
import { Meta } from '@storybook/react';
import SocialComponent from '../RSS';

export default {
	component: SocialComponent,
	title: 'Components/Social/RSS',
	parameters: {
		jest: ['SocialRSS.test.tsx'],
	},
} as Meta;

export const RSS: React.VFC<{}> = () => (
	<SocialComponent href="https://api.pinpoint.com.so/rss/PirxVTE94u3YmGNOySRY" newTab />
);
