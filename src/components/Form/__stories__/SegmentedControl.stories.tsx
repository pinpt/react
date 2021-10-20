import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import SegmentedControl from '../segmentedControl';
const { default: readme } = require('../README.md');

export default {
	component: SegmentedControl,
	title: 'Components/Form/Segmented Control',
	parameters: {
		jest: ['SegmentedControl.test.tsx'],
		docs: {
			description: {
				component: readme,
			},
		},
		controls: { hideNoControlsWarning: true },
	},
} as Meta;

export const Default: React.VFC<{}> = () => {
	const [value, setValue] = useState<any>('');
	return (
		<SegmentedControl
			label="Test Field"
			description={<div>Description here</div>}
			options={[
				{
					text: 'Option A',
					value: 'A',
				},
				{
					text: 'Option B',
					value: 'B',
				},
			]}
			value={value}
			onChange={setValue}
		/>
	);
};
