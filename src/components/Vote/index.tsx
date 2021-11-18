import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { faGrin, faLaugh, faLaughBeam, faMeh, faSmile, faTimes, faVoteYea } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getSubscriberId } from '../../';
import { validateEmail } from '../../lib/subscription';
import { EmailInput } from '../../widgets/Feedback';
import Modal from '../Modal';

export interface IVoteProps {
	className?: string;
	selected: number;
	setSelected: (value: number) => void;
	modalClassName?: string;
	featureName?: string;
	onSubmitNewSubscriber: (email: string, vote: number) => void;
	totalVotes?: number;
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
	const {
		className = '',
		selected,
		setSelected,
		modalClassName = '',
		featureName = 'this feature',
		onSubmitNewSubscriber,
	} = props;
	const [hasVoted, setHasVoted] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [email, setEmail] = useState('');
	const [emailValid, setEmailValid] = useState(false);
	const [internalSelected, setInternalSelected] = useState(-1);

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

	const subscriberId = useMemo(() => {
		return getSubscriberId();
	}, []);

	const handleCloseModal = useCallback(() => {
		setShowModal(false);
	}, []);

	useEffect(() => {
		if (email) {
			setEmailValid(validateEmail(email));
		} else {
			setEmailValid(false);
		}
	}, [email]);

	const isFormValid = useMemo(() => {
		return emailValid && internalSelected > 0;
	}, [emailValid, internalSelected]);

	const handleSubmit = useCallback(() => {
		if (isFormValid) {
			onSubmitNewSubscriber(email, internalSelected);
			handleCloseModal();
		}
	}, [isFormValid, email, internalSelected, handleCloseModal]);

	return (
		<div className={`${baseClass} Wrapper ${className}`}>
			<div className={`${baseClass} Icon`} onClick={!subscriberId ? () => setShowModal(true) : undefined}>
				<FontAwesomeIcon
					className={`${baseClass} Button ${selected > 0 ? 'selected' : ''}`}
					icon={faVoteYea}
					fixedWidth
				/>
				{selected > 0 ? <div className={`${baseClass} Indicator`}>{indicators[selected]}</div> : undefined}
			</div>
			{subscriberId ? (
				<div className={`${baseClass} Options ${hasVoted ? 'locked' : ''}`}>
					<div
						className={`${baseClass} Option ${selected === 1 ? 'selected' : ''}`}
						onClick={() => handleSelect(1)}
					>
						{indicators[1]}
					</div>
					<div
						className={`${baseClass} Option ${selected === 2 ? 'selected' : ''}`}
						onClick={() => handleSelect(2)}
					>
						{indicators[2]}
					</div>
					<div
						className={`${baseClass} Option ${selected === 3 ? 'selected' : ''}`}
						onClick={() => handleSelect(3)}
					>
						{indicators[3]}
					</div>
					<div
						className={`${baseClass} Option ${selected === 4 ? 'selected' : ''}`}
						onClick={() => handleSelect(4)}
					>
						{indicators[4]}
					</div>
					<div
						className={`${baseClass} Option ${selected === 5 ? 'selected' : ''}`}
						onClick={() => handleSelect(5)}
					>
						{indicators[5]}
					</div>
				</div>
			) : (
				<>
					{showModal && (
						<Modal visible className={`${baseClass} Modal SubscriberVoteModal ${modalClassName}`}>
							<div className="wrapper">
								<div className="header">
									<div className="title">Vote for {featureName}</div>
									<div className="description">Please provide your email address to vote on this feature</div>
									<div className="close" onClick={handleCloseModal}>
										<FontAwesomeIcon icon={faTimes} />
									</div>
								</div>
								<div className="body">
									<EmailInput
										hide={false}
										email={email}
										setEmail={setEmail}
										valid={emailValid}
										disabled={false}
									/>
									<span className="label">Your vote for {featureName}:</span>
									<div className="options">
										<div
											className={`${baseClass} ModalOption ${internalSelected === 1 ? 'selected' : ''}`}
											onClick={() => setInternalSelected(1)}
										>
											{indicators[1]}
										</div>
										<div
											className={`${baseClass} ModalOption ${internalSelected === 2 ? 'selected' : ''}`}
											onClick={() => setInternalSelected(2)}
										>
											{indicators[2]}
										</div>
										<div
											className={`${baseClass} ModalOption ${internalSelected === 3 ? 'selected' : ''}`}
											onClick={() => setInternalSelected(3)}
										>
											{indicators[3]}
										</div>
										<div
											className={`${baseClass} ModalOption ${internalSelected === 4 ? 'selected' : ''}`}
											onClick={() => setInternalSelected(4)}
										>
											{indicators[4]}
										</div>
										<div
											className={`${baseClass} ModalOption ${internalSelected === 5 ? 'selected' : ''}`}
											onClick={() => setInternalSelected(5)}
										>
											{indicators[5]}
										</div>
									</div>
								</div>
								<div className="footer">
									<button disabled={!isFormValid} onClick={handleSubmit}>
										Send
									</button>
								</div>
							</div>
						</Modal>
					)}
				</>
			)}
		</div>
	);
};

export default Vote;
