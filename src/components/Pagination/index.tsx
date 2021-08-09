export interface IPaginationProps {
	className?: string;
	goBackText?: React.ReactNode;
	goForwardText?: React.ReactNode;
	goForward?: () => void;
	goBack?: () => void;
}

const GoForwardWithArrow = ({ text = 'Next' }: { text?: React.ReactNode }) => {
	return (
		<>
			{text}
			<svg
				className="icon"
				width={15.75}
				height={18}
				aria-hidden="true"
				focusable="false"
				data-prefix="fas"
				data-icon="arrow-right"
				role="img"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 448 512"
			>
				<path
					fill="currentColor"
					d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
				></path>
			</svg>
		</>
	);
};

const GoBackWithArrow = ({ text = 'Back' }: { text?: React.ReactNode }) => {
	return (
		<>
			<svg
				className="icon"
				width={15.75}
				height={18}
				aria-hidden="true"
				focusable="false"
				data-prefix="fas"
				data-icon="arrow-left"
				role="img"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 448 512"
			>
				<path
					fill="currentColor"
					d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"
				></path>
			</svg>
			{text}
		</>
	);
};

const Pagination = (props: IPaginationProps) => {
	const { className = '', goForward, goBack, goBackText, goForwardText } = props;

	return (
		<div className={`Pinpoint Pagination ${className}`}>
			<div className="constraint">
				{goBack && (
					<div className="back" onClick={goBack}>
						{goBackText ?? <GoBackWithArrow />}
					</div>
				)}
				{goForward && (
					<div className="forward" onClick={goForward}>
						{goForwardText ?? <GoForwardWithArrow />}
					</div>
				)}
			</div>
		</div>
	);
};

// export these so they can be used in the <Pagination /> component
Pagination.GoBackWithArrow = GoBackWithArrow;
Pagination.GoForwardWithArrow = GoForwardWithArrow;

export default Pagination;
