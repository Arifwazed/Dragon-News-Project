import React, { use } from 'react';
import { AuthContext } from './AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loading from '../components/pages/Loading';

const PrivateRoute = ({children}) => {
    const {users,loading} = use(AuthContext);
    const location = useLocation()
    console.log("From private: ",location)
    if(loading){
        return <Loading></Loading>
    }
    if(users && users?.email){
        return children
    }
    return <Navigate state={location.pathname} to="/auth/login"></Navigate> 
};

export default PrivateRoute;