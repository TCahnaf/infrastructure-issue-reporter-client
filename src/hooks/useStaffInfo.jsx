import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useStaffInfo = () => {
const {user} = useAuth();
    const axiosSecure = useAxiosSecure();

    const {data:staffInfo} = useQuery({

        queryKey: ['current_staff', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/staff?email=${user.email}`)

            return res.data;

        }



    })



    
    return staffInfo
}


    

export default useStaffInfo;