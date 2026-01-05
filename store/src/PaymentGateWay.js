import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import FormatPrice from './Helpers/FormatPrice';
import { Button } from './Styles/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faBuildingColumns, faWallet } from '@fortawesome/free-solid-svg-icons';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const PaymentGateway = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const totalprice = localStorage.getItem("totalprice");
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchCartById = async (cartId) => {
    try {
      const cartResponse = await fetch(`http://localhost:5050/cart/getcartbyid/${cartId}`);
      const cartData = await cartResponse.json();
      return cartData;
    } catch (error) {
      console.error(`Error fetching cart ${cartId}:`, error);
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const cartItemIdsString = localStorage.getItem("cartItemIds");
    const cartItemIds = JSON.parse(cartItemIdsString);
    const addressId = localStorage.getItem('selectedAddressId');
    const userId = parseInt(sessionStorage.getItem('user'), 10);
    const userEmail = sessionStorage.getItem('userEmail');
    setLoading(true);
    try {
      for (const cartId of cartItemIds) {
        const cartData = await fetchCartById(cartId);
        if (cartData) {
          // Fetch address data
          const addressResponse = await fetch(`http://localhost:5050/useraddress/getaddressbyid/${addressId}`);
          const addressData = await addressResponse.json();

          const currentDate = new Date();
          const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
          ];

          const day = currentDate.getDate();
          const monthIndex = currentDate.getMonth();
          const year = currentDate.getFullYear();
          const formattedDate = day + " " + monthNames[monthIndex] + " " + year;

          // Construct payload for the current cart item
          const payload = {
            userid: userId,
            useremail: userEmail,
            p_id: cartData.p_id,
            product_size: cartData.size,
            product_image: cartData.image,
            product_amount: cartData.amount,
            product_imagelink: cartData.imagelink,
            product_name: cartData.name,
            product_price: cartData.price * cartData.amount,
            product_category: cartData.category,
            recipient_name: addressData.name,
            recipient_phnumber: addressData.phnumber,
            recipient_alternativephnumber: addressData.alternativephnumber,
            recipient_zipcode: addressData.zipcode,
            recipient_state: addressData.state,
            recipient_city: addressData.city,
            recipient_houseno: addressData.houseno,
            recipient_road_colony: addressData.road_colony,
            recipient_landmark: addressData.landmark,
            order_time: new Date().toLocaleTimeString(),
            order_date: formattedDate,
            // Add any additional data needed for the order
          };

          // Send POST request to order API for the current cart item
          const orderResponse = await fetch('http://localhost:5050/order/addNewOrder', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
          });

          if (orderResponse.ok) {
            // Fetch product details
            const productResponse = await fetch(`http://localhost:5050/products/getproductbyid${cartData.p_id}`);
            const productData = await productResponse.json();

            // Decrement product quantity
            const updatedQuantity = productData.stock - cartData.amount;

            // Send PUT request to update product quantity
            const updateResponse = await fetch(`http://localhost:5050/products/updateQuantity/${cartData.p_id}`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ stock: updatedQuantity }),
            });

            if (updateResponse.ok) {
              console.log(`Product quantity updated for product ${cartData.p_id}`);
              // Delete the current cart item from the cart API
              const deleteResponse = await fetch(`http://localhost:5050/cart/deleteCart/${cartId}`, {
                method: 'DELETE',
              });

              if (deleteResponse.ok) {
                console.log(`Cart item ${cartId} deleted successfully from the cart API.`);
              } else {
                console.error(`Failed to delete cart item ${cartId} from the cart API:`, deleteResponse.statusText);
              }
            } else {
              console.error(`Failed to update product quantity for product ${cartData.p_id}:`, updateResponse.statusText);
            }
          } else {
            console.error(`Failed to place order for cart item ${cartId}:`, orderResponse.statusText);
          }
        }
      }
      setLoading(false);
      window.location.href = '/payment-success';
    } catch (error) {
      console.error('Error:', error);
      setLoading(false);
    }
  }










  const handleMethodChange = (method) => {
    setPaymentMethod(method);
  };


  const handleCardNumberChange = (e) => {
    const formattedNumber = formatCardNumber(e.target.value);
    setCardNumber(formattedNumber);
  };

  const formatCardNumber = (input) => {
    // Remove non-numeric characters
    const numericInput = input.replace(/\D/g, '');

    // Divide the input into groups of 4 digits
    const formattedInput = numericInput.replace(/(\d{4})/g, '$1 ').trim();

    return formattedInput;
  };

  const handleExpiryDateChange = (date) => { // Use 'date' parameter from DatePicker
    setExpiryDate(date);
  };


  const handleCvvChange = (e) => {
    setCvv(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <Wrapper>
      {loading && (
        <div className="loading-overlay">
          <img src="../images/PaymentGetway/l.gif" alt="Loading" />
        </div>
      )}
      {!loading && (
        <div>
          <img className='logo' src="./images/LOGO/L1.png" alt="Fashionista's Haven" />
          <div className="container">
            <div className="left">
              <p>Payment methods</p>
              <hr />
              <div className="methods">
                <div onClick={() => handleMethodChange('card')} className={paymentMethod === 'card' ? 'active green' : ''}>
                  <FontAwesomeIcon icon={faCreditCard} /> Payment By Card
                </div>
                <div onClick={() => handleMethodChange('net')} className={paymentMethod === 'net' ? 'active green' : ''}>
                  <FontAwesomeIcon icon={faBuildingColumns} /> Internet Banks
                </div>
                <div onClick={() => handleMethodChange('upi')} className={paymentMethod === 'upi' ? 'active green' : ''}>
                  <FontAwesomeIcon icon={faWallet} /> UPI
                </div>
              </div>
              <hr />
            </div>
            <div className="center">
              <a href="https://www.rbi.org.in/">
                <img alt="Credit Card Logos" title="Credit Card Logos" src="./images/PaymentGetway/PaymentGateway Logo.png" width="300" height="auto" />
              </a>
              <hr style={{ marginBottom: "20px" }} />
              {paymentMethod === 'card' && (
                <div className="card-details">
                  <form onSubmit={handleSubmit}>
                    <input type="hidden" name="db_addressID" value="<%=request.getParameter('USER_ADDRESS_ID')%>" />
                    <div className="input-group">
                      <label>Card number</label>
                      <input
                        type="text"
                        value={cardNumber}
                        onChange={handleCardNumberChange}
                        placeholder="Card number"
                        maxLength="19"
                        required
                      />
                    </div>
                    <div className="input-group">
                      <label>Expiry date</label>
                      <div className="date-picker-wrapper">
                        <DatePicker
                          selected={expiryDate}
                          onChange={handleExpiryDateChange}
                          placeholderText="MM/YY"
                          dateFormat="MM/yy"
                          showMonthYearPicker
                          required
                        />
                      </div>
                    </div>
                    <div className="input-group">
                      <label>CVV</label>
                      <input
                        type="password"
                        value={cvv}
                        onChange={handleCvvChange}
                        placeholder="CVV"
                        maxLength="3"
                        required
                        style={{ width: "65px" }}
                      />
                    </div>
                    <div className="input-group">
                      <label>Email</label>
                      <input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="example@email.com"
                        required
                      />
                    </div>
                    <Button className='pay-btn' type="submit">PAY NOW</Button>
                  </form>
                </div>
              )}
              {paymentMethod === 'net' && (
                <div className="net-details">
                  <form onSubmit={handleSubmit}>
                    <input type="hidden" name="db_addressID" value="<%=request.getParameter('USER_ADDRESS_ID')%>" />
                    <label>User Name</label>
                    <div className="u-name" id="u-name">
                      <input type="text" className="u-name2" placeholder="User Name" required />
                      <i className="fa-solid fa-building-columns" id="nt" style={{ margin: 0 }} />
                    </div>
                    <div className="net-password">
                      <div className="net-pass">
                        <label>Password</label>
                        <input type="password" className="n-pass" placeholder="Password" required />
                      </div>
                    </div>
                    <Button className='pay-btn' type="submit">PAY NOW</Button>
                  </form>
                </div>
              )}
              {paymentMethod === 'upi' && (
                <div className="upi-details">
                  <form onSubmit={handleSubmit}>
                    <input type="hidden" name="db_addressID" value="<%=request.getParameter('USER_ADDRESS_ID')%>" />
                    <label>UPI ID</label>
                    <div className="upi-id" id="upi-id">
                      <input type="text" className="upi-id2" placeholder="UPI ID" required />
                      <i className="fa-solid fa-wallet" id="uw" style={{ margin: 0, cursor: 'pointer' }} title="aXXXXX122X@oksbi" />
                    </div>
                    <Button className='pay-btn' type="submit">PAY NOW</Button>
                  </form>

                </div>
              )}
            </div>
            <div className="right">
              <p style={{ fontSize: 'large' }}> <b>Total Amount :  </b></p>
              <hr />
              <p className="amount" style={{ float: 'right', fontSize: '3ch', color: 'green' }}><b><FormatPrice price={totalprice} /></b></p>
            </div>
          </div>
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.7); /* Semi-transparent white background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* Ensure it's above other elements */
}

.loading-overlay img {
  width: 150ch; /* Adjust the width and height of the loading image */
  height: 110ch;
}


  margin-top: 100px;
  padding: 20px;
  box-sizing: border-box;
.logo{
  height: 40ch;
  width: 110ch;
  margin-top: -20ch;
  margin-bottom: 10ch;
}
  body {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f2f2f2;
  }
  
  .container {
    display: flex;
    width: 80%;
    max-width: 1200px;
    background-color: #fff;
    border-radius: 10px;
    padding: 30px; /* Adjust padding */
    box-sizing: border-box; /* Ensure padding is included in the width */
    box-shadow: 0 0 20px #318c86;
    overflow: hidden;
    animation: shadowColorChange 5s infinite alternate;
  }
  
  @keyframes shadowColorChange {
    0% {
      box-shadow: 0 0 20px #318c86;
    }
    50% {
      box-shadow: 0 0 20px #86b8b1;
    }
    100% {
      box-shadow: 0 0 20px #318c86;
    }
  }


  .left {
    flex: 1;
    padding: 30px;
    margin-right: 20px;
  }
  
  .left p {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .methods {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .methods div {
    padding: 10px 20px;
    cursor: pointer;
    font-size: 18px;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }
  
  .methods div:hover {
    background-color: #e0e0e0;
  }
  
  .right {
    flex: 1;
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .form-container {
    max-width: 400px;
  }
  
  .form-container form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  form label {
    font-size: 13px;
    padding: 10px 0;
  }
  
  form input {
    width: calc(100% - 20px);
    padding: 15px;
    border: 1px solid purple;
    border-radius: 5px;
    margin-top: 10px;
    margin-left: 30px;
    margin-bottom: 10px;
    outline: none;
    text-transform: none;
  }
  
  .form-container button {
    width: calc(100% - 20px);
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #4caf50;
    color: #fff;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .form-container button:hover {
    background-color: #45a049;
  }
  
  .amount {
    color: green;
  }
  
  .pay-btn {
    margin-top: 50px;
    float: right;
    background-color: #107d5b;
  }
  
  .green {
    color: green;
    font-weight: 700;
  }

  .react-datepicker__month {
    font-size: 12px; /* Adjust the font size as needed */
  }


`

export default PaymentGateway;
