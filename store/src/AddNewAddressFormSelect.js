import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import { Button } from './Styles/Button';

const AddNewAddressFormSelect = () => {
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
    const navigate = useNavigate();
    const [showPopup, setShowPopup] = useState(false);

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
            await axios.post('http://localhost:5050/useraddress/addaddress', formData);
            setLoading(false);
            setShowPopup(true); // Show the popup
            setTimeout(() => {
                setShowPopup(false); // Hide the popup after 1.3 seconds
                navigate('/selectaddress'); // Redirect to address page
            }, 1300);
        } catch (error) {
            console.error('Error adding new address:', error);
            setLoading(false);
        }
    };

    const Popup = () => (
        <PopUp>
            <div className="popup">
                <p>Address added successfully!</p>
            </div>
        </PopUp>
    );

    return (
        <>
            <Header />
            <Wrapper>
                <div className="add-address-form-container">
                    <h2>Add New Address</h2>
                    <form onSubmit={handleSubmit}>
                        <Input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                        <Input type="tel" name="phnumber" placeholder="Phone Number" value={formData.phnumber} maxLength={10} onChange={handleChange} required />
                        <Input type="tel" name="alternativephnumber" placeholder="Alternative Phone Number" value={formData.alternativephnumber} maxLength={10} onChange={handleChange} />
                        <Input type="text" name="houseno" placeholder="House / Building No." value={formData.houseno} onChange={handleChange} required />
                        <Input type="text" name="road_colony" placeholder="Road / Area / Colony Name" value={formData.road_colony} onChange={handleChange} required />
                        <Input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} required />
                        <Select name="state" value={formData.state} onChange={handleChange} required>
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
                            </Select>
                        <Input type="text" name="zipcode" placeholder="Zipcode" value={formData.zipcode} onChange={handleChange} required />
                        <Input type="text" name="landmark" placeholder="Landmark" value={formData.landmark} onChange={handleChange} required />
                        <Button type="submit" className={loading ? 'submit-btn loading' : 'submit-btn'} disabled={loading}>
                            {loading ? 'Adding...' : 'Add Address'}
                        </Button>
                    </form>
                </div>
                {showPopup && <Popup />}
            </Wrapper>
        </>
    );
};

const Wrapper = styled.div`
    margin-top: 40px;
    .add-address-form-container {
        max-width: 400px;
        margin: 0 auto;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    .add-address-form-container h2 {
        margin-bottom: 20px;
        text-align: center;
    }
    .add-address-form-container form {
        display: flex;
        flex-direction: column;
    }
`;

const Input = styled.input`
    margin-bottom: 15px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    text-transform: none;
    &:focus {
        outline: none;
        border-color: #007bff;
    }
`;

const Select = styled.select`
    margin-bottom: 15px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    text-transform: none;
    &:focus {
        outline: none;
        border-color: #007bff;
    }
`;

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
`;

export default AddNewAddressFormSelect;