import { useCallback, useState } from 'react';
import { AxiosError, AxiosResponse } from 'axios';
import { UseFormSetError } from 'react-hook-form';
import fetchHandler from '../handler/fetchHandler';
import { TPostBody } from '../types/Payload';
import errorHandler from '../handler/errorHandler';

type TArguments = {
	url: string;
	method: 'POST' | 'PUT' | 'PATCH' | 'DELETE';
	body?: TPostBody;
	dependencies?: string[];
	onSuccess?: () => void;
	setFormError: UseFormSetError<object>;
};

const useMutate = ({
	url,
	dependencies = [],
	method,
	onSuccess,
	setFormError,
}: TArguments) => {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState<AxiosResponse['data']>(null);
	const [error, setError] = useState<
		AxiosError | { message: Record<string, string> } | unknown
	>(null);

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
				// @ts-expect-error something with the type
				errorHandler({ error, setFormError });
			} finally {
				setLoading(false);
			}
		},
		[url, ...dependencies]
	);

	return { loading, data, error, mutate };
};

export default useMutate;
