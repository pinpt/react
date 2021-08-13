import { ReactElement, ReactNode } from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ILogoProps } from "../Logo";
import { IActionLinkProps } from "../Internal/ActionLink";

export interface IErrorProps {
	className?: string;
	logo?: ReactElement<ILogoProps | IActionLinkProps>;
	error?: string;
	title?: string;
	description?: string;
	link?: ReactNode;
}

const Error = (props: IErrorProps) => {
	const {
		className = '',
		logo,
		error = 'Error',
		title = 'Something Went Wrong',
		description = 'Sorry, an unexpected error occurred.',
		link
	} = props;

	return (
		<div className={`Pinpoint Error ${className}`}>
			<div className="logo">{logo}</div>
			<div className="error">{error}</div>
			<h1 className="title">
				{title}
			</h1>
			<div className="description">{description}</div>
			<div className="link">
				{link ?? (
					<>
						<span className="text">Go to all posts</span>
						<FontAwesomeIcon icon={faArrowRight} className="icon" />
					</>
				)}
			</div>
		</div>
	)
}

export default Error;
