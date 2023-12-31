import React from 'react';

import { IconProps } from './types';

function Telegram({ className, style }: IconProps) {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			style={style}
		>
			<path
				d="M4 12L8.9 13.4H9V13.3L16.1 8L15 9.2L8.8 15.8L9 19L11.9 15.8L14 20L20 4L4 12Z"
				fill="#1C2E45"
			/>
		</svg>
	);
}

export default Telegram;
