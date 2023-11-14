import { useDispatch } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import { CommitPage, loader } from './pages/CommitPage';

export function Router() {
    const dispatch = useDispatch();
    const router = createBrowserRouter([
        {
            path: '/',
            element: <App />,
        },
        {
            path: '/commit/:id',
            element: <CommitPage />,
            loader: loader(dispatch),
        },
    ]);

    return <RouterProvider router={router} />;
}
