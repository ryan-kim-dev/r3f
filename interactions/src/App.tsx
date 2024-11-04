import { Canvas } from '@react-three/fiber';
import InteractionTest from './InteractionTest';
import { OrbitControls } from '@react-three/drei';

function App() {
  return (
    <Canvas
      shadows
      camera={{
        position: [5, 5, 5],
      }}
    >
      <color attach="background" args={['black']} />
      <OrbitControls />
      <gridHelper />
      <axesHelper />
      <InteractionTest />
    </Canvas>
  );
}

export default App;
