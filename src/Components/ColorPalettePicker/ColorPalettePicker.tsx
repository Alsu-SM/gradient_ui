import { Colorful, Compact, Slider } from '@uiw/react-color';
import clsx from 'clsx';

import { colorSwatch } from '../../Models/gradient/constants';
import GlassPanel from '../GlassPanel';

import { ColorPalettePickerProps } from './types';

import styles from './ColorPalettePicker.module.scss';

function ColorPalettePicker({
	className,
	color,
	onChange,
}: ColorPalettePickerProps) {
	return (
		<div className={clsx(styles.color_picker_wrapper, className)}>
			<div className={styles.color_picker}>
				<Colorful
					color={color}
					onChange={(color) => {
						onChange(color.hexa);
					}}
					className={styles.colorful}
				/>

				<GlassPanel className={clsx(styles.col, styles.compact_wrapper)}>
					<Compact
						color={color}
						colors={colorSwatch}
						onChange={(color) => {
							onChange(color.hexa);
						}}
						className={styles.swatch}
					/>
					<Slider
						color={color}
						onChange={(color) => {
							onChange(color.hexa);
						}}
						className={styles.slider}
					/>
				</GlassPanel>
			</div>
		</div>
	);
}

export default ColorPalettePicker;
