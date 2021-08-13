import Error from '../../../Error';
import Logo from '../../../Logo';
import PageError from '../../../Page/Error';

import { IPrebuiltErrorProps } from '../types';

const InternalServerError = ({
	renderLogo,
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
	/>
);

export default InternalServerError;
