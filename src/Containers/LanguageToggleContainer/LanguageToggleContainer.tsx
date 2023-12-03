import clsx from 'clsx';

import Toggle from '../../Components/Toggle';
import useLanguage from '../../Facades/useLanguage';
import useTheme from '../../Facades/useTheme';
import { Language } from '../../Shared/constants';

import { LanguageToggleContainerProps } from './types';

import styles from './LanguageToggleContainer.module.css';

function LanguageToggleContainer({ className }: LanguageToggleContainerProps) {
	const { language, toggleLanguage } = useLanguage();
	const { theme } = useTheme();
	const isChecked: boolean = language === Language.en;

	return (
		<Toggle
			theme={theme}
			className={clsx(styles.root, className)}
			checked={isChecked}
			checkedNode={Language.en}
			uncheckedNode={Language.ru}
			onClick={toggleLanguage}
		/>
	);
}

export default LanguageToggleContainer;
