import Layout from './components/Layout/Layout';
import ErrorPage from './pages/ErrorPage/error-page';
import SettingsPage from './pages/SettingsPage/SettingsPage';
import FailedPage from './pages/FailedPage/FailedPage';
import PassedPage from './pages/PassedPage/PassedPage';
import AddPage from './pages/AddPage/AddPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';

export const routes = [
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/settings', element: <SettingsPage /> },
      { path: '/failed', element: <FailedPage /> },
      { path: '/passed', element: <PassedPage /> },
      { path: '/add', element: <AddPage /> },
      { path: '/login', element: <LoginPage /> },
      { path: '/register', element: <RegisterPage /> },
      { path: '/forgot-pass', element: <RegisterPage /> },
    ],
  },
];
