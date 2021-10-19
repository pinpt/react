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
}
