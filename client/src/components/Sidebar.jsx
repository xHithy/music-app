import React from 'react';
import { Link } from "react-router-dom";
import { FiHome, FiBarChart2, FiUpload, FiList } from "react-icons/fi";

const Sidebar = () => {
	return (
		<div className='w-1/4 2xl:w-1/5 flex-grow h-full max-h-full flex flex-col space-y-5'>
			<nav className='bg-gray-900 rounded-xl p-5 flex flex-col space-y-4'>
				<Link to='/' className='text-gray-500 font-normal text-xl flex space-x-3 items-center hover:text-gray-400'>
					<FiHome className='text-xl text-inherit' />
					<span className='text-inherit'>Home</span>
				</Link>
				<Link to='/statistics' className='text-gray-500 font-normal text-xl flex space-x-3 items-center hover:text-gray-400'>
					<FiBarChart2 className='text-xl text-inherit' />
					<span className='text-inherit'>Your Statistics</span>
				</Link>
				<Link to='/upload' className='text-gray-500 font-normal text-xl flex space-x-3 items-center hover:text-gray-400'>
					<FiUpload className='text-xl text-inherit' />
					<span className='text-inherit'>Upload a Song</span>
				</Link>
			</nav>
			<div className='flex-grow h-full bg-gray-900 rounded-xl p-5 flex flex-col'>
				<div className='flex space-x-3 items-center font-normal text-xl'>
					<FiList className='text-gray-500' />
					<span className='text-gray-500'>Your Playlists</span>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;