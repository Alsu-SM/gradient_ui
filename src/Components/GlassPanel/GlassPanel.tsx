import { useState } from 'react';
import clsx from 'clsx';

import { Theme } from '../../Shared/constants';
import { Angle } from '../Icons';

import { GlassPanelProps } from './types';

import styles from './GlassPanel.module.scss';

function GlassPanel({
	isExpandable,
	title,
	className,
	style,
	children,
	theme = Theme.light,
}: GlassPanelProps) {
	const [isOpen, setIsOpen] = useState<boolean>(true);

	function handleButtonClick() {
		setIsOpen(!isOpen);
	}
	return (
		<div
			className={clsx(styles.root, className, styles[theme], {
				[styles.closed]: !isOpen,
			})}
			style={style}
		>
			{(isExpandable || !!title) && (
				<div className={styles.title_row}>
					{isExpandable && (
						<button
							type="button"
							className={styles.expand_button}
							onClick={handleButtonClick}
						>
							<Angle
								className={clsx(styles.angle_icon, {
									[styles.angle_icon__closed]: !isOpen,
								})}
							/>
						</button>
					)}
					{title && <div className={styles.title}>{title}</div>}
				</div>
			)}
			{children}
		</div>
	);
}

export default GlassPanel;
