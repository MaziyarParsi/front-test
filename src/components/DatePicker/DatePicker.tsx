import React, { useState } from 'react';

import { FieldErrors } from 'react-hook-form';
import styled from 'styled-components';
import { Label, ErrorText } from '../index';

type IProps = {
	name: string;
	label?: string;
	error?: FieldErrors['root'];
	onChange: (e: string | number) => void;
	defaultValue?: string | number;
	placeholder?: string;
};

const Wrapper = styled.div`
	height: 48px;
	display: flex;
	flex-direction: column;
	align-items: start;
`;

const StyledInut = styled.input`
	border-radius: 6px;
	min-height: 28px !important;
`;

const DatePicker: React.FC<IProps> = ({
	label,
	error,
	name,
	onChange,
	defaultValue,
	placeholder,
}) => {
	const [value, setValue] = useState(defaultValue || '');

	return (
		<Wrapper>
			{label && <Label>{label}</Label>}
			<StyledInut
				type="datetime-local"
				placeholder={placeholder}
				onChange={(evt) => {
					setValue(evt.target.value);
					onChange(evt.target.value);
				}}
				value={value}
			/>
			{error && <ErrorText>{error[name]?.message?.toString() || ''}</ErrorText>}
		</Wrapper>
	);
};

export default DatePicker;
