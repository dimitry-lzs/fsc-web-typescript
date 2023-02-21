import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './styles.css';

import App from './App';
import ErrorPage from './Pages/ErrorPage';
import Result from './Pages/Result';
import { results } from './stores';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: 'result/:id',
        element: <Result />,
        loader: async ({ params }) => {
            return await results.getResult(params.id);
        },
        errorElement: <ErrorPage />,
    },
]);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
