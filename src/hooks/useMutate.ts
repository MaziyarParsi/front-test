import { useCallback, useState } from 'react';
import { AxiosError, AxiosResponse } from 'axios';
import fetchHandler from '../handler/fetchHandler';
import { TPostBody } from '../types/Payload';

type TArguments = {
	url: string;
	method: 'POST' | 'PUT' | 'PATCH' | 'DELETE';
	body?: TPostBody;
	dependencies?: string[];
	onSuccess?: () => void;
};

const useMutate = ({
	url,
	dependencies = [],
	method,
	onSuccess,
}: TArguments) => {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState<AxiosResponse['data']>(null);
	const [error, setError] = useState<AxiosError | unknown>(null);

	const mutate = useCallback(
		async (formData: TArguments['body']) => {
			try {
				setLoading(true);
				const response = await fetchHandler(url, {
					method,
					body: formData || {},
				});
				setData(response.data);
				if (onSuccess) onSuccess();
			} catch (err) {
				setError(err);
			} finally {
				setLoading(false);
			}
		},
		[url, ...dependencies]
	);

	return { loading, data, error, mutate };
};

export default useMutate;
