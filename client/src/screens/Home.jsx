import React, {useEffect, useState} from 'react';
import Sidebar from "../components/Sidebar";
import AudioPlayerBar from "../components/AudioPlayerBar";
import ActivePlaylist from "../components/ActivePlaylist";
import PlaylistContext from "../providers/PlaylistContext";
import UploadModal from "../components/UploadModal";

const Home = () => {
	const [showUploadModal, setShowUploadModal] = useState(false);
	let playlists = ['Weeknd'];

	return (
		<>
			{ showUploadModal &&
				<UploadModal
					setShowUploadModal={setShowUploadModal}
				/>
			}
			<PlaylistContext.Provider value={playlists}>
				<div className='max-w-screen max-h-screen h-screen flex-col bg-black overflow-x-hidden'>
					<div className='flex space-x-5 pt-5 px-5 h-[87%]'>
						<Sidebar
							showUploadModal={showUploadModal}
							setShowUploadModal={setShowUploadModal}
						/>
						<ActivePlaylist />
					</div>
					<AudioPlayerBar />
				</div>
			</PlaylistContext.Provider>
		</>
	);
};

export default Home;
