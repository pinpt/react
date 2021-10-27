import React from 'react';
import { Meta } from '@storybook/react';
import Image from '../';

const { default: readme } = require('../README.md');

export default {
	component: Image,
	title: 'Changelog Components/Image',
	parameters: {
		jest: ['Image.test.tsx'],
		docs: {
			description: {
				component: readme,
			},
		},
		controls: { hideNoControlsWarning: true },
	},
} as Meta;

export const Default: React.VFC<{}> = () => <Image src="https://via.placeholder.com/1500" width={1500} height={1500} />;

export const Default_No_Size: React.VFC<{}> = () => <Image src="https://via.placeholder.com/1500" />;

export const Default_Alt: React.VFC<{}> = () => <Image src="https://via.placeholder.com/1500" alt="1500x1500" />;

export const BlurHash: React.VFC<{}> = () => (
	<Image
		src="https://file.edge.pinpoint.com/46b9e86a19e11882615784ec76948241;UJC5v9%25jt6ohtntRobflayoMj%5Bj%5Ds%3FkCfioL;1328x860.png"
		alt="blurhash"
	/>
);

export const Zoomable: React.VFC<{}> = () => (
	<div className="flex flex-row gap-10">
		<Image src="https://via.placeholder.com/150" width={150} height={150} zoomable />
		<Image src="https://via.placeholder.com/150" width={150} height={150} zoomable />
		<Image src="https://via.placeholder.com/150" width={150} height={150} zoomable />
		<Image src="https://via.placeholder.com/150" width={150} height={150} zoomable />
		<Image src="https://via.placeholder.com/150" width={150} height={150} zoomable />
		<Image src="https://via.placeholder.com/150" width={150} height={150} zoomable />
	</div>
);
