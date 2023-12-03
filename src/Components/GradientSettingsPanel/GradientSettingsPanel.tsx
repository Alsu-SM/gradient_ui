import { useState } from 'react';
import clsx from 'clsx';

import useGradient from '../../Facades/useGradient';
import AngleSwitcher from '../AngleSwitcher';
import ButtonsRow from '../ButtonsRow';
import ChosenGradients from '../ChosenGradients';
import ColorPalettePicker from '../ColorPalettePicker';
import CSSCode from '../CSSCode';
import GlassPanel from '../GlassPanel';
import GradientColorsTable from '../GradientColorsTable';
import GradientRangeSlider from '../GradientRangeSlider';
import { Plus } from '../Icons';

import { GradientSettingsPanelProps } from './types';

import styles from './GradientSettingsPanel.module.scss';

function GradientSettingsPanel({ className }: GradientSettingsPanelProps) {
	const [isHidden, setIsHidden] = useState<boolean>(false);
	const { gradient, setGradientActiveColor } = useGradient();
	const { activeColor } = gradient;

	function handleCloseButtonClick() {
		setIsHidden(!isHidden);
	}

	return (
		<GlassPanel
			className={clsx(styles.settings, className, {
				[styles.hidden]: isHidden,
			})}
		>
			<div className={styles.settings_row}>
				<GradientRangeSlider />
			</div>

			<div className={styles.wrapper}>
				<GlassPanel
					className={styles.settings_row}
					title="CSS code:"
					isExpandable
				>
					<CSSCode />
				</GlassPanel>
				<GlassPanel
					className={clsx(
						styles.add_color_button_wrapper,
						styles.close_panel_button_wrapper,
					)}
				>
					<button
						className={styles.add_color_button}
						onClick={handleCloseButtonClick}
					>
						<Plus
							className={clsx(
								styles.add_color_button_icon,
								styles.close_panel_button_icon,
							)}
						/>
					</button>
				</GlassPanel>

				<GlassPanel
					className={styles.settings_row}
					title="Favorite gradients:"
					isExpandable
				>
					<ChosenGradients />
				</GlassPanel>
				<GlassPanel
					className={styles.settings_row}
					title="Color panel:"
					isExpandable
				>
					<ColorPalettePicker
						color={activeColor.color}
						onChange={(color) => setGradientActiveColor(color)}
						className={styles.color_picker__start}
					/>
				</GlassPanel>
				<GlassPanel className={styles.settings_row}>
					<AngleSwitcher />
				</GlassPanel>

				<GlassPanel
					className={styles.settings_row}
					title="Colors settings:"
					isExpandable
				>
					<GradientColorsTable />
				</GlassPanel>
			</div>
			<ButtonsRow />
		</GlassPanel>
	);
}

export default GradientSettingsPanel;
