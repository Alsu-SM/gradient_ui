import { CSSProperties, MutableRefObject, useEffect, useRef } from 'react';
import clsx from 'clsx';

import useGradient from '../../Facades/useGradient';
import { GradientStop, GradientType } from '../../Models/gradient/types';
import { Theme } from '../../Shared/constants';
import { getGradientString } from '../../Utils/getGradientString';
import { getPositionFromAngle } from '../../Utils/getPositionFromAngle';
import GlassPanel from '../GlassPanel';

import { GradientCircleProps } from './types';
import { useAngleSlider } from './useAngleSlider';

import styles from './GradientCircle.module.scss';

function GradientCircle({ className }: GradientCircleProps) {
	const { gradient, setGradientActiveColorId } = useGradient();
	const { colors, angle, activeColorId, type } = gradient;
	const gradientString: string = getGradientString(colors, angle, type);
	const { left, top } = getPositionFromAngle(angle);
	const sliderRef: MutableRefObject<HTMLButtonElement | null> = useRef(null);
	const containerRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

	const { addEventListeners, removeEventListeners } = useAngleSlider(
		sliderRef,
		containerRef,
	);

	const colorsList = colors.map((colorStop: GradientStop) => {
		const { id, color, stopPoint } = colorStop;
		const { left: colorLeft, top: colorTop } = getPositionFromAngle(
			360 - stopPoint * 1.8,
		);
		function handleButtonClick() {
			setGradientActiveColorId(id);
		}
		return (
			<GlassPanel
				theme={Theme.dark}
				key={id}
				className={clsx(styles.color_point_label, {
					[styles.color_point_label__active]: id === activeColorId,
				})}
				style={
					{
						'--color': color,
						'--colors-count': colors.length,
						'--color-stop-point': stopPoint,
						'--left': colorLeft,
						'--top': colorTop,
					} as CSSProperties
				}
			>
				<button
					type="button"
					className={styles.color_point_button}
					onClick={handleButtonClick}
				>
					<div className={styles.color_dot} />
					{`${color}, ${stopPoint}%`}
				</button>
			</GlassPanel>
		);
	});

	useEffect(() => {
		addEventListeners();

		return () => {
			removeEventListeners();
		};
	}, [type]);

	return (
		<div
			className={styles.gradient_background}
			style={{ '--gradient': gradientString } as CSSProperties}
		>
			<div
				className={clsx(styles.gradient_circle, className)}
				ref={containerRef}
			>
				{colorsList}
				{type === GradientType.Linear && (
					<button
						type="button"
						className={styles.angleLabel}
						style={{ '--left': left, '--top': top } as CSSProperties}
						ref={sliderRef}
					>{`${((angle + 360) % 360).toFixed(0)}°`}</button>
				)}
			</div>
		</div>
	);
}

export default GradientCircle;
