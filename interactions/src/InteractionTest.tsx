import { ThreeEvent } from '@react-three/fiber';
import * as THREE from 'three';

const InteractionTest = () => {
  const onClickObject = (e: ThreeEvent<MouseEvent>) => {
    const target = e.object;
    if (target instanceof THREE.Mesh) {
      target.material.color = new THREE.Color('red');
    }
  };

  const onOverObject = (e: ThreeEvent<MouseEvent>) => {
    e.object.scale.set(2, 2, 2);
  };

  const onOutObject = (e: ThreeEvent<MouseEvent>) => {
    e.object.scale.set(1, 1, 1);
  };

  return (
    <>
      <ambientLight />
      <directionalLight intensity={5} />
      <mesh
        onClick={onClickObject}
        // onContextMenu={(e) => console.log('context menu')}
        // onDoubleClick={(e) => console.log('double click')}
        // onWheel={(e) => console.log('wheel spins')}
        // onPointerUp={(e) => console.log('up')}
        // onPointerDown={(e) => console.log('down')}
        onPointerOver={onOverObject}
        onPointerOut={onOutObject}
        // onPointerEnter={(e) => console.log('enter')} // see note 1
        // // onPointerLeave={(e) => console.log('leave')} // see note 1
        // onPointerMove={(e) => console.log('move')}
        // onPointerMissed={() => console.log('missed')}
        // onUpdate={(self) => console.log('props have been updated')}
      >
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
    </>
  );
};

export default InteractionTest;
