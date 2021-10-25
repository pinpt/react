import React from 'react';
import { Meta } from '@storybook/react';
import Form from '../form';

const { default: readme } = require('../README.md');

export default {
	component: Form,
	title: 'Components/Form/Form',
	parameters: {
		jest: ['Form.test.tsx'],
		docs: {
			description: {
				component: readme,
			},
		},
		controls: { hideNoControlsWarning: true },
	},
} as Meta;

export const Default: React.VFC<{}> = () => <Form title="Test Form" description="This is a test" />;
