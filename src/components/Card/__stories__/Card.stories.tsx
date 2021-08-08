import React from 'react';
import { Meta } from '@storybook/react';
import StatisticsBar from '../../Statistic/Bar';
import Tags from '../../Tags';
import Container from '../Container';
import Date from '../Date';
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
		date={<Date />}
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
