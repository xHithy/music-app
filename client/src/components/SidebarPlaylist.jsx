import React from 'react';

const SidebarPlaylist = ({
	PLAYLIST_TITLE,
	PLAYLIST_CREATED_AT,
	PLAYLIST_IMAGE
}) => {
	return (
		<div className='flex w-full space-x-2 items-center animate-pulse'>
			<div className='w-16 h-16 bg-gray-800 rounded-xl'>
				{/*<img src={PLAYLIST_IMAGE} alt={PLAYLIST_TITLE + ' image'} />*/}
			</div>
			<div className='flex flex-col text-gray-400 flex-grow space-y-2'>
				<h1 className='w-[90%] bg-gray-800 h-5 rounded-xl'>{PLAYLIST_TITLE}</h1>
				<span className='w-1/2 bg-gray-800 h-5 text-gray-600 rounded-xl'>{PLAYLIST_CREATED_AT}</span>
			</div>
		</div>
	);
};

export default SidebarPlaylist;