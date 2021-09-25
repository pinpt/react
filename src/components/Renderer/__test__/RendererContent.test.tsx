import renderer from 'react-test-renderer';
import { CoverMedia, Document, emptyDoc } from '../';
import { CoverMediaType } from '../../../lib/types/content';
import audio_files from '../__data__/audio_files';
import blockquote_with_code_mark from '../__data__/blockquote_with_code_mark';
import notice_with_code_mark from '../__data__/notice_with_code_mark';
import simple_blockquote from '../__data__/simple_blockquote';
import simple_break from '../__data__/simple_break';
import simple_bullet_list from '../__data__/simple_bullet_list';
import simple_code_block from '../__data__/simple_code_block';
import simple_emoji from '../__data__/simple_emoji';
import simple_error_notice from '../__data__/simple_error_notice';
import simple_h1 from '../__data__/simple_h1';
import simple_h2 from '../__data__/simple_h2';
import simple_h3 from '../__data__/simple_h3';
import simple_h4 from '../__data__/simple_h4';
import simple_hr from '../__data__/simple_hr';
import simple_image_block from '../__data__/simple_image_block';
import simple_image_block_with_link from '../__data__/simple_image_block_with_link';
import simple_info_notice from '../__data__/simple_info_notice';
import simple_inline_image from '../__data__/simple_inline_image';
import simple_inline_image_with_link from '../__data__/simple_inline_image_with_link';
import simple_ordered_list from '../__data__/simple_ordered_list';
import simple_paragraph from '../__data__/simple_paragraph';
import simple_text from '../__data__/simple_text';
import simple_warning_notice from '../__data__/simple_warning_notice';
import video_file from '../__data__/video_file';
import video_file_api from '../__data__/video_file_api';

import type { ICoverMedia } from '../../../lib/types/content';

test('Test empty doc', () => {
	const component = renderer.create(<Document node={emptyDoc()} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test simple text', () => {
	const doc = simple_text;
	const component = renderer.create(<Document node={doc} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test simple paragraph', () => {
	const doc = simple_paragraph;
	const component = renderer.create(<Document node={doc} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test simple blockquote', () => {
	const doc = simple_blockquote;
	const component = renderer.create(<Document node={doc} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test blockquote with code', () => {
	const doc = blockquote_with_code_mark;
	const component = renderer.create(<Document node={doc} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test simple break', () => {
	const doc = simple_break;
	const component = renderer.create(<Document node={doc} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test simple hr', () => {
	const doc = simple_hr;
	const component = renderer.create(<Document node={doc} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test simple emoji', () => {
	const doc = simple_emoji;
	const component = renderer.create(<Document node={doc} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test simple bullet list', () => {
	const doc = simple_bullet_list;
	const component = renderer.create(<Document node={doc} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test simple ordered list', () => {
	const doc = simple_ordered_list;
	const component = renderer.create(<Document node={doc} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test simple code block', () => {
	const doc = simple_code_block;
	const component = renderer.create(<Document node={doc} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test simple H1', () => {
	const doc = simple_h1;
	const component = renderer.create(<Document node={doc} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test simple H2', () => {
	const doc = simple_h2;
	const component = renderer.create(<Document node={doc} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test simple H3', () => {
	const doc = simple_h3;
	const component = renderer.create(<Document node={doc} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test simple H4', () => {
	const doc = simple_h4;
	const component = renderer.create(<Document node={doc} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test simple warning notice', () => {
	const doc = simple_warning_notice;
	const component = renderer.create(<Document node={doc} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test simple error notice', () => {
	const doc = simple_error_notice;
	const component = renderer.create(<Document node={doc} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test simple info notice', () => {
	const doc = simple_info_notice;
	const component = renderer.create(<Document node={doc} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test info notice with monospaced font', () => {
	const doc = notice_with_code_mark;
	const component = renderer.create(<Document node={doc} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test simple inline image', () => {
	const doc = simple_inline_image;
	const component = renderer.create(<Document node={doc} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test simple inline image with link', () => {
	const doc = simple_inline_image_with_link;
	const component = renderer.create(<Document node={doc} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test simple image block', () => {
	const doc = simple_image_block;
	const component = renderer.create(<Document node={doc} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test simple image block with link', () => {
	const doc = simple_image_block_with_link;
	const component = renderer.create(<Document node={doc} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test Youtube cover media with maxresdefault', () => {
	const youtubeCoverMedia: ICoverMedia = {
		type: CoverMediaType.Youtube,
		value: 'PoZWTEXRgKo',
		metadata: {
			poster: 'maxresdefault',
		},
	};
	const component = renderer.create(<CoverMedia media={youtubeCoverMedia} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test Youtube cover media with hqdefault', () => {
	const youtubeCoverMedia: ICoverMedia = {
		type: CoverMediaType.Youtube,
		value: 'PoZWTEXRgKo',
		metadata: {
			poster: 'hqdefault',
		},
	};
	const component = renderer.create(<CoverMedia media={youtubeCoverMedia} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test Youtube cover media with mqdefault', () => {
	const youtubeCoverMedia: ICoverMedia = {
		type: CoverMediaType.Youtube,
		value: 'PoZWTEXRgKo',
		metadata: {
			poster: 'mqdefault',
		},
	};
	const component = renderer.create(<CoverMedia media={youtubeCoverMedia} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test Youtube cover media with sddefault', () => {
	const youtubeCoverMedia: ICoverMedia = {
		type: CoverMediaType.Youtube,
		value: 'PoZWTEXRgKo',
		metadata: {
			poster: 'sddefault',
		},
	};
	const component = renderer.create(<CoverMedia media={youtubeCoverMedia} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test Youtube cover media with no poster', () => {
	const youtubeCoverMedia: ICoverMedia = {
		type: CoverMediaType.Youtube,
		value: 'PoZWTEXRgKo',
		metadata: {},
	};
	const component = renderer.create(<CoverMedia media={youtubeCoverMedia} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test file Video', () => {
	const doc = video_file;
	const component = renderer.create(<Document node={doc} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test file Video via File API', () => {
	const doc = video_file_api;
	const component = renderer.create(<Document node={doc} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test Audio files', () => {
	const doc = audio_files;
	const component = renderer.create(<Document node={doc} />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
