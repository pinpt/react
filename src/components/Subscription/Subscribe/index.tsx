import Form from '../../Form/form';
import Field from '../../Form/field';
import React, { ChangeEvent, useCallback } from 'react';
import useEmailValidation from '../../../lib/hooks/useEmailValidation';

export interface ISubscribeProps {
	className?: string;
	name?: string;
}

const validate = async () => true;

const Subscribe = (props: ISubscribeProps) => {
	const { className = '', name } = props;
	const { email, setEmail, statusText, emailValid } = useEmailValidation(validate);

	const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	}, []);

	return (
		<div className={`Pinpoint SubscriptionSubscribe Wrapper ${className}`}>
			<Form title={`Subscribe to Updates${name ? ` for ${name}` : ''}.`} description="" buttonLocation="bottom" buttons={(
				<button disabled={!emailValid} className="Pinpoint SubscriptionSubscribe Submit">Submit</button>
			)}>
				<Field label="Email">
					<>
						<input
							value={email}
							className="Pinpoint SubscriptionSubscribe Field"
							placeholder="Enter your email address"
							onChange={handleChange}
						/>
						{statusText}
					</>
				</Field>
			</Form>
		</div>
	);
};

export default Subscribe;