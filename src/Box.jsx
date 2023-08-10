import { useState } from 'react';

const Box = ({ position, name }) => {
	// position[]: [x, y, z], name: 'A' or 'B' or else

	return (
		<mesh position={position} name={name}>
			<boxGeometry />
			<meshBasicMaterial color={0x00ff00} wireframe />
		</mesh>
	);
};

export default Box;
