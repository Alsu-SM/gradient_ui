import React, { ReactNode } from 'react';

import { Theme } from '../../Shared/constants';

export interface GlassPanelProps {
	isExpandable?:boolean;
	title?: string;
	theme?: Theme;
	children?: ReactNode;
	className?: string;
	style?: React.CSSProperties;
}
