import React, { useEffect, useMemo, useState } from 'react';

import styled from 'styled-components';
import {
	AddCardForm,
	Button,
	Cards,
	Checkbox,
	Container,
	Modal,
} from '../components';
import useFetch from '../hooks/useFetch';
import { TCard } from '../types';
import { sortList } from '../utils/helper';

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
	justify-content: space-between;
	width: 100%;
`;

export function Collection() {
	const [isModalOpen, setModalOpen] = useState(false);
	const [refetch, setRefetch] = useState(false);
	const [isSorted, setSorted] = useState(false);

	const { data, loading, error } = useFetch({
		url: '/cards',
		dependencies: [refetch],
	});

	const handleOpen = () => {
		setModalOpen(true);
	};

	const sortedList: TCard[] = useMemo(() => {
		if (data) {
			const sortItems = sortList(data);
			return sortItems;
		}
		return [];
	}, [data]);

	const handleSort = () => {
		setSorted(!isSorted);
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
						<Checkbox onChange={handleSort} />
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
					{data.length !== 0 && !loading && (
						<Cards data={isSorted ? sortedList : data} />
					)}
				</CardWrapper>
			)}
		</Container>
	);
}
