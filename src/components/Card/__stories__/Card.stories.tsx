import React from 'react';
import { Meta } from '@storybook/react';
import { CoverMediaType } from '../../../lib/types';
import StatisticsBar from '../../Statistic/Bar';
import Tags from '../../Tags';
import Container from '../Container';
import DateLabel from '../../DateLabel';
import Description from '../Description';
import ReadButton from '../ReadButton';
import Title from '../Title';

const { default: readme } = require('../Container/README.md');

export default {
	component: Container,
	title: 'Components/Card/Container',
	parameters: {
		jest: ['CardContainer.test.tsx'],
		controls: { hideNoControlsWarning: true },
		docs: {
			description: {
				component: readme,
			},
		},
	},
} as Meta;

const TEST_TITLE = 'Test Title';
const TEST_DESCRIPTION = 'Test Description';

export const Full_Card: React.VFC<{}> = () => (
	<Container
		imageUrl="https://cdn.pinpoint.com/card.png"
		title={<Title title={TEST_TITLE} />}
		date={<DateLabel />}
		description={<Description description={TEST_DESCRIPTION} />}
		statistics={<StatisticsBar claps={22} views={135} />}
		button={<ReadButton />}
		tags={<Tags.Bar tags={['feature', 'improvement']} />}
	/>
);

export const No_Statistics: React.VFC<{}> = () => (
	<Container
		imageUrl="https://cdn.pinpoint.com/card.png"
		title={<Title title={TEST_TITLE} />}
		description={<Description description={TEST_DESCRIPTION} />}
	/>
);

export const No_Title: React.VFC<{}> = () => (
	<Container
		imageUrl="https://cdn.pinpoint.com/card.png"
		description={<Description description={TEST_DESCRIPTION} />}
		statistics={<StatisticsBar claps={22} views={135} />}
	/>
);

export const No_Description: React.VFC<{}> = () => (
	<Container
		imageUrl="https://cdn.pinpoint.com/card.png"
		title={<Title title={TEST_TITLE} />}
		statistics={<StatisticsBar claps={22} views={135} />}
	/>
);

export const No_Image: React.VFC<{}> = () => (
	<Container
		title={<Title title={TEST_TITLE} />}
		description={<Description description={TEST_DESCRIPTION} />}
		statistics={<StatisticsBar claps={22} views={135} />}
	/>
);

export const Multiple_Cards: React.VFC<{}> = () => (
	<div style={{ display: 'flex', columnGap: '20px' }}>
		<Container
			imageUrl="https://cdn.pinpoint.com/card.png"
			title={<Title title={TEST_TITLE} />}
			description={<Description description={TEST_DESCRIPTION} />}
			statistics={<StatisticsBar claps={22} views={135} />}
			button={<ReadButton />}
		/>
		<Container
			imageUrl="https://cdn.pinpoint.com/card.png"
			title={<Title title={TEST_TITLE} />}
			description={<Description description={TEST_DESCRIPTION} />}
			statistics={<StatisticsBar claps={45} views={235} />}
			button={<ReadButton />}
		/>
	</div>
);

const youtubeCoverMedia = {
	type: CoverMediaType.Youtube,
	value: 'RGw6fXprV9U',
	metadata: {
		poster: 'maxresdefault',
	},
	placeholderImage: 'https://i.ytimg.com/vi/RGw6fXprV9U/maxresdefault.jpg',
};

const videoCoverMedia = {
	type: CoverMediaType.Video,
	value: 'https://file.edge.changelog.so/f5a905e00c493f4e5b625c83ff445bef',
	metadata: {
		poster: 'maxresdefault',
	},
	placeholderImage: 'https://file.edge.changelog.so/f5a905e00c493f4e5b625c83ff445bef/thumbnail',
};

const imageCoverMedia = {
	type: CoverMediaType.Image,
	value:
		'https://file.pinpoint.com/dee04c201d3ac96f3314041b5382cc43;ULH_.DD%2500%25Ms%3Bxbxbj%5D00%25M~qRjjKV%5BRjax;1600x900.png',
	placeholderImage:
		'https://file.pinpoint.com/dee04c201d3ac96f3314041b5382cc43;ULH_.DD%2500%25Ms%3Bxbxbj%5D00%25M~qRjjKV%5BRjax;1600x900.png',
};

export const CoverImage_Youtube: React.VFC<{}> = () => (
	<Container
		title={<Title title={TEST_TITLE} />}
		description={<Description description={TEST_DESCRIPTION} />}
		statistics={<StatisticsBar claps={22} views={135} />}
		coverMedia={youtubeCoverMedia}
	/>
);

export const CoverImage_Video: React.VFC<{}> = () => (
	<Container
		title={<Title title={TEST_TITLE} />}
		description={<Description description={TEST_DESCRIPTION} />}
		statistics={<StatisticsBar claps={22} views={135} />}
		coverMedia={videoCoverMedia}
	/>
);

export const CoverImage_Image: React.VFC<{}> = () => (
	<Container
		title={<Title title={TEST_TITLE} />}
		description={<Description description={TEST_DESCRIPTION} />}
		statistics={<StatisticsBar claps={22} views={135} />}
		coverMedia={imageCoverMedia}
	/>
);

export const Not_Zoomable: React.VFC<{}> = () => (
	<Container
		imageUrl="https://cdn.pinpoint.com/card.png"
		title={<Title title={TEST_TITLE} />}
		date={<DateLabel />}
		description={<Description description={TEST_DESCRIPTION} />}
		statistics={<StatisticsBar claps={22} views={135} />}
		button={<ReadButton />}
		tags={<Tags.Bar tags={['feature', 'improvement']} />}
		zoomable={false}
	/>
);
