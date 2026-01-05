import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useHistory from react-router-dom
import successSound from './sounds/success-sound.mp3';
import styled from 'styled-components';

const PaymentSuccess = () => {
  const navigate = useNavigate(); // Access the history object
  
  useEffect(() => {
    // Play success sound on component mount
    const audio = new Audio(successSound);
    audio.play();

    // Navigate to the order page after 1.2 seconds
    const timer = setTimeout(() => {
        navigate('/order'); // Navigate to the order page
    }, 2200);

    // Clear the timer on component unmount to prevent memory leaks
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Wrapper>
      <div className="payment-success-container">
        <img src='../images/Payment/success.gif' />
        <h1 className="animated fadeIn">Payment Successful !!!!</h1>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .payment-success-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh; /* Make it take the full viewport height */
  }
  
  .payment-success-container img {
    max-width: 100%; /* Ensure the image stays within the container */
  }
  
  .animated {
    animation-duration: 1s;
    color: green;
    text-transform: uppercase;
    font-size: 35px;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
   
  .fadeIn {
    animation-name: fadeIn;
  }
`;

export default PaymentSuccess;
