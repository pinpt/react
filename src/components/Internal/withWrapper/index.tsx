import { ReactNode } from 'react';

const withWrapper = (wrappedComponent: ReactNode, name: string) =>
	wrappedComponent ? (
		<div className={`Pinpoint ${name}Wrapper`}>
			<div className="Pinpoint constraint">{wrappedComponent}</div>
		</div>
	) : (
		<></>
	);

export default withWrapper;
