import { getTagStyles } from '../color';

test('Test getTagStyles no match', () => {
	const res = getTagStyles('abc123');
	expect(res).toEqual({
		backgroundColor: '#ffffff',
		border: '1px solid #575757',
		color: '#000000',
	});
});

test('Test getTagStyles', () => {
	const res = getTagStyles('integrations', {
		integrations: {
			backgroundColor: '#905994',
			border: '1px solid #7a537d',
			color: '#fff',
		},
	});
	expect(res).toEqual({
		backgroundColor: '#905994',
		border: '1px solid #7a537d',
		color: '#fff',
	});
});
