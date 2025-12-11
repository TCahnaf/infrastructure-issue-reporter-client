import React from 'react';
import Loading from '../components/Loading';
import useAuth from '../hooks/useAuth';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {

    const {user, loading} = useAuth();

    if(loading) {
        return <Loading></Loading>
    }

    if(user) {
        return children
    }


    return (
        <div>
            <Navigate state={{from:location.pathname}} to = "/login"></Navigate>
            
        </div>
      
    );
};

export default PrivateRoute;