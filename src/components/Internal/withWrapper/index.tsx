import { ReactNode } from "react";

const withWrapper = (wrappedComponent: ReactNode, name: string) => (
	wrappedComponent ? (
		<div className={`${name}Wrapper`}>
			<div className="constraint">
				{wrappedComponent}
			</div>
		</div>
	) : <></>
);

export default withWrapper;
