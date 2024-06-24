import React, { useState } from 'react';

import styled from 'styled-components';
import {
	AddCardForm,
	Button,
	Card,
	Cards,
	Container,
	Modal,
} from '../components';
import useFetch from '../hooks/useFetch';

const CardWrapper = styled.div`
	background-color: #fff;
	width: 100%;
	height: fit-content;
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
	const [isModalOpen, setModalOpen] = useState(false);
	const [refetch, setRefetch] = useState(false);
	const { data, loading, error } = useFetch({
		url: '/cards',
		dependencies: [refetch],
	});

	const handleOpen = () => {
		setModalOpen(true);
	};

	return (
		<Container>
			{error && (
				<div>
					<p>{error.message || ''}</p>
				</div>
			)}
			{data && (
				<CardWrapper>
					<ButtonContainer>
						<Button type="primary" htmlType="button" onClick={handleOpen}>
							add card
						</Button>
						<Modal isModalOpen={isModalOpen} setModalOpen={setModalOpen}>
							<AddCardForm
								setModalOpen={setModalOpen}
								setRefetch={setRefetch}
							/>
						</Modal>
					</ButtonContainer>
					{loading && <div>data is loading</div>}
					{data.length === 0 && !loading && <p>there is nothing to show</p>}
					{data.length !== 0 && !loading && <Cards data={data} />}
				</CardWrapper>
			)}
		</Container>
	);
}
