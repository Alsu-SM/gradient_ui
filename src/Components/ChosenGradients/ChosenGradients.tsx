import { CSSProperties } from 'react';
import clsx from 'clsx';

import useGradient from '../../Facades/useGradient';
import { Gradient } from '../../Models/gradient/types';
import { getGradientString } from '../../Utils/getGradientString';

import { ChosenGradientsProps } from './types';

import styles from './ChosenGradients.module.css';

function ChosenGradients({ className, style }: ChosenGradientsProps) {
	const { favoriteGradients, currentFavoriteGradientId, setGradient } =
		useGradient();
	const chosenGradients: JSX.Element[] = favoriteGradients.map(
		(favoriteGradient: Gradient) => {
			const { colors, angle, id, type } = favoriteGradient;
			const gradientString = getGradientString(colors, angle, type);
			const isActive: boolean = currentFavoriteGradientId === id;
			function handleClick() {
				setGradient(favoriteGradient);
			}
			return (
				<div
					key={gradientString}
					className={styles.chosen_gradient_button_wrapper}
				>
					<button
						type="button"
						className={clsx(styles.chosen_gradient_button, {
							[styles.chosen_gradient_button__active]: isActive,
						})}
						style={{ '--gradient': gradientString } as CSSProperties}
						onClick={handleClick}
					/>
				</div>
			);
		},
	);
	return (
		<div className={clsx(styles.root, className)} style={style}>
			<div className={styles.list}>{chosenGradients}</div>
		</div>
	);
}

export default ChosenGradients;
