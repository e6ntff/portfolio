import React from 'react';
import AboutList from './AboutList';
import { description } from '../settings/about';

const About: React.FC = () => {
	return (
		<section
			className='flex justify-between 
			px-12 sm:px-24 lg:px-36 
			py-1 sm:py-2 lg:py-4'
		>
			<AboutList
				title={description.skills.title}
				items={description.skills.items}
			/>
			<AboutList
				title={description.about.title}
				items={description.about.items}
			/>
		</section>
	);
};

export default About;
