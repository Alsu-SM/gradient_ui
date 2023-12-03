import { useStore } from 'effector-react';

import {
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
} from '../Models/gradient';
import {
	Gradient,
	GradientModel,
	GradientStop,
	GradientType,
} from '../Models/gradient/types';

import { GradientFacade } from './types';

function setGradient(value: Gradient) {
	setGradientEvent(value);
}
function setGradientColors(value: GradientStop[]) {
	setGradientColorsEvent(value);
}
function setGradientAngle(value: number) {
	setGradientAngleEvent(value);
}
function setGradientActiveColorStopPoint(value: number) {
	setActiveColorStopPointEvent(value);
}
function setGradientActiveColor(value: string) {
	setGradientActiveColorEvent(value);
}
function setGradientActiveColorId(value: number) {
	setActiveColorIdEvent(value);
}
function deleteColor(value: number) {
	deleteColorEvent(value);
}
function setGradientType(value: GradientType) {
	setGradientTypeEvent(value);
}
function addDefaultColor() {
	addDefaultColorEvent();
}
function saveGradientToFavorites() {
	saveGradientToFavoritesEvent();
}
function useGradient(): GradientFacade {
	const { gradient, favoriteGradients }: GradientModel =
		useStore($gradientModel);
	const currentFavoriteGradientId = useStore($currentFavoriteGradientId);
	return {
		gradient,
		favoriteGradients,
		currentFavoriteGradientId,
		deleteColor,
		setGradientColors,
		setGradientAngle,
		addDefaultColor,
		setGradientActiveColor,
		setGradientActiveColorId,
		setGradient,
		saveGradientToFavorites,
		setGradientType,
		setGradientActiveColorStopPoint,
	};
}

export default useGradient;
