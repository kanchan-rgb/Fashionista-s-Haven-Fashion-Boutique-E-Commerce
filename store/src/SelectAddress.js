import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Button } from './Styles/Button';
import Header from './components/Header';


const SelectAddress = () => {
  const [addresses, setAddresses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const userID = sessionStorage.getItem("user");
        const response = await axios.get(`http://localhost:5050/useraddress/getaddressesbyuserid/${userID}`);
        setAddresses(response.data); // Update state directly with response data
      } catch (error) {
        console.error('Error fetching addresses:', error);
      }
    };
    
    fetchAddresses();
  }, []);
  

  const handleEditAddress = (addressId) => {
    navigate(`/s-edit-address/${addressId}`);
  };


  const handleSelectAddress = (addressId) => {
    // Save the selected address ID to localStorage
    localStorage.setItem('selectedAddressId', addressId);

    // Redirect to the payment page
    navigate('/payment');
  };

  return (
    <>
    <Header/>
    <Wrapper>
      <div className="user-address-container">
        <Button className="add-address-btn" onClick={() => navigate('/s-add-new-user-address')}>
          <img className="add-address-icon" src="./images/UserAddress/map.png" alt="+" /> Add New Address
        </Button>
        <table className="address-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Alternative Phone Number</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {addresses.length === 0 ? (
              <tr>
                <td colSpan="6" style={{textAlign: "center", color: "red"}}>No addresses found.</td>
              </tr>
            ) : (
              addresses.map(useraddress => (
                <tr key={useraddress.id}>
                  <td>{useraddress.name}</td>
                  <td>{`${useraddress.houseno}, ${useraddress.road_colony}, ${useraddress.landmark}, ${useraddress.city}, ${useraddress.state} - ${useraddress.zipcode}`}</td>
                  <td>{useraddress.phnumber}</td>
                  <td>{useraddress.alternativephnumber}</td>
                  <td><Button className="edit-btn" onClick={() => handleEditAddress(useraddress.id)}>Edit</Button></td>
                  <td><Button className="select-btn" onClick={() => handleSelectAddress(useraddress.id)}>Select</Button></td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </Wrapper>
    </>
  );
};


const Wrapper = styled.section`
  .user-address-container {
    margin: 20px;
  }
  
  .add-address-btn {
    background-color: #36074a;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 20px;
  }
  
  .add-address-btn:hover {
    background-color: #4e1b63;
  }
  
  .add-address-icon {
    width: 24px;
    margin-right: 10px;
  }
  
  .address-table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .address-table th, .address-table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
    font-size: 15px;
  }
  
  .address-table th {
    background-color: #f2f2f2;
  }
  
  .edit-btn{
    background-color: #28a745;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 3px;
    cursor: pointer;
  }
  .select-btn {
    background-color: purple;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 3px;
    cursor: pointer;
  }
  .edit-btn:hover {
    background-color: #218838;
  }
  .select-btn:hover {
    background-color: #bf2c2c;
  }
`;

export default SelectAddress;
