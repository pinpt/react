export interface ISocialMediaLinkProps {
	className?: string;
	newTab?: boolean;
	href?: string;
	onClick?: () => void;
}

export interface ISocialMediaShareProps {
	className?: string;
	newTab?: boolean;
	url: string;
	onClick?: () => void;
}
