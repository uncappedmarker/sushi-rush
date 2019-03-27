const baseObject = {
	title: "Thing",
	description: "Wut",
	min_skill_level: 0,
}

// http://sushiref.com/glossary/

export default {
	RICE: {...baseObject,
		title: "Sushi Rice",
		description: "Short-grain sushi rice",
	},
	NORI: {...baseObject,
		title: "Seaweed Wrap",
		description: "The wrapping paper for the gift of sushi",
	},
	MAGURO: {...baseObject,
		title: "Tuna",
		description: "The most popular cut of tuna",
	},
	TORO: {...baseObject,
		title: "Fatty Tuna",
		description: "Yummy creamy tuna",
	},
}