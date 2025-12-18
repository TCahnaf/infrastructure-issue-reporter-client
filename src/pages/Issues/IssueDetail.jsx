import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import IssueCards from '../../components/IssueCards';

const IssueDetail = () => {
    const {id} = useParams();
    const axiosSecure = useAxiosSecure();
     const {data:details = []} = useQuery({

        queryKey: ['issueDetails', id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/issue-details/${id}`)
            return res.data;
        }

    })

     const {data:issueDetail} = useQuery({

        queryKey: ['issueDetails', id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/issue/${id}`)
            return res.data;
        }

    })


    return (
        <div>

            <div>

          <IssueCards issue={issueDetail} ></IssueCards>

            </div>


            
        </div>
    );
};

export default IssueDetail;