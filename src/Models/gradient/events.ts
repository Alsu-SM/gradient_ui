import { createEvent } from 'effector';

import { Gradient, GradientStop, GradientType } from './types';

const setGradientEvent = createEvent<Gradient>();
const setGradientAngleEvent = createEvent<number>();
const setActiveColorIdEvent = createEvent<number>();
const setActiveColorStopPointEvent = createEvent<number>();
const setGradientColorsEvent = createEvent<GradientStop[]>();
const setGradientActiveColorEvent = createEvent<string>();
const setGradientTypeEvent = createEvent<GradientType>();
const deleteColorEvent = createEvent<number>();
const addDefaultColorEvent = createEvent<void>();
const saveGradientToFavoritesEvent = createEvent<void>();

export {
	addDefaultColorEvent,
	deleteColorEvent,
	saveGradientToFavoritesEvent,
	setActiveColorIdEvent,
	setActiveColorStopPointEvent,
	setGradientActiveColorEvent,
	setGradientAngleEvent,
	setGradientColorsEvent,
	setGradientEvent,
	setGradientTypeEvent,
};
