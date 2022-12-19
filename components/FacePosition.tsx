import { memo, useEffect, useState } from "react"
import { FaceTracker } from "../lib/faceTracker"

export const FacePosition = memo(function FacePosition({ onNewFacePosition }: { onNewFacePosition: (pos: number[]) => void }) {

	useEffect(() => {
		console.log('FacePosition Effect')
		let interval: any;
		const faceTracker = new FaceTracker();
		faceTracker.init();
		interval = setInterval(async () => {
			const [x, y] = await faceTracker.getFacePosition();
			onNewFacePosition([x, y])
		}, 1000 / 60)
		return () => {
			if (interval) {
				clearInterval(interval)
			}
		}
	}, [onNewFacePosition])

	return (
		<video id="video" autoPlay={true}></video>
	)
}, () => true)