import React, { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useEmailAction from '../../../lib/hooks/useEmailAction';
import EmailAction from '../../EmailAction';
import Field from '../../Form/field';
import Form from '../../Form/form';
import Loader from '../../Loader';

export interface IVerifyProps {
	className?: string;
	verified?: boolean;
	loading?: boolean;
	firstName?: string;
	lastName?: string;
	onSave?: (firstName: string, lastName: string) => Promise<any>;
}

const baseClass = 'Pinpoint SubscriptionVerify';

const Verify = (props: IVerifyProps) => {
	const {
		className = '',
		verified = false,
		loading = false,
		firstName: propsFirstName = '',
		lastName: propsLastName = '',
		onSave,
	} = props;
	const emailActionState = useEmailAction();
	const [firstName, setFirstName] = useState(() => propsFirstName);
	const [lastName, setLastName] = useState(() => propsLastName);
	const [pending, setPending] = useState<boolean>(false);

	useEffect(() => {
		setFirstName(propsFirstName);
	}, [propsFirstName]);

	useEffect(() => {
		setLastName(propsLastName);
	}, [propsLastName]);

	useEffect(() => {
		if (verified) {
			emailActionState.setters.setError('');
			emailActionState.setters.setCritical(false);
			emailActionState.setters.setCanClear(false);
			emailActionState.setters.setMessage('Your email address has been verified');
		} else {
			emailActionState.setters.setCritical(false);
			emailActionState.setters.setCode(500);
			emailActionState.setters.setError('Your email could not be verified at this time');
			emailActionState.setters.setMessage('');
		}
	}, [verified]);

	const handleFirstNameChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		setFirstName(e.target.value);
	}, []);

	const handleLastNameChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		setLastName(e.target.value);
	}, []);

	const isFormDirty = useMemo(() => {
		return propsFirstName !== firstName || propsLastName !== lastName;
	}, [propsFirstName, propsLastName, firstName, lastName]);

	const handleSave = useCallback(async () => {
		if (onSave) {
			try {
				setPending(true);
				await onSave(firstName, lastName);
			} finally {
				setPending(false);
			}
		}
	}, [firstName, lastName, onSave]);

	return (
		<div className={`${baseClass} Wrapper ${className}`}>
			<div className={`${baseClass} Content`}>
				<div className={`${baseClass} Inner`}>
					{!loading && <EmailAction {...emailActionState} />}
					<div>
						<Form
							title="???? We'd love to know a little more about you!"
							description="If you prefer to, you can simply close this tab instead."
							dirty={isFormDirty}
							buttons={
								<button
									disabled={!isFormDirty || pending || loading}
									className={`${baseClass} Save`}
									onClick={handleSave}
								>
									{pending || loading ? <FontAwesomeIcon icon={faSpinner} pulse /> : 'Save'}
								</button>
							}
						>
							<div className={`${baseClass} Form`}>
								<Field label="First Name">
									<input
										value={firstName}
										className="Pinpoint SubscriptionSubscribe Field"
										onChange={handleFirstNameChange}
										disabled={pending || loading}
									/>
								</Field>
								<Field label="Last Name">
									<input
										value={lastName}
										className="Pinpoint SubscriptionSubscribe Field"
										onChange={handleLastNameChange}
										disabled={pending || loading}
									/>
								</Field>
							</div>
						</Form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Verify;
