import React from 'react';
import { Meta } from '@storybook/react';
import MostRecentPosts from '../';
import previewData from '../__data__/previewData.json';

const { default: readme } = require('../README.md');

export default {
	component: MostRecentPosts,
	title: 'Widgets/Most Recent Posts',
	parameters: {
		jest: ['MostRecentPosts.test.tsx'],
		docs: {
			description: {
				component: readme,
			},
		},
		controls: { hideNoControlsWarning: true },
	},
} as Meta;

export const Default: React.VFC<{}> = () => (
	<MostRecentPosts count={previewData.content.length} previewData={previewData as any} />
);

export const Style1: React.VFC<{}> = () => (
	<MostRecentPosts count={previewData.content.length} previewData={previewData as any} style="style1" />
);

export const Style2: React.VFC<{}> = () => (
	<MostRecentPosts count={previewData.content.length} previewData={previewData as any} style="style2" />
);

const inlineCSS = `
.Pinpoint.Widget.MostRecentPosts.MyStyles .Tile.style2 {
	color: #990000 !important;
	font-family: "futura-pt-bold","Century Gothic",CenturyGothic,"Apple Gothic",AppleGothic,"URW Gothic L","Avant Garde",sans-serif !important;
}
`;
export const Style2_With_Custom_CSS: React.VFC<{}> = () => (
	<MostRecentPosts
		count={previewData.content.length}
		previewData={previewData as any}
		style="style2"
		inlineCSS={inlineCSS}
		className="MyStyles"
	/>
);
