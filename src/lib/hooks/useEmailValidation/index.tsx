import { useEffect, useMemo, useState } from 'react';
import { faCheck, faSpinner, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { validateEmail } from '../../email';
import useDebounce from '../useDebounce';

const useEmailValidation = (validate: (email: string) => Promise<boolean>, initial?: string, multiple?: boolean) => {
	const [_email, setEmail] = useState(() => initial ?? '');

	const emails = useMemo(() => {
		return _email?.split(/\r?\n/).filter((x) => x) ?? [];
	}, [_email]);

	const email = useMemo(() => {
		return emails[0] ?? '';
	}, [emails]);

	const [emailCheck] = useDebounce(_email, 350);
	const [checkingEmail, setCheckingEmail] = useState(false);
	const [emailValid, setEmailValid] = useState(!!email);
	const [emailsValid, setEmailsValid] = useState(!!emails);
	const [error, setError] = useState('');
	const [message, setMessage] = useState('');
	const [pending, setPending] = useState(false);

	const isEmailValid = useMemo(() => {
		return !!(email && validateEmail(email)[0] && !checkingEmail && emailValid && emailCheck);
	}, [email, emailValid, checkingEmail, emailCheck]);

	const isEmailsValid = useMemo(() => {
		return !!(
			emails.length > 0 &&
			emails.map((e) => validateEmail(e)[0]).every((x) => x) &&
			!checkingEmail &&
			emailsValid &&
			emailCheck
		);
	}, [emailsValid, emails, checkingEmail, emailCheck]);

	useEffect(() => {
		if (emailCheck) {
			if (multiple) {
				setCheckingEmail(true);
				// first do a local check before going to the api
				const valid = emails.every((email) => validateEmail(email)[0]);
				if (!valid) {
					setEmailsValid(false);
					setCheckingEmail(false);
					return;
				} else {
					setEmailsValid(true);
					setCheckingEmail(false);
				}
			} else {
				setCheckingEmail(true);
				validate(emailCheck)
					.then(setEmailValid)
					.finally(() => setCheckingEmail(false));
			}
		} else {
			setCheckingEmail(false);
			setEmailValid(false);
			setEmailsValid(false);
		}
	}, [emailCheck, multiple, validate]);

	const statusText = useMemo(() => {
		if (!email) {
			return undefined;
		}
		if (pending) {
			return (
				<div className="Pinpoint EmailValidation Subscribing">
					<FontAwesomeIcon icon={faSpinner} className="Pinpoint EmailValidation Subscribing Icon" pulse />
					<span>subscribing...</span>
				</div>
			);
		}
		if (error) {
			return <div className="Pinpoint EmailValidation Error">{error}</div>;
		}
		if (message) {
			return <div className="Pinpoint EmailValidation Message">{message}</div>;
		}
		return (
			<div className="font-semibold">
				{checkingEmail ? (
					<div className="Pinpoint EmailValidation Status">
						<FontAwesomeIcon icon={faSpinner} className="text-gray-700 mr-2" pulse />
						<span>validating...</span>
					</div>
				) : !multiple && emailValid && isEmailValid ? (
					<div className="Pinpoint EmailValidation Status Success">
						<FontAwesomeIcon icon={faCheck} className="Pinpoint EmailValidation Icon" />
						<span>email looks good</span>
					</div>
				) : multiple && emailsValid && isEmailsValid ? (
					<div className="Pinpoint EmailValidation Status Success">
						<FontAwesomeIcon icon={faCheck} className="Pinpoint EmailValidation Icon" />
						<span>
							email{emails.length !== 1 ? 's' : ''} look{emails.length === 1 ? 's' : ''} good
						</span>
					</div>
				) : emailCheck ? (
					<div className="Pinpoint EmailValidation Status Invalid">
						<FontAwesomeIcon icon={faTimes} className="Pinpoint EmailValidation Icon" />
						<span>{emails.length !== 1 ? 'one or more invalid emails' : 'invalid email'}</span>
					</div>
				) : undefined}
			</div>
		);
	}, [
		checkingEmail,
		emailValid,
		isEmailValid,
		emailCheck,
		email,
		error,
		message,
		pending,
		multiple,
		emails,
		emailsValid,
		isEmailsValid,
	]);

	return {
		statusText,
		email,
		fieldValue: _email,
		emails: emails,
		emailsValid: isEmailsValid,
		setEmail,
		emailValid: isEmailValid,
		setError,
		setMessage,
		setPending,
	};
};

export default useEmailValidation;
