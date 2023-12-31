import React from 'react';

import { IconProps } from './types';

function GripLines({ className, style }: IconProps) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			height="1em"
			viewBox="0 0 192 512"
			className={className}
			style={style}
		>
			<path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V448c0 17.7 14.3 32 32 32s32-14.3 32-32V64zm128 0c0-17.7-14.3-32-32-32s-32 14.3-32 32V448c0 17.7 14.3 32 32 32s32-14.3 32-32V64z" />
		</svg>
	);
}

export default GripLines;
