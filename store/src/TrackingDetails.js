import React from 'react';
import styled from 'styled-components';

const TrackingDetails = ({ orderStatus }) => {
  const steps = [
    { id: 1, name: 'Ordered', description: 'Your order is placed.' },
    { id: 2, name: 'Shipped', description: 'Your order is shipped.' },
    { id: 3, name: 'On the way', description: 'Your order is on the way.' },
    { id: 4, name: 'Delivered', description: 'Your order is delivered.' },
  ];

  return (
    <Wrapper>
      <div className="title2">Tracking Order</div>
      <div className="progress-track">
        <ul id="progressbar">
          {steps.map((step, index) => (
            <li key={step.id} className={`step${step.id} ${step.id <= orderStatus ? 'active' : ''}`}>
              <p>{step.name}</p>
              {/* <span>{step.description}</span> */}
              {index !== steps.length - 1 && <div className={`dot ${index < orderStatus ? 'active' : ''}`} />}
            </li>
          ))}
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
    margin-top: 70px;
    margin-bottom: 70px;

  .title2 {
    font-size: 13px;
    margin-bottom: 10px;
    margin-left: 20px;
    font-weight: 600;
    color: purple
  }

  .progress-track {
    width: 100%;
    margin-top: 10px;
    margin-bottom: 30px;
    padding: 10px 10%;
    position: relative;
    overflow: hidden; /* Ensure no horizontal overflow */
  }

  #progressbar {
    list-style-type: none;
    padding: 0;
    display: flex;
    justify-content: space-between;
  }

  li {
    width: calc(25% - 4px); /* Adjusted width */
    float: left;
    position: relative;
    font-size: 10px; /* Adjusted font size */
    font-weight: 400;
    color: rgb(160, 159, 159);
    text-align: center; /* Centered text */
  }

  li p {
    margin-bottom: 10px; /* Adjusted margin */
  }

  li.active {
    color: black;
  }

  li:before {
    content: '';
    width: 10px;
    height: 10px;
    display: block;
    background: green;
    border-radius: 50%;
    margin: auto;
    z-index: -1;
    margin-bottom: -2px;
    position: absolute; /* Positioned absolutely */
    left: 50%; /* Centered horizontally */
    transform: translateX(-50%); /* Adjusted for centering */
    bottom: 0; /* Aligned to the bottom */
  }

  .dot {
    width: 130%;
    height: 6px;
    background-color: #d7e0e0;
    position: absolute;
    bottom: 0; /* Aligned to the bottom */
    left: 86%; /* Adjusted left position */
    transform: translateX(-50%); /* Centered horizontally */
    z-index: -2;
  }
  .dot.active {
    background-color: green;
    width: 90%;
    margin-left: 10%;
    animation: pulse 2s infinite;
  }
  
  @keyframes pulse {
    0% {
      background-color: green;
      width: 90%;
      margin-left: 10%;
      box-shadow: 0 0 0 0 rgba(0, 128, 0, 0.7); /* Start with no shadow */
    }
    50% {
      box-shadow: 0 0 10px 10px rgba(0, 128, 0, 0); /* Create a shadow effect */
    }
    100% {
      background-color: green;
      width: 90%;
      margin-left: 10%;
      box-shadow: 0 0 0 0 rgba(0, 128, 0, 0); /* End with no shadow */
    }
  }
  
`;

export default TrackingDetails;
