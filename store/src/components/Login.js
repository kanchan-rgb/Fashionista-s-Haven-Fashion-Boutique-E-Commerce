import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../Styles/Button';
import Header from './Header';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setError] = useState([]);
  const [otp, setOtp] = useState('');
  const [otpRequested, setOtpRequested] = useState(false);
  const [sendingLoginRequest, setSendingLoginRequest] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      try {
        setSendingLoginRequest(true);
        // Check if admin login
        if (email === 'admin@fh.com' && password === 'admin@fh.com') {
          sessionStorage.setItem('admin', true);
          navigate('/admin');
        }
        else { // User login
          const response = await axios.post('http://localhost:5050/users/login', { email, password });
          setOtpRequested(true);
          // console.log('Login successful:', response.data);
          // sessionStorage.setItem('userlogin', true);
          // sessionStorage.setItem('user', JSON.stringify(response.data.id));
          // navigate('/');

        }
      } catch (error) {
        console.error('Login failed:', error.response.data);
        if (error.response.status === 401) {
          // If user not found, show popup and redirect to signup page
          alert("User With This Email Not Register !!! Please Register First !!")
          setTimeout(() => {
            navigate('/signup');
          }, 100);
        } else {
          setError(['Invalid email or password']);
        }
      } finally {
        setSendingLoginRequest(false); // Stop sending login request
      }
    } else {
      setError(validationErrors);
    }
  };


  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    try {
      // Verify OTP
      const otpVerificationResponse = await axios.post(`http://localhost:5050/users/verifyloginotp/${otp}`);
      if (otpVerificationResponse.status === 200) {
        // OTP verified successfully
        sessionStorage.setItem('userlogin', true);
        sessionStorage.setItem('user', JSON.stringify(otpVerificationResponse.data.id));
        sessionStorage.setItem('userEmail', JSON.stringify(otpVerificationResponse.data.email));
        navigate('/');
      } else {
        // OTP verification failed
        alert('OTP verification failed!');
      }
    } catch (error) {
      console.error('OTP verification failed:', error);
      alert('OTP verification failed!');
    }
  };




  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validate = () => {
    const errors = {};
    if (!email) {
      errors.email = 'Email Is Required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is not valid';
    }

    if (!password) {
      errors.password = 'Password Is Required';
    } else if (password.length < 8) {
      errors.password = 'Password must be at least 8 characters long';
    }
    return errors;
  };


  return (
    <>
      <Header />
      <Wrapper>
        <div className="container">
          <div className="css-selector">
            <p className="intro-data">Welcome To Fashion World</p>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email ID :</label>
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                {errors.email && <div className="error">{errors.email}</div>}
              </div>
              <div className="form-group">
                <label htmlFor="password">Password :</label>
                <div className="password-input-container">
                  <input
                    required
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <FontAwesomeIcon
                    className="faeye"
                    icon={showPassword ? faEyeSlash : faEye}
                    style={{ color: showPassword ? 'red' : 'inherit' }}
                    onClick={togglePasswordVisibility}
                  />
                </div>
                {errors.password && <div className="error">{errors.password}</div>}
              </div>
              {otpRequested ? (
                <div className="form-group">
                  <label htmlFor="otp">Enter OTP:</label>
                  <input type="number" required maxLength={6} value={otp} onChange={(e) => setOtp(e.target.value)} />
                </div>
              ) : (
                <a href='/forgotpass' className='forgotpass'>Forgotten Password ?</a>
              )}
              {otpRequested ? (
                <Button className="button" onClick={handleOtpSubmit}>
                  Verify OTP
                </Button>
              ) : (
                <Button className="button" type="submit">
                  {sendingLoginRequest ? 'Sending...' : 'Login'}
                </Button>
              )}
            </form>
            {otpRequested ?
              null :
              <NavLink to="/signup">
                <Button>SIGN UP</Button>
              </NavLink>
            }
          </div>
        </div>
      </Wrapper>

    </>
  );
};


