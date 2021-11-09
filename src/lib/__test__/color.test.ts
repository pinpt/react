import { toStyledTag } from '../color';

test('Test toStyledTag no match', () => {
	const res = toStyledTag('abc123');
	expect(res.style).toEqual({
		backgroundColor: '#ffffff',
		border: '1px solid #575757',
		color: '#000000',
	});
});

test('Test toStyledTag', () => {
	const res = toStyledTag('integrations', {
		integrations: {
			backgroundColor: '#905994',
			border: '1px solid #7a537d',
			color: '#fff',
		},
	});
	expect(res.style).toEqual({
		backgroundColor: '#905994',
		border: '1px solid #7a537d',
		color: '#fff',
	});
});
