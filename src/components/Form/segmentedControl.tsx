import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactNode } from 'react';
import Field from './field';

export interface SegmentedControlOption {
	icon?: IconDefinition;
	iconProps?: any;
	text?: string;
	value?: any;
}

export interface ISegmentedControlProps {
	className?: string;
	label?: string;
	value: any;
	options: SegmentedControlOption[];
	onChange: (value: any) => void;
	optionClassName?: string;
	description?: ReactNode;
}

const SegmentedControl = (props: ISegmentedControlProps) => {
	const { className = '', options, onChange, value, optionClassName, label, description } = props;

	const input = (
		<div className={`Pinpoint SegmentedControl Wrapper ${className}`}>
			{options.map((option: SegmentedControlOption) => {
				return (
					<button
						key={option.value}
						className={`Pinpoint SegmentedControl Button ${
							option.value === value ? 'active' : 'inactive'
						} ${optionClassName}`}
						onClick={() => onChange(option.value)}
					>
						{option.icon && <FontAwesomeIcon icon={option.icon} fixedWidth {...(option.iconProps ?? {})} />}
						{option.text}
					</button>
				);
			})}
		</div>
	);

	return <Field label={label ?? ''} description={description} field={input} className="FullWidth" />;
};

export default SegmentedControl;
