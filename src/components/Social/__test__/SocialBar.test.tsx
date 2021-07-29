import renderer from 'react-test-renderer';
import Bar from '../Bar';
import Facebook from '../Facebook';
import Instagram from '../Instagram';
import Twitter from '../Twitter';
import Github from '../Github';
import LinkedIn from '../LinkedIn';
import RSS from '../RSS';

test('Test all', () => {
	const component = renderer.create(
		<Bar>
			<Facebook href="https://www.facebook.com/Pinpoint.Engineering" newTab />
			<Instagram href="https://www.instagram.com/pinpoint_sw/" newTab />
			<Twitter href="https://twitter.com/pinpoint_sw" newTab />
			<Github href="https://github.com/pinpt" newTab />
			<LinkedIn href="https://linkedin.com/company/pinpoint-software" newTab />
			<RSS href="https://api.pinpoint.com.so/rss/PirxVTE94u3YmGNOySRY" newTab />
		</Bar>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test short', () => {
	const component = renderer.create(
		<Bar>
			<Twitter href="https://twitter.com/pinpoint_sw" newTab />
			<Github href="https://github.com/pinpt" newTab />
		</Bar>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test single', () => {
	const component = renderer.create(
		<Bar>
			<Github href="https://github.com/pinpt" newTab />
		</Bar>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Custom className', () => {
	const component = renderer.create(
		<Bar className="custom-test">
			<Github href="https://github.com/pinpt" newTab />
		</Bar>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
