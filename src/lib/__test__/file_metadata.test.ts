import { extractFileDataFromFileID, extractImageMetadataFromFileID, getFileUrl } from '../';

test('Test file metadata with fileid', () => {
	const val = getFileUrl('fileid:123456789');
	expect(val).toBe('https://file.pinpoint.com/123456789');
});

test('Test file metadata with file url', () => {
	const val = getFileUrl('https://file.pinpoint.com/123456789');
	expect(val).toBe('https://file.pinpoint.com/123456789');
});

test('Test file metadata with other url', () => {
	const val = getFileUrl('https://pinpoint.com/123456789');
	expect(val).toBe('https://pinpoint.com/123456789');
});

test('Test file metadata with empty string', () => {
	const val = getFileUrl('');
	expect(val).toBe('');
});

test('Test file metadata with other url', () => {
	const val = getFileUrl('https://file.pinpoint.com/1234;blurhash;10x10.png');
	expect(val).toBe('https://file.pinpoint.com/1234;blurhash;10x10.png');
});

test('Test file metadata extraction', () => {
	const { id, args, ext } = extractFileDataFromFileID('1234;blurhash;10x10.png');
	expect(id).toBe('1234');
	expect(ext).toBe('png');
	expect(args).toStrictEqual(['blurhash', '10x10']);
});

test('Test file metadata extraction with full url', () => {
	const { id, args, ext } = extractFileDataFromFileID('https://file.pinpoint.com/1234;blurhash;10x10.png');
	expect(id).toBe('1234');
	expect(ext).toBe('png');
	expect(args).toStrictEqual(['blurhash', '10x10']);
});

test('Test file metadata image extraction', () => {
	const { blurhash, size, ext } = extractImageMetadataFromFileID('https://file.pinpoint.com/1234;blurhash;10x10.png');
	expect(ext).toBe('png');
	expect(blurhash).toBe('blurhash');
	expect(size).toStrictEqual({ width: 10, height: 10 });
});
