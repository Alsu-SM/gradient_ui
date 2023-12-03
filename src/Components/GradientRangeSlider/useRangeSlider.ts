import { MutableRefObject } from 'react';

import useGradient from '../../Facades/useGradient';

export function useRangeSlider(
	sliderRefs: MutableRefObject<{ el: HTMLButtonElement | null; id: string }[]>,
	containerRef: MutableRefObject<HTMLDivElement | null>,
): { addEventListeners: () => void; removeEventListeners: () => void } {
	const { setGradientActiveColorStopPoint, setGradientActiveColorId } =
		useGradient();

	function handleMouseMove(e: any) {
		const { clientX } = e;
		if (containerRef.current) {
			const { left, width } = containerRef.current.getBoundingClientRect();
			const deltaX = Math.min(Math.max(clientX - left, 0), width);
			const percent = Math.floor((deltaX / width) * 100);
			setGradientActiveColorStopPoint(percent);
		}
	}

	const handleMouseDown = (id: string) => () => {
		window.addEventListener('mouseup', handleMouseUp);
		window.addEventListener('mousemove', handleMouseMove);
		setGradientActiveColorId(+id);
	};
	function handleMouseUp() {
		window.removeEventListener('mousemove', handleMouseMove);
		window.removeEventListener('mouseup', handleMouseUp);
	}
	function addEventListeners() {
		for (let slider of sliderRefs.current) {
			if (slider) {
				slider.el?.addEventListener('mousedown', handleMouseDown(slider.id));
			}
		}
	}
	function removeEventListeners() {
		for (let slider of sliderRefs.current) {
			if (slider) {
				slider.el?.addEventListener('mousedown', () =>
					handleMouseDown(slider.id),
				);
				slider.el?.removeEventListener('mousedown', handleMouseDown(slider.id));
			}
		}

		window.removeEventListener('mousemove', handleMouseMove);
		window.removeEventListener('mouseup', handleMouseUp);
	}

	return { addEventListeners, removeEventListeners };
}
