import React from 'react';
import { faInfoCircle, faTimes, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface BannerProps {
	icon?: IconDefinition;
	message?: React.ReactNode;
	children?: React.ReactNode;
	className?: string;
	closeable?: boolean;
	style?: React.CSSProperties;
}

const Banner = ({
	icon = faInfoCircle,
	message,
	children,
	className = 'bg-yellow-500 text-yellow-900',
	style,
	closeable,
}: BannerProps) => {
	const [visible, setVisible] = React.useState(true);
	if (!visible) {
		return null;
	}
	return (
		<div className={`Pinpoint Banner wrapper ${className}`} style={style}>
			{closeable && <FontAwesomeIcon icon={faTimes} className="close" onClick={() => setVisible(false)} />}
			<div className="inner">
				{message ? (
					<>
						{icon && <FontAwesomeIcon icon={icon} className="icon" />}
						<div>{message}</div>
					</>
				) : (
					<>{children}</>
				)}
			</div>
		</div>
	);
};

export default Banner;
