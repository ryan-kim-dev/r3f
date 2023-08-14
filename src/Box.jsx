import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';

const Box = ({ position, name }) => {
  const instanceRef = useRef();
  const materialRef = useRef();

  useFrame((state, delta) => {
    // useFrame 훅은 state 와 delta를 파라미터로 받는다
    // state는 현재 프레임의 상태를 나타내는 객체이다
    instanceRef.current.rotation.x += 1 * delta;
    instanceRef.current.rotation.y += 0.5 * delta;
    instanceRef.current.position.y = Math.sin(state.clock.getElapsedTime()) / 2;
  });

  return (
    <mesh position={position} name={name} ref={instanceRef}>
      <boxGeometry />
      <meshBasicMaterial color={0x00ff00} wireframe ref={materialRef} />
    </mesh>
  );
};

export default Box;
