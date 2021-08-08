import './blockquote';
import './break';
import './bullet_list';
import './code_block';
import './heading';
import './hr';
import './emoji';
import './file';
import './iframe';
import './image_block';
import './inline_image';
import './issue';
import './linked_data_list';
import './linked_data_list_item';
import './linked_data_node';
import './list_item';
import './notice';
import './ordered_list';
import './paragraph';
import './pull_request';
import './text';
import './table_data';
import './table_header';
import './table_row';
import './table';
import './toggle';
import Content from './content';
import { DocOpts, NodeProps, recurseIntoChildren } from './register';

const Document = ({ node, limit, opts }: NodeProps & { limit?: number; opts?: DocOpts }) => (
	<>{recurseIntoChildren({ ...node, _path: 'doc', _opts: opts }, limit)}</>
);

export const emptyDoc = () => ({ type: 'doc', content: [{ type: 'paragraph', content: [] }] });

export { Document, Content };
