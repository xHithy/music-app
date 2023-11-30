import React from 'react';
import Sidebar from "../components/Sidebar";
import AudioPlayerBar from "../components/AudioPlayerBar";

const Home = () => {
	return (
		<div className='min-h-screen max-h-screen min-w-max flex flex-col bg-black'>
			<div className='flex flex-col flex-grow px-5 pt-5'>
				<Sidebar />
			</div>
			<AudioPlayerBar />
		</div>
	);
};

export default Home;