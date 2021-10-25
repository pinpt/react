import React from 'react';
import { Meta } from '@storybook/react';
import EmailAction from '../';
import Logo from '../../Logo';

const { default: readme } = require('../README.md');

export default {
	component: EmailAction,
	title: 'Components/Email Action',
	parameters: {
		jest: ['EmailAction.test.tsx'],
		docs: {
			description: {
				component: readme,
			},
		},
		controls: { hideNoControlsWarning: true },
	},
} as Meta;

export const With_Non_Critical_Error: React.VFC<{}> = () => (
	<EmailAction
		error="This is a test error"
		critical={false}
		code={500}
		canClear={false}
		setters={{
			setError: () => null,
			setMessage: () => null,
		}}
	/>
);

export const With_Critical_Error: React.VFC<{}> = () => (
	<EmailAction
		error="This is a test error"
		critical
		code={500}
		canClear={false}
		setters={{
			setError: () => null,
			setMessage: () => null,
		}}
	/>
);

export const With_Message: React.VFC<{}> = () => (
	<EmailAction
		message="This is a test message"
		code={200}
		canClear
		setters={{
			setError: () => null,
			setMessage: () => null,
		}}
	/>
);
