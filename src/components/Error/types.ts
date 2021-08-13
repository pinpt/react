import { ReactElement, ReactNode } from 'react';
import { IActionLinkProps } from '../Internal/ActionLink';
import { ILogoProps } from '../Logo';

export interface IErrorProps {
	className?: string;
	logo?: ReactElement<ILogoProps | IActionLinkProps>;
	error?: string;
	title?: string;
	description?: string;
	link?: ReactNode;
}
