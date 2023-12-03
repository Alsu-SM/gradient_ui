import { createStore } from 'effector';

import { Language, Theme } from '../../Shared/constants';

import {
	DEFAULT_ANIMATION_STATE,
	DEFAULT_LANGUAGE,
	DEFAULT_THEME,
} from './constants';
import {
	toggleAnimationEvent,
	toggleLanguageEvent,
	toggleThemeEvent,
} from './events';

const $isAnimationActive = createStore<boolean>(DEFAULT_ANIMATION_STATE, {
	name: 'Is major background animation loop enabled',
});
const $language = createStore<Language>(DEFAULT_LANGUAGE, {
	name: 'App language',
});
const $theme = createStore<Theme>(DEFAULT_THEME, {
	name: 'App color theme',
});

export {
	$isAnimationActive,
	$language,
	$theme,
	toggleAnimationEvent,
	toggleLanguageEvent,
	toggleThemeEvent,
};
