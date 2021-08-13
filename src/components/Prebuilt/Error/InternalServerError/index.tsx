import Copyright from '../../../Copyright';
import Error from '../../../Error';
import Footer from '../../../Footer';
import Logo from '../../../Logo';
import PageError from '../../../Page/Error';
import Social from '../../../Social';
import Subscribe from '../../../Subscribe';

import { IPrebuiltErrorProps } from '../types';

const InternalServerError = ({
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
				className="Prebuild 500"
				logo={
					renderLogo?.(site) ?? (
						<Logo
							className="Prebuilt"
							src={site.logoUrl}
							href={site.theme?.logoLink ?? site.url}
						/>
					)
				}
				error="500 Error"
				title="Internal Server Error"
			/>
		}
		footer={
			renderFooter?.(site) ?? (
				<Footer
					className="Prebuilt"
					siteId={site?.id}
					social={
						renderSocial?.(site) ?? (
							<Social.Bar className="Prebuilt">
								{site.theme?.social?.facebook && (
									<Social.Facebook className="Prebuilt" href={site.theme.social?.facebook} newTab />
								)}
								{site.theme?.social?.instagram && (
									<Social.Instagram className="Prebuilt" href={site.theme.social?.instagram} newTab />
								)}
								{site.theme?.social?.twitter && (
									<Social.Twitter className="Prebuilt" href={site.theme.social?.twitter} newTab />
								)}
								{site.theme?.social?.github && (
									<Social.Github className="Prebuilt" href={site.theme.social?.github} newTab />
								)}
								{site.theme?.social?.linkedin && (
									<Social.LinkedIn className="Prebuilt" href={site.theme.social?.linkedin} newTab />
								)}
								{site.theme?.social?.rss && (
									<Social.RSS className="Prebuilt" href={site.theme.social?.rss ?? '/rss'} newTab />
								)}
							</Social.Bar>
						)
					}
					copyright={
						renderCopyright?.(site) ?? (
							<Copyright
								className="Prebuilt"
								text={site.theme?.copyright ?? ''}
								logo={
									renderLogo?.(site) ?? (
										<Logo
											className="Prebuilt"
											src={site.logoUrl}
											href={site.theme?.logoLink ?? site.url}
											title="Footer Logo Content Page"
										/>
									)
								}
							/>
						)
					}
					subscribe={
						renderSubscribe?.(site) ?? <Subscribe className="Prebuilt" href="/subscription/subscribe" />
					}
				/>
			)
		}
	/>
);

export default InternalServerError;
