import type { IPinpointConfig } from '../../lib/types/config';

export interface IFeedbackProps {
	widgetId?: string;
	title: string;
	className?: string;
	config: IPinpointConfig;
	contentId?: string;
	url?: string;
	pageType?: 'changelog' | 'blog' | 'documentation';
	pageTitle?: string;
	showDisclaimer?: boolean;
	disclaimer?: React.ReactNode;
	button?: {
		text: string;
	};
}

export interface IFeedbackModalProps {
	header?: {
		title: string;
		description: string;
	};
	footer?: {
		title: string;
	};
	button?: {
		text: string;
		background?: string;
		foreground?: string;
	};
	showDisclaimer?: boolean;
	disclaimer?: string;
	onClose?: () => void;
	__previewMode?: boolean;
	className?: string;
	config: IPinpointConfig;
}