const Wrapper = styled.section`

input[type="number"] {
  -moz-appearance: textfield; /* Firefox */
}

/* Disable scrolling for number input fields */
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.forgotpass{
  color: #fff;
  font-size: 15px;
}
  .container {
    display: flex;
    width: 100%;
    height: 100%;
    margin-top: 10ch;
    margin-bottom: 10ch;
    justify-content: center;
    align-items: center;
  }
  .password-input-container {
    position: relative;
    display: flex;
    align-items: center; /* Align items vertically */
}

.password-input-container input {
    flex: 1; /* Take up remaining space */
}

.faeye {
    font-size: 15px;
    margin-top: 5px;
    margin-left: -30px;
    margin-right: 14px;
    cursor: pointer;
}
  
  .intro-data {
    text-transform: uppercase;
    background-image: linear-gradient(
      -225deg,
      #231557 0%,
      #44107a 29%,
      #ff1361 67%,
      #fff800 100%
    );
    font-weight: bold;
    margin-bottom: -10px;
    background-size: auto auto;
    background-clip: border-box;
    background-size: 200% auto;
    color: #fff;
    background-clip: text;
    text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: textclip 2s linear infinite;
    display: flex;
    align-items: center;
    font-size: 30px;
  }

  @keyframes textclip {
    to {
      background-position: 200% center;
    }
  }
  .css-selector {
    background: linear-gradient(324deg, #5b20c1, #ccd8f0, #d63fd9);
    background-size: 600% 600%;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    padding: 0px 20px;
    width: 100ch;
    height: 70vh;
    align-items: center;
    justify-content: space-around;

    -webkit-animation: AnimationName 14s ease infinite;
    -moz-animation: AnimationName 14s ease infinite;
    animation: AnimationName 14s ease infinite;
  }

  @-webkit-keyframes AnimationName {
    0% {
      background-position: 48% 0%;
    }
    50% {
      background-position: 53% 100%;
    }
    100% {
      background-position: 48% 0%;
    }
  }
  @-moz-keyframes AnimationName {
    0% {
      background-position: 48% 0%;
    }
    50% {
      background-position: 53% 100%;
    }
    100% {
      background-position: 48% 0%;
    }
  }
  @keyframes AnimationName {
    0% {
      background-position: 48% 0%;
    }
    50% {
      background-position: 53% 100%;
    }
    100% {
      background-position: 48% 0%;
    }
  }
  form {
    width: 100%;
    margin-bottom: 50px;
    padding: 10px;
  }
  form input {
    text-transform: none;
  }
  form .form-group {
    margin-bottom: 10px;
    padding: 20px;
    width: 100%;
  }
  .css-selector form label {
    font-size: 20px;
    color: black;
    font-weight: bold;
  }
  .css-selector form input {
    display: block;
    padding: 15px;
    width: 100%;
    border: 1px solid blue;
    margin-top: 3px;
    font-size: 16px;
    outline: none;
  }
  .button {
    padding: 7px 25px;
    float: right;
    color: white;
    font-size: 16px;
    cursor: pointer;
    margin-right: 20px;
    border-radius: 10px;
    background: linear-gradient(324deg, #10440d, #10511e, #acce98);
    background-size: 600% 600%;

    -webkit-animation: AnimationName 2s ease infinite;
    -moz-animation: AnimationName 2s ease infinite;
    animation: AnimationName 2s ease infinite;
  }

  @-webkit-keyframes AnimationName {
    0% {
      background-position: 0% 55%;
    }
    50% {
      background-position: 100% 46%;
    }
    100% {
      background-position: 0% 55%;
    }
  }
  @-moz-keyframes AnimationName {
    0% {
      background-position: 0% 55%;
    }
    50% {
      background-position: 100% 46%;
    }
    100% {
      background-position: 0% 55%;
    }
  }
  @keyframes AnimationName {
    0% {
      background-position: 0% 55%;
    }
    50% {
      background-position: 100% 46%;
    }
    100% {
      background-position: 0% 55%;
    }
  }
  .button:hover {
    background: linear-gradient(288deg, #02400f, #1b3a09, #ffffff);
    background-size: 600% 600%;

    -webkit-animation: AnimationName 2s ease infinite;
    -moz-animation: AnimationName 2s ease infinite;
    animation: AnimationName 2s ease infinite;
  }

  @-webkit-keyframes AnimationName {
    0% {
      background-position: 7% 0%;
    }
    50% {
      background-position: 94% 100%;
    }
    100% {
      background-position: 7% 0%;
    }
  }
  @-moz-keyframes AnimationName {
    0% {
      background-position: 7% 0%;
    }
    50% {
      background-position: 94% 100%;
    }
    100% {
      background-position: 7% 0%;
    }
  }
  @keyframes AnimationName {
    0% {
      background-position: 7% 0%;
    }
    50% {
      background-position: 94% 100%;
    }
    100% {
      background-position: 7% 0%;
    }
  }
  .error {
    color: red;
  }
}
@media screen only (max-width: 900px) {
  .css-selector {
    width: 60vw;
  }
  @media screen only (max-width: 700px) {
    .css-selector {
      width: 75vw;
    }
  }
`;

export default Login;
