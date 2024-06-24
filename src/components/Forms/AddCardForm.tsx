// import React from 'react';
// import { Controller, useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { z } from 'zod';
// import { Button, TextField } from '../index';

// const AddCardForm = () => {
// 	const LoginSchema = z.object({
// 		name: z.string({ message: 'required' }),
// 	});
// 	type LoginSchemaType = z.infer<typeof LoginSchema>;

// 	const {
// 		handleSubmit,
// 		control,
// 		setError,
// 		watch,
// 		formState: { errors },
// 	} = useForm<LoginSchemaType>({
// 		resolver: zodResolver(LoginSchema),
// 		mode: 'onChange',
// 	});
// 	const onSubmit = (data: unknown) => console.log(data);

// 	return (
// 		<form
// 			onSubmit={handleSubmit(onSubmit)}
// 			className="flex flex-col justify-between  grow"
// 		>
// 			<div className="px-4">
// 				<Controller
// 					name="name"
// 					control={control}
// 					rules={{ required: true }}
// 					render={({ field: { onChange } }) => (
// 						<TextField
// 							label="player-name"
// 							name="name"
// 							onChange={onChange}
// 							error={errors}
// 						/>
// 					)}
// 				/>
// 			</div>

// 			<div className="px-4">
// 				<Button htmlType="submit">confirm</Button>
// 			</div>
// 		</form>
// 	);
// };

// export default AddCardForm;
