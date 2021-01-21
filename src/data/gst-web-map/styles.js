export const poiStyle = {
	key: 'poiStyle',
	data: {
		nameDisplay: 'POI',
		description: '',
		definition: {
			rules: [
				{
					styles: [
						{
							// size: 15,
						},
						{
							attributeKey: 'type',
							attributeValues: {
								metro: {
									fill: '#ffffff',
									outlineWidth: 2,
									outlineColor: "#000000",
									icon: "crop",
									shape: "pin",
									size: 32,
								},
								tram: {
									outlineColor: '#395fab',
									outlineWidth: 2,
									fill: '#fd5757',
									shape: "diamond",
									size: 32
								},
								parking: {
									size: 32,
									icon: "monitoring",
									fill: '#ff9090'
								},
								gisat: {
									size: 64,
									outlineColor: '#395fab',
									outlineWidth: 4,
									iconFill: '#395fab',
									icon: "gisat",
									fill: '#e7f4ff',
									shape: "pin"
								},
								cross: {
									size: 32,
									outlineColor: '#a039ab',
									outlineOpacity: 0.5,
									outlineWidth: 4,
									fill: '#c7deae',
									shape: "cross"
								},
							},
						},
						{
							attributeKey: 'line',
							attributeValues: {
								"A": {
									outlineColor: '#2d9b2d',
								},
								"C": {
									outlineColor: '#ff0000',
								}
							},
						},
					],
				},
			],
		},
	},
};

export const metroStyle = {
	key: 'metroStyle',
	data: {
		nameDisplay: 'Metro',
		description: '',
		definition: {
			rules: [
				{
					styles: [
						{
							outlineColor: '#333333',
							outlineWidth: 4,
							outlineOpacity: 0.5,
						},
						{
							attributeKey: 'L_METRO',
							attributeValues: {
								'METRO C': {
									outlineColor: '#ff0000',
								},
								'METRO A': {
									outlineColor: '#2d9b2d',
								},
								'METRO B': {
									outlineColor: '#ffdd00',
								},
							},
						},
					],
				},
			],
		},
	},
};

export const parkingStyle = {
	key: 'parkingStyle',
	data: {
		nameDisplay: 'Parking',
		description: '',
		definition: {
			rules: [
				{
					styles: [
						{
							size: 10,
							shape: "pin",
							outlineWidth: 3,
							outlineColor: "#aaaaaa",
							fill: "#555555"
						}
					],
				},
			],
		},
	},
};
