import { useRouteError } from 'react-router-dom';
import clsx from 'clsx';

import { GlassPanel } from '../../Components';
import useTheme from '../../Facades/useTheme';

import { DefaultRouterError } from './types';

import styles from './PageError.module.scss';

function PageError() {
	const routerError: DefaultRouterError = useRouteError() as DefaultRouterError;
	const { theme } = useTheme();

	return (
		<div className={clsx('page')}>
			<GlassPanel
				className={clsx(styles.root, styles.glass_panel, styles[theme])}
				theme={theme}
			>
				<p>Произошла непредвиденная ошибка.</p>
				<p>
					<i>{routerError.statusText || routerError.message}</i>
				</p>
			</GlassPanel>
		</div>
	);
}

export default PageError;
