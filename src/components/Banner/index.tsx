import { faInfoCircle, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface BannerProps {
	icon?: IconDefinition;
	message?: React.ReactNode;
	children?: React.ReactNode;
	className?: string;
}

const Banner = ({
	icon = faInfoCircle,
	message,
	children,
	className = 'bg-yellow-500 text-yellow-900',
}: BannerProps) => {
	return (
		<div className={`Pinpoint Banner wrapper ${className}`}>
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
