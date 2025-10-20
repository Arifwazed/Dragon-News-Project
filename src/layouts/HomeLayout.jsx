import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftAside from '../components/homelayout/LeftAside';
import RightAside from '../components/homelayout/RightAside';
import Loading from '../components/pages/Loading';
import { ToastContainer } from 'react-toastify';


const HomeLayout = () => {
    const {state} = useNavigation()
    return (
        <div>
            <header>
                <Header></Header>
                {/* {import.meta.env.VITE_Name} */}
                <section className='w-11/12 mx-auto my-5'>
                    <LatestNews></LatestNews>
                </section>
                <nav className='w-11/12 mx-auto my-5'>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className='w-11/12 mx-auto my-5 *:border grid grid-cols-3 md:grid-cols-12 gap-4'>
                <aside className='col-span-3 md:sticky top-0 h-fit'>
                    <LeftAside></LeftAside>
                </aside>
                <section className="main-side col-span-3 md:col-span-6">
                    {state == 'loading' ? <Loading></Loading> : <Outlet></Outlet> }
                </section>
                <aside className='col-span-3 sticky top-0 h-fit'>
                    <RightAside></RightAside>
                </aside>
            </main>
            <ToastContainer position="top-center" autoClose={2500} theme="colored"/>
        </div>
    );
};

export default HomeLayout;