import {
	toggleAnimationEvent,
	toggleLanguageEvent,
	toggleThemeEvent,
} from './events';
import {
	toggleAnimationEventHandler,
	toggleLanguageEventHandler,
	toggleThemeEventHandler,
} from './eventsHandlers';
import { $isAnimationActive, $language, $theme } from '.';

$isAnimationActive.on(toggleAnimationEvent, toggleAnimationEventHandler);
$language.on(toggleLanguageEvent, toggleLanguageEventHandler);
$theme.on(toggleThemeEvent, toggleThemeEventHandler);
