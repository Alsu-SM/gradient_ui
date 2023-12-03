import { createHashRouter as createRouter } from 'react-router-dom';

import PageError from './Pages/PageError';
import App from './App';

export default createRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <PageError />,
		children: [],
	},
]);
