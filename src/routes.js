import { Navigate, useRoutes } from 'react-router-dom';
// Layout
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
import MainLayout from './layouts/main';
// Sub Pages
import Login from './pages/Login';
import NotFound from './pages/Page404';
import Register from './pages/Register';
// Pages
import Home from './pages/Home';
import Team from './pages/Team';
import History from './pages/History';
import News from './pages/News';
// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '',
      // navbar + footer
      element: <MainLayout />,
      children: [
        // all the components inside
        { path: '/', element: <Home /> },
        { path: 'news', element: <News /> },
        { path: 'team', element: <Team /> },
        { path: 'history', element: <History /> },
      ],
    },
    {
      path: '/Home',
      element: <MainLayout />,
      children: [{ path: '', element: <Home /> }],
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to="/Home" /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
