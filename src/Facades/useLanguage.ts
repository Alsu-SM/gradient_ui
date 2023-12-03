import { useStore } from 'effector-react';

import { $language } from '../Models/settings';
import { toggleLanguageEvent } from '../Models/settings';
import { Language } from '../Shared/constants';

import { LanguageFacade } from './types';

function toggleLanguage() {
	toggleLanguageEvent();
}

function useLanguage(): LanguageFacade {
	const language: Language = useStore($language);

	return { language, toggleLanguage };
}

export default useLanguage;
