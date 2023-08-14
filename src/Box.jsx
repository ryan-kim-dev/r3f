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
    <mesh
      position={position}
      name={name}
      ref={instanceRef}
      onPointerDown={(e) => console.log(e.object.name)}
      onUpdate={(self) => console.log(self)}
    >
      <boxGeometry />
      <meshBasicMaterial color={0x00ff00} wireframe ref={materialRef} />
    </mesh>
  );
};

export default Box;

/* 공식문서: https://docs.pmnd.rs/react-three-fiber/api/events
 
  useFrame 훅은 state 와 delta를 파라미터로 받는다<mesh
  onClick={(e) => console.log('click')}
  onContextMenu={(e) => console.log('context menu')}
  onDoubleClick={(e) => console.log('double click')}
  onWheel={(e) => console.log('wheel spins')}
  onPointerUp={(e) => console.log('up')}
  onPointerDown={(e) => console.log('down')}
  onPointerOver={(e) => console.log('over')}
  onPointerOut={(e) => console.log('out')}
  onPointerEnter={(e) => console.log('enter')} // see note 1
  onPointerLeave={(e) => console.log('leave')} // see note 1
  onPointerMove={(e) => console.log('move')}
  onPointerMissed={() => console.log('missed')}
  onUpdate={(self) => console.log('props have been updated')}
/>

({
  ...DomEvent                   // All the original event data
  ...Intersection                 // All of Three's intersection data - see note 2
  intersections: Intersection[]    // The first intersection of each intersected object
  object: Object3D              // The object that was actually hit
  eventObject: Object3D         // The object that registered the event
  unprojectedPoint: Vector3     // Camera-unprojected point
  ray: Ray                      // The ray that was used to strike the object
  camera: Camera                // The camera that was used in the raycaster
  sourceEvent: DomEvent         // A reference to the host event
  delta: number                 // Distance between mouse down and mouse up event in pixels
}) => ...

 */
