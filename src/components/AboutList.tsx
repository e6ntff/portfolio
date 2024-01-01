import React from 'react';

interface Props {
	title: string;
	items: string[];
}

const AboutList: React.FC<Props> = ({ title, items }) => {
	return (
		<div
			className='flex flex-col text-blue-600 uppercase
			gap-2 sm:gap-4 lg:gap-8
			px-1 sm:px-2 lg:px-4 
			py-1 sm:py-2 lg:py-4'
		>
			<p
				className='text-blue-600 font-semibold font-montserrat uppercase
				text-xl sm:text-3xl lg:text-5xl'
			>
				{title}
			</p>
			<ul className='text-sm sm:text-lg lg:text-2xl font-montserrat'>
				{items.map((item) => (
					<ul key={item}>— {item}</ul>
				))}
			</ul>
		</div>
	);
};

export default AboutList;
