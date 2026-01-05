import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import FormatPrice from '../Helpers/FormatPrice';
import AdminHeader from '../components/AdminHader';

const UserCartView = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        // Extracting user ID from the URL
        const userId = window.location.pathname.split('/').pop();

        // Fetching order details for the user
        axios.get(`http://localhost:5050/cart/getcartbyuserid/${userId}`)
            .then(response => {
                setCart(response.data);
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
                {cart.length > 0 ? (
                    <table>
                        <thead>
                            <tr>
                                <th>Cart ID</th>
                                <th>Product ID</th>
                                <th>Product Details</th>
                                <th>Qty</th>
                                <th>Size</th>
                                <th>Single Product Price</th>
                                <th>Total Price</th>
                                {/* Add more table headers for other order details */}
                            </tr>
                        </thead>
                        <tbody>
                       { cart.slice().reverse().map(cartitem => (
                                <tr key={cartitem.id}>
                                    <td>{cartitem.id}</td>
                                    <td>{cartitem.p_id}</td>
                                    <td>
                                        <img className='pimage' width="170px" height="236px" src={`data:image/jpeg;base64,${cartitem.image}`} /><br />
                                        <p>{cartitem.name}</p>
                                    </td>
                                    <td>
                                        <p>{cartitem.amount}</p>
                                    </td>
                                    <td>
                                        {['accessories', 'saree', "kid's wear"].includes(cartitem.category) ? null : (
                                            <p>{cartitem.size}</p>
                                        )}
                                    </td>
                                    <td>
                                    <FormatPrice price={cartitem.price} />
                                    </td>
                                    <td>
                                    <FormatPrice price={cartitem.price * cartitem.amount} />
                                    </td>
                                    
                                    {/* Add more table cells for other order details */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <div className="centered">
                    <p>No cart item found</p>
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
export default UserCartView;
