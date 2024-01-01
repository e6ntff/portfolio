import React from 'react';
import { projects } from '../settings/data';

const Portfolio: React.FC = () => {
	return (
		<section
			className='flex flex-col
			gap-2 sm:gap-4 lg:gap-8 
			px-1 sm:px-2 lg:px-4 
			py-1 sm:py-2 lg:py-4'
		>
			<p
				className='text-blue-600 font-semibold font-montserrat uppercase
				text-xl sm:text-3xl lg:text-5xl'
			>
				My projects
			</p>
			<ul className='flex flex-col gap-2 sm:gap-4 lg:gap-8'>
				{projects.map((project) => (
					<li
						key={project.title}
						className='flex even:flex-row-reverse justify-between 
						h-20 sm:h-40 lg:h-80'
					>
						<div
							className={`grid grid-cols-${project.grid[0]} grid-rows-${project.grid[1]} grid-flow-dense rounded-xl 
						h-full w-32 sm:w-64 lg:w-96`}
						>
							{project.pictures.map((pic) => (
								<img
									key={pic.pic}
									className='object-cover w-full h-full hover:scale-110 transition-all'
									style={{ gridArea: pic.area }}
									src={pic.pic}
									alt='project screenshot'
								/>
							))}
						</div>
						<div className='flex flex-col gap-1 sm:gap-2 lg:gap-4'>
							<p className='text-sm sm:text-lg lg:text-2xl font-montserrat text-blue-700 font-semibold uppercase'>
								{project.title}
							</p>
							<p className='text-base sm:text-lg lg:text-xl text-blue-700 font-medium font-montserrat'>
								{project.description}
							</p>
						</div>
					</li>
				))}
			</ul>
		</section>
	);
};

export default Portfolio;
