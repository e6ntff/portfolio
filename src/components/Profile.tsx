import React from 'react';
import profilePhoto from '../media/profile-photo.png'

const Profile: React.FC = () => {
	return (
		<section
			className='flex justify-between items-center
			h-32 md:h-64 lg:h-96 
			px-1 md:px-2 lg:px-4 
			py-1 md:py-2 lg:py-4'
		>
			<p className='text-blue-700 font-sans 
				text-md md:text-xl lg:text-4xl'>Hi, I'm Pavel and I'm Frontend developer</p>
			<img
				className='h-full'
				src={profilePhoto}
				alt='profile picture'
			/>
		</section>
	);
};

export default Profile;
