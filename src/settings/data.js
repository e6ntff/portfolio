import pic1_1 from '../media/expense-manager-1.gif';
import pic1_2 from '../media/expense-manager-2.gif';
import pic1_3 from '../media/expense-manager-3.gif';

import pic2_1 from '../media/tic-tac-toe-1.gif';

export const description = {
	skills: {
		title: 'skills',
		items: ['HTML', 'CSS', 'JS'],
	},
};

export const projects = [
	{
		title: 'expense manager',
		description: 'App where you can store your expenses, divide it by categories and manage',
		grid: [2,2],
		pictures: [
			{ pic: pic1_1, area: '1/1/2/2' },
			{ pic: pic1_2, area: '1/2/2/3' },
			{ pic: pic1_3, area: '2/1/3/3' },
		],
	},
	{
		title: 'tic tac toe',
		description: 'You can play with other player on the same device or with computer',
		grid: [1,1],
		pictures: [
			{
				pic: pic2_1,
				area: '1/1/2/2',
			},
		],
	},
	
];
