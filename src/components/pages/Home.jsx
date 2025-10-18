import React from 'react';
import { Navigate } from 'react-router';

const Home = () => {
    return (
        // <div>
        //     <h1>Home</h1>
        // </div>
        <Navigate to="/category/0"></Navigate>
    );
};

export default Home;