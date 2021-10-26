// TODO @keegan
// - Button
// - Navigation Lock
// - Alert
// - Cancel handler
import React, { ReactNode } from 'react';

export interface IFormProps {
	className?: string;
	formClassName?: string;
	headingClassName?: string;
	title: string;
	description: string;
	buttonLocation?: 'top' | 'bottom';
	onSave?: () => void;
	buttons?: ReactNode;
	children?: ReactNode;
	onCancel?: () => void;
	dirty?: boolean;
}

const Form = (props: IFormProps) => {
	const {
		className = '',
		formClassName = '',
		headingClassName = '',
		title,
		description,
		buttonLocation = 'top',
		onSave,
		buttons,
		children,
		onCancel,
		dirty = false,
	} = props;
	return (
		<div className={`Pinpoint Form Wrapper ${className}`}>
			<div className={`Pinpoint Form Parent ${formClassName}`}>
				<div className={`Pinpoint Form Control`}>
					<div className={`Pinpoint Form Heading ${headingClassName}`}>
						<h1>{title}</h1>
						<h2>{description}</h2>
					</div>
					{buttonLocation === 'top' && (
						<div>
							{onSave && (
								<button disabled={!dirty} type="button" className={`Pinpoint Form SaveButton`} onClick={onSave}>
									Save
								</button>
							)}
							{buttons}
						</div>
					)}
				</div>
				{children}
				{buttonLocation === 'bottom' && (
					<div className="Pinpoint Form BottomButton">
						<div className="Pinpoint Form Spacer">
							{onCancel && <div>Placehodler - cancel</div>}
							{onSave && (
								<button disabled={!dirty} type="button" className={`Pinpoint Form SaveButton`}>
									Save
								</button>
							)}
							{buttons}
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Form;
