import React, { FC } from 'react';
import styled from 'styled-components';

type TProps = {
	children: string;
};

const StyledLabel = styled.p`
	font-size: 14px;
`;
const Label: FC<TProps> = ({ children }) => {
	return <StyledLabel>{children}</StyledLabel>;
};

export default Label;
