import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { slugifyString } from '../../lib/string';
import { NodeProps, recurseIntoChildren, registerNode } from './register';

const Heading = ({ node }: NodeProps) => {
	const content = recurseIntoChildren(node);
	const level = node.attrs?.level;
	switch (level) {
		case 1:
			{
				// top-level heads we are going to create an anchor so you can link directly to them
				const title = node.content?.[0]?.text;
				if (title) {
					const slug = slugifyString(title);
					return (
						<h1 className="heading">
							<a id={slug} href={`#${slug}`} className="anchor" aria-hidden="true">
								<FontAwesomeIcon icon={faLink} />
							</a>
							{content}
						</h1>
					);
				}
			}
			return <h1>{content}</h1>;
		case 2:
			return <h2>{content}</h2>;
		case 3:
			return <h3>{content}</h3>;
		case 4:
			return <h4>{content}</h4>;
		default:
			return <>{content}</>;
	}
};

registerNode('heading', (node) => <Heading node={node} />);
