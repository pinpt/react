import React from 'react';
import { Meta } from '@storybook/react';
import { Content, Document, emptyDoc } from '../';
import { CoverMediaType } from '../../../lib/types/content';
import type { ICoverMedia } from '../../../lib/types/content';
import Pinpoint from '../../Pinpoint';
import audio_files from '../__data__/audio_files';
import blockquote_with_code_mark from '../__data__/blockquote_with_code_mark';
import image_block_position_and_scale from '../__data__/image_block_position_and_scale';
import notice_with_code_mark from '../__data__/notice_with_code_mark';
import simple_blockquote from '../__data__/simple_blockquote';
import simple_break from '../__data__/simple_break';
import simple_bullet_list from '../__data__/simple_bullet_list';
import simple_code_block from '../__data__/simple_code_block';
import simple_embed from '../__data__/simple_embed';
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

const { default: readme } = require('../README.md');

export default {
	component: Document,
	title: 'Changelog Components/Renderer/Document',
	parameters: {
		jest: ['RendererContent.test.tsx'],
		controls: { hideNoControlsWarning: true },
		docs: {
			description: {
				component: readme,
			},
		},
	},
} as Meta;

export const Simple_Text: React.VFC<{}> = () => <Document node={simple_text} />;

export const Empty: React.VFC<{}> = () => <Document node={emptyDoc()} />;

export const Simple_Paragraph: React.VFC<{}> = () => <Document node={simple_paragraph} />;

export const Simple_Blockquote: React.VFC<{}> = () => <Document node={simple_blockquote} />;

export const Blockquote_With_Code_Mark: React.VFC<{}> = () => <Document node={blockquote_with_code_mark} />;

export const Simple_Break: React.VFC<{}> = () => <Document node={simple_break} />;

export const Simple_Hr: React.VFC<{}> = () => <Document node={simple_hr} />;

export const Simple_Embed: React.VFC<{}> = () => <Document node={simple_embed} />;

export const Simple_Emoji: React.VFC<{}> = () => <Document node={simple_emoji} />;

export const Simple_Bullet_list: React.VFC<{}> = () => <Document node={simple_bullet_list} />;

export const Simple_Ordered_List: React.VFC<{}> = () => <Document node={simple_ordered_list} />;

export const Simple_Code_Block: React.VFC<{}> = () => <Document node={simple_code_block} />;

export const Simple_H1: React.VFC<{}> = () => <Document node={simple_h1} />;

export const Simple_H2: React.VFC<{}> = () => <Document node={simple_h2} />;

export const Simple_H3: React.VFC<{}> = () => <Document node={simple_h3} />;

export const Simple_H4: React.VFC<{}> = () => <Document node={simple_h4} />;

export const Simple_Warning_Notice: React.VFC<{}> = () => <Document node={simple_warning_notice} />;

export const Simple_Error_Notice: React.VFC<{}> = () => <Document node={simple_error_notice} />;

export const Simple_Info_Notice: React.VFC<{}> = () => <Document node={simple_info_notice} />;

export const Info_Notice_Monospaced: React.VFC<{}> = () => <Document node={notice_with_code_mark} />;

export const Simple_Inline_Image: React.VFC<{}> = () => <Document node={simple_inline_image} />;

export const Simple_Inline_Image_With_Link: React.VFC<{}> = () => <Document node={simple_inline_image_with_link} />;

export const Simple_Image_Block: React.VFC<{}> = () => <Document node={simple_image_block} />;

export const Simple_Image_Block_With_Link: React.VFC<{}> = () => <Document node={simple_image_block_with_link} />;

export const Image_Block_Position_And_Scale: React.VFC<{}> = () => <Document node={image_block_position_and_scale} />;

export const Youtube_Video: React.VFC<{}> = () => {
	const youtubeCoverMedia: ICoverMedia = {
		type: CoverMediaType.Youtube,
		value: 'PoZWTEXRgKo',
		metadata: {
			poster: 'maxresdefault',
		},
	};
	return (
		<Pinpoint siteId="testing">
			{(ready, ref) => {
				if (!ready) {
					return null;
				}
				return (
					<Content
						ref={ref}
						coverMedia={youtubeCoverMedia}
						document={{ type: 'document', content: [] }}
						id="5678"
					/>
				);
			}}
		</Pinpoint>
	);
};

export const File_Video: React.VFC<{}> = () => <Document node={video_file} />;
export const File_Video_With_FileAPI: React.VFC<{}> = () => <Document node={video_file_api} />;

export const Audio_Files: React.VFC<{}> = () => <Document node={audio_files} />;

export const CoverImage_With_Blurhash: React.VFC<{}> = () => {
	const coverMedia: ICoverMedia = {
		type: CoverMediaType.Image,
		value: 'https://file.edge.pinpoint.com/b1ee49fa5ea82ea3b71d0101ddc28a84',
		blurhash:
			'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAABmJLR0QA/wD/AP+gvaeTAAAAT0lEQVQImQFEALv/AXWlrv/68vAAC+fjABoIBwAE59ncAOnk4gDg18sAMCIqAAT6z9wA6bTHANwA1AADyOUABAQrIgAVFAYALtsRACcgIwA9chplax1J+QAAAABJRU5ErkJggg==',
		placeholderImage:
			'https://file.edge.pinpoint.com/b1ee49fa5ea82ea3b71d0101ddc28a84;UI8%3D1pOs.9j%5B-VOroLax.mOrNZoL-VOYaxjF;2048x1344.png',
	};
	return (
		<Pinpoint siteId="testing">
			{(ready, ref) => {
				if (!ready) {
					return null;
				}
				return <Content ref={ref} coverMedia={coverMedia} document={{ type: 'document', content: [] }} id="5679" />;
			}}
		</Pinpoint>
	);
};
