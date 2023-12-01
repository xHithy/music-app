import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiArrowDown, FiX } from "react-icons/fi";

const UploadModal = ({
	setShowUploadModal
}) => {
	const onDrop = useCallback((acceptedFile) => {
		const file = acceptedFile[0];
		console.log(file);
	}, []);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({onDrop});

	return (
		<div className='absolute top-0 left-0 z-10 w-screen h-screen bg-black bg-opacity-70 flex items-center justify-center'>
			<div className='w-[500px] min-h-[500px] bg-gray-900 shadow rounded-xl p-6 flex flex-col space-y-3'>
				<div className='text-gray-400 text-xl font-semibold w-full flex pb-2 justify-between items-center'>
					<p>Upload music</p>
					<span
						className='cursor-pointer hover:bg-gray-800 p-1.5 rounded-full'
						onClick={() => setShowUploadModal(false)}
					>
						<FiX className='text-gray-300' />
					</span>
				</div>
				<div className='flex flex-col flex-grow justify-between w-full'>
					<div {...getRootProps()} className='w-full h-60 rounded-xl flex items-center justify-center cursor-pointer overflow-hidden bg-gray-950 shadow-xl'>
						<input {...getInputProps()} />
						{isDragActive ? (
							<div className='w-full h-full bg-gradient-to-b from-purple-500 to-blue-500 flex items-center justify-center text-gray-200 flex-col'>
								<FiArrowDown className='text-gray-200 animate-bounce text-5xl' />
								<p className='text-gray-200 text-lg'>Drop the MP3 file here</p>
							</div>
						) : (
							<div className='text-gray-400 flex flex-col items-center'>
								<FiArrowDown className='text-gray-400 text-4xl' />
								<p className='text-lg'>Drag and drop an MP3 file here</p>
							</div>
						)}
					</div>
					<div className='flex w-full justify-between bg-gray-900 h-20 text-gray-600 text-xs font-semibold whitespace-nowrap truncate space-x-1'>
						<div className='w-[45%] flex flex-col uppercase space-y-0.5'>
							<span>Title</span>
							<div className='flex flex-col space-y-1'>
								<span className='w-full bg-gray-800 h-3 animate-pulse rounded-md'></span>
								<span className='w-[70%] bg-gray-800 h-3 animate-pulse rounded-md'></span>
							</div>
						</div>
						<div className='w-[35%] flex flex-col uppercase space-y-0.5'>
							<span>Album</span>
							<span className='w-full bg-gray-800 h-3 animate-pulse rounded-md'></span>
						</div>
						<div className='w-[15%] flex flex-col uppercase space-y-0.5'>
							<span>Duration</span>
							<span className='w-full bg-gray-800 h-3 animate-pulse rounded-md'></span>
						</div>
					</div>
					<button disabled={false} className='w-1/3 bg-gradient-to-br from-purple-800 to-blue-800 text-gray-300 shadow rounded-xl p-2 font-medium text-lg self-end transition-transform duration-200 hover:scale-105'>Upload</button>
				</div>
			</div>
		</div>
	);
};

export default UploadModal;