import React from 'react';
import clsx from 'clsx';

import { ToggleProps } from './Toggle.interface';

import styles from './Toggle.module.scss';

function Toggle(props: ToggleProps) {
	const {
		theme,
		checked,
		onClick,
		className,
		checkedNode = '',
		uncheckedNode = '',
	} = props;
	return (
		<div className={clsx(styles.button, className, styles[theme])}>
			<input
				type="checkbox"
				className={clsx(styles.checkbox)}
				checked={checked}
				onChange={onClick}
			/>
			<div
				className={clsx(styles.knobs)}
				data-checked-node={checkedNode}
				data-unchecked-node={uncheckedNode}
			/>
			<div className={clsx(styles.layer)} />
		</div>
	);
}

export default Toggle;
