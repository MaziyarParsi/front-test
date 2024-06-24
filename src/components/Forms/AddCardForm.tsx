import React, { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import styled from 'styled-components';
import { Button, DatePicker, ErrorText, Gap, TextField } from '../index';
import useMutate from '../../hooks/useMutate';
import { IS_URL_VALID } from '../../constants/regexs';

const BaseForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	flex-grow: 1;
	height: fit-content;
`;

type TProps = {
	setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
	setRefetch: React.Dispatch<React.SetStateAction<boolean>>;
};

const ButtonWrapper = styled.div`
	display: flex;
	justify-content: center;
`;

const AddCardForm: FC<TProps> = ({ setModalOpen, setRefetch }) => {
	const LoginSchema = z.object({
		firstname: z.string({ message: 'required' }),
		lastname: z.string({ message: 'required' }),
		birthday: z.string({ message: 'required' }),
		image: z.string({ message: 'required' }).regex(new RegExp(IS_URL_VALID), {
			message: 'type valid url',
		}),
	});

	type LoginSchemaType = z.infer<typeof LoginSchema>;

	const {
		handleSubmit,
		control,
		setError,
		formState: { errors },
	} = useForm<LoginSchemaType>({
		resolver: zodResolver(LoginSchema),
		mode: 'onChange',
	});
	const { mutate, data, error, loading } = useMutate({
		url: '/cards',
		method: 'POST',
		onSuccess: () => {
			setModalOpen(false);
			setRefetch((prev) => !prev);
		},
		setFormError: setError,
	});
	const onSubmit = (formData: LoginSchemaType) => {
		const finalData = {
			player: {
				firstname: formData.firstname,
				lastname: formData.lastname,
				image: formData.image,
				birthday: new Date(formData.birthday).toISOString(),
			},
		};

		mutate(finalData);
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
						<DatePicker
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
							label="image URL"
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
			{/* @ts-expect-error  uncompatible ts version */}
			{error && <ErrorText>{error?.message}</ErrorText>}
		</BaseForm>
	);
};

export default AddCardForm;
