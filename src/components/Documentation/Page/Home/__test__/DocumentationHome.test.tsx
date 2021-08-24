import renderer from 'react-test-renderer';
import Home from '../index';
import entries from '../../../__data__/testEntries.json';
import site from '../../../../Prebuilt/__data__/testSite.json';
import Header from '../../../../Header';
import Outline from '../../../Outline';
import { IContent } from '../../../../../lib';
import { Content } from '../../../../Renderer';
import Footer from '../../../../Footer';
import Social from '../../../../Social';
import Subscribe from '../../../../Subscribe';
import Copyright from '../../../../Copyright';
import Logo from '../../../../Logo';

const IMAGE_URL =
	'https://file.pinpoint.com/1fcde4196a4c70a8a86f0ce4af53f2a5;U75%3B-sj_NAoPtDojoij_RdfPRdaxoPfPavaw;320x320.png';

test('Test full page', () => {
	const component = renderer.create(
		<Home
			header={<Header title="Pinpoint Documentation" description="Learn how to build with Pinpoint!" />}
			outline={
				<Outline
					entries={entries as IContent[]}
					site={site}
					active={entries[0].id}
					onClick={(e) => console.log(e)}
				/>
			}
			content={<Content id={entries[0].id} document={entries[0]} />}
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
		<Home
			loading
			header={<Header title="Pinpoint Documentation" description="Learn how to build with Pinpoint!" />}
			outline={
				<Outline
					entries={entries as IContent[]}
					site={site}
					active={entries[0].id}
					onClick={(e) => console.log(e)}
				/>
			}
			content={<Content id={entries[0].id} document={entries[0]} />}
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
		<Home
			outline={
				<Outline
					entries={entries as IContent[]}
					site={site}
					active={entries[0].id}
					onClick={(e) => console.log(e)}
				/>
			}
			content={<Content id={entries[0].id} document={entries[0]} />}
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
		<Home
			header={<Header title="Pinpoint Documentation" description="Learn how to build with Pinpoint!" />}
			outline={
				<Outline
					entries={entries as IContent[]}
					site={site}
					active={entries[0].id}
					onClick={(e) => console.log(e)}
				/>
			}
			content={<Content id={entries[0].id} document={entries[0]} />}
		/>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
