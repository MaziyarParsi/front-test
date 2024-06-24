type TPlayer = {
	firstname: string;
	lastname: string;
	birthday: string;
	image: string;
};

type TCard = {
	id: number;
	player: TPlayer;
};

export { TCard, TPlayer };
