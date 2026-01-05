import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import axios from 'axios';
import { Button } from './Styles/Button';
import FormatPrice from './Helpers/FormatPrice';
import QR from './LOGO/QR.png';
import LogoImage from './LOGO/L1.png'; // Import your logo image

const Invoice = () => {
  const { id } = useParams();
  const [order, setOrder] = useState();
  const [invoiceNumber, setInvoiceNumber] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5050/order/getorderbyid/${id}`)
      .then(response => {
        setOrder(response.data);
        generateInvoiceNumber();
        downloadInvoice();
      })
      .catch(error => {
        console.error('Error fetching order:', error);
      });
  }, [id]);

  const downloadInvoice = async () => {
    const invoiceContainer = document.getElementById('invoice-container');
  
  
    // Wait for both the image to load and html2canvas to finish rendering
    await Promise.all([html2canvas(invoiceContainer, { dpi: 700 })])
      .then(async ([canvas]) => {
        const imgData = canvas.toDataURL('image/png');
  
        // Calculate dimensions for landscape PDF
        const pdf = new jsPDF('l', 'mm', 'a4'); // 'l' for landscape
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight()-40;
  
        // Add image to cover the full page
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('invoice.pdf');
        navigate('/order');
      })
      .catch((error) => {
        console.error('Error generating PDF:', error);
      });
  };
  

  const getCurrentDate = () => {
    const currentDate = new Date();
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return currentDate.toLocaleDateString('en-US', options);
  };

  const generateInvoiceNumber = () => {
    const alphanumeric = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = alphanumeric.length;
    for (let i = 0; i < 12; i++) {
      result += alphanumeric.charAt(Math.floor(Math.random() * charactersLength));
    }
    setInvoiceNumber(result);
  };

  return (
    <div>
      {order ? (
        <InvoiceContainer id="invoice-container">
          <Header>
            <h1>Tax Invoice</h1>
            <p><b>Sold By:</b> Fashionista's Haven Retail Private Limited</p>
            <div>
              <p>
                <b>Ship-from Address: </b>
                Block DP, Plot, 6, Salt Lake Bypass,BN Block, Sector V, <br />Bidhannagar, Kolkata, West Bengal 700091
              </p>
            </div>
            <div className='invoicenumber' style={{fontSize: "15px"}}>
              <b>Invoice Number #</b>{invoiceNumber}
            </div>
          </Header>
          <InvoiceDetails>
            <table>
              <tbody>
                <tr>
                  <td>
                    Order Id: OD{order.id}
                    <br />
                    <br />
                    Order Date: {order.order_date}
                  </td>
                  <td>
                    Invoice Date: {getCurrentDate()}
                  </td>
                  <td style={{ borderRight: 'none' }}>
                    GSTIN: 09AGLPT0535C1ZF
                    <br />
                    <br />
                    PAN: SFFADFADA
                  </td>
                </tr>
                <tr style={{ border: 'none' }}>
                  <td style={{ border: 'none', lineHeight: '1.5' }}>
                    <b>Sold By</b><br />
                    Fashionista's Haven Retail Private Limited<br />
                    27, Karl Marx Sarani Rd,<br />
                    Khidirpur, Kolkata,<br />
                    West Bengal 700023
                  </td>
                  <td style={{ border: 'none', lineHeight: '1.5' }}>
                    <b>Shipping Address</b><br />
                    <div className="address">
                      <div style={{ fontSize: '13px' }}>
                        <p style={{ fontSize: '13px' }}>{order.recipient_name}</p>
                        <p style={{ fontSize: '13px' }}>
                          {order.recipient_houseno}, {order.recipient_road_colony},
                        </p>
                        <p style={{ fontSize: '13px' }}>
                          {order.recipient_landmark}
                        </p>
                        <p style={{ fontSize: '13px' }}>
                          {order.recipient_city}, {order.recipient_state},
                        </p>
                        <p style={{ fontSize: '13px' }}>
                          {order.recipient_zipcode}
                        </p>
                        <p style={{ fontSize: '13px' }}>
                          Phone Number: {order.recipient_phnumber}
                          {order.recipient_alternativephnumber && (
                            <> , {order.recipient_alternativephnumber}</>
                          )}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td style={{ border: 'none', lineHeight: '1.5' }}>
                    <b>Billing Address</b><br />
                    <div className="address">
                      <div style={{ fontSize: '13px' }}>
                        <p style={{ fontSize: '13px' }}>{order.recipient_name}</p>
                        <p style={{ fontSize: '13px' }}>
                          {order.recipient_houseno}, {order.recipient_road_colony},
                        </p>
                        <p style={{ fontSize: '13px' }}>
                          {order.recipient_landmark}
                        </p>
                        <p style={{ fontSize: '13px' }}>
                          {order.recipient_city}, {order.recipient_state},
                        </p>
                        <p style={{ fontSize: '13px' }}>
                          {order.recipient_zipcode}
                        </p>
                        <p style={{ fontSize: '13px' }}>
                          Phone Number: {order.recipient_phnumber}
                          {order.recipient_alternativephnumber && (
                            <> , {order.recipient_alternativephnumber}</>
                          )}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td style={{ border: 'none' }}>
                    <div style={{ textAlign: 'center' }}>
                      <img width="150px" height="150px" style={{ marginBottom: '-20px' }} src={QR} alt="QR Code" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </InvoiceDetails>
          <ProductDetails>
            <table>
              <tr>
                <th>Product Details</th>
                <th>Qty</th>
                {order.product_category !== 'accessories' && order.product_category !== 'saree' && order.product_category !== "kid's wear" ? <th>Size</th> : null}
                <th>MRP</th>
                <th>Discount</th>
                <th style={{ borderRight: "none" }}>Total (Including Tax)</th>
              </tr>
              <tr>
                <td>
                  <img src={`data:image/jpeg;base64,${order.product_image}`} style={{ width: "100px", height: "150px" }} />
                  <p style={{ fontSize: "12px" }}>{order.product_name}</p>
                </td>
                <td>{order.product_amount}</td>
                {order.product_category !== 'accessories' && order.product_category !== 'saree' && order.product_category !== "kid's wear" ? <td>{order.product_size}</td> : null}
                <td> <FormatPrice price={(order.product_price / order.product_amount) + 250000} /></td>
                <td>{Math.floor(((((order.product_price / order.product_amount) + 250000) - (order.product_price)) / ((order.product_price / order.product_amount) + 250000)) * 100)}%</td>
                <td><FormatPrice price={order.product_price} /></td>
              </tr>
              <tr>
              {order.product_category !== 'accessories' && order.product_category !== 'saree' && order.product_category !== "kid's wear" ? 
               <td colSpan={3}>Shipping & Handling Charges</td>
              : 
              <td colSpan={2}>Shipping & Handling Charges</td>}
                
              
                <td><FormatPrice price={50000} /></td>
                <td>100%</td>
                <td><FormatPrice price={0} /></td>
              </tr>
              <tr>
              {order.product_category !== 'accessories' && order.product_category !== 'saree' && order.product_category !== "kid's wear" ? 
              <td colSpan={6} className='tot'><p>Total Price : <span><FormatPrice price={order.product_price} /></span></p></td> 
              : 
              <td colSpan={5} className='tot'><p>Total Price : <span><FormatPrice price={order.product_price} /></span></p></td>}
                
              </tr>
            </table>
          </ProductDetails>
          <InvoiceFootre>
            <img style={{ width: "170px", marginTop: "30px" }} src={LogoImage} alt="Company Logo" />
            <div className='auth'>
              <p>Ordered Through</p>
              <img style={{ width: "100px" }} src='../images/Signature.jpg' />
              <p><b> Fashionista's Haven Retail Private Limited</b></p>
              <p>Authorized Signature</p>
            </div>
          </InvoiceFootre>
        </InvoiceContainer>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

const InvoiceFootre = styled.div`
.auth{
  text-align: right;
}
`
const ProductDetails = styled.div`

.tot{
  text-align: right;
}
.tot p{
  font-size: 15px;
  margin: 0 70px;
  font-weight: 900;
}
.tot span{
  color: green;
}
table {
  width: 100%;
  margin-left: 15px;
  border-collapse: collapse;
}

tr {
  border-bottom: 1px solid gray;
  font-size: 15px;
}

td {
  border: none;
  padding: 10px;
  text-align: center;
  font-size: 15px;
}
th {
  border-right: 1px solid gray;
  padding: 10px;
}
`

const InvoiceContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const Header = styled.div`
  
  margin-bottom: 30px;

  h1 {
    margin: 0;
    text-align: center;
    font-size: 26px;
    margin-bottom: 20px;
  }

  p {
    margin: 5px 0;
    
  }

  .invoicenumber{
    border: 2px solid black;
    float: right;
    padding: 6px;
    margin-top: -50px;
  }

`;

const InvoiceDetails = styled.div`
  .address {
    font-size: 13px;
  }
  table {
    width: 100%;
    margin-left: 15px;
    margin-bottom: 100px;
    border-collapse: collapse;
}

tr {
    border-bottom: 1px solid gray;
}

td {
    border-right: 1px solid gray;
    padding: 10px;
    font-size: 15px;
}
`;

export default Invoice;
