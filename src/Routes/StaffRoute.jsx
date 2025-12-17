import React from 'react';
import useRole from '../hooks/useRole';
import useAuth from '../hooks/useAuth';

const StaffRoute = ({children}) => {
    const {loading} = useAuth();
    const role = useRole();

    if(loading){
        return loading
    }

    if(role !== 'staff'){
        return <div>Sorry you have invoked unauthorized access</div>
    }

    return children


   
};

export default StaffRoute;