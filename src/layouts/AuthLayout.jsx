import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='bg-base-200 min-h-screen'>
            <div className='w-11/12 mx-auto py-10 '>
                <Navbar></Navbar>
            </div>
            <main className='w-11/12 mx-auto py-30'>
                <Outlet></Outlet>
            </main>

        </div>
    );
};

export default AuthLayout;