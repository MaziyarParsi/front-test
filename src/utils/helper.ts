import { TCard } from '../types';

const sortList = (list: TCard[]) => {
	// @ts-expect-error ts version in-compatibilty
	return list?.toSorted(function sort(a: TCard, b: TCard) {
		if (
			a.player.firstname.toLocaleLowerCase() <
			b.player.firstname.toLocaleLowerCase()
		) {
			return -1;
		}
		if (
			a.player.firstname.toLocaleLowerCase() >
			b.player.firstname.toLocaleLowerCase()
		) {
			return 1;
		}
		return 0;
	});
};
export { sortList };
