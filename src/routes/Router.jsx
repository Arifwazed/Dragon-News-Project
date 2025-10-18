import React from 'react';
import { createBrowserRouter } from 'react-router';
import HomeLayout from '../layouts/HomeLayout';
import Home from '../components/pages/Home';
import CategoryNews from '../components/pages/CategoryNews';

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
            }
        ]
    },
    {
        path: '/auth',
        element: <h1>Authentification Layout</h1>,
    },
    {
        path: '/news',
        element: <h1>News Layout</h1>,
    },
    {
        path: '/*',
        element: <h1>404 Error Found</h1>,
    }
])

export default Router;