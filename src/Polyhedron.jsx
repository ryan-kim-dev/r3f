import { useRef } from 'react';
import { useControls } from 'leva';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

export default function Polyhedron(props) {
  const ref = useRef();

  useFrame((_, delta) => {
    ref.current.rotation.x += 0.2 * delta;
    ref.current.rotation.y += 0.05 * delta;
  });

  useControls(props.name, {
    wireFrame: {
      value: false,
      onChange: (value) => {
        ref.current.material.wireframe = value;
      },
    },
    flatShading: {
      value: true,
      onChange: (value) => {
        ref.current.material.flatShading = value;
        ref.current.material.needsUpdate = true;
      },
    },
    color: {
      value: '#ffffff',
      onChange: (value) => {
        ref.current.material.color = new THREE.Color(value);
      },
    },
  });

  return (
    <mesh {...props} ref={ref}>
      <icosahedronGeometry args={[1, 1]} />
    </mesh>
  );
}
