import { useRef, useEffect } from 'react';

const Box = ({ position, name }) => {
	const instanceRef = useRef();
	const materialRef = useRef();

	useEffect(() => {
		console.log({ instanceRef, materialRef });
	}, []);

	return (
		<mesh position={position} name={name} ref={instanceRef}>
			<boxGeometry />
			<meshBasicMaterial color={0x00ff00} wireframe ref={materialRef} />
		</mesh>
	);
};

export default Box;
