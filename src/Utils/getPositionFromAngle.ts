export function getPositionFromAngle(angle: number): {
	top: number;
	left: number;
} {
	const adaptedAngle = ((-angle - 270) * Math.PI) / 180;
	const top = Math.sin(adaptedAngle);
	const left = Math.cos(adaptedAngle);

	return {
		top: top,
		left: left,
	};
}
