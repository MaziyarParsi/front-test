import React from 'react';

import { Card, Container } from '../components';
import useFetch from '../hooks/useFetch';

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
				<div>
					<Card id={data[0].id} player={data[0].player} />
				</div>
			)}
		</Container>
	);
}
