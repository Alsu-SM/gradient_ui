import React from 'react';

export interface ColorPalettePickerProps {
	color: string;
	onChange: (color: string) => void;
	className?: string;
	style?: React.CSSProperties;
}
