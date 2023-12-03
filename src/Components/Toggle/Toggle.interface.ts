import { ReactNode } from 'react';

import { Theme } from '../../Shared/constants';

export type ToggleProps = {
	theme: Theme;
	checked: boolean;
	onClick: () => void;
	name?: string;
	className?: string;
	checkedNode?: ReactNode;
	uncheckedNode?: ReactNode;
};
