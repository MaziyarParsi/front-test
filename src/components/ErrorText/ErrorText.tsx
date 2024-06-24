import React, { FC } from 'react';
import styled from 'styled-components';

type TProps = {
	children: string;
};

const Error = styled.p`
	font-size: 12px;
	color: red;
`;

const ErrorText: FC<TProps> = ({ children }) => {
	return <Error>{children}</Error>;
};

export default ErrorText;
