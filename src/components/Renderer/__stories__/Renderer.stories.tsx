import React from 'react';
import { Meta } from '@storybook/react';
import { Content, emptyDoc } from '..';
import simple_text from '../__data__/simple_text';
import simple_paragraph from '../__data__/simple_paragraph';
import simple_blockquote from '../__data__/simple_blockquote';
import simple_break from '../__data__/simple_break';
import simple_hr from '../__data__/simple_hr';
import simple_emoji from '../__data__/simple_emoji';
import simple_bullet_list from '../__data__/simple_bullet_list';
import simple_ordered_list from '../__data__/simple_ordered_list';
import simple_code_block from '../__data__/simple_code_block';
import simple_h1 from '../__data__/simple_h1';
import simple_h2 from '../__data__/simple_h2';
import simple_h3 from '../__data__/simple_h3';
import simple_h4 from '../__data__/simple_h4';
import simple_warning_notice from '../__data__/simple_warning_notice';
import simple_error_notice from '../__data__/simple_error_notice';
import simple_info_notice from '../__data__/simple_info_notice';
import simple_inline_image from '../__data__/simple_inline_image';
import simple_inline_image_with_link from '../__data__/simple_inline_image_with_link';
import simple_image_block from '../__data__/simple_image_block';
import simple_image_block_with_link from '../__data__/simple_image_block_with_link';

export default {
	component: Content,
	title: 'Components/Renderer/Content',
	parameters: {
		jest: ['RendererContent.test.tsx'],
	},
} as Meta;

export const Empty: React.VFC<{}> = () => <Content node={emptyDoc()} />;

export const Simple_Text: React.VFC<{}> = () => <Content node={simple_text} />;

export const Simple_Paragraph: React.VFC<{}> = () => <Content node={simple_paragraph} />;

export const Simple_Blockquote: React.VFC<{}> = () => <Content node={simple_blockquote} />;

export const Simple_Break: React.VFC<{}> = () => <Content node={simple_break} />;

export const Simple_Hr: React.VFC<{}> = () => <Content node={simple_hr} />;

export const Simple_Emoji: React.VFC<{}> = () => <Content node={simple_emoji} />;

export const Simple_Bullet_list: React.VFC<{}> = () => <Content node={simple_bullet_list} />;

export const Simple_Ordered_List: React.VFC<{}> = () => <Content node={simple_ordered_list} />;

export const Simple_Code_Block: React.VFC<{}> = () => <Content node={simple_code_block} />;

export const Simple_H1: React.VFC<{}> = () => <Content node={simple_h1} />;

export const Simple_H2: React.VFC<{}> = () => <Content node={simple_h2} />;

export const Simple_H3: React.VFC<{}> = () => <Content node={simple_h3} />;

export const Simple_H4: React.VFC<{}> = () => <Content node={simple_h4} />;

export const Simple_Warning_Notice: React.VFC<{}> = () => <Content node={simple_warning_notice} />;

export const Simple_Error_Notice: React.VFC<{}> = () => <Content node={simple_error_notice} />;

export const Simple_Info_Notice: React.VFC<{}> = () => <Content node={simple_info_notice} />;

export const Simple_Inline_Image: React.VFC<{}> = () => <Content node={simple_inline_image} />;

export const Simple_Inline_Image_With_Link: React.VFC<{}> = () => <Content node={simple_inline_image_with_link} />;

export const Simple_Image_Block: React.VFC<{}> = () => <Content node={simple_image_block} />;

export const Simple_Image_Block_With_Link: React.VFC<{}> = () => <Content node={simple_image_block_with_link} />;
