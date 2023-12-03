import clsx from 'clsx';
import * as htmlToImage from 'html-to-image';

import useGradient from '../../Facades/useGradient';
import Button from '../Button/Button';
import GlassPanel from '../GlassPanel';

import { ButtonsRowProps } from './types';

import styles from './ButtonsRow.module.css';

function ButtonsRow({ className, style }: ButtonsRowProps) {
	const { saveGradientToFavorites, currentFavoriteGradientId } = useGradient();
	const isSaveToFavoritesButtonDisabled: boolean = !!currentFavoriteGradientId;

	return (
		<GlassPanel className={clsx(styles.root, className)} style={style}>
			<Button
				onClick={saveGradientToFavorites}
				color="#000"
				disabled={isSaveToFavoritesButtonDisabled}
			>
				Save to favorites
			</Button>
			<Button
				onClick={() => {
					const gradient = document.getElementById('gradient');
					if (gradient) {
						htmlToImage.toPng(gradient).then(function (dataUrl) {
							// htmlToImage.download(dataUrl, 'gradient.png');
							console.log(dataUrl);
							const a = document.createElement('a'); //Create <a>
							a.href = dataUrl; //Image Base64 Goes here
							a.download = 'gradient.png'; //File name Here
							a.click(); //Downloaded file
						});
					}
				}}
				color="#000"
			>
				Save as image
			</Button>
		</GlassPanel>
	);
}

export default ButtonsRow;
