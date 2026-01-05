// PrivateRouteFeedback.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import FeedbackForm from './FeedbackForm';

const PrivateRouteFeedback = () => {
  // Check if the user is authenticated based on the value stored in session storage
  const isAuthenticated = sessionStorage.getItem('userlogin') === 'true';

  return isAuthenticated ? <FeedbackForm /> : <Navigate to="/login" />;
};

export default PrivateRouteFeedback;
