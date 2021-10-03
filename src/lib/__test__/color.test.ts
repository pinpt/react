import { colorForString, getTagColorStyles } from '../';

test('Test colorForString', () => {
	const res = colorForString('abc123');
	expect(res).toBe('#4e783a');
});

test('Test getTagColorStyles', () => {
	const res = getTagColorStyles('abc123');
	expect(res).toEqual({
		backgroundColor: '#4e783a',
		border: '1px solid var(--tag-bcolor, #546355)',
		color: 'var(--tag-fgcolor, #fff)',
	});
});

test('Test getTagColorStyles for contrast', () => {
	const res = getTagColorStyles('integrations');
	expect(res).toEqual({
		backgroundColor: '#905994',
		border: '1px solid var(--tag-bcolor, #7a537d)',
		color: 'var(--tag-fgcolor, #fff)',
	});
});
