import React from 'react';
import { faInfoCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface BannerProps {
	icon?: IconDefinition;
	message?: React.ReactNode;
	children?: React.ReactNode;
	className?: string;
	closeable?: boolean;
	style?: React.CSSProperties;
	onClose?: () => void;
}

const Banner = ({
	icon = faInfoCircle,
	message,
	children,
	className = 'bg-yellow-500 text-yellow-900',
	style,
	closeable,
	onClose,
}: BannerProps) => {
	const [visible, setVisible] = React.useState(true);
	React.useEffect(() => {
		if (!visible && onClose) {
			onClose();
		}
	}, [visible]);
	if (!visible) {
		return null;
	}
	return (
		<div className={`Pinpoint Banner wrapper ${className}`} style={style}>
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
			{closeable && (
				<div className="close">
					<FontAwesomeIcon icon={faTimes} onClick={() => setVisible(false)} />
				</div>
			)}
		</div>
	);
};

export default Banner;
