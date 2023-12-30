import React from 'react';
import profilePhoto from '../media/profile-photo.png'

const Profile: React.FC = () => {
	return (
		<section
			className='flex justify-between items-center
			h-32 sm:h-64 lg:h-96 
			px-1 sm:px-2 lg:px-4 
			py-1 sm:py-2 lg:py-4'
		>
			<p className='text-blue-600 font-sans font-semibold
				text-md sm:text-xl lg:text-4xl'>Hi, I'm Pavel and I'm Frontend developer</p>
			<img
				className='h-full'
				src={profilePhoto}
				alt='profile'
			/>
		</section>
	);
};

export default Profile;
