import { ReactNode } from 'react';

import { Theme } from '../../Shared/constants';

export interface ButtonProps {
	theme?: Theme;
	children: ReactNode;
	disabled?: boolean;
	onClick?: () => void;
	className?: string;
	color?: string;
}
