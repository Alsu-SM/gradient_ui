import { CSSProperties, useMemo } from 'react';
import clsx from 'clsx';

import useGradient from '../../Facades/useGradient';
import { GradientType } from '../../Models/gradient/types';
import { Theme } from '../../Shared/constants';
import GlassPanel from '../GlassPanel';
import { Angle, Circle, Ellipse } from '../Icons';

import { angles } from './constants';
import { AngleSwitcherProps } from './types';

import styles from './AngleSwitcher.module.scss';

function AngleSwitcher({ className, style }: AngleSwitcherProps) {
	const { gradient, setGradientAngle, setGradientType } = useGradient();
	const { angle, type } = gradient;

	const anglesList = useMemo(
		() =>
			angles.map((angleValue: number) => {
				const isActive: boolean =
					angleValue.toFixed(0) === ((angle + 360) % 360).toFixed(0);
				function handleButtonClick() {
					if (type !== GradientType.Linear) {
						setGradientType(GradientType.Linear);
					}
					setGradientAngle(angleValue);
				}
				return (
					<GlassPanel
						key={angleValue}
						theme={Theme.light}
						className={styles.angle_button_wrapper}
					>
						<button
							type="button"
							className={clsx(styles.angle_button, {
								[styles.angle_button__active]: isActive,
							})}
							onClick={handleButtonClick}
						>
							<Angle
								className={styles.angle_button_icon}
								style={{ '--angle': `${angleValue - 90}deg` } as CSSProperties}
							/>
						</button>
					</GlassPanel>
				);
			}),
		[angle, type],
	);
	const isCircleTypeActive: boolean = type === GradientType.Circle;
	const isEllipseTypeActive: boolean = type === GradientType.Ellipse;

	function handleCircleButtonClick() {
		setGradientType(GradientType.Circle);
	}
	function handleEllipseButtonClick() {
		setGradientType(GradientType.Ellipse);
	}

	return (
		<div className={clsx(styles.root, className)} style={style}>
			<div className={styles.group}>
				<div className={styles.title}>Preset angles:</div>
				<div className={styles.angles_lists_wrapper}>{anglesList}</div>
			</div>
			<div className={styles.group}>
				<div className={styles.title}>Gradient types:</div>
				<div className={styles.angles_lists_wrapper}>
					<GlassPanel
						key={'circle'}
						theme={Theme.light}
						className={styles.angle_button_wrapper}
					>
						<button
							type="button"
							className={clsx(
								styles.angle_button,
								styles.angle_button__radial,
								{
									[styles.angle_button__active]: isCircleTypeActive,
								},
							)}
							onClick={handleCircleButtonClick}
						>
							<Circle className={styles.angle_button_icon} />
						</button>
					</GlassPanel>
					<GlassPanel
						key={'ellipse'}
						theme={Theme.light}
						className={styles.angle_button_wrapper}
					>
						<button
							type="button"
							className={clsx(
								styles.angle_button,
								styles.angle_button__radial,
								{
									[styles.angle_button__active]: isEllipseTypeActive,
								},
							)}
							onClick={handleEllipseButtonClick}
						>
							<Ellipse className={styles.angle_button_icon} />
						</button>
					</GlassPanel>
				</div>
			</div>
		</div>
	);
}

export default AngleSwitcher;
