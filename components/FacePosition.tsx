import { memo, useEffect } from "react"
import { FaceTracker } from "../lib/faceTracker";

export const FacePosition = memo(function FacePosition({ onNewFacePosition }: { onNewFacePosition: (pos: number[]) => void }) {

	useEffect(() => {
		console.log('facePosition effect');
		const faceTracker = new FaceTracker()
		faceTracker.init()
		const interval = setInterval(async () => {
			const [x, y] = await faceTracker.getFacePosition()
			console.log('face pos', x, y)
			onNewFacePosition([x, y])
		}, 1000 / 60)
		return () => {
			clearInterval(interval)
		}
	}, [onNewFacePosition])

	return <video id='video' autoPlay={true}></video>
}, () => true)