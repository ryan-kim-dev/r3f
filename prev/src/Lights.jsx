import { useRef } from 'react';
import { useControls } from 'leva';
export default function Lights() {
	const directionalRef = useRef();

	useControls('Directional Light', {
		intensity: {
			value: 1,
			min: 0,
			max: 5,
			step: 0.1,
			onChange: (value) => {
				directionalRef.current.intensity = value;
			},
		},

		position: {
			x: 3.3,
			y: 1.0,
			z: 4.4,
			onChange: (value) => {
				directionalRef.current.position.copy(value);
			},
		},
	});

	return (
		<>
			<directionalLight ref={directionalRef} castShadow />
		</>
	);
}
