import React from 'react';
import './App.css';
import Profile from './components/Profile';
import About from './components/About';
import Portfolio from './components/Portfolio';

function App() {
	return (
		<main
			className='flex flex-col gap-4 bg-blue-100
      px-2 sm:px-4 lg:px-8 
			py-2 sm:py-4 lg:py-8'
		>
			<Profile />
			<About />
			<Portfolio />
		</main>
	);
}

export default App;
