import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import axios from 'axios';
import StarForFeedback from './components/StarForFeedback';

const FeedBack = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const feedbacksResponse = await axios.get('http://localhost:5050/feedbacks/getallfeedbacks');
        const feedbacksData = feedbacksResponse.data;
        
        const shuffledFeedbacks = feedbacksData.sort(() => 0.5 - Math.random());
        const selectedFeedbacks = shuffledFeedbacks.slice(0, 3);

        const updatedFeedbacks = [];
        for (const feedback of selectedFeedbacks) {
          const userId = feedback.userid;
          const userResponse = await axios.get(`http://localhost:5050/users/getusers/${userId}`);
          const userData = userResponse.data;
          updatedFeedbacks.push({
            ...feedback,
            name: userData.name,
            userImage: userData.photo
          });
        }

        setFeedbacks(updatedFeedbacks);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);
  
  

  useEffect(() => {
    const interval = setInterval(() => {
      showSlides();
    }, 4000);

    return () => clearInterval(interval);
  }, [slideIndex]);

  function showSlides() {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    let index = slideIndex;

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    index++;
    if (index > slides.length) {
      index = 1;
    }

    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove("active");
    }

    slides[index - 1].style.display = "block";
    dots[index - 1].classList.add("active");

    setSlideIndex(index);
  }

  return (
    <Wrapper>
      <div className='container'>
      <h2 style={{marginBottom: "20px"}} className='text-shadow'>FEEDBACKS</h2>
      <img 
        style={{width: "100px", float: "right", marginLeft: "100px", opacity: 0.5}}
      className="qoute" src='../images/Feedback/2o.png'/>
      <div className="slideshow-container">
      
      {feedbacks.map((feedback, index) => (
        <div className="mySlides">
         
            <div className="data_set" style={{ textAlign: "center"}}>
              <p className='description'>{feedback.message}</p>
              <div className="star-container">
                  <StarForFeedback stars={feedback.rating}/>
                </div>
              <img className='image' src={`data:image/jpeg;base64,${feedback.userImage}`}alt="User" />
              <div className="text">{feedback.name}</div>
            </div>

         
        </div>
         ))}
      </div>
      <br />

      <div style={{ textAlign: "center" }}>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
padding: 7rem 0rem;
* {box-sizing: border-box;}
body {font-family: Verdana, sans-serif;}
.mySlides {display: none;}
img {vertical-align: middle;}

/* Slideshow container */
.slideshow-container {
  width: 1000px;
  height: 30rem;
  position: relative;
  background-color: transparent;
  margin: auto;
  margin-bottom: 90px;
}

.text-shadow {
	font-style: italic;
	text-transform: uppercase;
	color: blue;
	-webkit-text-stroke: red;
	-webkit-text-stroke-width: 2px;
	text-shadow: 2px 2px 10px black;
	transition: all 0.5s ease-in-out;
	text-align: left;
	letter-spacing: 0.2em;
	animation: flicker 0.5s ease-in-out infinite alternate;

	&:hover {
		color: #fff;
	}
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  margin-top: 100ch;
}

/* The dots/bullets/indicators */
.dot {
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  margin-top: 50px;
  transition: background-color 0.6s ease;
}

.active {
  background-color: #717171;
}

/* Fading animation */
.fade {
  animation-name: fade;
  animation-duration: 1.5s;
}

@keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

/* On smaller screens, decrease text size */
@media only screen and (max-width: 300px) {
  .text {font-size: 11px}
}

.data_set{
  .data_set {
    width: 100px;
    margin: auto; /* horizontally center the element */
    display: flex;
    flex-direction: column;
    justify-content: center; /* vertically center the content */
    align-items: center; /* horizontally center the content */
}


.image{
  margin-top: 30px;
  height: 10rem;
  width: 10rem;
  border-radius: 50%;
  
}
.text{
  margin-top: 5px;
  font-size: 17px;
}
.data_set{
  margin-top: 5ch;
  background-color: gray;
}
.description{
  padding: 10px 10px;
  font-size: 27px;
}
.qoute{
  width: 10px;
  height: 10px;
}
.star-container {
  display: flex;
  justify-content: center; /* horizontally center the stars */
}
`;

export default FeedBack;
