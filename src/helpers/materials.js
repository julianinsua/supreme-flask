export const materials = {
	flasks: {
		"flask-1": { id: "flask-1", value: 100 },
		"flask-2": { id: "flask-2", value: 50 },
		"flask-3": { id: "flask-3", value: 200 },
		"flask-4": { id: "flask-4", value: 250 },
		"flask-5": { id: "flask-5", value: 500 },
		"flask-6": { id: "flask-6", value: 1000 },
		"flask-7": { id: "flask-7", value: 25 },
		"flask-8": { id: "flask-8", value: 20 },
		"flask-9": { id: "flask-9", value: 10 },
		"flask-10": { id: "flask-10", value: 5 },
		"flask-11": { id: "flask-11", value: 2000 },
	},
	pippetes: {
		"pippette-1": { id: "pippette-1", value: 10 },
		"pippette-2": { id: "pippette-2", value: 5 },
		"pippette-3": { id: "pippette-3", value: 20 },
		"pippette-4": { id: "pippette-4", value: 15 },
		"pippette-5": { id: "pippette-5", value: 25 },
		"pippette-6": { id: "pippette-6", value: 4 },
		"pippette-7": { id: "pippette-7", value: 3 },
		"pippette-8": { id: "pippette-8", value: 2 },
		"pippette-9": { id: "pippette-9", value: 1 },
		"pippette-10": { id: "pippette-10", value: 9 },
		"pippette-11": { id: "pippette-11", value: 8 },
		"pippette-12": { id: "pippette-12", value: 7 },
		"pippette-13": { id: "pippette-13", value: 6 },
		"pippette-14": { id: "pippette-14", value: 50 },
	},
	columns: {
		"column-1": {
			id: "column-1",
			title: "Flasks to use",
			elementIds: [
				"flask-1",
				"flask-2",
				"flask-3",
				"flask-4",
				"flask-5",
				"flask-6",
				"flask-7",
				"flask-8",
				"flask-9",
				"flask-10",
				"flask-11",
			],
		},
		"column-2": {
			id: "column-2",
			title: "Flasks not to use",
			elementIds: [],
		},
		"column-3": {
			id: "column-3",
			title: "Pippetes to use",
			elementIds: [
				"pippette-1",
				"pippette-2",
				"pippette-3",
				"pippette-4",
				"pippette-5",
				"pippette-6",
				"pippette-7",
				"pippette-8",
				"pippette-9",
				"pippette-10",
				"pippette-11",
				"pippette-12",
				"pippette-13",
				"pippette-14",
			],
		},
		"column-4": {
			id: "column-4",
			title: "Pippetes not to use",
			elementIds: [],
		},
	},
	columnOrder: ["column-1", "column-2", "column-3", "column-4"],
};
