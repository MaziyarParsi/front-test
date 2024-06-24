import React, { useEffect } from 'react';

import { fetchCollection } from '../lib/collection';

import { Card, Container } from '../components';
import fetchHandler from '../handler/fetchHandler';

export function Collection() {
	const collection = fetchCollection();
	const card = collection[0];

	useEffect(() => {
		fetchHandler('/cards')
			.then((res) => {})
			.catch((err) => {});
	}, []);

	/**
	 * Step 1: Render the card
	 */
	return (
		<Container>
			<Card id={card.id} player={card.player} />
		</Container>
	);
}
