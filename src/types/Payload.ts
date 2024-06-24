type TPostBody =
	| Record<string, string | number | object | undefined>
	| FormData
	| File;

export { TPostBody };
