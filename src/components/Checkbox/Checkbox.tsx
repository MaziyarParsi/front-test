import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	p {
		margin: 0 4px;
	}
`;
type TProps = {
	onChange: () => void;
};

const Checkbox: FC<TProps> = ({ onChange }) => {
	return (
		<Wrapper>
			<input type="checkbox" onChange={onChange} />
			<p> Sort by name</p>
		</Wrapper>
	);
};

export default Checkbox;
