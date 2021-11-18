import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import Vote from '../';

const { default: readme } = require('../README.md');

export default {
	component: Vote,
	title: 'Changelog Components/Vote',
	parameters: {
		jest: ['Vote.test.tsx'],
		docs: {
			description: {
				component: readme,
			},
		},
		controls: { hideNoControlsWarning: true },
	},
} as Meta;

export const Default: React.VFC<{}> = () => {
	const [selected, setSelected] = useState<number>(-1);
	return (
		<Vote
			className="mx-32"
			selected={selected}
			setSelected={setSelected}
			onSubmitNewSubscriber={(_email, vote) => setSelected(vote)}
		/>
	);
};
