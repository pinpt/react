import { faVoteYea } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback, useState } from "react";

export interface IVoteProps {
	className?: string;
}

const baseClass = 'Pinpoint Vote';

const Vote = (props: IVoteProps) => {
	const { className = '' } = props;
	const [selected, setSelected] = useState<number>(-1);
	const handleSelect = useCallback((score: number) => {
		setSelected(score);
	}, []);

	return (
		<div className={`${baseClass} Wrapper ${className}`}>
			<div className={`${baseClass} Icon`}>
				<FontAwesomeIcon className={`${baseClass} Button`} icon={faVoteYea} fixedWidth />
			</div>
			<div className={`${baseClass} Options`}>
				<div className={`${baseClass} Option ${selected === 1 ? 'selected' : ''}`} onClick={() => handleSelect(1)}>
					🙂
				</div>
				<div className={`${baseClass} Option ${selected === 2 ? 'selected' : ''}`} onClick={() => handleSelect(2)}>
					😄
				</div>
				<div className={`${baseClass} Option ${selected === 3 ? 'selected' : ''}`} onClick={() => handleSelect(3)}>
					😄
				</div>
				<div className={`${baseClass} Option ${selected === 4 ? 'selected' : ''}`} onClick={() => handleSelect(4)}>
					😄
				</div>
				<div className={`${baseClass} Option ${selected === 5 ? 'selected' : ''}`} onClick={() => handleSelect(5)}>
					😄
				</div>
			</div>
		</div>
	)
}

export default Vote;