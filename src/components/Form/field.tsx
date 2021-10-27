// TODO @keegan
// - Info & Error Tooltips
import React, { ReactNode } from 'react';

export interface IFieldProps {
	className?: string;
	label: string;
	hideLabel?: boolean;
	error?: string;
	info?: string;
	field?: ReactNode;
	children?: ReactNode;
	description?: ReactNode;
}

const Field = (props: IFieldProps) => {
	const { className = '', hideLabel, label, error, info, field, children, description } = props;
	return (
		<div className={`Pinpoint Field Wrapper ${className}`}>
			<div className="Pinpoint Field Parent">
				<label className={`Pinpoint Field Label ${hideLabel ? 'hidden' : ''}`}>{label}</label>
				<div className="Pinpoint Field Status">
					{error && (
						<div className="Pinpoint Field Error">
							<div>Error placeholder - {error}</div>
						</div>
					)}
					{info && (
						<div className="Pinpoint Field Info">
							<div>Info placeholder - {info}</div>
						</div>
					)}
				</div>
			</div>
			<div className="Pinpoint Field Children">{field ?? children}</div>
			<div className="Pinpoint Field Description">{description}</div>
		</div>
	);
};

export default Field;
