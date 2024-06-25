import React from 'react';
import styled from 'styled-components';
import { TCard } from '../../types';
import Image from '../Image/Image';
import { convertIsoTimeToNormalDate } from '../../utils';

const StyledCard = styled.div`
	border: 1px;
	border-radius: 6px;
	border-color: aqua;
	background-color: #eae8e8;
	height: 280px;
	width: 100%;
	display: flex;
	flex-direction: column;
`;

const ImageHolder = styled.div`
	flex-grow: 3;
`;

const PlayerDetail = styled.div`
	flex-grow: 1;
	background-color: wheat;
	display: flex;
	justify-content: space-between;
	padding: 0 4px;
`;

const Card: React.FC<TCard> = ({ id, player }) => {
	return (
		<StyledCard key={id}>
			<ImageHolder>
				<Image src={player.image} alt="player-photo" />
			</ImageHolder>
			<PlayerDetail>
				<p>DOB:</p>
				<p>{convertIsoTimeToNormalDate(player.birthday)}</p>
				<p>{player.firstname}</p>
			</PlayerDetail>
		</StyledCard>
	);
};

export default Card;
