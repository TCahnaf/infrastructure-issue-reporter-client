import React from 'react';
import useAuth from './useAuth';
import useCitizenInfo from './useCitizenInfo';

const useRole = () => {

    const userInfo = useCitizenInfo();

    return userInfo?.role || 'user';
};

export default useRole;