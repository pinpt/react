import React from 'react';
import { Meta } from '@storybook/react';
import Modal from '../';

const { default: readme } = require('../README.md');

export default {
	component: Modal,
	title: 'Components/Modal',
	parameters: {
		jest: ['Modal.test.tsx'],
		docs: {
			description: {
				component: readme,
			},
		},
		controls: { hideNoControlsWarning: true },
	},
} as Meta;

export const Default: React.VFC<{}> = () => <Modal visible>Hi</Modal>;
