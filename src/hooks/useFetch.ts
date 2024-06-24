import { useCallback, useEffect, useState } from 'react';
import { AxiosError, AxiosResponse } from 'axios';
import fetchHandler from '../handler/fetchHandler';

type TArguments = {
	url: string;
	dependencies?: unknown[];
};
type TError = {
	message: string;
	status: number;
};

const useFetch = ({ url, dependencies = [] }: TArguments) => {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState<AxiosResponse['data']>(null);
	const [error, setError] = useState<AxiosError | TError | null>(null);

	const fetchRequest = useCallback(async () => {
		try {
			setLoading(true);
			const response = await fetchHandler(url);
			setData(response.data);
		} catch (err) {
			// @ts-expect-error should-search-whats-the-issue
			setError(err);
		} finally {
			setLoading(false);
		}
	}, [url]);

	useEffect(() => {
		fetchRequest();
	}, [fetchRequest, ...dependencies]);
	return { loading, data, error };
};

export default useFetch;
