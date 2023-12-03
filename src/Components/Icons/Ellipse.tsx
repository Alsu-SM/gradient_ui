import React from 'react';

import { IconProps } from './types';

function Ellipse({ className, style }: IconProps) {
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
			<path
				d="M37 19.8C37 22.2931 35.3106 24.721 32.2134 26.5793C29.1362 28.4256 24.8205 29.6 20 29.6C15.1795 29.6 10.8638 28.4256 7.78657 26.5793C4.68943 24.721 3 22.2931 3 19.8C3 17.3069 4.68943 14.879 7.78657 13.0207C10.8638 11.1744 15.1795 10 20 10C24.8205 10 29.1362 11.1744 32.2134 13.0207C35.3106 14.879 37 17.3069 37 19.8Z"
				stroke="black"
				strokeWidth="4"
			/>
		</svg>
	);
}

export default Ellipse;
