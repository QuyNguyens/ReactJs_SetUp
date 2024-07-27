import DefaultLayout from '@/components/layouts/defaultLayout';
import HeaderOnlyLayout from '@/components/layouts/headerOnlyLayout';
import History from '@/pages/History';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import { Fragment } from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from '@/contexts/UserContext';

const publicRoutes = [
    { path: '/', element: Home, layout: DefaultLayout, isLogin: true },
    { path: '/login', element: Login, layout: HeaderOnlyLayout, isLogin: false },
    { path: '/history', element: History, isLogin: false },
];

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ element: Component, layout: Layout, isAuthenticated }) => {
    const { user } = useUser();
    if (Layout == null) {
        Layout = Fragment;
    }
    return user != null ? (
        <Layout>
            <Component />
        </Layout>
    ) : !isAuthenticated ? (
        <Layout>
            <Component />
        </Layout>
    ) : (
        <Navigate to="/login" />
    );
};

export { publicRoutes, ProtectedRoute };
