import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
// import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import DashboardApp from './pages/Dashboard/DashboardApp';
import Products from './pages/Products/Products';
import Blog from './pages/Blog/Blog';
import User from './pages/User/User';
import NotFound from './pages/Page404/Page404';
import TestDashboard from './pages/TestDashboard';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    { element: <Navigate to="/login" replace /> },
    {
      children: [
        { element: <Navigate to="/login" replace /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: 'app', element: <DashboardApp /> },
        { path: 'user', element: <User /> },
        { path: 'products', element: <Products /> },
        { path: 'blog', element: <Blog /> },
        { path: 'test-dashboard', element: <TestDashboard /> }
      ]
    },
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        { path: '/', element: <Navigate to="/dashboard" /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    }
    // { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
