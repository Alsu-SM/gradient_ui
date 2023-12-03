import { createStore } from 'effector';

import { DEFAULT_GRADIENT_MODEL } from './constants';
import {
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
} from './events';
import { GradientModel } from './types';
import { getCurrentFavoriteGradientId } from './utils';

const $gradientModel = createStore<GradientModel>(DEFAULT_GRADIENT_MODEL, {
	name: '',
});
const $currentFavoriteGradientId = $gradientModel.map(
	getCurrentFavoriteGradientId,
);
export {
	$currentFavoriteGradientId,
	$gradientModel,
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
