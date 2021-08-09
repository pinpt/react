export interface ISocialSharingProps {
	className?: string;
}

const Sharing = (props: ISocialSharingProps) => {
	const { className = '' } = props;

	return (
		<div className={`${className}`}>
			
		</div>
	);
};

export default Sharing;
