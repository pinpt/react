import { useCallback, useState } from 'react';
import { faGrin, faLaugh, faLaughBeam, faMeh, faSmile, faVoteYea } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface IVoteProps {
	className?: string;
	selected: number;
	setSelected: (value: number) => void;
}

const baseClass = 'Pinpoint Vote';

const indicators = [
	,
	<FontAwesomeIcon icon={faMeh} fixedWidth />,
	<FontAwesomeIcon icon={faSmile} fixedWidth />,
	<FontAwesomeIcon icon={faGrin} fixedWidth />,
	<FontAwesomeIcon icon={faLaugh} fixedWidth />,
	<FontAwesomeIcon icon={faLaughBeam} fixedWidth />,
];

const Vote = (props: IVoteProps) => {
	const { className = '', selected, setSelected } = props;
	const [hasVoted, setHasVoted] = useState(false);

	const handleSelect = useCallback(
		(score: number) => {
			setHasVoted(true);
			setTimeout(() => {
				setHasVoted(false);
			}, 100);
			if (score === selected) {
				setSelected(-1);
			} else {
				setSelected(score);
			}
		},
		[selected, setSelected]
	);

	return (
		<div className={`${baseClass} Wrapper ${className}`}>
			<div className={`${baseClass} Icon`}>
				<FontAwesomeIcon
					className={`${baseClass} Button ${selected > 0 ? 'selected' : ''}`}
					icon={faVoteYea}
					fixedWidth
				/>
				{selected > 0 ? <div className={`${baseClass} Indicator`}>{indicators[selected]}</div> : undefined}
			</div>
			<div className={`${baseClass} Options ${hasVoted ? 'locked' : ''}`}>
				<div className={`${baseClass} Option ${selected === 1 ? 'selected' : ''}`} onClick={() => handleSelect(1)}>
					{indicators[1]}
				</div>
				<div className={`${baseClass} Option ${selected === 2 ? 'selected' : ''}`} onClick={() => handleSelect(2)}>
					{indicators[2]}
				</div>
				<div className={`${baseClass} Option ${selected === 3 ? 'selected' : ''}`} onClick={() => handleSelect(3)}>
					{indicators[3]}
				</div>
				<div className={`${baseClass} Option ${selected === 4 ? 'selected' : ''}`} onClick={() => handleSelect(4)}>
					{indicators[4]}
				</div>
				<div className={`${baseClass} Option ${selected === 5 ? 'selected' : ''}`} onClick={() => handleSelect(5)}>
					{indicators[5]}
				</div>
			</div>
		</div>
	);
};

export default Vote;
