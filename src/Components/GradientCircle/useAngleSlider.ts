import { MutableRefObject } from 'react';

import useGradient from '../../Facades/useGradient';

export function useAngleSlider(
	sliderRef: MutableRefObject<HTMLButtonElement | null>,
	containerRef: MutableRefObject<HTMLDivElement | null>,
): { addEventListeners: () => void; removeEventListeners: () => void } {
	const { setGradientAngle } = useGradient();
	function handleMouseMove(e: any) {
		const { clientX, clientY } = e;
		if (containerRef.current) {
			const { top, right, bottom, left } =
				containerRef.current.getBoundingClientRect();
			const centerX = (left + right) / 2;
			const centerY = (top + bottom) / 2;
			const deltaX = clientX - centerX;
			const deltaY = clientY - centerY;
			const rad = Math.atan2(deltaY, deltaX);
			const deg = Math.floor(rad * (180 / Math.PI));
			setGradientAngle((deg - 270) % 360);
		}
	}

	function handleMouseDown() {
		window.addEventListener('mouseup', handleMouseUp);
		window.addEventListener('mousemove', handleMouseMove);
	}
	function handleMouseUp() {
		window.removeEventListener('mousemove', handleMouseMove);
		window.removeEventListener('mouseup', handleMouseUp);
	}
	function addEventListeners() {
		if (sliderRef.current) {
			sliderRef.current.addEventListener('mousedown', handleMouseDown);
		}
	}
	function removeEventListeners() {
		if (sliderRef.current) {
			sliderRef.current.removeEventListener('mousedown', handleMouseDown);
			window.removeEventListener('mousemove', handleMouseMove);
			window.removeEventListener('mouseup', handleMouseUp);
		}
	}

	return { addEventListeners, removeEventListeners };
}
