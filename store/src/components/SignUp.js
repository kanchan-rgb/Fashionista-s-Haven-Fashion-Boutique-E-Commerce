import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Header from './Header';
import { Button } from '../Styles/Button';

const SignUp = () => {
    const [formData, setFormData] = useState({
        db_image: '',
        db_name: '',
        db_email: '',
        db_phnumber: '',
        db_password: '',
        db_confirm_password: '',
        chkterms: '',
    });
    const [error, setError] = useState('');
    const [showResetConfirmation, setShowResetConfirmation] = useState(false);


    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        if (name === 'db_image') {
            setFormData({ ...formData, [name]: e.target.files[0] });
        } else {
            setFormData({ ...formData, [name]: newValue });
        }
    };




    const handleSubmit = async (e) => {
        e.preventDefault();
        const { db_password, db_confirm_password, ...formDataWithoutPassword } = formData;

        // Password validation
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
        if (!passwordRegex.test(db_password)) {
            alert('Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character.');
            return;
        }

        // Check if passwords match
        if (db_password !== db_confirm_password) {
            alert('Passwords do not match.');
            return;
        }

        // Send form data to the server
        try {
            const formDataToSend = new FormData();
            formDataToSend.append('db_image', formData.db_image);
            formDataToSend.append('db_name', formData.db_name);
            formDataToSend.append('db_email', formData.db_email);
            formDataToSend.append('db_phnumber', formData.db_phnumber);
            formDataToSend.append('db_password', formData.db_password);
            formDataToSend.append('db_confirm_password', formData.db_confirm_password);
            formDataToSend.append('chkterms', formData.chkterms);
            
            const response = await axios.post('http://localhost:5050/users/addUser', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log('Server response:', response.data);
            if (response.status === 409) {
                // Display popup message for existing user
                setError(response.data);
            } else {
                // Display a popup message for successful signup
                alert('Signup successful. Redirecting to login page...');
                setTimeout(() => {
                    window.location.href = '/login';
                }, 1000);
            }
        } catch (error) {
            console.error('Error:', error);
            if (error.response && error.response.status === 409) {
                // Update error state with the error message received from the server
                console.log('Server error message:', error.response.data);
                alert(error.response.data);
                setTimeout(() => {
                    window.location.href = '/login';
                }, 1000);
            } else {
                setError('An unexpected error occurred.');
            }
        }
    };


    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handleReset = () => {
        setShowResetConfirmation(true);
    };

    const resetForm = () => {
        setFormData({
            db_image: null,
            db_name: '',
            db_email: '',
            db_phnumber: '',
            db_password: '',
            db_confirm_password: '',
            chkterms: false
        });
        setShowResetConfirmation(false);
        alert('Form has been cleared.');
    };

    const cancelReset = () => {
        setShowResetConfirmation(false);
    };


    const navigate = () => {
        window.location.href = '/'; // Replace '/' with the URL of your home page
    };

    return (
        <>
            <Header />
            <Wrapper>
                <div className="login-page">
                    <div className="form">
                        <form onSubmit={handleSubmit}>
                            <img
                                id="preview"
                                src={formData.db_image ? URL.createObjectURL(formData.db_image) : '../images/SignUp/user-account-icon.png'}
                                style={{ justifyContent: 'center', width: '50%', height: "130px", marginBottom: '30px', borderRadius: '50%' }}
                            />

                            <input type="file" id="fileInput" style={{ display: 'none' }} name="db_image" accept="image/png,image/jpg, image/jpeg" onChange={handleChange} required />
                            <label className="profile_photo" htmlFor="fileInput">UPLOAD PROFILE IMAGE</label>
                            <input type="text" id="name" name="db_name" placeholder="Full Name" value={formData.db_name} onChange={handleChange} required />
                            <input type="email" id="email" name="db_email" placeholder="Email Address" value={formData.db_email} onChange={handleChange} required />
                            <input type="tel" id="phnumber" name="db_phnumber" placeholder="Enter Your Number" value={formData.db_phnumber} onChange={handleChange} required />
                            {/* <input type="password" id="password" name="db_password" placeholder="Password" value={formData.db_password} onChange={handleChange} required />
                        <input type="password" id="confirm_password" name="db_confirm_password" placeholder="Confirm Password" value={formData.db_confirm_password} onChange={handleChange} required /> */}


                            <br />
                            <br />
                            <br />
                            <span><input type="checkbox" id="tc" style={{ width: '17px', height: '17px' }} name="chkterms" onChange={handleChange} />
                                <p style={{ fontSize: "12px" }}>I Have Read And Agree To The <a style={{ textDecoration: 'none' }} href={"/privacy"}><b>Privacy Policy</b></a>
                                    & <a style={{ textDecoration: 'none' }} href={"/privacy"}><b>Terms And Conditions</b></a></p></span>
                            <br />
                            <br />

                            <div>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    name="db_password"
                                    placeholder="Password"
                                    value={formData.db_password}
                                    onChange={handleChange}
                                    required
                                />
                                <FontAwesomeIcon
                                    className='faeye'
                                    icon={showPassword ? faEyeSlash : faEye}
                                    style={{ color: showPassword ? "red" : "inherit" }}
                                    onClick={togglePasswordVisibility}
                                />
                            </div>
                            <div>
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    id="confirm_password"
                                    name="db_confirm_password"
                                    placeholder="Confirm Password"
                                    value={formData.db_confirm_password}
                                    onChange={handleChange}
                                    required
                                />
                                <FontAwesomeIcon
                                    className='faeye'
                                    icon={showConfirmPassword ? faEyeSlash : faEye}
                                    style={{ color: showConfirmPassword ? "red" : "inherit" }}
                                    onClick={toggleConfirmPasswordVisibility}
                                />
                            </div>

                            <button type="submit" name="bSubmit" disabled={!formData.chkterms}>SIGN UP</button>
                            <button type="reset" name="bReset" onClick={handleReset}><i className="fa fa-refresh"></i> Reset</button>
                            <button type="button" name="bClose" onClick={navigate}><i className="fa fa-arrow-left"></i> Back</button>
                        </form>
                    </div>
                </div>
            </Wrapper>
            {showResetConfirmation && (
                <ResetConfirmationPopup>
                    <p>Do you want to clear the form?</p>
                    <div>
                        <Button style={{backgroundColor: "red"}} onClick={resetForm}>Yes</Button>
                        <Button onClick={cancelReset}>No</Button>
                    </div>
                </ResetConfirmationPopup>
            )}
        </>
    );
};


