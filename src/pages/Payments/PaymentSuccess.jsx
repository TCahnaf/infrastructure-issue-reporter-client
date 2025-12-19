import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const PaymentSuccess = () => {
    const [searchParams] = useSearchParams();

    const sessionId = searchParams.get('session_id')

    const axiosSecure = useAxiosSecure();

    
    useEffect( () => {

        if(sessionId) {
            axiosSecure.patch(`payment-success?session_id=${sessionId}`).then(res => {
                console.log(res.data)
            })
        }
    }, [sessionId, axiosSecure])


    return (
        <div className='text-white text-3xl font-bold'>
            <h1 className='text-center font-bold'>Payment has processed successfully</h1>
            <p className='text-center font-bold'>Thank you</p>
        </div>
    );
};

export default PaymentSuccess;