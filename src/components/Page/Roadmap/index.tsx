import { forwardRef } from 'react';

export interface IRoadmapPageProps {
	className?: string;
}

const Roadmap = forwardRef((props: IRoadmapPageProps, ref: any) => {
	const { className = '' } = props;
	return <div className={`Pinpoint Page Roadmap ${className}`} ref={ref}></div>;
});

export default Roadmap;
