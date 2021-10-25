import { useCallback } from 'react';
import { faCheckCircle, faExclamationTriangle, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Error from '../Error';

export interface IEmailActionProps {
	className?: string;
	error?: string;
	message?: string;
	critical?: boolean;
	code: number;
	canClear: boolean;
	setters: {
		setError: (message: string) => void;
		setMessage: (message: string) => void;
	};
	children?: any;
}

const baseClass = 'Pinpoint EmailAction';

const EmailAction = (props: IEmailActionProps) => {
	const {
		className = '',
		error,
		critical,
		children,
		message,
		canClear,
		setters: { setMessage, setError },
	} = props;

	const clearMessage = useCallback(() => {
		setMessage('');
	}, [setMessage]);

	const clearError = useCallback(() => {
		setError('');
	}, [setError]);

	return (
		<>
			{error && !critical && (
				<div className={`${baseClass} ErrorWrapper ${className}`}>
					<div className={`${baseClass} Container`}>
						<FontAwesomeIcon icon={faExclamationTriangle} className={`${baseClass} ErrorIcon`} />
						<div className={`${baseClass} Message`}>
							<p className={`${baseClass} ErrorText`}>{error}</p>
						</div>
						<div className={`${baseClass} Interactive`}>
							<div className={`${baseClass} ButtonWrapper`}>
								<button type="button" className={`${baseClass} ErrorButton`} onClick={clearError}>
									<span className={`${baseClass} SR`}>Dismiss</span>
									<FontAwesomeIcon icon={faTimes} />
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
			{error && critical && <Error error={error} />}
			{message && (
				<div className={`${baseClass} MessageWrapper ${className}`}>
					<div className={`${baseClass} Container`}>
						<FontAwesomeIcon icon={faCheckCircle} className={`${baseClass} MessageIcon`} />
						<div className={`${baseClass} Message`}>
							<p className={`${baseClass} MessageText`}>{message}</p>
						</div>
						{canClear && (
							<div className={`${baseClass} Interactive`}>
								<div className={`${baseClass} ButtonWrapper`}>
									<button type="button" className={`${baseClass} MessageButton`} onClick={clearMessage}>
										<span className={`${baseClass} SR`}>Dismiss</span>
										<FontAwesomeIcon icon={faTimes} />
									</button>
								</div>
							</div>
						)}
					</div>
				</div>
			)}
			{critical ? undefined : children}
		</>
	);
};

export default EmailAction;
