import Error from '../../../Error';
import Logo from '../../../Logo';
import PageError from '../../../Page/Error';
import Footer from '../../Footer';
import { IPrebuiltErrorProps } from '../types';

const InternalServerError = ({
	handleLinkClick,
	renderCopyright,
	renderFooter,
	renderLogo,
	renderSocial,
	renderSubscribe,
	site,
}: IPrebuiltErrorProps) => (
	<PageError
		error={
			<Error
				className="Prebuilt 500"
				logo={
					renderLogo?.(site) ?? (
						<Logo className="Prebuilt" src={site.logoUrl} href={site.theme?.logoLink ?? site.url} />
					)
				}
				error="500 Error"
				title="Internal Server Error"
				onClick={handleLinkClick}
			/>
		}
		footer={
			renderFooter?.(site) ?? (
				<Footer
					site={site}
					renderCopyright={renderCopyright}
					renderLogo={renderLogo}
					renderSocial={renderSocial}
					renderSubscribe={renderSubscribe}
				/>
			)
		}
	/>
);

export default InternalServerError;
