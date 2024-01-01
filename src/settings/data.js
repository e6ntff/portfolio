import pic1_1 from '../media/screenshot-1-1.png';
import pic1_2 from '../media/screenshot-1-2.png';
import pic1_3 from '../media/screenshot-1-3.png';

import pic2_1 from '../media/screenshot-2-1.png';

export const description = {
	skills: {
		title: 'skills',
		items: ['HTML', 'CSS', 'JS'],
	},
};

export const projects = [
	{
		title: 'expense manager',
		description: 'jahdaskd',
		grid: [2,2],
		pictures: [
			{ pic: pic1_1, area: '1/1/2/2' },
			{ pic: pic1_2, area: '1/2/2/3' },
			{ pic: pic1_3, area: '2/1/3/3' },
		],
	},
	{
		title: 'tic tac toe',
		description: 'asdad',
		grid: [1,1],
		pictures: [
			{
				pic: pic2_1,
				area: '',
			},
		],
	},
];
