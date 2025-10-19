import React, { use } from 'react';
import { AuthContext } from './AuthContext';
import { Navigate } from 'react-router';
import Loading from '../components/pages/Loading';

const PrivateRoute = ({children}) => {
    const {users,loading} = use(AuthContext);
    if(loading){
        return <Loading></Loading>
    }
    if(users && users?.email){
        return children
    }
    return <Navigate to="/auth/login"></Navigate> 
};

export default PrivateRoute;