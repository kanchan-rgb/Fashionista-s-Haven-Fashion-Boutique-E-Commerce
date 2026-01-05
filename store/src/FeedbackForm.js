import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from "./components/Header";

const FeedbackForm = () => {
  const navigate = useNavigate();
  const userId = sessionStorage.getItem('user');
  const [feedback, setFeedback] = useState({
    userid: "",
    rating: 0,
    message: "",
  });
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    const userId = sessionStorage.getItem('user');
    if (userId) {
      setFeedback(prevFeedback => ({
        ...prevFeedback,
        userid: userId
      }));
    }
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [name]: value
    }));
  };

  const handleRatingChange = value => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      rating: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:5050/feedbacks/addfeedback', feedback)
      .then(response => {
        console.log('Feedback submitted successfully:', response.data);
        setFeedback({
          userid: userId,
          rating: 0,
          message: "",
        });
        setShowThankYou(true);
        setTimeout(() => {
          navigate('/');
        }, 2000);
      })
      .catch(error => {
        console.error('Error submitting feedback:', error);
      });
  };

  return (
    <>
      <Header />
      <Container>
        <Title>Feedback Form</Title>
        <Form onSubmit={handleSubmit}>
          <Label>Rating:</Label>
          <StarRating>
            {[1, 2, 3, 4, 5].map((star, index) => (
              <Star
                key={index}
                filled={star <= feedback.rating}
                onClick={() => handleRatingChange(star)}
              >
                &#9733;
              </Star>
            ))}
          </StarRating>
          <Label>Message:</Label>
          <TextArea
           required
           name="message"
           value={feedback.message}
           onChange={handleChange}
          />
          <SubmitButton type='submit'>Submit</SubmitButton>
        </Form>
       {showThankYou &&
         <ThankYouMessage>Thank you for your feedback!</ThankYouMessage>}
      </Container>
    </>
  );
};

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 20px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: green;
  text-transform: uppercase;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  text-transform: none;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 14px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  text-transform: none;
`;

const StarRating = styled.div`
  display: flex;
  margin-bottom: 20px;
  margin-top: -35px;
  margin-left: 55px;

`;

const Star = styled.span`
  font-size: 30px;
  color: ${({ filled }) => (filled ? '#FFD700' : '#ccc')};
  cursor: pointer;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #4CAF50;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  width: 100px;
  margin: 0 auto;
  display: block;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #45a049;
  }
`;

const ThankYouMessage = styled.div`
  position: fixed;
  top: 0;
  margin-top: 80px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #4CAF50;
  color: #fff;
  text-align: center;
  font-size: 15px;
  padding: 10px 20px;
  font-weight: bold;
  border-radius: 5px;
  animation: fadeIn 0.5s ease-in-out;
`;

export default FeedbackForm;
