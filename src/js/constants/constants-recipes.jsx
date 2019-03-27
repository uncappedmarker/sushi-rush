import INGREDIENTS from "constants-ingredients";

const baseObject = {
	title: "thing",
	description: "wut",
	ingredients: [INGREDIENTS.RICE]
}

export default {
	TUNA_ROLL: {...baseObject,
		title: "Tuna Roll",
		description: "A yummy tuna roll",
		INGREDIENTS: [INGREDIENTS.RICE, INGREDIENTS.MAGURO]
	}
}