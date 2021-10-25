import React from 'react';
import { Meta } from '@storybook/react';
import Field from '../field';

const { default: readme } = require('../README.md');

export default {
	component: Field,
	title: 'Components/Form/Field',
	parameters: {
		jest: ['Field.test.tsx'],
		docs: {
			description: {
				component: readme,
			},
		},
		controls: { hideNoControlsWarning: true },
	},
} as Meta;

export const Default: React.VFC<{}> = () => <Field label="Test Field" />;

export const Default_With_Error: React.VFC<{}> = () => <Field label="Test Field" error="Test Error" />;

export const Default_With_Info: React.VFC<{}> = () => <Field label="Test Field" info="Test Info" />;
