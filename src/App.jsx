import { Canvas } from '@react-three/fiber';

function App() {
	return (
		<Canvas camera={{ position: [0, 0, 2] }}>
			<mesh>
				<boxGeometry />
				<meshBasicMaterial color={0x00ff00} wireframe />
			</mesh>
		</Canvas>
	);
}

export default App;
