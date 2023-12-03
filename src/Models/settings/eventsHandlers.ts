import { Language, SettingsParams, Theme } from '../../Shared/constants';
import { conserveParam } from '../../Utils/conserveParam';

function toggleAnimationEventHandler(state: boolean): boolean {
	const isAnimationActive: boolean = !state;
	conserveParam(SettingsParams.animation, isAnimationActive);

	return isAnimationActive;
}

function toggleLanguageEventHandler(state: Language): Language {
	const language: Language = state === Language.ru ? Language.en : Language.ru;
	conserveParam(SettingsParams.language, language);

	return language;
}

function toggleThemeEventHandler(state: Theme): Theme {
	const theme: Theme = state === Theme.light ? Theme.dark : Theme.light;
	conserveParam(SettingsParams.theme, theme);

	return theme;
}

export {
	toggleAnimationEventHandler,
	toggleLanguageEventHandler,
	toggleThemeEventHandler,
};
