import { DEFAULT_GRADIENT_COLOR } from './constants';
import { Gradient, GradientModel, GradientStop } from './types';

export function getActiveColorById(
	colors: GradientStop[],
	activeColorId: number,
): GradientStop {
	const colorIndex: number = colors.findIndex(({ id }) => id === activeColorId);

	if (colorIndex === -1) {
		return DEFAULT_GRADIENT_COLOR;
	}

	return colors[colorIndex];
}
function checkAreGradientsEqual(
	gradientA: Gradient,
	gradientB: Gradient,
): boolean {
	const { type: typeA, colors: colorsA, angle: angleA } = gradientA;
	const { type: typeB, colors: colorsB, angle: angleB } = gradientB;
	if (typeA !== typeB) {
		return false;
	}
	if (angleA !== angleB) {
		return false;
	}
	if (JSON.stringify(colorsA.sort()) !== JSON.stringify(colorsB.sort())) {
		return false;
	}

	return true;
}

export function getCurrentFavoriteGradientId(
	gradientModel: GradientModel,
): number | null {
	const { gradient, favoriteGradients } = gradientModel;
	let result: number | null = null;
	favoriteGradients.forEach((favoriteGradient: Gradient) => {
		const areGradientsEqual = checkAreGradientsEqual(
			gradient,
			favoriteGradient,
		);
		if (areGradientsEqual && !result) {
			result = favoriteGradient.id;
		}
	});
	return result;
}
