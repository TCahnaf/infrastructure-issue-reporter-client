import React from 'react';
import useRole from '../hooks/useRole';
import useAuth from '../hooks/useAuth';

const AdminRoute = ({children}) => {
    const {loading} = useAuth();
    const role = useRole();

    if(loading){
        return loading
    }

    if(role !== 'admin'){
        return <div>Sorry No Access</div>
    }

    return children
   
            
      
   
};

export default AdminRoute;