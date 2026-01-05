import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import Header from './components/Header';
import { Button } from './Styles/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


const ForgottenPass = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [showVerifyInput, setShowVerifyInput] = useState(false); // Initially hide verify input
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();


  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  useEffect(() => {
    if (showSuccessPopup) {
      const timer = setTimeout(() => {
        setShowSuccessPopup(false);
        navigate('/login'); 
      }, 1300);
      return () => clearTimeout(timer);
    }
  }, [showSuccessPopup, navigate]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading
    try {
      const response = await axios.get(`http://localhost:5050/users/getuserbyemail/${email}`);
      if (response.status === 200) {
        // Email sent successfully, show verify input
        setShowVerifyInput(true);
      }
      else {
        alert(`${email} Not Registered !!`)
      }
    } catch (error) {
      console.error('Error:', error);
      alert(`${email} Not Registered !!`)
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading
    try {
      const response = await axios.post(`http://localhost:5050/users/verifyotp/${otp}`);
      if (response.status === 200) {
        // OTP verified successfully, navigate to success page
        setIsOtpVerified(true);
      } else {
        setError('Invalid OTP');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Wrong OTP');
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();

    if (!isValidPassword(newPassword)) {
      setError('Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character.');
      return;
    }
    else if (newPassword !== confirmPassword) {
      setError("Didn\'t match !!!");
      return;
    }

    else {
      try {
        const response = await axios.post(`http://localhost:5050/users/resetpassword/${email}/${newPassword}`)
        // email: email,
        // newPassword: newPassword

        if (response.status === 200) {
          setShowSuccessPopup(true);
        } else {
          setError('Failed to reset password');
        }
      } catch (error) {
        console.error('Error:', error);
        setError('Failed to reset password');
      }
    }
  };


  const isValidPassword = (password) => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    return passwordRegex.test(password);
  };


  return (
    <>
      <Header />
      <LoginFormContainer>
        <div className="container">
          <h2>{isOtpVerified ? 'Reset Your Password' : 'Verify Your Email'}</h2>
          {!isOtpVerified && (
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="email"
                  placeholder='enter your e-mail...'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <Button className='subbtn' type="submit">{isLoading ? 'Sending...' : 'Submit'}</Button>
            </form>
          )}
          {showVerifyInput && !isOtpVerified && (
            <form onSubmit={handleVerifyOtp}>
              <div>
                <input
                  type="number"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter OTP..."
                  maxLength={6}
                  required
                />


              </div>
              <Button className='subbtn' type="submit">{isLoading ? 'Verifying...' : 'Verify OTP'}</Button>
              {error && <ErrorMessage>{error}</ErrorMessage>}
            </form>
          )}
          {isOtpVerified && (
            <form onSubmit={handlePasswordChange}>
              <div className="password-input-container">
                <span>
                  <input
                    type={showNewPassword ? "text" : "password"}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Enter New Password"
                    required
                  />
                  <FontAwesomeIcon
                    className="faeye"
                    icon={showNewPassword ? faEyeSlash : faEye}
                    onClick={toggleNewPasswordVisibility}
                    style={{ color: showNewPassword ? 'red' : 'inherit' }}
                  />
                </span>
              </div>
              <div className="password-input-container">
                <span>
                  <input
                    style={{marginTop: "5px"}}
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm New Password"
                    required
                  />
                  <FontAwesomeIcon
                  className="faeye"
                    icon={showConfirmPassword ? faEyeSlash : faEye}
                    onClick={toggleConfirmPasswordVisibility}
                    style={{ color: showConfirmPassword ? 'red' : 'inherit' }}
                  />
                </span>
              </div>

              <Button className='subbtn' type="submit">Reset Password</Button>
              {error && <ErrorMessage>{error}</ErrorMessage>}
            </form>
          )}
        </div>
      </LoginFormContainer>
      {showSuccessPopup && (
        <SuccessPopup>
          <p style={{ color: "white" }}>Password updated successfully</p>
        </SuccessPopup>
      )}
    </>
  );
};


const LoginFormContainer = styled.div`

input[type="number"] {
  -moz-appearance: textfield; /* Firefox */
}

/* Disable scrolling for number input fields */
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.faeye {
  position: relative;
  font-size: 16px;
  margin-left: -30px;
  cursor: pointer;
  z-index: 2;
}

.container {

  max-width: 400px;
  margin: 0 auto; /* Center horizontally */
  margin-top: 100px; /* Adjust the top margin as needed */
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background: linear-gradient(324deg, #5b20c1, #ccd8f0, #d63fd9);
  background-size: 600% 600%;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  height: auto;
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
  width: 90%;
}

div {
  margin-bottom: 15px;
  width: 100%;
}

input {
  margin-top: 70px;
  position: relative; /* Add relative positioning */
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  box-sizing: border-box;
  outline: none;
  text-transform: none;
  z-index: 1; /* Set a higher z-index */
}

.subbtn {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #118a82;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

h2 {
  text-transform: uppercase;
  font-size: 30px;
  text-align: center;
  font-weight: 800;
  color: #096647;
}
`;

const ErrorMessage = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
  color: red;
`;

const SuccessPopup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #07826b;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 10;
`;

export default ForgottenPass;
