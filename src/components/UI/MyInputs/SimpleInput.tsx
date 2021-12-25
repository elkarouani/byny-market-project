import { ChangeEvent } from "react";

interface SimpleInputProps {
	id: string;
	label?: string;
	placeholder?: string;
	isValid?: boolean;
	type?: string;
	value?: string;
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
	disabled?: boolean;
}

export default function SimpleInput(props: SimpleInputProps) {
	return (
		<div className="space-y-2">
			<label 
				htmlFor={props.id}
				className="simple-input__label"
			>
				{props.label || "Untitled"}
			</label>
			<input
				id={props.id}
				className={`
					${(props.isValid === true && 'simple-input__input--success') ||
					(props.isValid === false && 'simple-input__input--error') ||
					'simple-input__input'
					} 
				`}
				type={props.type || "text"}
				value={props.value}
				onChange={props.onChange}
				placeholder={props.placeholder || "Untitled"}
				disabled={props.disabled}
			/>
		</div>
	);
}