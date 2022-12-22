import { Canvas } from '@react-three/fiber'

export function R3F({ facePos }: { facePos: number[] }) {
	const [x, y] = facePos
	return (
		<Canvas style={{ height: 480 }}>
			<ambientLight intensity={0.5} />
			<spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
			<mesh
				scale={3}
				rotation={[y * 2, Math.PI / 4 - x * 1.5, 0]}
			>
				<boxGeometry arg={[1, 1, 1]} />
				<meshStandardMaterial color={'hotpink'} />
			</mesh>
		</Canvas>
	)
}