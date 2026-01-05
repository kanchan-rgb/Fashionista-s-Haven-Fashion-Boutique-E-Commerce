import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import FormatPrice from '../Helpers/FormatPrice';
import AdminHeader from '../components/AdminHader';

const UserOrderView = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        // Extracting user ID from the URL
        const userId = window.location.pathname.split('/').pop();

        // Fetching order details for the user
        axios.get(`http://localhost:5050/order/getorderbyuserid/${userId}`)
            .then(response => {
                setOrders(response.data);
            })
            .catch(error => {
                console.error('Error fetching orders:', error);
            });
    }, []);

    return (
        <>
        <AdminHeader/>
        <Wrapper>
            <div>
                {orders.length > 0 ? (
                    <table>
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Order Date</th>
                                <th>Order Time</th>
                                <th>Product ID</th>
                                <th>Product Details</th>
                                <th>Qty</th>
                                <th>Size</th>
                                <th>Total Price</th>
                                <th>Shipping Details</th>
                                {/* Add more table headers for other order details */}
                            </tr>
                        </thead>
                        <tbody>
                       { orders.slice().reverse().map(order => (
                                <tr key={order.id}>
                                    <td>{order.id}</td>
                                    <td>{order.order_date}</td>
                                    <td>{order.order_time}</td>
                                    <td>{order.p_id}</td>
                                    <td>
                                        <img className='pimage' width="170px" height="236px" src={`data:image/jpeg;base64,${order.product_image}`} /><br />
                                        <p>{order.product_name}</p>
                                    </td>
                                    <td>
                                        <p>{order.product_amount}</p>
                                    </td>
                                    <td>
                                        {['accessories', 'saree', "kid's wear"].includes(order.product_category) ? null : (
                                            <p>{order.product_size}</p>
                                        )}
                                    </td>
                                    <td>
                                    <FormatPrice price={order.product_price} />
                                    </td>
                                    <td>
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
                                    </td>
                                    {/* Add more table cells for other order details */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <div className="centered">
                    <p>No order found</p>
                  </div>
                )}
            </div>
        </Wrapper>
        </>
    );
};

const Wrapper = styled.section`

.centered {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30vh; /* Adjust as needed */
  }
  
  .centered p {
    text-align: center;
    font-size: 30px;
    text-weight: 800;
    color: red;
    text-transform: uppercase;
  }

table{
    width: 96%;
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 20px;
    border: 2px solid purple;
    border-collapse: collapse;
  }
  th, td{
    padding: 5px;
    border: 1px solid purple;
    text-align: center;
    color: black;
    font-size: 15px;
  }
`
export default UserOrderView;
