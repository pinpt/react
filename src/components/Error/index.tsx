import { ReactElement, ReactNode } from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ILogoProps } from '../Logo';
import { IActionLinkProps } from '../Internal/ActionLink';

export interface IErrorProps {
	className?: string;
	logo?: ReactElement<ILogoProps | IActionLinkProps>;
	error?: string;
	title?: string;
	description?: string;
	link?: ReactNode;
	href?: string;
	onClick?: () => void;
}

const Error = (props: IErrorProps) => {
	const {
		className = '',
		logo,
		error = 'Error',
		title = 'Something Went Wrong',
		description = 'Sorry, an unexpected error occurred.',
		link,
		href,
		onClick,
	} = props;

	return (
		<div className={`Pinpoint Error ${className}`}>
			<div className="logo">{logo}</div>
			<div className="error">{error}</div>
			<h1 className="title">{title}</h1>
			<div className="description">{description}</div>
			<div className="link">
				{link ??
					(href || onClick ? (
						<a className="link" href={href} onClick={onClick} title="Go to all posts">
							<span className="text">Go to all posts</span>
							<FontAwesomeIcon icon={faArrowRight} className="icon" />
						</a>
					) : (
						<></>
					))}
			</div>
		</div>
	);
};

export default Error;
