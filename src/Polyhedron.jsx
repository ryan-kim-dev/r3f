import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

export default function Polyhedron({ position, polyhedron }) {
  const ref = useRef();
  const [count, setCount] = useState(0);

  console.log(polyhedron);

  useFrame((_, delta) => {
    ref.current.rotation.x += delta;
    ref.current.rotation.y += 0.5 * delta;
  });

  return (
    <mesh
      position={position}
      ref={ref}
      onPointerDown={() => {
        setCount((count + 1) % 3);
      }}
      geometry={polyhedron[count]}
    >
      <meshBasicMaterial color={'lime'} wireframe />
    </mesh>
  );
}

/*
  이전 useMemo 예제보다 더 복잡한 어플리케이션에서 동적으로 geometry를 변경하는 경우의 예제이다.
  useMemo 훅을 사용하여 geometry 인스턴스를 생성하고 캐싱하여 사용하는 대신 부모 컴포넌트에서 생성해둔 geometry 인스턴스를 props로 받아서 사용하였다.
*/
