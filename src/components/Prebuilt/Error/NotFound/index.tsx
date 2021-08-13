import Error from '../../../Error';
import Logo from '../../../Logo';
import PageError from '../../../Page/Error';

import { IPrebuiltErrorProps } from '../types';

const NotFound = ({
	renderLogo,
	site,
}: IPrebuiltErrorProps) => (
	<PageError
		error={
			<Error
				className="Prebuild 404"
				logo={
					renderLogo?.(site) ?? (
						<Logo
							className="Prebuilt"
							src={site.logoUrl}
							href={site.theme?.logoLink ?? site.url}
						/>
					)
				}
				error="404 Error"
				title="Page Not Found"
				description="Sorry, we couldn’t find the page you’re looking for."
			/>
		}
	/>
);

export default NotFound;
