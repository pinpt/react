import renderer from 'react-test-renderer';
import Card from '../../Card';
import Copyright from '../../Copyright';
import DateLabel from '../../DateLabel';
import Footer from '../../Footer';
import Header from '../../Header';
import Latest from '../../Latest';
import Logo from '../../Logo';
import Recent from '../../Recent';
import Social from '../../Social';
import Statistic from '../../Statistic';
import Subscribe from '../../Subscribe';
import Page from '../Dashboard';

const TEST_TITLE = 'Test Title';
const TEST_DESCRIPTION = 'Test Description';
const TEST_IMAGE = 'https://cdn.pinpoint.com/card.png';
const IMAGE_URL =
	'https://file.pinpoint.com/1fcde4196a4c70a8a86f0ce4af53f2a5;U75%3B-sj_NAoPtDojoij_RdfPRdaxoPfPavaw;320x320.png';

jest.spyOn(global.Date, 'now').mockImplementation(() => 1629397284980);
jest.spyOn(global.Math, 'random').mockImplementation(() => 0.6782784632508998);

test('Test full page', () => {
	const component = renderer.create(
		<Page
			header={
				<Header
					subscribe={<Subscribe href="https://pinpoint.com" />}
					title="Pinpoint Demo Changelog"
					description="See what's new in the Pinpoint Demo."
				/>
			}
			latest={
				<Latest>
					<Card.Container
						imageUrl={TEST_IMAGE}
						title={<Card.Title title={TEST_TITLE} />}
						date={<DateLabel />}
						description={<Card.Description description={TEST_DESCRIPTION} />}
						statistics={<Statistic.Bar claps={22} views={135} />}
						button={<Card.ReadButton />}
					/>
					<Card.Container
						imageUrl={TEST_IMAGE}
						title={<Card.Title title={TEST_TITLE} />}
						date={<DateLabel />}
						description={<Card.Description description={TEST_DESCRIPTION} />}
						statistics={<Statistic.Bar claps={22} views={135} />}
						button={<Card.ReadButton />}
					/>
				</Latest>
			}
			recent={
				<Recent>
					<Card.Container
						imageUrl={TEST_IMAGE}
						title={<Card.Title title={TEST_TITLE} />}
						date={<DateLabel />}
						description={<Card.Description description={TEST_DESCRIPTION} />}
						statistics={<Statistic.Bar claps={22} views={135} />}
						button={<Card.ReadButton />}
					/>
					<Card.Container
						imageUrl={TEST_IMAGE}
						title={<Card.Title title={TEST_TITLE} />}
						date={<DateLabel />}
						description={<Card.Description description={TEST_DESCRIPTION} />}
						statistics={<Statistic.Bar claps={22} views={135} />}
						button={<Card.ReadButton />}
					/>
					<Card.Container
						imageUrl={TEST_IMAGE}
						title={<Card.Title title={TEST_TITLE} />}
						date={<DateLabel />}
						description={<Card.Description description={TEST_DESCRIPTION} />}
						statistics={<Statistic.Bar claps={22} views={135} />}
						button={<Card.ReadButton />}
					/>
					<Card.Container
						imageUrl={TEST_IMAGE}
						title={<Card.Title title={TEST_TITLE} />}
						date={<DateLabel />}
						description={<Card.Description description={TEST_DESCRIPTION} />}
						statistics={<Statistic.Bar claps={22} views={135} />}
						button={<Card.ReadButton />}
					/>
				</Recent>
			}
			footer={
				<Footer
					social={
						<Social.Bar>
							<Social.Facebook href="https://www.facebook.com/Pinpoint.Engineering" newTab />
							<Social.Instagram href="https://www.instagram.com/pinpoint_sw/" newTab />
							<Social.Twitter href="https://twitter.com/pinpoint_sw" newTab />
							<Social.Github href="https://github.com/pinpt" newTab />
							<Social.LinkedIn href="https://linkedin.com/company/pinpoint-software" newTab />
							<Social.RSS href="https://api.pinpoint.com.so/rss/PirxVTE94u3YmGNOySRY" newTab />
						</Social.Bar>
					}
					copyright={<Copyright text="2021 by Pinpoint Software, Inc." logo={<Logo src={IMAGE_URL} />} />}
					subscribe={<Subscribe href="https://pinpoint.com" />}
				/>
			}
		/>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test loading', () => {
	const component = renderer.create(
		<Page
			loading
			header={
				<Header
					subscribe={<Subscribe href="https://pinpoint.com" />}
					title="Pinpoint Demo Changelog"
					description="See what's new in the Pinpoint Demo."
				/>
			}
			latest={
				<Latest>
					<Card.Container
						imageUrl={TEST_IMAGE}
						title={<Card.Title title={TEST_TITLE} />}
						date={<DateLabel />}
						description={<Card.Description description={TEST_DESCRIPTION} />}
						statistics={<Statistic.Bar claps={22} views={135} />}
						button={<Card.ReadButton />}
					/>
				</Latest>
			}
			recent={
				<Recent>
					<Card.Container
						imageUrl={TEST_IMAGE}
						title={<Card.Title title={TEST_TITLE} />}
						date={<DateLabel />}
						description={<Card.Description description={TEST_DESCRIPTION} />}
						statistics={<Statistic.Bar claps={22} views={135} />}
						button={<Card.ReadButton />}
					/>
				</Recent>
			}
			footer={
				<Footer
					social={
						<Social.Bar>
							<Social.Facebook href="https://www.facebook.com/Pinpoint.Engineering" newTab />
							<Social.Instagram href="https://www.instagram.com/pinpoint_sw/" newTab />
							<Social.Twitter href="https://twitter.com/pinpoint_sw" newTab />
							<Social.Github href="https://github.com/pinpt" newTab />
							<Social.LinkedIn href="https://linkedin.com/company/pinpoint-software" newTab />
							<Social.RSS href="https://api.pinpoint.com.so/rss/PirxVTE94u3YmGNOySRY" newTab />
						</Social.Bar>
					}
					copyright={<Copyright text="2021 by Pinpoint Software, Inc." logo={<Logo src={IMAGE_URL} />} />}
					subscribe={<Subscribe href="https://pinpoint.com" />}
				/>
			}
		/>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test no header', () => {
	const component = renderer.create(
		<Page
			latest={
				<Latest>
					<Card.Container
						imageUrl={TEST_IMAGE}
						title={<Card.Title title={TEST_TITLE} />}
						date={<DateLabel />}
						description={<Card.Description description={TEST_DESCRIPTION} />}
						statistics={<Statistic.Bar claps={22} views={135} />}
						button={<Card.ReadButton />}
					/>
					<Card.Container
						imageUrl={TEST_IMAGE}
						title={<Card.Title title={TEST_TITLE} />}
						date={<DateLabel />}
						description={<Card.Description description={TEST_DESCRIPTION} />}
						statistics={<Statistic.Bar claps={22} views={135} />}
						button={<Card.ReadButton />}
					/>
				</Latest>
			}
			recent={
				<Recent>
					<Card.Container
						imageUrl={TEST_IMAGE}
						title={<Card.Title title={TEST_TITLE} />}
						date={<DateLabel />}
						description={<Card.Description description={TEST_DESCRIPTION} />}
						statistics={<Statistic.Bar claps={22} views={135} />}
						button={<Card.ReadButton />}
					/>
					<Card.Container
						imageUrl={TEST_IMAGE}
						title={<Card.Title title={TEST_TITLE} />}
						date={<DateLabel />}
						description={<Card.Description description={TEST_DESCRIPTION} />}
						statistics={<Statistic.Bar claps={22} views={135} />}
						button={<Card.ReadButton />}
					/>
					<Card.Container
						imageUrl={TEST_IMAGE}
						title={<Card.Title title={TEST_TITLE} />}
						date={<DateLabel />}
						description={<Card.Description description={TEST_DESCRIPTION} />}
						statistics={<Statistic.Bar claps={22} views={135} />}
						button={<Card.ReadButton />}
					/>
					<Card.Container
						imageUrl={TEST_IMAGE}
						title={<Card.Title title={TEST_TITLE} />}
						date={<DateLabel />}
						description={<Card.Description description={TEST_DESCRIPTION} />}
						statistics={<Statistic.Bar claps={22} views={135} />}
						button={<Card.ReadButton />}
					/>
				</Recent>
			}
			footer={
				<Footer
					social={
						<Social.Bar>
							<Social.Facebook href="https://www.facebook.com/Pinpoint.Engineering" newTab />
							<Social.Instagram href="https://www.instagram.com/pinpoint_sw/" newTab />
							<Social.Twitter href="https://twitter.com/pinpoint_sw" newTab />
							<Social.Github href="https://github.com/pinpt" newTab />
							<Social.LinkedIn href="https://linkedin.com/company/pinpoint-software" newTab />
							<Social.RSS href="https://api.pinpoint.com.so/rss/PirxVTE94u3YmGNOySRY" newTab />
						</Social.Bar>
					}
					copyright={<Copyright text="2021 by Pinpoint Software, Inc." logo={<Logo src={IMAGE_URL} />} />}
					subscribe={<Subscribe href="https://pinpoint.com" />}
				/>
			}
		/>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test no latest', () => {
	const component = renderer.create(
		<Page
			recent={
				<Recent>
					<Card.Container
						imageUrl={TEST_IMAGE}
						title={<Card.Title title={TEST_TITLE} />}
						date={<DateLabel />}
						description={<Card.Description description={TEST_DESCRIPTION} />}
						statistics={<Statistic.Bar claps={22} views={135} />}
						button={<Card.ReadButton />}
					/>
					<Card.Container
						imageUrl={TEST_IMAGE}
						title={<Card.Title title={TEST_TITLE} />}
						date={<DateLabel />}
						description={<Card.Description description={TEST_DESCRIPTION} />}
						statistics={<Statistic.Bar claps={22} views={135} />}
						button={<Card.ReadButton />}
					/>
					<Card.Container
						imageUrl={TEST_IMAGE}
						title={<Card.Title title={TEST_TITLE} />}
						date={<DateLabel />}
						description={<Card.Description description={TEST_DESCRIPTION} />}
						statistics={<Statistic.Bar claps={22} views={135} />}
						button={<Card.ReadButton />}
					/>
					<Card.Container
						imageUrl={TEST_IMAGE}
						title={<Card.Title title={TEST_TITLE} />}
						date={<DateLabel />}
						description={<Card.Description description={TEST_DESCRIPTION} />}
						statistics={<Statistic.Bar claps={22} views={135} />}
						button={<Card.ReadButton />}
					/>
				</Recent>
			}
			footer={
				<Footer
					social={
						<Social.Bar>
							<Social.Facebook href="https://www.facebook.com/Pinpoint.Engineering" newTab />
							<Social.Instagram href="https://www.instagram.com/pinpoint_sw/" newTab />
							<Social.Twitter href="https://twitter.com/pinpoint_sw" newTab />
							<Social.Github href="https://github.com/pinpt" newTab />
							<Social.LinkedIn href="https://linkedin.com/company/pinpoint-software" newTab />
							<Social.RSS href="https://api.pinpoint.com.so/rss/PirxVTE94u3YmGNOySRY" newTab />
						</Social.Bar>
					}
					copyright={<Copyright text="2021 by Pinpoint Software, Inc." logo={<Logo src={IMAGE_URL} />} />}
					subscribe={<Subscribe href="https://pinpoint.com" />}
				/>
			}
		/>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test no recent', () => {
	const component = renderer.create(
		<Page
			latest={
				<Latest>
					<Card.Container
						imageUrl={TEST_IMAGE}
						title={<Card.Title title={TEST_TITLE} />}
						date={<DateLabel />}
						description={<Card.Description description={TEST_DESCRIPTION} />}
						statistics={<Statistic.Bar claps={22} views={135} />}
						button={<Card.ReadButton />}
					/>
					<Card.Container
						imageUrl={TEST_IMAGE}
						title={<Card.Title title={TEST_TITLE} />}
						date={<DateLabel />}
						description={<Card.Description description={TEST_DESCRIPTION} />}
						statistics={<Statistic.Bar claps={22} views={135} />}
						button={<Card.ReadButton />}
					/>
				</Latest>
			}
			footer={
				<Footer
					social={
						<Social.Bar>
							<Social.Facebook href="https://www.facebook.com/Pinpoint.Engineering" newTab />
							<Social.Instagram href="https://www.instagram.com/pinpoint_sw/" newTab />
							<Social.Twitter href="https://twitter.com/pinpoint_sw" newTab />
							<Social.Github href="https://github.com/pinpt" newTab />
							<Social.LinkedIn href="https://linkedin.com/company/pinpoint-software" newTab />
							<Social.RSS href="https://api.pinpoint.com.so/rss/PirxVTE94u3YmGNOySRY" newTab />
						</Social.Bar>
					}
					copyright={<Copyright text="2021 by Pinpoint Software, Inc." logo={<Logo src={IMAGE_URL} />} />}
					subscribe={<Subscribe href="https://pinpoint.com" />}
				/>
			}
		/>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test no footer', () => {
	const component = renderer.create(
		<Page
			latest={
				<Latest>
					<Card.Container
						imageUrl={TEST_IMAGE}
						title={<Card.Title title={TEST_TITLE} />}
						date={<DateLabel />}
						description={<Card.Description description={TEST_DESCRIPTION} />}
						statistics={<Statistic.Bar claps={22} views={135} />}
						button={<Card.ReadButton />}
					/>
					<Card.Container
						imageUrl={TEST_IMAGE}
						title={<Card.Title title={TEST_TITLE} />}
						date={<DateLabel />}
						description={<Card.Description description={TEST_DESCRIPTION} />}
						statistics={<Statistic.Bar claps={22} views={135} />}
						button={<Card.ReadButton />}
					/>
				</Latest>
			}
			recent={
				<Recent>
					<Card.Container
						imageUrl={TEST_IMAGE}
						title={<Card.Title title={TEST_TITLE} />}
						date={<DateLabel />}
						description={<Card.Description description={TEST_DESCRIPTION} />}
						statistics={<Statistic.Bar claps={22} views={135} />}
						button={<Card.ReadButton />}
					/>
					<Card.Container
						imageUrl={TEST_IMAGE}
						title={<Card.Title title={TEST_TITLE} />}
						date={<DateLabel />}
						description={<Card.Description description={TEST_DESCRIPTION} />}
						statistics={<Statistic.Bar claps={22} views={135} />}
						button={<Card.ReadButton />}
					/>
					<Card.Container
						imageUrl={TEST_IMAGE}
						title={<Card.Title title={TEST_TITLE} />}
						date={<DateLabel />}
						description={<Card.Description description={TEST_DESCRIPTION} />}
						statistics={<Statistic.Bar claps={22} views={135} />}
						button={<Card.ReadButton />}
					/>
					<Card.Container
						imageUrl={TEST_IMAGE}
						title={<Card.Title title={TEST_TITLE} />}
						date={<DateLabel />}
						description={<Card.Description description={TEST_DESCRIPTION} />}
						statistics={<Statistic.Bar claps={22} views={135} />}
						button={<Card.ReadButton />}
					/>
				</Recent>
			}
		/>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
