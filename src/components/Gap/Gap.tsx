import React from 'react';
import styled from 'styled-components';

type IProps = {
	size?: 'xs' | 'md' | 'lg';
};
const sizeSelector = {
	xs: '8px',
	md: '12px',
	lg: '16px',
} as const;

const StyledGap = styled.div<{ size: IProps['size'] }>`
	margin: ${(props) => sizeSelector[props.size || 'xs']} 0;
`;
const Gap: React.FC<IProps> = ({ size = 'md' }) => {
	return <StyledGap size={size} />;
};

export default Gap;
