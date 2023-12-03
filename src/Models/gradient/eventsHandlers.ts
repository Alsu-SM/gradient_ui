import { DEFAULT_GRADIENT_COLOR } from './constants';
import { Gradient, GradientModel, GradientStop, GradientType } from './types';
import { getActiveColorById } from './utils';

function setGradientAngleEventHandler(
	state: GradientModel,
	payload: number,
): GradientModel {
	return { ...state, gradient: { ...state.gradient, angle: payload } };
}
function setActiveColorStopPointEventHandler(
	state: GradientModel,
	payload: number,
): GradientModel {
	const { activeColor, activeColorId, colors } = state.gradient;
	const newActiveColor = { ...activeColor, stopPoint: payload };
	const newColors = colors.map((color) => {
		if (color.id === activeColorId) {
			return { ...newActiveColor };
		}

		return { ...color };
	});
	return {
		...state,
		gradient: {
			...state.gradient,
			activeColor: newActiveColor,
			colors: newColors,
		},
	};
}
function setGradientTypeEventHandler(
	state: GradientModel,
	payload: GradientType,
): GradientModel {
	return { ...state, gradient: { ...state.gradient, type: payload } };
}
function setActiveColorIdEventHandler(
	state: GradientModel,
	payload: number,
): GradientModel {
	const { colors } = state.gradient;
	const activeColor = getActiveColorById(colors, payload);

	return {
		...state,
		gradient: { ...state.gradient, activeColorId: payload, activeColor },
	};
}
function setGradientColorsEventHandler(
	state: GradientModel,
	payload: GradientStop[],
): GradientModel {
	return { ...state, gradient: { ...state.gradient, colors: payload } };
}
function setGradientActiveColorEventHandler(
	state: GradientModel,
	payload: string,
): GradientModel {
	const { colors, activeColorId, activeColor } = state.gradient;
	const newColors: GradientStop[] = colors.map((color) => {
		if (color.id === activeColorId) {
			return {
				...activeColor,
				color: payload,
			};
		}
		return { ...color };
	});
	const newActiveColor: GradientStop = { ...activeColor, color: payload };

	return {
		...state,
		gradient: {
			...state.gradient,
			colors: newColors,
			activeColor: newActiveColor,
		},
	};
}

function deleteColorEventHandler(
	state: GradientModel,
	colorId: number,
): GradientModel {
	const { activeColorId, colors, activeColor } = state.gradient;
	const newColors: GradientStop[] = colors
		.filter(({ id }) => id !== colorId)
		.map((color, index) => {
			return { ...color, id: index };
		});

	let newActiveColor: GradientStop = { ...activeColor };
	let newActiveColorId: number = activeColorId;
	if (newColors.length === 0) {
		newColors.push(DEFAULT_GRADIENT_COLOR);
	}
	if (activeColorId === colorId) {
		newActiveColor = { ...newColors[0] };
		newActiveColorId === newActiveColor.id;
	}
	return {
		...state,
		gradient: {
			...state.gradient,
			colors: newColors,
			activeColor: newActiveColor,
			activeColorId: newActiveColorId,
		},
	};
}
function addDefaultColorEventHandler(state: GradientModel): GradientModel {
	const { colors } = state.gradient;
	const newColor: GradientStop = {
		...DEFAULT_GRADIENT_COLOR,
		id: colors.length + 1,
	};
	const newColors: GradientStop[] = colors.slice();
	newColors.push(newColor);
	let newActiveColor: GradientStop = { ...newColor };
	let newActiveColorId: number = newColor.id;

	return {
		...state,
		gradient: {
			...state.gradient,
			colors: newColors,
			activeColor: newActiveColor,
			activeColorId: newActiveColorId,
		},
	};
}
function setGradientEventHandler(
	state: GradientModel,
	payload: Gradient,
): GradientModel {
	return { ...state, gradient: payload };
}
function saveGradientToFavoritesEventHandler(
	state: GradientModel,
): GradientModel {
	const newGradientsList: Gradient[] = state.favoriteGradients.slice();
	newGradientsList.push({
		...state.gradient,
		id: state.favoriteGradients.length,
	});
	return { ...state, favoriteGradients: newGradientsList };
}

export {
	addDefaultColorEventHandler,
	deleteColorEventHandler,
	saveGradientToFavoritesEventHandler,
	setActiveColorIdEventHandler,
	setActiveColorStopPointEventHandler,
	setGradientActiveColorEventHandler,
	setGradientAngleEventHandler,
	setGradientColorsEventHandler,
	setGradientEventHandler,
	setGradientTypeEventHandler,
};
