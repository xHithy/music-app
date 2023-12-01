import React from 'react';
import {FiMusic} from "react-icons/fi";

const ActivePlaylist = () => {
	const rows = Array.from({ length: 10 }, (_, index) => (
		<tr key={index} className='hover:bg-gray-900 cursor-pointer rounded-xl'>
			<td className='px-6 py-3.5 whitespace-nowrap text-gray-500 rounded-l-xl'>{index + 1}</td>
			<td className='w-80'>
				<div className='pr-6 py-3.5 whitespace-nowrap truncate flex flex-col text-gray-500 w-80'>
					<span className='text-gray-300 w-full truncate'>Starboy</span>
					<span className='w-full truncate'>The Weeknd</span>
				</div>
			</td>
			<td className='px-6 py-3.5 whitespace-nowrap text-gray-500'>Starboy</td>
			<td className='px-6 py-3.5 whitespace-nowrap text-gray-500'>13.06.2023</td>
			<td className='px-6 py-3.5 whitespace-nowrap text-gray-500 rounded-r-xl'>3:50</td>
		</tr>
	));
	return (
		<div className='w-full flex-grow bg-gray-950 rounded-xl overflow-hidden'>
			<div className='w-full h-[35%] bg-blue-500 p-5 px-10 bg-gradient-to-t from-purple-950 to-blue-950 flex items-center space-x-6'>
				<div className='flex justify-center items-center w-40 h-40 bg-gradient-to-b from-purple-600 to-blue-600 rounded-md'>
					<FiMusic className='text-gray-300 text-7xl' />
				</div>
				<div className='flex flex-col space-y-2'>
					<span className='text-gray-300 font-semibold text-3xl'>Your uploads</span>
					<span className='text-gray-400 font-medium text-lg'>1 song</span>
				</div>
			</div>
			<div className='table-wrap flex flex-col flex-grow max-h-full max-w-full px-3 overflow-y-auto'>
				<table className='w-full divide-y divide-gray-900'>
					<thead className='text-gray-700 bg-gray-950 sticky top-0'>
						<tr>
							<th scope='col' className='text-left text-sm font-medium px-6 py-3 uppercase w-10'>#</th>
							<th scope='col' className='text-left text-sm font-medium pr-6 py-3 uppercase w-80'>Title</th>
							<th scope='col' className='text-left text-sm font-medium font-normal px-6 py-3 uppercase'>Album</th>
							<th scope='col' className='text-left text-sm font-medium px-6 py-3 uppercase'>Date added</th>
							<th scope='col' className='text-left text-sm font-medium px-6 py-3 uppercase'>Duration</th>
						</tr>
					</thead>
					<tbody>
						{rows}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default ActivePlaylist;