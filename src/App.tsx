import React from 'react';
import './App.css';
import Profile from './components/Profile';

function App() {
	return (
		<main
			className='flex flex-col gap-4 bg-blue-100
      px-2 md:px-4 lg:px-8 
			py-2 md:py-4 lg:py-8'
		>
			<Profile />
		</main>
	);
}

export default App;
