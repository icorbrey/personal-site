import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from 'main.store';
import { routes } from 'routes';
import React from 'react';
import 'main.css';

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Provider {...{ store }}>
			<RouterProvider {...{ router }} />
		</Provider>
	</React.StrictMode>,
);
