import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import './main.css';
import { Home } from './pages/Home';
import { Root } from './pages/Root';
import { Error } from './pages/Error';

const router = createBrowserRouter([
  	{
        path: "/",
        Component: Root,
        ErrorBoundary: Error,
        children: [
            { index: true, Component: Home },
        ]
  	},
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
);
