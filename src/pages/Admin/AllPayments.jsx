import React, { useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const AllPayments = () => {

    const axiosSecure = useAxiosSecure();
    const [sortOrder, setSortOrder] = useState("")

    const {data:payments = []} = useQuery({

        queryKey: ['payments', sortOrder],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments?sortBy${sortOrder}}`)
            return res.data;
        }

    })

     const handleSortOrder = (e) => {
        setSortOrder(e.target.value)
   
    }



    return (
        <div>

             <div className='flex flex-col space-y-2'>
             <label className = "text-2xl">
    Filter Payments
  </label>
            <select value={sortOrder} onChange = {handleSortOrder}>
                 <option value="" disabled hidden>Choose order</option>
                <option value="low">Low-High</option>
                <option value="high">High-Low</option>
               
            </select>
            </div>

            <table className="table table-zebra">
              
                    <thead>
                        <tr>
                            <th></th>
                            <th>Transaction ID</th>
                            <th>Customer Email</th>
                            <th>Amount</th>
                            <th>Currency</th>
                            <th>Payment Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payments.map((payment, index) => <tr key={payment._id}>
                                <th>{index + 1}</th>
                                <td>{payment.transactionId}</td>
                                <td>{payment.customerEmail}</td>
                                <td>{payment.amount}</td>
                                <td>{payment.currency}</td>
                                 <td>{payment.paidAt}</td>
                
                            </tr>)
                        }

                    </tbody>
                </table>






            






            
        </div>
    );
};

export default AllPayments;