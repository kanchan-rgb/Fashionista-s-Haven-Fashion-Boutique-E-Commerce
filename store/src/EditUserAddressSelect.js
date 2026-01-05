import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import { Button } from './Styles/Button';

const EditUserAddressSelect = () => {
    const { id } = useParams(); // Extract the ID from the URL
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        userid: sessionStorage.getItem("user"),
        name: '',
        houseno: '',
        road_colony: '',
        landmark: '',
        city: '',
        state: '',
        zipcode: '',
        phnumber: '',
        alternativephnumber: ''
    });
    const [loading, setLoading] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        if (id) {
            fetchData();
        }
    }, [id]);

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:5050/useraddress/getaddressbyid/${id}`);
            const { data } = response;
            setFormData(data);
        } catch (error) {
            console.error('Error fetching address:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await axios.put(`http://localhost:5050/useraddress/updateaddress/${id}`, formData);
            setLoading(false);
            setShowPopup(true); // Show the popup
            setTimeout(() => {
                navigate('/selectaddress'); // Set redirect flag after 1.5 seconds
            }, 1500);
        } catch (error) {
            console.error('Error updating address:', error);
            setLoading(false);
        }
    };


    const Popup = () => (
        <PopUp>
            <div className="popup">
                <p>Address updated successfully!</p>
            </div>
        </PopUp>
    );

    return (
        <>
            <Header />
            <Wrapper>
                <div className="edit-address-form-container">
                    <h2>EDIT ADDRESS</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                        <input type="tel" name="phnumber" placeholder="Phone Number" value={formData.phnumber} maxLength={10} onChange={handleChange} required />
                        <input type="tel" name="alternativephnumber" placeholder="Alternative Phone Number" value={formData.alternativephnumber} maxLength={10} onChange={handleChange} />
                        <input type="text" name="houseno" placeholder="House / Building No." value={formData.houseno} onChange={handleChange} required />
                        <input type="text" name="road_colony" placeholder="Road / Area / Colony Name" value={formData.road_colony} onChange={handleChange} required />
                        <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} required />
                        <select name="state" value={formData.state} onChange={handleChange} required>
                            <option value="">Select State</option>
                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                            <option value="Assam">Assam</option>
                            <option value="Bihar">Bihar</option>
                            <option value="Chhattisgarh">Chhattisgarh</option>
                            <option value="Goa">Goa</option>
                            <option value="Gujarat">Gujarat</option>
                            <option value="Haryana">Haryana</option>
                            <option value="Himachal Pradesh">Himachal Pradesh</option>
                            <option value="Jharkhand">Jharkhand</option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Kerala">Kerala</option>
                            <option value="Madhya Pradesh">Madhya Pradesh</option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Manipur">Manipur</option>
                            <option value="Meghalaya">Meghalaya</option>
                            <option value="Mizoram">Mizoram</option>
                            <option value="Nagaland">Nagaland</option>
                            <option value="Odisha">Odisha</option>
                            <option value="Punjab">Punjab</option>
                            <option value="Rajasthan">Rajasthan</option>
                            <option value="Sikkim">Sikkim</option>
                            <option value="Tamil Nadu">Tamil Nadu</option>
                            <option value="Telangana">Telangana</option>
                            <option value="Tripura">Tripura</option>
                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                            <option value="Uttarakhand">Uttarakhand</option>
                            <option value="West Bengal">West Bengal</option>
                            <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                            <option value="Chandigarh">Chandigarh</option>
                            <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
                            <option value="Lakshadweep">Lakshadweep</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Puducherry">Puducherry</option>
                        </select>
                        <input type="text" name="zipcode" placeholder="Zipcode" value={formData.zipcode} onChange={handleChange} required />
                        <input type="text" name="landmark" placeholder="Landmark" value={formData.landmark} onChange={handleChange} required />
                        <Button type="submit" className={loading ? 'submit-btn loading' : 'submit-btn'} disabled={loading}>
                            {loading ? 'Updating...' : 'Update Address'}
                        </Button>
                    </form>
                </div>
                {showPopup && <Popup />}
            </Wrapper>
        </>
    );
};

const PopUp = styled.section`
.popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #0d593f;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    z-index: 9999;
  }
  
  .popup p {
    margin: 0;
    text-align: center;
    color: white;
  }
`

const Wrapper = styled.section`
  margin-top: 40px;
  .edit-address-form-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .edit-address-form-container h2 {
    margin-bottom: 20px;
    text-align: center;
  }
  
  .edit-address-form-container form {
    display: flex;
    flex-direction: column;
  }
  
  .edit-address-form-container input,
  .edit-address-form-container select {
    margin-bottom: 15px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    text-transform: none;
  }
  
  .edit-address-form-container input:focus,
  .edit-address-form-container select:focus {
    outline: none;
    border-color: #007bff;
  }
  
  .submit-btn {
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .submit-btn.loading {
    background-color: #ccc;
    cursor: not-allowed;
  }
  
  .submit-btn:hover {
    background-color: #0056b3;
  }
`;

export default EditUserAddressSelect;
