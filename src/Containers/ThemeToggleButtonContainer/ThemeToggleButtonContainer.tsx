import clsx from 'clsx';

import ThemeToggleButton from '../../Components/ThemeToggleButton';
import useTheme from '../../Facades/useTheme';
import { Theme } from '../../Shared/constants';

import { ThemeToggleButtonContainerProps } from './types';

import styles from './ThemeToggleButtonContainer.module.scss';

function ThemeToggleButtonContainer({
	className,
	style,
}: ThemeToggleButtonContainerProps) {
	const { theme, toggleTheme } = useTheme();
	const isDarkTheme: boolean = theme === Theme.dark;

	return (
		<ThemeToggleButton
			className={clsx(styles.root, className)}
			style={style}
			isDarkTheme={isDarkTheme}
			onThemeToggle={toggleTheme}
		/>
	);
}

export default ThemeToggleButtonContainer;