const ResetConfirmationPopup = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding: 30px;
    border-radius: 8px;
    border: 1px solid #ccc;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 9999;

    p {
        font-size: 16px;
        margin-bottom: 20px;
        text-align: center;
        color: #333;
    }

    div {
        display: flex;
        justify-content: center;
        gap: 20px;
    }

    button {
        padding: 12px 24px;
        border: none;
        border-radius: 5px;
        background-color: #17966c;
        color: #fff;
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.3s ease;
        outline: none;
    }

    button:hover {
        background-color: #10876d;
    }
`;

const Wrapper = styled.section`
.faeye{
    font-size: 15px;
    margin-top: -10px;
    margin-bottom: 10px;
    cursor:pointer;
}
.profile_photo{
    display: inline-block;
    color: white;
    width: 90%;
    line-height: 2.2em;
    padding: 0 0.62em;
    border: 1px solid #666;
    border-radius: 8px;
    background-color: navy;
    box-shadow: inset 0 0 0.1em #fff, 0.2em 0.2em 0.2em rgba( 0, 0, 0, 0.3 );
    font-family: arial, sans-serif;
    font-size: 0.8em;
    cursor: pointer;
    margin-bottom: 20px;
}

.profile_photo:hover {
    border-color: #3c7fb1;
    color: black;
    background-image: linear-gradient( to bottom, #fff, #a9dbf6 );
}
@import url(https://fonts.googleapis.com/css?family=Roboto:300);

.body{
    background-image: url('https://ordinaryfaith.net/wp-content/uploads/2016/03/Gray-plain-website-background.jpg');
    background-repeat: no-repeat;
    background-size: cover;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* Firefox */
input[type=number] {
    -moz-appearance: textfield;
}
.login-page {
    width: 360px;
    padding: 8% 0 0;
    margin: auto;

}
.form {
    position: relative;
    z-index: 1;
    background: #48c9b0;
    max-width: 360px;
    margin: 0 auto 100px;
    padding: 45px;
    text-align: center;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
    margin-top: -100px;
}
.form input {
    font-family: FontAwesome, "Roboto", sans-serif;
    outline: 0;
    background: #f2f2f2;
    width: 100%;
    border: 0;
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
    border-radius:10px;
    text-transform: none;

}
.form button {
    font-family: "Titillium Web", sans-serif;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: .1em;
    outline: 0;
    background: #17a589;
    width: 100%;
    border: 0;
    border-radius:30px;
    margin: 0px 0px 8px;
    padding: 15px;
    color: #FFFFFF;
    -webkit-transition: all 0.3 ease;
    transition: all 0.3 ease;
    cursor: pointer;
    transition: all 0.2s;

}
.form button:hover,.form button:focus {
    background: #148f77;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    transform: translateY(-4px);
}
.form button:active {
    transform: translateY(2px);
    box-shadow: 0 2.5px 5px rgba(0, 0, 0, 0.2);
}

.form .message {

    margin: 6px 6px;
    color: #808080;
    font-size: 11px;
    text-align: center;
    font-weight: bold;
    font-style: normal;



}
.form .message a {
    color: #FFFFFF;
    text-decoration: none;
    font-size: 13px;
}
.form .register-form {
    display: none;
}
.container {
    position: relative;
    z-index: 1;
    max-width: 300px;
    margin: 0 auto;
}
.container:before, .container:after {
    content: "";
    display: block;
    clear: both;
}
.container .info {
    margin: 50px auto;
    text-align: center;
}
.container .info h1 {
    margin: 0 0 15px;
    padding: 0;
    font-size: 36px;
    font-weight: 300;
    color: #1a1a1a;
}
.container .info span {
    color: #4d4d4d;
    font-size: 12px;
}
.container .info span a {
    color: #000000;
    text-decoration: none;
}
.container .info span .fa {
    color: #EF3B3A;
}

#bSubmit:hover{
    color: rgb(3, 141, 47);
    background-color: #b1f580;
}
#bReset:hover{
    color: rgb(255, 252, 252);
    background-color: #e86a6a;
}
#bClose:hover{
    color: rgb(252, 2, 2);
    background-color: #ffffff;
}
input:hover{
    box-shadow: 2px 2px 10px 2px lightgreen;
}
input:focus {
    border-color: blue;
    box-shadow: 0 1px 1px blue inset, 0 0 8px blue;
    outline: 0 none;
}
/* The message box is shown when the user clicks on the password field */
#message {
    display:none;
    background: transparent;
    color: #000;
    position: relative;
    padding: 2px;
}

#message p {
    padding: 1px 3px;
    font-size: 16px;
}

/* Add a green text color and a checkmark when the requirements are right */
.valid {
    color: green;
}

.valid:before {
    position: relative;
    left: -5px;
    content: "✔";
}

/* Add a red text color and an "x" when the requirements are wrong */
.invalid {
    color: red;
}

.invalid:before {
    position: relative;
    left: -5px;
    content: "✖";
}
#tc{
    margin-right: 5px;
}
input[type=checkbox]:hover {
    box-shadow: none;
    cursor: pointer;
}
input[type=checkbox]:focus {
    box-shadow: none;
}

`

export default SignUp;
