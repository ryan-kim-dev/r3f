
import * as THREE from 'three';
import { useThree, useFrame} from '@react-three/fiber'
import { useRef } from 'react';

export default function ThreeElement(){
    const { size, gl, scene, camera } = useThree() // This will just crash
    const boxRef = useRef<THREE.Mesh>(null);
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state, delta) => {
        // boxRef.current.rotation.x += delta;
        // boxRef.current.position.x += 0.01;
        // boxRef.current.scale.x += 0.01;
        // scene.position.x += 0.01;

        // scene.rotation.x += 0.01;
        // groupRef.current.rotation.x += delta;
    })
    
    return(
        <>
            <directionalLight position={[5,5,5]} />
            <group
                ref={groupRef}
                position={[0,0,0]}
                rotation={[
                    THREE.MathUtils.degToRad(0),
                    THREE.MathUtils.degToRad(45),
                    THREE.MathUtils.degToRad(0)
                ]}
            >
                <axesHelper args={[5]} />
                <mesh 
                    ref={boxRef}
                    position={[0,0,0]}
                    scale={[1,1,1]}
                    rotation={[
                        THREE.MathUtils.degToRad(0),
                        THREE.MathUtils.degToRad(0),
                        THREE.MathUtils.degToRad(0)
                    ]}
                >
                    <boxGeometry />
                    <meshStandardMaterial color="red" />
                </mesh>
                <mesh 
                    ref={boxRef}
                    position={[0,2,0]}
                    scale={[1,1,1]}
                    rotation={[
                        THREE.MathUtils.degToRad(0),
                        THREE.MathUtils.degToRad(0),
                        THREE.MathUtils.degToRad(0)
                    ]}
                >
                    <boxGeometry />
                    <meshStandardMaterial color="green" />
                </mesh>
                <mesh 
                    ref={boxRef}
                    position={[2,0,0]}
                    scale={[1,1,1]}
                    rotation={[
                        THREE.MathUtils.degToRad(0),
                        THREE.MathUtils.degToRad(45),
                        THREE.MathUtils.degToRad(45)
                    ]}
                >
                    <axesHelper args={[3]} />
                    <boxGeometry />
                    <meshStandardMaterial color="blue" />
                </mesh>
            </group>

        </>
    )
}