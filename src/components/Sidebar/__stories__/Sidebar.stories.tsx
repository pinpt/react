import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import Sidebar from '..';
import DateLabel from '../../DateLabel';
import Author from '../../Author';
import Tags from '../../Tags';
import Clap from '../../Clap';
import { Bar, FacebookShare, TwitterShare, EmailShare, LinkedInShare } from '../../SocialMedia';

const { default: readme } = require('../README.md');

export default {
	component: Sidebar,
	title: 'Changelog Components/Sidebar',
	parameters: {
		jest: ['Sidebar.test.tsx'],
		docs: {
			description: {
				component: readme,
			},
		},
		controls: { hideNoControlsWarning: true },
	},
} as Meta;

const AVATAR =
	'https://file.pinpoint.com/6cc744395c563f0072b339070aa327f3;UCGt%3D%3DkE~A%3FZJ6%5EhIpS%23o%5BELE3oLT0I%40t7E2;400x400.png?rw=48&rh=48';

export const Full: React.VFC<{}> = () => {
	const [count, setCount] = useState(20);
	return (
		<Sidebar
			date={<DateLabel />}
			author={<Author avatarUrl={AVATAR} name="Keegan" />}
			tags={<Tags.Bar tags={['feature', 'improvement', 'mobile']} />}
			clap={<Clap clapCount={count} handleClap={() => setCount((c) => c + 1)} />}
			sharing={
				<Bar>
					<FacebookShare href="https://www.facebook.com/Pinpoint.Engineering" newTab />
					<TwitterShare href="https://twitter.com/pinpoint_sw" newTab />
					<LinkedInShare href="https://linkedin.com/company/pinpoint-software" newTab />
					<EmailShare recipient="hello@pinpoint.com" />
				</Bar>
			}
		/>
	);
};

export const No_Date: React.VFC<{}> = () => {
	const [count, setCount] = useState(20);
	return (
		<Sidebar
			author={<Author avatarUrl={AVATAR} name="Keegan" />}
			tags={<Tags.Bar tags={['feature', 'improvement', 'mobile']} />}
			clap={<Clap clapCount={count} handleClap={() => setCount((c) => c + 1)} />}
			sharing={
				<Bar>
					<FacebookShare href="https://www.facebook.com/Pinpoint.Engineering" newTab />
					<TwitterShare href="https://twitter.com/pinpoint_sw" newTab />
					<LinkedInShare href="https://linkedin.com/company/pinpoint-software" newTab />
					<EmailShare recipient="hello@pinpoint.com" />
				</Bar>
			}
		/>
	);
};

export const No_Author: React.VFC<{}> = () => {
	const [count, setCount] = useState(20);
	return (
		<Sidebar
			date={<DateLabel />}
			tags={<Tags.Bar tags={['feature', 'improvement', 'mobile']} />}
			clap={<Clap clapCount={count} handleClap={() => setCount((c) => c + 1)} />}
		/>
	);
};

export const Clap_Only: React.VFC<{}> = () => {
	const [count, setCount] = useState(20);
	return <Sidebar clap={<Clap clapCount={count} handleClap={() => setCount((c) => c + 1)} />} />;
};
