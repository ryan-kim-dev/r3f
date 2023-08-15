import { Canvas } from '@react-three/fiber';
import { Stats, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import Polyhedron from './Polyhedron';

export default function App() {
  const polyhedron = [
    new THREE.BoxGeometry(),
    new THREE.SphereGeometry(0.785398),
    new THREE.DodecahedronGeometry(0.785398),
  ];

  return (
    <Canvas camera={{ position: [0, 0, 3] }}>
      <Polyhedron position={[-0.75, -0.75, 0]} polyhedron={polyhedron} />
      <Polyhedron position={[0.75, -0.75, 0]} polyhedron={polyhedron} />
      <Polyhedron position={[-0.75, 0.75, 0]} polyhedron={polyhedron} />
      <Polyhedron position={[0.75, 0.75, 0]} polyhedron={polyhedron} />
      <OrbitControls
        minAzimuthAngle={-Math.PI / 4}
        maxAzimuthAngle={Math.PI / 4}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI - Math.PI / 6}
      />
      {/* 일반 */}
      <gridHelper args={[20, 20, 'red', 'teal']} />
      {/* 피어싱 */}
      {/* <gridHelper rotation={[Math.PI / 4, 0, 0]} /> */}
      <Stats />
    </Canvas>
  );
}

/*
	gridHelper: 개발단계에서 바닥면 위치를 확인하기 위해 사용
	args: [size, divisions, color1(InnerLine), color2(OuterLine)]
	size: 격자의 길이
	divisions: 바닥면을 몇 개의 격자로 나눌 것인지를 결정
*/
