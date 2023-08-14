import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

const Box = ({ position, name }) => {
  const ref = useRef();

  const [hovered, setHover] = useState(false);
  const [rotate, setRotate] = useState(false);

  useFrame((_, delta) => {
    if (rotate) {
      ref.current.rotation.x += 1 * delta;
      ref.current.rotation.y += 0.5 * delta;
    }
  });

  return (
    <mesh
      position={position}
      name={name}
      ref={ref}
      scale={hovered ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onPointerDown={() => setRotate(!rotate)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry />
      <meshBasicMaterial color={hovered ? 'blue' : 'green'} wireframe />
    </mesh>
  );
};

export default Box;

/*
 */
