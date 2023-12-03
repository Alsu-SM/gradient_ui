import { CSSProperties, MutableRefObject, useEffect, useRef } from 'react';
import clsx from 'clsx';

import useGradient from '../../Facades/useGradient';
import { getGradientString } from '../../Utils/getGradientString';
import GlassPanel from '../GlassPanel';

import { GradientRangeSliderProps } from './types';
import { useRangeSlider } from './useRangeSlider';

import styles from './GradientRangeSlider.module.scss';

function GradientRangeSlider({ className }: GradientRangeSliderProps) {
	const { gradient, setGradientActiveColorId } = useGradient();
	const { type, colors, activeColorId, angle } = gradient;
	const gradientString: string = getGradientString(colors, angle, type);
	const refs: MutableRefObject<{ el: HTMLButtonElement | null; id: string }[]> =
		useRef(Array(colors.length));
	const containerRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

	const { addEventListeners, removeEventListeners } = useRangeSlider(
		refs,
		containerRef,
	);
	const colorStops = colors.map((colorValue, index) => {
		const { id, stopPoint, color } = colorValue;
		const isActive = id === activeColorId;
		const isHidden = stopPoint > 100 || stopPoint < 0;
		function handleButtonClick() {
			setGradientActiveColorId(id);
		}
		return (
			<GlassPanel
				key={id}
				className={clsx(styles.gradient_settings_color_stop, {
					[styles.gradient_settings_color_stop__active]: isActive,
					[styles.gradient_settings_color_stop__hidden]: isHidden,
				})}
				style={{ '--stop': `${stopPoint}%`, '--color': color } as CSSProperties}
			>
				<button
					className={clsx(styles.gradient_settings_color_stop_button, {
						[styles.gradient_settings_color_stop_button__active]: isActive,
					})}
					ref={(el) => (refs.current[index] = { el, id: id.toString() })}
					onClick={handleButtonClick}
				>{`${stopPoint}%`}</button>
			</GlassPanel>
		);
	});

	useEffect(() => {
		refs.current = refs.current.slice(0, colors.length);

		addEventListeners();

		return () => {
			removeEventListeners();
		};
	}, [colors.length]);
	return (
		<div
			className={clsx(styles.gradient_settings_panel, className)}
			style={{ '--gradient': gradientString } as CSSProperties}
			ref={containerRef}
		>
			{colorStops}
		</div>
	);
}

export default GradientRangeSlider;
