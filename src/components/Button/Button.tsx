import React from 'react';
import styled from 'styled-components';

type IProps = {
	children: string;
	onClick?: () => void;
	htmlType: 'submit' | 'reset' | 'button';
	type?: 'primary' | 'secondary' | 'disabled' | 'outline';
	disabled?: boolean;
	size?: 'full';
};

const PrimaryButton = styled.button<{ size?: IProps['size'] }>`
	background-color: ${(props) => (props.disabled ? '#6b6b6b' : '#a5b5f5')};
	border-radius: 6px;
	width: ${(props) => (props.size === 'full' ? '100%' : '128px')};
	padding: 8px 0;
	cursor: pointer;
`;
const OutlinedButton = styled.button`
	background-color: transparent;
	border: 1px solid gray;
	border-radius: 6px;
`;

const Button: React.FC<IProps> = ({
	children,
	type = 'primary',
	htmlType = 'button',
	disabled = false,
	size = 'full',
	onClick,
}) => {
	if (type === 'outline') {
		return (
			<OutlinedButton type={htmlType} disabled={disabled} onClick={onClick}>
				{children}
			</OutlinedButton>
		);
	}
	return (
		<PrimaryButton type={htmlType} disabled={disabled} onClick={onClick}>
			{children}
		</PrimaryButton>
	);
};

export default Button;
