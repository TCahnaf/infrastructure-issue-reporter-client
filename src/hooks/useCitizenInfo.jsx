import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useCitizenInfo = () => {

    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();

    const {data:userInfo} = useQuery({

        queryKey: ['current_user', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/user?email=${user.email}`)

            return res.data;

        }



    })



    
    return userInfo
};

export default useCitizenInfo;