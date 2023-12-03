import { Outlet } from 'react-router-dom';
import clsx from 'clsx';

import DemoImage from '../Components/DemoImage';
import GradientCircle from '../Components/GradientCircle';
import GradientSettingsPanel from '../Components/GradientSettingsPanel';

import styles from './App.module.scss';

function App() {
	return (
		<div className={clsx(styles.root)}>
			<div className={styles.overlay}>
				<GradientCircle />
				<GradientSettingsPanel />
			</div>
			<DemoImage />
			<Outlet />
		</div>
	);
}

export default App;
