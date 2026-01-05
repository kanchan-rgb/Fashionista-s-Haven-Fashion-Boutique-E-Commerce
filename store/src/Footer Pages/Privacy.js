import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";


const Privacy = () => {
  return (
    <>
    <Header/>
    <Wrapper>
      <div className="container">

        <div className="sign">
          <span className="fast-flicker">P</span>R<span className="flicker">I</span>V<span className="fast-flicker">A</span>C<span className="flicker">Y </span><span className="fast-flicker">P</span>O<span className="flicker">L</span>I<span className="fast-flicker">C</span><span className="flicker">Y</span>
        </div>
       

        <div className="content">
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Welcome to our boutique's Privacy Policy. Your privacy is important to us, and we are committed to protecting the personal information you share with us. This policy outlines how we collect, use, disclose, and protect your information when you visit our website or interact with us.</p>
          <h2>Information We Collect</h2>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;When you visit our website, we may collect certain information about your browsing behavior, such as your IP address, browser type, device information, and pages visited. If you make a purchase or sign up for our newsletter, we may also collect your name, email address, shipping address, and payment information.</p>
          <h2>How We Use Your Information</h2>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We use the information we collect to provide you with a personalized shopping experience, process your orders, communicate with you about your purchases, send you promotional offers and newsletters (if you opt-in), and improve our website's functionality and user experience.</p>
          <h2>Information Sharing and Disclosure</h2>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We do not sell, trade, or rent your personal information to third parties. However, we may share your information with trusted service providers who assist us in operating our website, processing payments, delivering orders, or sending newsletters. These service providers are contractually obligated to keep your information confidential and secure.</p>
          <h2>Data Security</h2>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We take reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. We use encryption technology, secure servers, and best practices in data management to safeguard your information.</p>
          <h2>Your Rights</h2>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You have the right to access, update, or delete your personal information at any time. You may also unsubscribe from our marketing communications or opt-out of cookies through your browser settings.</p>
          <h2>Changes to This Policy</h2>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We may update our Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any significant changes and seek your consent if required by law.</p>
          <h2>Contact Us</h2>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;If you have any questions or concerns about our Privacy Policy or how we handle your personal information, please contact us at <a href="fashionistashaven09@gmail.com">fashionistashaven09@gmail.com</a>.</p>


          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Thank you for trusting us with your personal information. We appreciate your continued support and patronage.</p>
        </div>



      </div>

    </Wrapper>
    <Footer/>
    </>
  );
};

const Wrapper = styled.section`


  background-image: url(./images/LOGO/L4.png);
  background-size: 900px 900px;
  background-position: center;
  background-repeat: no-repeat;

a{
  color: blue;
}

a:hover{
  color: purple;
  font-weight: 700;
}

.content {
  max-width: 100%;
  margin: 0 auto;
  margin-top: 10ch;
  padding: 20px;
  background-color: transparent;
  border-radius: 5px;
}


h2{
  color: purple;
  font-size: 25px;
  font-weight: 700;
  text-shadow: 2px 3px 1px rgba(0,0,0,0.21);
} 


p{
  font-style: italic;
  margin-top: 2ch;
  margin-left: 3ch;
  margin-bottom: 2ch;
  font-size: 15px;
}

.sign {
  font-size: 3.5rem;
  text-align: center;
  margin-top: 7ch;
  text-transform: uppercase;
  letter-spacing: 8px;
  top: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  display: inline-block;
  font-family: "Clip";
  text-transform: uppercase;
  color: #ffe6ff;
  text-shadow: 0 0 0.6rem #ffe6ff, 0 0 1.5rem #ff65bd,
    -0.2rem 0.1rem 1rem #ff65bd, 0.2rem 0.1rem 1rem #ff65bd,
    0 -0.5rem 2rem #ff2483, 0 0.5rem 3rem #ff2483;
  animation: shine 2s forwards, flicker 3s infinite;
}

@keyframes blink {
  0%,
  22%,
  36%,
  75% {
    color: #fff;
    text-shadow: 0 0 0.6rem #8c56a8, 0 0 1.5rem #8c56a8,
      -0.2rem 0.1rem 1rem #8c56a8, 0.2rem 0.1rem 1rem #8c56a8,
      0 -0.5rem 2rem #8c56a8, 0 0.5rem 3rem #8c56a8;
  }
  28%,
  33% {
    color: #8c56a8;
    text-shadow: none;
  }
  82%,
  97% {
    color: #8c56a8;
    text-shadow: none;
  }
}

.flicker {
  animation: shine 2s forwards, blink 3s 2s infinite;
}

.fast-flicker {
  animation: shine 2s forwards, blink 10s 1s infinite;
}

@keyframes shine {
  0% {
    color: #640f91;
    text-shadow: none;
  }
  100% {
    color: #fff;
    text-shadow: 0 0 0.6rem #8c56a8, 0 0 1.5rem #8c56a8,
    -0.2rem 0.1rem 1rem #8c56a8, 0.2rem 0.1rem 1rem #8c56a8,
    0 -0.5rem 2rem #8c56a8, 0 0.5rem 3rem #8c56a8;
  }
}

@keyframes flicker {
  from {
    opacity: 1;
  }

  4% {
    opacity: 0.9;
  }

  6% {
    opacity: 0.85;
  }

  8% {
    opacity: 0.95;
  }

  10% {
    opacity: 0.9;
  }

  11% {
    opacity: 0.922;
  }

  12% {
    opacity: 0.9;
  }

  14% {
    opacity: 0.95;
  }

  16% {
    opacity: 0.98;
  }

  17% {
    opacity: 0.9;
  }

  19% {
    opacity: 0.93;
  }

  20% {
    opacity: 0.99;
  }

  24% {
    opacity: 1;
  }

  26% {
    opacity: 0.94;
  }

  28% {
    opacity: 0.98;
  }

  37% {
    opacity: 0.93;
  }

  38% {
    opacity: 0.5;
  }

  39% {
    opacity: 0.96;
  }

  42% {
    opacity: 1;
  }

  44% {
    opacity: 0.97;
  }

  46% {
    opacity: 0.94;
  }

  56% {
    opacity: 0.9;
  }

  58% {
    opacity: 0.9;
  }

  60% {
    opacity: 0.99;
  }

  68% {
    opacity: 1;
  }

  70% {
    opacity: 0.9;
  }

  72% {
    opacity: 0.95;
  }

  93% {
    opacity: 0.93;
  }

  95% {
    opacity: 0.95;
  }

  97% {
    opacity: 0.93;
  }

  to {
    opacity: 1;
  }
}


`;

export default Privacy;