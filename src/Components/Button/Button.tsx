import React from 'react';
import clsx from 'clsx';

import { Theme } from '../../Shared/constants';

import { ButtonProps } from './Button.interface';

import styles from './Button.module.scss';

function Button(props: ButtonProps) {
	const {
		theme = Theme.light,
		className,
		children,
		disabled,
		onClick,
		color = 'linear-gradient(90deg, #99FDFF 0%, #D1B3FF 100%)',
	} = props;
	return (
		<button
			type="button"
			onClick={onClick}
			className={clsx(styles.button, className, styles[theme], {
				[styles.disabled]: disabled,
			})}
			style={{ '--color': color } as React.CSSProperties}
			disabled={disabled}
		>
			<div className={styles.button__background} />
			<div className={styles.button__content}>{children}</div>
		</button>
	);
}

export default Button;
