import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import FormatPrice from './Helpers/FormatPrice';
import TrackingDetails from './TrackingDetails';
import Header from './components/Header';
import { Button } from './Styles/Button';


const Order = () => {
  const [orders, setOrders] = useState([]);
  const userId = sessionStorage.getItem('user');
  const navigate = useNavigate();


  const formatDate = (date) => {
    const options = { weekday: 'long', day: '2-digit', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  useEffect(() => {
    axios.get(`http://localhost:5050/order/getorderbyuserid/${userId}`)
      .then(response => {
        // Convert order dates and add 7 days
        const modifiedOrders = response.data.map(order => {
          const orderDate = new Date(order.order_date);
          const expectedDeliveryDate = new Date(orderDate.getTime() + 7 * 24 * 60 * 60 * 1000);
          return { ...order, expectedDeliveryDate: formatDate(expectedDeliveryDate) };
        });
        setOrders(modifiedOrders);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, [userId]);

  const redirectToInvoice = (orderId) => {
    navigate(`/invoice/${orderId}`);
  };


  return (
    <>
      <Header />
      <Wrapper>
        <div className="order-page">
          {orders.length === 0 ? (
            <div className="no-order" style={{textAlign: "center"}}>
              <img src="IMAGE/emptycart.png" alt="" />
              <h1>No Order Found</h1>
              <br/>
              <br/>
              <Button onClick={() => navigate('/products')}>Browse Catalogue</Button>
            </div>
          ) : (
            orders.slice().reverse().map(order => (
              <div key={order.orderId} className="order-card">
                <div className="title">Purchase Receipt</div>
                <div className="info">
                  <div className="row">
                    <div className="col-7">
                      <p className="heading"><b>Order Date</b></p><br />
                      <p className="details">{order.order_date}</p>
                      <br />
                      <p className="heading"><b>Order Time</b></p><br />
                      <p className="details">{order.order_time}</p>
                      <br />
                      <p className="heading"><b>Order ID</b></p><br />
                      <p className="details">OD{order.id}</p>
                    </div>
                    <div className="col-0">
                      <img className='paid' src='./images/Order/paid.png' alt='PAID' />
                      <img className='pimage' width="170px" height="220px" src={`data:image/jpeg;base64,${order.product_image}`} /><br />
                      <div className="qty"><b>Qty: </b>{order.product_amount}</div>
                    </div>
                  </div>
                </div>
                <div className="pricing">
                  <div className="row">
                    <div className="col-9">
                      <div className="name">{order.product_name.length > 100 ? order.product_name.substring(0, 50) + '.....' : order.product_name}</div>
                      <div className='size'>
                        {['accessories', 'saree', "kid's wear"].includes(order.product_category) ? null : (
                          <p><b>Size: {order.product_size}</b></p>
                        )}
                      </div>
                    </div>
                    <TrackingDetails orderStatus={1} />
                  </div>
                  <Button className='d_invoice' onClick={() => redirectToInvoice(order.id)}>Download Invoice</Button>
                  <div className="address">
                  <div className='exdate'><b>Expected Delivery:</b> {order.expectedDeliveryDate}</div>
                    <p><b>Shipping Details</b></p>
                    <div className='addresss'>
                      <p>{order.recipient_name}</p>
                      <p>
                        {order.recipient_houseno}, {order.recipient_road_colony},
                      </p>
                      <p>
                        {order.recipient_landmark}
                      </p>
                      <p>
                        {order.recipient_city}, {order.recipient_state},
                      </p>
                      <p>
                        {order.recipient_zipcode}
                      </p>
                      <p>
                        Phone Number: {order.recipient_phnumber}
                        {order.recipient_alternativephnumber && (
                          <> , {order.recipient_alternativephnumber}</>
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <table>

                      <div>
                        <p className='priceDetails'>Price Details</p>
                      </div>

                      <tr>
                        <td>
                          MRP
                        </td>
                        <td className='nd'>
                          <FormatPrice price={(order.product_price / order.product_amount) + 250000} />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Our Price
                        </td>
                        <td className='nd'>
                          <FormatPrice price={order.product_price / order.product_amount} />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Delivery Charge
                        </td>
                        <td className='nd'>
                          <del><FormatPrice price={50000} /></del>  <span style={{ color: "green" }}>Free</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Quantity
                        </td>
                        <td className='nd'>
                          {order.product_amount}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Total Amount
                        </td>
                        <td className='nd'>
                          <FormatPrice price={order.product_price} />
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
/* Add your CSS styles here */

.d_invoice{
  font-size: 10px;
  padding: 8px;
  float: right;
  margin-right: 20px;
  background-color: #089986;
}

.exdate{
  margin-bottom: 10px;
}
.paid{
  width: 10%;
  height: 10%;
  margin-left: 60%;
  margin-top: -80%;
  margin-bottom: 4%;
}
.address{
  margin-left: 20px;
  margin-bottom: 30px;
}
.addresss{
  margin-left: 20px;
  margin-top: 10px;
}
.size{
  margin-left: 20px;
}
.priceDetails{
  font-weight: 800;
  margin-left: -10px;
}

table{
  width: 80%;
  margin-left: 30px;
}
th{
  text-align: left;
  padding: 10px;
}
td{
  text-align: left;
  padding: 10px;
}
.nd{
  text-align: right;
}
table tr:nth-child(odd) {
  background-color: #fff;
}

/* Style for even rows */
table tr:nth-child(even) {
  background-color: #f2f2f2;
}

.order-page {
  background: #ddd3;
  height: 100vh;
  display: flex;
  flex-direction: column; /* Display items vertically */
  align-items: center; /* Center items horizontally */
  font-family: Muli;
  font-size: 14px;
}

.order-card {
  margin: 20px auto; /* Add margin for spacing between cards */
  width: 80%;
  max-width: 90%;
  padding: 4vh 0;
  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-top: 3px solid #581582;
  border-bottom: 3px solid #581582;
}

.title {
  color: #0e3b9c;
  font-weight: 600;
  margin-bottom: 2vh;
  padding: 0 2%;
  font-size: 30px;
}

.heading{
  margin-left: 20px; 
}
.details{
  margin-left: 30px;  
  padding: 1;
}

.pimage{
  float: right;
  margin-top: -190px;
  margin-right: 50px;
}

.name{
  margin-top: 40px;
  margin-left: 20px;  
  margin-bottom: 30px;
  font-weight: 800;  
}

.qty{
  float: right;
  margin-top: 80px;
  margin-right: -95px;
}
/* Add more CSS styles as needed */

`;

export default Order;
