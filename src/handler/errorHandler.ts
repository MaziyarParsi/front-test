/* eslint-disable no-restricted-syntax */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { AxiosError } from 'axios';
import { UseFormSetError } from 'react-hook-form';

type TProps = {
	error: AxiosError | { message: Record<string, string> };
	setFormError: UseFormSetError<object>;
};

const errorHandler = async ({ error, setFormError }: TProps) => {
	if (typeof error.message === 'string') {
		return error;
	}

	for (const key in error.message) {
		if (Object.prototype.hasOwnProperty.call(error.message, key)) {
			if (setFormError)
				// @ts-expect-error not-compatible version
				setFormError(key, { message: error.message[key], type: 'server' });
		}
	}
	return error;
};

export default errorHandler;
