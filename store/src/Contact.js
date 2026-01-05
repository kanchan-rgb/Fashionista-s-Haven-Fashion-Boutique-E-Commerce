import React, { useState } from "react";
import styled from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import axios from "axios";

const Contact = () => {
  
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5050/contactus/addcontactus", formData);
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 1500);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again later.");
    }
  };



  return (
    <>
      <Header />
      <Wrapper>
        <h2 className="common-heading">CONTACT WITH US</h2>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.132874209993!2d88.43433697773294!3d22.57413315628941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275e458febddf%3A0xa5fb7aaab4e3f4b2!2sImagine%20Tech%20Park%20-%20Genpact%20Kolkata%20Salt%20Lake%20Sector%20V!5e0!3m2!1sen!2sin!4v1711382525420!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <div className="container">
          <div className="contact-form">
            <form onSubmit={handleSubmit} className="contact-inputs">
              <input
                className="input-area"
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                className="input-area"
                type="email"
                placeholder="Email-ID"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <textarea
                className="input-area"
                placeholder="Enter your message"
                name="message"
                cols="30"
                rows="10"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

              <input type="submit" value="Send" />
            </form>
          </div>
        </div>
        {showPopup && <Popup>Record added successfully!</Popup>}
      </Wrapper>
      <Footer />
    </>
  );
};


const Popup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #065950;
  color: #fff;
  font-size: 20px;
  padding: 1rem 2rem;
  border-radius: 5px;
  z-index: 9999;
`;
const Wrapper = styled.section`
padding: 2rem 0 5rem 0;
text-align: center;

.container {
  margin-top: 6rem;

  .contact-form {
    max-width: 50rem;
    margin: auto;

    .contact-inputs {
      display: flex;
      flex-direction: column;
      gap: 3rem;
      text-transform: none;

      input[type="submit"] {
        cursor: pointer;
        transition: all 0.2s;

        &:hover {
          background-color: ${({ theme }) => theme.colors.white};
          border: 1px solid ${({ theme }) => theme.colors.btn};
          color: ${({ theme }) => theme.colors.btn};
          box-shadow: 0px 0px 41px 0px rgba(108, 70, 184, 1);
          transform: scale(0.9);
        }
      }
    }
    .input-area {
      outline: none;
      border-radius: 10px;
      text-transform: none;
    }
    .input-area:hover {
      outline: none;
      border-radius: 10px;
      box-shadow: 8px 9px 28px -4px rgba(108, 51, 138, 1);
    }
  }
}
`;
export default Contact;
