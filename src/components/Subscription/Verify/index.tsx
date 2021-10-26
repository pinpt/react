import React, { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react';
import useEmailAction from '../../../lib/hooks/useEmailAction';
import EmailAction from '../../EmailAction';
import Field from '../../Form/field';
import Form from '../../Form/form';
import Loader from '../../Loader';

export interface IVerifyeProps {
	className?: string;
	verified?: boolean;
	loading?: boolean;
	firstName?: string;
	lastName?: string;
	onSave?: (firstName: string, lastName: string) => Promise<any>;
	pending?: boolean;
}

const baseClass = 'Pinpoint SubscriptionVerify';

const Verify = (props: IVerifyeProps) => {
	const {
		className = '',
		verified = false,
		loading = false,
		firstName: propsFirstName = '',
		lastName: propsLastName = '',
		onSave,
		pending = false,
	} = props;
	const emailActionState = useEmailAction();
	const [firstName, setFirstName] = useState(() => propsFirstName);
	const [lastName, setLastName] = useState(() => propsLastName);

	useEffect(() => {
		if (verified) {
			emailActionState.setters.setError('');
			emailActionState.setters.setCritical(false);
			emailActionState.setters.setCanClear(false);
			emailActionState.setters.setMessage('Your email address has been verified');
		} else {
			emailActionState.setters.setCritical(true);
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

	const handleSave = useCallback(() => {
		onSave?.(firstName, lastName);
	}, [firstName, lastName, onSave]);

	if (loading) {
		return <Loader />;
	}

	return (
		<div className={`${baseClass} Wrapper ${className}`}>
			<div className={`${baseClass} Content`}>
				<div className={`${baseClass} Inner`}>
					<EmailAction {...emailActionState} />
					{verified && (
						<div>
							<Form
								title="👋 We'd love to know a little more about you!"
								description="If you prefer to, you can simply close this tab instead."
								onSave={handleSave}
								dirty={isFormDirty}
							>
								<div className={`${baseClass} Form`}>
									<Field label="First Name">
										<input
											value={firstName}
											className="Pinpoint SubscriptionSubscribe Field"
											onChange={handleFirstNameChange}
										/>
									</Field>
									<Field label="Last Name">
										<input
											value={lastName}
											className="Pinpoint SubscriptionSubscribe Field"
											onChange={handleLastNameChange}
										/>
									</Field>
								</div>
							</Form>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Verify;
