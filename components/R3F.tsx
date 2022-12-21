import { Canvas } from "@react-three/fiber";

export function R3F({ facePos }: { facePos: number[] }) {
	return (<Canvas style={{ height: 480 }}>
		<ambientLight intensity={0.5} />
		<spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
		<pointLight position={[-10, -10, -10]} />
		<mesh
			scale={3}
			rotation={[0 + facePos[1] * 2, Math.PI / 4 - facePos[0] * 1.5, 0]}
		>
			<boxGeometry args={[1, 1, 1]} />
			<meshStandardMaterial color={'hotpink'} />
		</mesh>
	</Canvas>)
}