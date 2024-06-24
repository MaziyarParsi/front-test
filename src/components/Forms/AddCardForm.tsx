import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import styled from 'styled-components';
import { Button, Gap, TextField } from '../index';
import useFetch from '../../hooks/useFetch';
import useMutate from '../../hooks/useMutate';

const BaseForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	flex-grow: 1;
	height: fit-content;
`;

const ButtonWrapper = styled.div`
	display: flex;
	justify-content: center;
`;

const AddCardForm = () => {
	const LoginSchema = z.object({
		firstname: z.string({ message: 'required' }),
		lastname: z.string({ message: 'required' }),
		birthday: z.string({ message: 'required' }),
		image: z.string({ message: 'required' }),
	});

	type LoginSchemaType = z.infer<typeof LoginSchema>;

	const {
		handleSubmit,
		control,
		setError,
		watch,
		formState: { errors },
	} = useForm<LoginSchemaType>({
		resolver: zodResolver(LoginSchema),
		mode: 'onChange',
	});
	const { mutate, data, error, loading } = useMutate({
		url: '/cards',
		method: 'POST',
	});
	// eslint-disable-next-line no-console
	const onSubmit = (
		formData: Record<string, string | number | undefined> | FormData | File
	) => {
		mutate(formData);
	};

	return (
		<BaseForm onSubmit={handleSubmit(onSubmit)}>
			<div className="px-4">
				<Controller
					name="firstname"
					control={control}
					rules={{ required: true }}
					render={({ field: { onChange } }) => (
						<TextField
							label="firstName"
							name="firstname"
							onChange={onChange}
							error={errors}
						/>
					)}
				/>
				<Gap size="md" />
				<Controller
					name="lastname"
					control={control}
					rules={{ required: true }}
					render={({ field: { onChange } }) => (
						<TextField
							label="lastName"
							name="lastname"
							onChange={onChange}
							error={errors}
						/>
					)}
				/>
				<Gap size="md" />
				<Controller
					name="birthday"
					control={control}
					rules={{ required: true }}
					render={({ field: { onChange } }) => (
						<TextField
							label="birthday"
							name="birthday"
							onChange={onChange}
							error={errors}
						/>
					)}
				/>
				<Gap size="md" />
				<Controller
					name="image"
					control={control}
					rules={{ required: true }}
					render={({ field: { onChange } }) => (
						<TextField
							label="image"
							name="image"
							onChange={onChange}
							error={errors}
						/>
					)}
				/>
			</div>
			<Gap />
			<ButtonWrapper>
				<Button htmlType="submit" disabled={loading}>
					confirm
				</Button>
			</ButtonWrapper>
		</BaseForm>
	);
};

export default AddCardForm;
