import React from 'react';
import Error from '../../../Error';
import Logo from '../../../Logo';
import PageError from '../../../Page/Error';
import Footer from '../../Footer';
import { IPrebuiltErrorProps } from '../types';

const NotFound = ({
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
				className="Prebuilt 404"
				logo={
					renderLogo?.(site) ?? (
						<Logo className="Prebuilt" src={site.logoUrl} href={site.theme?.logoLink ?? site.url} />
					)
				}
				error="404 Error"
				title="Page Not Found"
				description="Sorry, we couldn’t find the page you’re looking for."
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

export default NotFound;
