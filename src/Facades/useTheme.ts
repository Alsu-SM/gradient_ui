import { useStore } from 'effector-react';

import { $theme, toggleThemeEvent } from '../Models/settings';
import { Theme } from '../Shared/constants';

import { ThemeFacade } from './types';

function toggleTheme() {
	toggleThemeEvent();
}

function useTheme(): ThemeFacade {
	const theme: Theme = useStore($theme);

	return { theme, toggleTheme };
}

export default useTheme;
