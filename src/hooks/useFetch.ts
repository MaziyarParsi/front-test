import { useCallback, useEffect, useState } from 'react';
import { AxiosError, AxiosResponse } from 'axios';
import fetchHandler from '../handler/fetchHandler';

type TArguments =
	| {
			url: string;
			dependencies?: string[];
	  }
	| {
			url: string;
			method: 'POST' | 'PUT' | 'PATCH' | 'DELETE';
			body: Record<string, string | number | undefined> | FormData | File;
			dependencies?: string[];
	  };

const useFetch = ({ url, dependencies = [] }: TArguments) => {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState<AxiosResponse['data']>(null);
	const [error, setError] = useState<AxiosError | unknown>(null);

	const fetchRequest = useCallback(async () => {
		try {
			setLoading(true);
			const response = await fetchHandler(url);
			setData(response.data);
		} catch (err) {
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
