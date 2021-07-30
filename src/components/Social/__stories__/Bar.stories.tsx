import React from 'react';
import { Meta } from '@storybook/react';
import Bar from '../Bar';
import Facebook from '../Facebook';
import Instagram from '../Instagram';
import Twitter from '../Twitter';
import Github from '../Github';
import LinkedIn from '../LinkedIn';
import RSS from '../RSS';

export default {
	component: Bar,
	title: 'Components/Social/Bar',
	parameters: {
		jest: ['SocialBar.test.tsx'],
	},
} as Meta;

export const All: React.VFC<{}> = () => (
	<Bar>
		<Facebook href="https://www.facebook.com/Pinpoint.Engineering" newTab />
		<Instagram href="https://www.instagram.com/pinpoint_sw/" newTab />
		<Twitter href="https://twitter.com/pinpoint_sw" newTab />
		<Github href="https://github.com/pinpt" newTab />
		<LinkedIn href="https://linkedin.com/company/pinpoint-software" newTab />
		<RSS href="https://api.pinpoint.com.so/rss/PirxVTE94u3YmGNOySRY" newTab />
	</Bar>
);

export const Short: React.VFC<{}> = () => (
	<Bar>
		<Twitter href="https://twitter.com/pinpoint_sw" newTab />
		<Github href="https://github.com/pinpt" newTab />
	</Bar>
);

export const Single: React.VFC<{}> = () => (
	<Bar>
		<Github href="https://github.com/pinpt" newTab />
	</Bar>
);