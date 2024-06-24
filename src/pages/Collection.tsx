import React, { useState } from 'react';

import styled from 'styled-components';
import { AddCardForm, Card, Container, Modal } from '../components';
import useFetch from '../hooks/useFetch';

const CardWrapper = styled.div`
	background-color: #fff;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 8px 32px;
`;
const ButtonContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: end;
`;

export function Collection() {
	const { data, loading, error } = useFetch({ url: '/cards' });

	return (
		<Container>
			{loading && <div>data is loading</div>}
			{error && (
				<div>
					<p>{error.message}</p>
				</div>
			)}
			{data && (
				<CardWrapper>
					<ButtonContainer>
						<Modal title="add card">
							<AddCardForm />
						</Modal>
					</ButtonContainer>
					<Card id={data[0].id} player={data[0].player} />
				</CardWrapper>
			)}
		</Container>
	);
}
