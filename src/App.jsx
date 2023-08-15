import { useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useControls } from 'leva';
import * as THREE from 'three';
import Polyhedron from './Polyhedron';

export default function App() {
  const polyhedron = [
    new THREE.BoxGeometry(),
    new THREE.SphereGeometry(0.785398),
    new THREE.DodecahedronGeometry(0.785398),
  ];

  const options = useMemo(() => {
    return {
      x: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
      y: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
      z: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
      visible: true,
      color: { value: '#ffffff' },
    };
  }, []);

  const polyhedronA = useControls('Polyhedron A', options);
  const polyhedronB = useControls('Polyhedron B', options);

  return (
    <Canvas camera={{ position: [-1, 1, 0] }}>
      <Polyhedron
        position={[-0.75, -0.75, 0]}
        rotation={[polyhedronA.x, polyhedronA.y, polyhedronA.z]}
        visible={polyhedronA.visible}
        color={polyhedronA.color}
        polyhedron={polyhedron}
      />
      <Polyhedron
        position={[1, 1, 0]}
        rotation={[polyhedronB.x, polyhedronB.y, polyhedronB.z]}
        visible={polyhedronB.visible}
        color={polyhedronB.color}
        polyhedron={polyhedron}
      />

      <OrbitControls target-y={1} />
    </Canvas>
  );
}

/*
	leva의 useControls를 사용하여 컨트롤러 GUI와 로직을 쉽게 구현 가능하다.
	자사 앱에서 소비자가 조작하는 뷰어 옵션 컨트롤과 쇼핑몰 관리자의 뷰어 옵션 수정 기능에 사용 가능
*/
