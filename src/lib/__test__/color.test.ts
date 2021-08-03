import { colorForString, getTagColorStyles } from '../';

test('Test colorForString', () => {
	const res = colorForString('abc123');
	expect(res).toBe('#7ca766');
});

test('Test getTagColorStyles', () => {
	const res = getTagColorStyles('abc123');
	expect(res).toEqual({
		backgroundColor: '#7ca766',
		border: '1px solid var(--tag-bcolor, #0c370033)',
		color: 'var(--tag-fgcolor, #ffffff)',
	});
});
