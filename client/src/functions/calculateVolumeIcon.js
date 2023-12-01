import { FiVolume, FiVolume1, FiVolume2, FiVolumeX } from "react-icons/fi";
import React from "react";

export const calculateVolumeIcon = (volume) => {
	if (volume > 70) {
		return <FiVolume2 className='text-gray-400 text-2xl' />;
	} else if (volume >= 30) {
		return <FiVolume1 className='text-gray-400 text-2xl' />;
	} else if (volume >= 1) {
		return <FiVolume className='text-gray-400 text-2xl' />;
	} else {
		return <FiVolumeX className='text-gray-400 text-2xl' />;
	}
}