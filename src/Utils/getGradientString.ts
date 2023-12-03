import { GradientStop, GradientType } from '../Models/gradient/types';

export function getGradientString(
	colors: GradientStop[],
	angle: number,
	gradientType: GradientType = GradientType.Circle,
): string {
	let newAngle = ((angle + 360) % 360).toFixed(0);
	let gradientString = `${gradientType}`;
	if (gradientType === GradientType.Linear) {
		gradientString += `${newAngle}deg`;
	}
	const sortedColors = colors.slice().sort((a, b) => a.stopPoint - b.stopPoint);
	for (let colorStop of sortedColors) {
		const { color, stopPoint } = colorStop;
		gradientString += `, ${color} ${stopPoint}%`;
	}
	gradientString += ')';
	return gradientString;
}
