import React, { useState } from 'react';

import { FieldErrors } from 'react-hook-form';

type IProps = {
	name: string;
	label?: string;
	error?: FieldErrors['root'];
	onChange: (e: string | number) => void;
	defaultValue?: string | number;
	type?: 'text';
	placeholder?: string;
};

const TextField: React.FC<IProps> = ({
	label,
	error,
	name,
	onChange,
	defaultValue,
	type = 'text',
	placeholder,
}) => {
	const [value, setValue] = useState(defaultValue || '');

	return (
		<div>
			{label && <p>{label}</p>}
			<input
				type={type}
				placeholder={placeholder}
				onChange={(evt) => {
					setValue(evt.target.value);
					onChange(evt.target.value);
				}}
				value={value}
			/>
			{error && (
				<span className="text-sm text-danger mx-2">
					{error[name]?.message?.toString()}
				</span>
			)}
		</div>
	);
};

export default TextField;
