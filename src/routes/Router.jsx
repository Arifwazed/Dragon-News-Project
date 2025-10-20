import React from 'react';
import { createBrowserRouter } from 'react-router';
import HomeLayout from '../layouts/HomeLayout';
import Home from '../components/pages/Home';
import CategoryNews from '../components/pages/CategoryNews';
import Login from '../components/pages/Login';
import Register from '../components/pages/Register';
import AuthLayout from '../layouts/AuthLayout';
import NewsDetails from '../components/pages/NewsDetails';
import PrivateRoute from '../provider/PrivateRoute';
import Loading from '../components/pages/Loading';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: '',
                element: <Home></Home>,
            },
            {
                path:'/category/:id',
                element: <CategoryNews></CategoryNews>,
                loader: () => fetch("/news.json"),
                hydrateFallbackElement: <Loading></Loading>
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>,
            },
            {
                path: '/auth/register',
                element: <Register></Register>,
            }
        ]
    },
    {
        path: '/newsDetails/:id',
        element: <PrivateRoute>
            <NewsDetails></NewsDetails>
        </PrivateRoute>,
        loader: () => fetch("/news.json"),
        hydrateFallbackElement: <Loading></Loading>
    },
    {
        path: '/*',
        element: <h1>404 Error Found</h1>,
    }
])

export default Router;