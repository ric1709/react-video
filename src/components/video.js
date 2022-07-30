/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import 'videojs-hotkeys'
import './video.css'

export const Videojs = ({ options }) => {
	const videoRef = useRef(null)
	const playerRef = useRef(null)

	useEffect(() => {
		const player = playerRef.current

		if (!player) {
			const videoElement = videoRef.current
			if (!videoElement) return

			playerRef.current = videojs(videoElement, {
				...options,
				controls: true,
				controlBar: {
					pictureInPictureToggle: false,
				  },
				plugins: {
					hotkeys: {
						seekStep: 10,
						volumeStep: 0.2,
					},
				},
			})
		}
		return () => {
			if (player) {
				player.dispose()
				playerRef.current = null
			}
		}
	}, [options, videoRef, playerRef])

	return (
		<div data-vjs-player>
			<video ref={videoRef} className='video-js vjs-big-play-centered' />
		</div>
	)
}
