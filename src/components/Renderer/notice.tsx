import React from 'react';
import { faExclamationTriangle, faInfoCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NodeProps, recurseIntoChildren } from './register';

const Notice = ({ node }: NodeProps) => {
	const style = node.attrs?.style;
	const icon = style === 'warning' ? faExclamationTriangle : style === 'error' ? faTimesCircle : faInfoCircle;
	return (
		<div className={`notice ${style}`}>
			<div className="icon">
				<FontAwesomeIcon icon={icon} fixedWidth />
			</div>
			<div>{recurseIntoChildren(node)}</div>
		</div>
	);
};

export default Notice;
