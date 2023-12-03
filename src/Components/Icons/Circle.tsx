import React from 'react';

import { IconProps } from './types';

function Circle({ className, style }: IconProps) {
	return (
		<svg
			width="40"
			height="40"
			viewBox="0 0 40 40"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			style={style}
		>
			<circle cx="20" cy="20" r="17" stroke="black" strokeWidth="4" />
		</svg>
	);
}

export default Circle;
