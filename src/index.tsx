import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './styles.css';

import App from './App';
import ErrorPage from './Pages/ErrorPage';
import Result from './Pages/Result';

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
            return fetch(`http://www.omdbapi.com/?apikey=247de336&i=${params.id}`)
        },
        errorElement: <ErrorPage />
    }
]);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
