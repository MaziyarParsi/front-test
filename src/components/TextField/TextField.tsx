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
	type?: 'text';
	placeholder?: string;
};

const Wrapper = styled.div`
	height: 58px;
	display: flex;
	flex-direction: column;
	align-items: start;
`;

const StyledInut = styled.input`
	border-radius: 6px;
	padding: 6px 8px;
	font-size: 14px;
`;

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
		<Wrapper>
			{label && <Label>{label}</Label>}
			<StyledInut
				type={type}
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

export default TextField;
