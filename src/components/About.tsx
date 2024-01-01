import React from 'react';
import AboutList from './AboutList';
import { description } from '../settings/data';

const About: React.FC = () => {
	return (
		<section
			className='flex justify-between
				px-1 sm:px-2 lg:px-4 
				py-1 sm:py-2 lg:py-4'
		>
			<AboutList
				title={description.skills.title}
				items={description.skills.items}
			/>
		</section>
	);
};

export default About;
