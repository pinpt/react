export interface ISocialMediaLinkProps {
	className?: string;
	newTab?: boolean;
	href?: string;
	onClick?: () => void;
}

export interface ISocialMediaShareProps extends ISocialMediaLinkProps {
	/**
	 * the url which will be shared
	 */
	href: string;
}
