import React from 'react';
import { Link } from "react-router-dom";
import { FiHome, FiBarChart2, FiUpload, FiList, FiPlus, FiMusic } from "react-icons/fi";
import SidebarPlaylist from "./SidebarPlaylist";

const Sidebar = ({
	showUploadModal,
	setShowUploadModal
}) => {
	return (
		<div className='w-1/3 2xl:w-1/5 flex-grow flex flex-col space-y-5'>
			<nav className='bg-gray-950 rounded-xl p-5 flex flex-col space-y-4'>
				<Link to='/' className='text-gray-500 font-normal text-xl flex space-x-3 items-center hover:text-gray-400 '>
					<FiHome className='text-xl text-inherit' />
					<span className='text-inherit'>Home</span>
				</Link>
				<Link to='/statistics' className='text-gray-500 font-normal text-xl flex space-x-3 items-center hover:text-gray-400'>
					<FiBarChart2 className='text-xl text-inherit' />
					<span className='text-inherit'>Your Statistics</span>
				</Link>
				<div
					className='text-gray-500 font-normal text-xl flex space-x-3 items-center hover:text-gray-400'
					onClick={showUploadModal ? () => setShowUploadModal(false) : () => setShowUploadModal(true)}
				>
					<FiUpload className='text-xl text-inherit' />
					<span className='text-inherit'>Upload a Song</span>
				</div>
			</nav>
			<div className='flex-grow bg-gray-950 rounded-xl px-5 pt-5 flex flex-col space-y-3 overflow-hidden'>
				<div className='flex items-center font-normal text-xl justify-between'>
					<div className='flex space-x-3 items-center'>
						<FiList className='text-gray-500' />
						<span className='text-gray-500'>Your Playlists</span>
					</div>
					<div className='text-gray-500 flex w-fit text-3xl cursor-pointer hover:text-gray-400 rounded-full'>
						<FiPlus title='Create a new playlist' />
					</div>
				</div>
				<div className='flex flex-col space-y-4 overflow-hidden hover:overflow-y-auto flex-grow'>
					<div className='flex items-center space-x-2 w-full cursor-pointer hover:bg-gray-800 transition-colors duration-200 rounded-xl'>
						<div className='w-16 h-16 bg-gradient-to-b from-purple-500 to-blue-500 rounded-xl flex justify-center items-center'>
							<FiMusic className='text-gray-300 text-2xl' />
						</div>
						<div className='flex flex-col text-gray-400 flex-grow space-y-0.5'>
							<h1 className='w-[90%] h-5 font-medium'>Your uploads</h1>
							<span className='w-[90%] h-5 text-gray-500 text-sm'>Playlist - 0 songs</span>
						</div>
					</div>
					<SidebarPlaylist />
					<SidebarPlaylist />
					<SidebarPlaylist />
					<SidebarPlaylist />
				</div>
			</div>
		</div>
	);
};

export default Sidebar;