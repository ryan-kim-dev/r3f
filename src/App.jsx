import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stats, OrbitControls } from '@react-three/drei';
import { useControls } from 'leva';
import * as THREE from 'three';
import Polyhedron from './Polyhedron';

function Lights() {
  const ambientRef = useRef();
  const directionalRef = useRef();
  const pointRef = useRef();
  const spotRef = useRef();

  useControls('Ambient Light', {
    visible: {
      value: false,
      onChange: (value) => {
        ambientRef.current.visible = value;
      },
    },
    color: {
      value: 'white',
      onChange: (value) => {
        ambientRef.current.color = new THREE.Color(value);
      },
    },
  });

  useControls('Directional Light', {
    visible: {
      value: true,
      onChange: (value) => {
        directionalRef.current.visible = value;
      },
    },
    position: {
      x: 1,
      y: 1,
      z: 1,
      onChange: (value) => {
        directionalRef.current.position.copy(value);
      },
    },
    color: {
      value: 'white',
      onChange: (value) => {
        directionalRef.current.color = new THREE.Color(value);
      },
    },
  });

  useControls('Point Light', {
    visible: {
      value: false,
      onChange: (value) => {
        pointRef.current.visible = value;
      },
    },
    position: {
      x: 2,
      y: 0,
      z: 0,
      onChange: (value) => {
        pointRef.current.position.copy(value);
      },
    },
    color: {
      value: 'white',
      onChange: (value) => {
        pointRef.current.color = new THREE.Color(value);
      },
    },
  });

  useControls('Spot Light', {
    visible: {
      value: false,
      onChange: (value) => {
        spotRef.current.visible = value;
      },
    },
    position: {
      x: 3,
      y: 2.5,
      z: 1,
      onChange: (value) => {
        spotRef.current.color = new THREE.Color(value);
      },
    },
    color: {
      value: 'white',
      onChange: (value) => {
        spotRef.current.color = new THREE.Color(value);
      },
    },
  });

  return (
    <>
      <ambientLight ref={ambientRef} />
      <directionalLight ref={directionalRef} />
      <pointLight ref={pointRef} />
      <spotLight ref={spotRef} />
    </>
  );
}

export default function App() {
  return (
    <Canvas camera={{ position: [-1, 1, 0] }}>
      <Lights />

      <Polyhedron
        name="meshBasicMaterial"
        position={[-3, 1, 0]}
        material={
          new THREE.MeshBasicMaterial({ color: 'yellow', flatShading: true })
        }
      />
      <Polyhedron
        name="meshNormalMaterial"
        position={[-1, 1, 0]}
        material={new THREE.MeshNormalMaterial({ flatShading: true })}
      />
      <Polyhedron
        name="meshPhongMaterial"
        position={[1, 1, 0]}
        material={
          new THREE.MeshPhongMaterial({ color: 'lime', flatShading: true })
        }
      />
      <Polyhedron
        name="meshStandardMaterial"
        position={[3, 1, 0]}
        material={
          new THREE.MeshStandardMaterial({
            color: 0xff0033,
            flatShading: true,
          })
        }
      />

      <OrbitControls target={[2, 2, 0]} />
      <axesHelper args={[5]} />
      <gridHelper />
      <Stats />
    </Canvas>
  );
}

/*

*/
