import React from 'react';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { slugifyString } from '../../lib/string';
import { NodeProps, recurseIntoChildren } from './register';

const Heading = ({ node }: NodeProps) => {
	let content = recurseIntoChildren(node);
	const level = node.attrs?.level;

	switch (level) {
		case 1:
			content = <h1>{content}</h1>;
			break;
		case 2:
			content = <h2>{content}</h2>;
			break;
		case 3:
			content = <h3> {content}</h3>;
			break;
		case 4:
			content = <h4>{content}</h4>;
			break;
	}

	const title = node.content?.[0]?.text;
	if (title) {
		const slug = slugifyString(title);
		return (
			<div className="heading">
				{content}
				<a id={slug} href={`#${slug}`} className="anchor" aria-hidden="true">
					<FontAwesomeIcon icon={faLink} />
				</a>
			</div>
		);
	}

	return <div className="heading">{content}</div>;
};

export default Heading;
