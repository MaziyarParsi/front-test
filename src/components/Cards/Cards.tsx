import React, { FC } from 'react';
import styled from 'styled-components';
import { devices } from '../../constants/breakPoints';
import { TCard } from '../../types';
import Card from '../Card/Card';

type IProps = {
	data: TCard[];
};

const Wrapper = styled.div`
	display: grid;
	grid-gap: 10px;
	justify-content: space-between;
	padding: 10px;
	width: 100%;

	@media only screen and (${devices.md}) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media only screen and (${devices.lg}) {
		grid-template-columns: repeat(3, 1fr);
	}
	@media only screen and (${devices.xl}) {
		grid-template-columns: repeat(5, 1fr);
	}
`;

const Cards: FC<IProps> = ({ data }) => {
	return (
		<Wrapper>
			{data.map((card) => (
				<Card key={card.id} id={card.id} player={card.player} />
			))}
		</Wrapper>
	);
};

export default Cards;
