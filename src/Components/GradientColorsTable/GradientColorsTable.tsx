import { CSSProperties } from 'react';
import clsx from 'clsx';

import useGradient from '../../Facades/useGradient';
import { GradientStop } from '../../Models/gradient/types';
import GlassPanel from '../GlassPanel';
import { Bin, Plus } from '../Icons';

import { GradientColorsTableProps } from './types';

import styles from './GradientColorsTable.module.scss';

function GradientColorsTable({ className }: GradientColorsTableProps) {
	const {
		gradient,
		setGradientActiveColor,
		setGradientActiveColorId,
		setGradientActiveColorStopPoint,
		deleteColor,
		addDefaultColor,
	} = useGradient();
	const { colors, activeColorId } = gradient;

	const colorsList = colors
		.sort((a, b) => a.stopPoint - b.stopPoint)
		.map((colorValue: GradientStop) => {
			const { id, color, stopPoint } = colorValue;
			const isActive: boolean = id === activeColorId;
			function handleColorChange(event: any) {
				const { value } = event.target;
				setGradientActiveColorId(id);
				setGradientActiveColor(value);
			}

			function handleStopChange(event: any) {
				const { value } = event.target;
				const parsedValue = parseFloat(value);
				if (!Number.isNaN(parsedValue)) {
					setGradientActiveColorId(id);
					setGradientActiveColorStopPoint(parsedValue);
				}
			}
			function handleMouseDown() {
				setGradientActiveColorId(id);
			}
			function handleDeleteButtonClick() {
				deleteColor(id);
			}
			return (
				<GlassPanel key={id} className={styles.gradient_colors_list_item}>
					<button
						className={clsx(styles.gradient_colors_list_item_button, {
							[styles.gradient_colors_list_item_button__active]: isActive,
						})}
						onMouseDown={handleMouseDown}
						onClick={handleMouseDown}
						onFocus={handleMouseDown}
					>
						<div
							className={styles.gradient_colors_list_item_color_label_wrapper}
						>
							<div
								className={styles.gradient_colors_list_item_color_label}
								style={{ '--color': color } as CSSProperties}
							></div>
						</div>
						<div className={styles.input_wrapper}>
							<input
								value={color}
								className={styles.input}
								onChange={handleColorChange}
								// onBlur={handleColorBlur}
							/>
						</div>
						<div className={styles.input_wrapper}>
							<input
								type="number"
								value={stopPoint}
								className={styles.input}
								onChange={handleStopChange}
							/>
						</div>
						<button
							className={styles.close_button}
							onClick={handleDeleteButtonClick}
						>
							<Bin className={styles.close_button_icon} />
						</button>
					</button>
				</GlassPanel>
			);
		});
	return (
		<div className={clsx(className, styles.gradient_colors_list)}>
			<GlassPanel className={styles.add_color_button_wrapper}>
				<button className={styles.add_color_button} onClick={addDefaultColor}>
					<Plus className={styles.add_color_button_icon} />
				</button>
			</GlassPanel>
			<div className={styles.gradient_colors_list_header}>
				<div className={styles.gradient_colors_list_header_cell}></div>
				<div className={styles.gradient_colors_list_header_cell}>HEX</div>
				<div className={styles.gradient_colors_list_header_cell}>STOP</div>
				<div className={styles.gradient_colors_list_header_cell}></div>
			</div>
			<div className={styles.gradient_colors_list_body}>{colorsList}</div>
		</div>
	);
}

export default GradientColorsTable;
