import React from 'react';
import { NodeProps } from './register';

const Text = ({ node }: NodeProps) => {
	let content = <>{node.text}</>;
	if (node.marks) {
		node.marks.forEach((mark) => {
			switch (mark.type) {
				case 'bold': {
					content = <b>{content}</b>;
					break;
				}
				case 'strong': {
					content = <strong>{content}</strong>;
					break;
				}
				case 'em': {
					content = <em>{content}</em>;
					break;
				}
				case 'italic': {
					content = <i>{content}</i>;
					break;
				}
				case 'strikethrough': {
					content = <del>{content}</del>;
					break;
				}
				case 'underline': {
					content = <u>{content}</u>;
					break;
				}
				case 'code':
				case 'code_inline': {
					content = <code spellCheck="false">{content}</code>;
					break;
				}
				case 'mark': {
					const { backgroundColor, color, type } = mark.attrs;
					if (type === 'placeholder') {
						break; // skip placeholders from rendering
					}
					const classes: string[] = [];

					if (backgroundColor) {
						classes.push(`bg-${mark.attrs.backgroundColor}`);
					}
					if (color) {
						classes.push(color);
					}

					if (classes.length) {
						content = <mark className={classes.join(' ')}>{content}</mark>;
					} else {
						console.error('unknown mark class', mark);
					}
					break;
				}
				case 'link': {
					const { href, title = '', id = '' } = mark.attrs;
					const hasMarks = (node.marks?.length ?? 0) > 0 && node.marks?.some((m) => !!m.attrs?.color);
					const className = `${hasMarks ? 'mark-color' : ''}`;
					content = node._opts?.openLinksInNewWindow ? (
						<a className={className} href={href} title={title} id={id} target="_blank" rel="noopener noreferrer">
							{content}
						</a>
					) : (
						<a className={className} href={href} title={title} id={id}>
							{content}
						</a>
					);
					break;
				}
				case 'linked_data': {
					const { id, type } = mark.attrs;
					const attrs = {
						[`data-${type}-id`]: id,
					};
					content = <data {...attrs}>{content}</data>;
					break;
				}
				default: {
					console.error('unknown pm mark', mark.type, mark);
					break;
				}
			}
		});
	}
	return content;
};

export default Text;
