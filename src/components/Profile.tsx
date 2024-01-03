import React from 'react';
import profilePhoto from '../media/profile-photo.png';

import gitHubLogo from '../media/github-mark.png';
import telegramLogo from '../media/telegram-logo.png';

const Profile: React.FC = () => {
	return (
		<section
			className='flex justify-between items-center font-montserrat
			h-32 sm:h-64 lg:h-96 
			px-1 sm:px-2 lg:px-4 
			py-1 sm:py-2 lg:py-4 
			gap-8 sm:gap-16 lg:gap-32'
		>
			<div className='flex flex-col justify-between gap-4 sm:gap-8 lg:gap-16'>
				<p
					className='text-blue-600 font-bold
				text-2xl sm:text-4xl lg:text-6xl'
				>
					Hi, I'm Pavel and I'm Frontend developer
				</p>
				<ul className='flex gap-2 sm:gap-4 lg:gap-8'>
					<li className='w-10 h-10'>
						<a
							href='https://github.com/e6ntff'
							target='_blank'
						>
							<img
								src={gitHubLogo}
								alt='gitnub link'
								className='w-full h-full'
							/>
						</a>
					</li>
					<li className='w-10 h-10'>
						<a
							href='https://t.me/e6ntff'
							target='_blank'
						>
							<img
								src={telegramLogo}
								alt='telegram link'
								className='w-full h-full'
							/>
						</a>
					</li>
				</ul>
			</div>
			<img
				className='h-full'
				src={profilePhoto}
				alt='profile'
			/>
		</section>
	);
};

export default Profile;
