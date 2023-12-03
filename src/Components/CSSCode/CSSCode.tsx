import { useMemo } from 'react';
import clsx from 'clsx';

import useGradient from '../../Facades/useGradient';
import { GradientStop, GradientType } from '../../Models/gradient/types';
import { getGradientString } from '../../Utils/getGradientString';
import getGradientType from '../../Utils/getGradientType';
import { Copy } from '../Icons';

import { CSSCodeProps } from './types';

import styles from './CSSCode.module.scss';

function CSSCode({ className, style }: CSSCodeProps) {
	const {
		gradient: { angle, colors, type },
	} = useGradient();
	const gradientString: string = getGradientString(colors, angle, type);
	const gradientType: string = getGradientType(type);
	const colorsList: JSX.Element[] = useMemo(
		() =>
			colors.map((color: GradientStop, index: number) => (
				<div className={styles.code_row_wrapper} key={color.color}>
					<div className={styles.code_block}>
						<span className={styles.string_value}>{color.color}</span>
					</div>
					<div className={styles.code_block}>
						<span className={styles.number_value}>{`${color.stopPoint}%`}</span>

						{index === colors.length - 1 ? (
							<>
								<span className={styles.bracket}>{')'}</span>
								<span className={styles.coma}>{';'}</span>
							</>
						) : (
							<span className={styles.coma}>{','}</span>
						)}
					</div>
				</div>
			)),
		[colors],
	);

	const gradientRow: JSX.Element = (
		<div className={styles.code_row_wrapper}>
			<div className={styles.code_block}>
				<span className={styles.property}>{gradientType}</span>
				<span className={styles.bracket}>{'('}</span>
				{type === GradientType.Circle && (
					<>
						<span className={styles.string_value}>circle</span>
						<span className={styles.coma}>,</span>
					</>
				)}
				{type === GradientType.Ellipse && (
					<>
						<span className={styles.string_value}>ellipse</span>
						<span className={styles.coma}>,</span>
					</>
				)}
				{type === GradientType.Linear && (
					<>
						<span className={styles.number_value}>{`${(
							(angle + 360) %
							360
						).toFixed(0)}deg`}</span>
						<span className={styles.coma}>,</span>
					</>
				)}
			</div>
			{colorsList}
		</div>
	);
	return (
		<div className={clsx(styles.root, className)} style={style}>
			<button
				type="button"
				className={styles.code_row}
				onClick={() => {
					navigator.clipboard.writeText(`background: ${gradientString}`);
				}}
			>
				<code className={styles.code_row_wrapper}>
					<div className={styles.code_block}>
						<span className={styles.attribute}>background</span>
						<span className={styles.coma}>:</span>
					</div>
					{gradientRow}
				</code>
				<Copy className={styles.copy_icon} />
			</button>
			<button
				type="button"
				className={styles.code_row}
				onClick={() => {
					navigator.clipboard.writeText(gradientString);
				}}
			>
				<code>{gradientRow}</code>
				<Copy className={styles.copy_icon} />
			</button>
		</div>
	);
}

export default CSSCode;
