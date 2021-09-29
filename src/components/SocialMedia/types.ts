export interface ISocialMediaLinkProps {
	className?: string;
	newTab?: boolean;
	href?: string;
	onClick?: () => void;
}

export interface ISocialMediaShareProps extends ISocialMediaLinkProps {
	href: string;
}
