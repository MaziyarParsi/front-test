import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
// import { errorHandler } from "./errorHandler";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL;
axios.defaults.withCredentials = true;

interface IPayload extends AxiosRequestConfig {
	method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
	body: Record<string, string | number | undefined> | FormData | File;
}

const fetchHandler = async (
	url: string,
	options?: IPayload
): Promise<{ data: AxiosResponse }> => {
	const baseUrlV1 = `${process.env.REACT_APP_BASE_URL}`;

	const payload = {
		url: `${baseUrlV1}${url}`,
		method: options?.method || 'GET',
		data: {},
		headers: {
			'Content-Type': 'application/json',
			Authorization: '',
		},
	};

	if (options?.body) {
		payload.data = options.body;
	}

	return new Promise((resolve, reject) => {
		axios(payload)
			.then((res) => {
				resolve(res);
			})
			.catch((err: AxiosError) => {
				if (err?.response?.status === 401) {
					// do some action for refresh token and stuff
				} else {
					// errorHandler(err.message);
					throw reject(err);
				}
			});
	});
};

export default fetchHandler;
