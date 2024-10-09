// import { useRef } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { Stats, OrbitControls } from '@react-three/drei';
// import { useControls } from 'leva';
import * as THREE from 'three';
import Polyhedron from './Polyhedron';
import Lights from './Lights';

export default function App() {
	const texture = useLoader(THREE.TextureLoader, './img/grid.png');

	return (
		<Canvas camera={{ position: [4, 4, 1.5] }}>
			<Lights />

			<Polyhedron
				name="meshBasicMaterial"
				position={[-3, 1, 0]}
				material={
					new THREE.MeshBasicMaterial({
						map: texture,
					})
				}
			/>
			<Polyhedron
				name="meshNormalMaterial"
				position={[-1, 1, 0]}
				material={
					new THREE.MeshNormalMaterial({
						flatShading: true,
					})
				}
			/>
			<Polyhedron
				name="meshPhongMaterial"
				position={[1, 1, 0]}
				material={
					new THREE.MeshPhongMaterial({
						flatShading: true,
						map: texture,
					})
				}
			/>
			<Polyhedron
				name="meshStandardMaterial"
				position={[3, 1, 0]}
				material={
					new THREE.MeshStandardMaterial({
						flatShading: true,
						map: texture,
					})
				}
			/>

			<OrbitControls target={[0, 1, 0]} />
			<axesHelper args={[5]} />
			<Stats />
		</Canvas>
	);
}

/*
 메시 베이직 , 메시 노멀 메티리얼: 텍스쳐 적용 불가능
 
 메시 퐁, 메시 스탠더드 메티리얼: 텍스쳐 적용 가능
*/
