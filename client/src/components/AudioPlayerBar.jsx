import React, { useState } from 'react';
import { FiMusic, FiPlay, FiSkipBack, FiSkipForward } from "react-icons/fi";
import { calculateVolumeIcon } from "../functions/calculateVolumeIcon";

const AudioPlayerBar = () => {
	const [volume, setVolume] = useState(50);

	let volumeIcon = calculateVolumeIcon(volume);

	return (
		<div className='flex py-2 px-5 h-[12%] w-full h-20 items-center justify-between'>
			<div className='flex items-center space-x-2'>
				<div className='w-14 h-14 flex items-center justify-center bg-gradient-to-b from-purple-500 to-blue-500 rounded-md'>
					<FiMusic className='text-gray-300 text-xl' />
				</div>
				<div className='flex flex-col'>
					<span className='text-gray-300'>Starboy</span>
					<span className='text-gray-500'>The Weeknd</span>
				</div>
			</div>

			<div className='flex flex-col items-center'>
				<div className='flex justify-center items-center space-x-5 mt-2'>
					<div className='cursor-pointer'>
						<FiSkipBack className='text-gray-400 text-2xl' />
					</div>
					<div className='flex justify-center items-center w-10 h-10 shadow bg-gradient-to-b from-purple-500 to-blue-500 rounded-full cursor-pointer'>
						<FiPlay className='ml-1 text-gray-100 text-2xl' />
					</div>
					<div>
						<FiSkipForward className='text-gray-400 text-2xl cursor-pointer' />
					</div>
				</div>
				<div className='flex space-x-3 flex-grow w-full items-center'>
					<span className='text-gray-500'>0:20</span>
					<progress
						className='mt-3 w-[450px] [&::-webkit-progress-value]:rounded-xl [&::-webkit-progress-value]:bg-purple-600 [&::-webkit-progress-bar]:bg-gray-700 [&::-webkit-progress-bar]:h-1 [&::-webkit-progress-bar]:rounded-xl'
						value='10'
						max='100'
					/>
					<span className='text-gray-500'>3:50</span>
				</div>
			</div>

			<div className='flex space-x-2 items-center'>
				{volumeIcon}
				<input
					type='range'
					min='0'
					max='100'
					value={volume}
					onChange={(e) => setVolume(parseInt(e.target.value))}
					className="appearance-none bg-gray-700 rounded-xl w-28 accent-purple-600 h-1"
				/>
			</div>
		</div>
	);
};

export default AudioPlayerBar;