import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import Polyhedron from './Polyhedron';

export default function App() {
  const polyhedron = [
    new THREE.BoxGeometry(),
    new THREE.SphereGeometry(0.785398),
    new THREE.DodecahedronGeometry(0.785398),
  ];

  return (
    <Canvas camera={{ position: [-1, 1, 0] }}>
      <color attach="background" args={['#fff']} />
      <directionalLight position={[1, 1, 1]} />
      <Polyhedron
        name="meshBasicMaterial"
        position={[-3, 1, 0]}
        material={new THREE.MeshBasicMaterial()}
      />
      <Polyhedron
        name="meshNormalMaterial"
        position={[-1, 1, 0]}
        material={new THREE.MeshNormalMaterial()}
      />
      <Polyhedron
        name="meshPhongMaterial"
        position={[1, 1, 0]}
        material={new THREE.MeshPhongMaterial()}
      />
      <Polyhedron
        name="meshStandardMaterial"
        position={[3, 1, 0]}
        material={new THREE.MeshStandardMaterial()}
      />
      <OrbitControls target-y={1} />
    </Canvas>
  );
}

/*
	meshBasicMaterial, meshNormalMaterial 은 조명에 반응하지 않는 대신 렌더링 되는 속도가 빠르다.
	
	meshNormalMaterial 은 씬을 만드는 중인 개발단계에서 사용하면 디버깅에 용이하다.
	항상 카메라를 기준으로 상단부는 하늘생, 하단부는 보라색이다.

	meshPhongMaterial과 meshStandardMaterial 은 조명이 있어야만 재질을 표현할 수 있다.
	조명이 없는 경우 물체가 검은색으로 나타난다.

	meshStandardMaterial 은 가장 현실적으로 보여지지만 가장 비용이 많이 드는 재질이다.
	즉 렌더링되는 매 프레임마다 가장 많은 처리를 요구한다. 메시 스탠다드 재질의 모든 추가 기능이 굳이 필요한지 생각해볼 필요가 있다.
	따라서 표현하려는 모습이 메시 베이직, 노말, 퐁 재질로도 충분하다면 굳이 사용할 필요는 없다.


	주의: wireframe과 flatShading을 동시에 적용하면 물체가 안보인다.

	위와 같이 App.jsx 코드가 구성되어 있을 때, Polyhedron.jsx 코드에서 useControls를 사용할 때
	변화가 생길 때마다 매번 모든 App.jsx 코드를 재렌더링 하는 것이 아니라 해당하는 값만 재렌더링 한다.
*/
