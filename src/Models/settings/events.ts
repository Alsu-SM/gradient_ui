import { createEvent } from 'effector';

const toggleAnimationEvent = createEvent<void>();
const toggleLanguageEvent = createEvent<void>();
const toggleThemeEvent = createEvent<void>();

export { toggleAnimationEvent, toggleLanguageEvent, toggleThemeEvent };
