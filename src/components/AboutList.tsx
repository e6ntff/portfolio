import React from 'react';

interface Props {
	title: string;
	items: string[] | string;
}

const AboutList: React.FC<Props> = ({ title, items }) => {
	return (
		<div
			className='flex flex-col text-blue-600 font-sans uppercase font-semibold 
			gap-1 sm:gap-2 lg:gap-4'
		>
			<p
				className='uppercase 
				text-md sm:text-xl lg:text-3xl'
			>
				{title}
			</p>
			{typeof items === 'string' ? (
				<p className='text-xs sm:text-base lg:text-xl'>{items}</p>
			) : (
				<ul className='text-xs sm:text-base lg:text-xl'>
					{items.map((item) => (
						<ul key={item}>— {item}</ul>
					))}
				</ul>
			)}
		</div>
	);
};

export default AboutList;
