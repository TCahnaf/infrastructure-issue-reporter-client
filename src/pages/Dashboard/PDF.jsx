import React from 'react';
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const PDF = ({paymentInfo}) => {

    const paymentsArray = Array.isArray(paymentInfo)?paymentInfo:(paymentInfo?.result)




    const reportDownload = () => {
    const doc = new jsPDF();
    doc.text('Payment Information',20,10)
    const columns = ["#", "Customer email", "amount","Transaction Id", "Date"];
  const rows = paymentsArray.map((payment, index) => [
    index + 1,
    payment.customerEmail,
    payment.amount,
    payment.transactionId,
    payment.paidAt

  ]);

 autoTable(doc, {
    head: [columns],
    body: rows
  });

  doc.save("payments.pdf");

  }


    return (
        <div>

              <button className={`${paymentsArray?.length === 0?"hidden":"btn btn-primary"} `} onClick = {reportDownload}>Download Bill Info</button>



          

            
        </div>
    );
};

export default PDF;