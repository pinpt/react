import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import Sidebar from '..';
import Author from '../../Author';
import Tags from '../../Tags';
import Clap from '../../Clap';
import Social from '../../Social';

const { default: readme } = require('../README.md');

export default {
	component: Sidebar,
	title: 'Components/Sidebar',
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
			author={<Author avatarUrl={AVATAR} name="Keegan" />}
			tags={<Tags.Bar tags={['feature', 'improvement', 'mobile']} />}
			clap={<Clap clapCount={count} handleClap={() => setCount((c) => c + 1)} />}
			sharing={
				<Social.Bar>
					<Social.Facebook sharing href="https://www.facebook.com/Pinpoint.Engineering" newTab />
					<Social.Twitter sharing href="https://twitter.com/pinpoint_sw" newTab />
					<Social.LinkedIn sharing href="https://linkedin.com/company/pinpoint-software" newTab />
					<Social.Email sharing href="mailto:hello@pinpoint.com" />
				</Social.Bar>
			}
		/>
	);
};

export const No_Author: React.VFC<{}> = () => {
	const [count, setCount] = useState(20);
	return (
		<Sidebar
			tags={<Tags.Bar tags={['feature', 'improvement', 'mobile']} />}
			clap={<Clap clapCount={count} handleClap={() => setCount((c) => c + 1)} />}
		/>
	);
};

export const Clap_Only: React.VFC<{}> = () => {
	const [count, setCount] = useState(20);
	return <Sidebar clap={<Clap clapCount={count} handleClap={() => setCount((c) => c + 1)} />} />;
};
