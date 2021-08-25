import { ReactElement } from 'react';
import Loader from '../../../Loader';
import { IHeaderProps } from '../../../Header';
import withWrapper from '../../../Internal/withWrapper';
import { IOutlineProps } from '../../Outline';
import { IFooterProps } from '../../../Footer';

export interface IDocumentationHomeProps {
	className?: string;
	header?: ReactElement<IHeaderProps>;
	outline?: ReactElement<IOutlineProps>;
	content?: ReactElement;
	loading?: boolean;
	footer?: ReactElement<IFooterProps>;
}

const Home = (props: IDocumentationHomeProps) => {
	const { className = '', header, loading, outline, content, footer } = props;

	return (
		<div className={`Pinpoint Documentation Page Home ${className}`}>
			{withWrapper(header, 'header')}
			{loading ? (
				<div className="loaderWrapper">
					<Loader />
				</div>
			) : (
				withWrapper(
					<div className="Pinpoint Documentation Page Content">
						{outline}
						{content}
					</div>,
					'documentationBody'
				)
			)}
			{withWrapper(footer, 'footer')}
		</div>
	);
};

export default Home;