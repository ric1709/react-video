import './App.css'
import { Videojs } from '././components/video.js'
import peaksoftTeam from './assets/images/peaksoftTeam.jpg'

const videoJsOptions = {
	sources: [
		{
			src: 'https://vjs.zencdn.net/v/oceans.mp4',
			type: 'video/mp4',
		},
	],
	fluid: true,
	autoplay: 'muted',
	loop: true,
	poster: peaksoftTeam,
}

function App() {
	return (
		<div className='App'>
			<Videojs options={videoJsOptions} />
		</div>
	)
}

export default App
