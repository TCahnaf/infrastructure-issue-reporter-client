import React, { useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';


const AllPayments = () => {
    document.title = 'user-payments'

    const axiosSecure = useAxiosSecure();
    const [sortOrder, setSortOrder] = useState("")

    const {data:payments = []} = useQuery({

        queryKey: ['payments', sortOrder],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments?sortBy=${sortOrder}`)
            return res.data;
        }

    })

     const handleSortOrder = (e) => {
        setSortOrder(e.target.value)
   
    }



    return (
        <div className='flex flex-col items-center space-y-6 '>

             <div className='flex flex-col space-y-2 bg-gray-400 w-full max-w-sm'>
             <label className = "text-2xl border-b">
    Filter Payments
  </label>
            <select value={sortOrder} onChange = {handleSortOrder}>
                 <option value="">Choose order</option>
                <option value="low">Low-High</option>
                <option value="high">High-Low</option>
               
            </select>
            </div>

            <div className="overflow-x-auto w-full max-w-[100vw]">

            <table className="table bg-blue-300">
              
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






            






            
        </div>
    );
};

export default AllPayments;