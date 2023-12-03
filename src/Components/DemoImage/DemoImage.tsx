import { CSSProperties } from 'react';
import clsx from 'clsx';

import useGradient from '../../Facades/useGradient';
import { getGradientString } from '../../Utils/getGradientString';

import { DemoImageProps } from './types';

import styles from './DemoImage.module.css';

function DemoImage({ className }: DemoImageProps) {
	const { gradient } = useGradient();
	const { colors, angle, type } = gradient;
	const gradientString: string = getGradientString(colors, angle, type);

	return (
		<div
			id="gradient"
			className={styles.gradient_background}
			style={{ '--gradient': gradientString } as CSSProperties}
		>
			<div className={clsx(styles.gradient_circle, className)}></div>
			<code className={styles.code}>{`background: ${gradientString}`}</code>
		</div>
	);
}

export default DemoImage;
