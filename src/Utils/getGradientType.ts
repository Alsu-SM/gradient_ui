import { GradientType } from '../Models/gradient/types';
const gradientTypeLabels = new Map<GradientType, string>([
	[GradientType.Circle, 'radial-gradient'],
	[GradientType.Ellipse, 'radial-gradient'],
	[GradientType.Linear, 'linear-gradient'],
]);

function getGradientType(type: GradientType): string {
	return gradientTypeLabels.get(type) || '';
}

export default getGradientType;
