import { useRef, useState, useEffect, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Box(props) {
  const ref = useRef();
  const [count, setCount] = useState(0);
  const geometry = useMemo(
    () => [new THREE.BoxGeometry(), new THREE.SphereGeometry(0.785398)],
    []
  );

  useEffect(() => {
    console.log(ref.current.geometry.uuid);
  });

  useFrame((_, delta) => {
    ref.current.rotation.x += delta;
    ref.current.rotation.y += 0.5 * delta;
  });

  return (
    <mesh
      {...props}
      ref={ref}
      onPointerDown={() => setCount((count + 1) % 2)}
      geometry={geometry[count]}
    >
      <meshBasicMaterial color={'lime'} wireframe />
    </mesh>
  );
}

/*
	state가 바뀌더라도 모든 jsx를 재렌더링하지 않고 메모리에 있는 기존 객체를 재사용한다.
	이를 확인하기 위해 useEffect를 사용하여 콘솔에 geometry의 uuid를 출력해보면 두 상자의 uuid가 계속 같음을 확인할 수 있다.

	하지만 동적으로 어떠한 값을 변경하고 싶다면, 예를 들어 gemetry를 동적으로 변경하고 싶다면 어떻게 해야할까?
	리턴문에서 mesh 안의 <boxGeometry />를 제거하고, mesh의 geometry 속성에 geometry를 할당해보자.
	이렇게 되면, state가 바뀔 때마다 새로운 geometry 인스턴스가 생성되어 새로운 상자가 생성된다.
	이는 uuid값이 계속 바뀌는 것을 통해 확인할 수 있다.

	이렇게 되면 계속해서 메모리에 이전 인스턴스 값이 남아있다가 가비지 컬렉터에 의해 정리되는데,
	메모리를 지나치게 낭비하게 되므로 성능상 좋지 않다. 따라서 이를 개선하기 위해 useMemo 훅을 사용하여 개선해보자.

	const geometry = new THREE.BoxGeometry(); 대신에 아래와 같이 useMemo를 사용하여 geometry를 생성한다
	const geometry = useMemo(() => new THREE.BoxGeometry(), []);

	useMemo 훅은 첫 번째 인자로 콜백함수를 받는다. 이 콜백함수는 useMemo 훅이 반환하는 값이 변경될 때만 실행된다.
	다시 uuid를 확인해보면 최초 렌더링 후 캐시에 저장되었기 때문에 두 상자의 uuid가 변하지 않으며, 새로운 상자가 생성되지 않는다.

	결론: 비용이 많이 드는 리소스 집약적인 기능을 불필요하게 매번 실행하지 않고 결과를 재사용하고 싶을 때 useMemo 훅을 사용한다. 
*/
