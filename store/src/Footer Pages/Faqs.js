import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";



const Faqs = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <div className="container">


        <div className="sign">
            <span className="fast-flicker">F</span>R
            <span className="flicker">E</span>Q
            <span className="fast-flicker">U</span>E
            <span className="flicker">N</span>T
            <span className="fast-flicker">L</span>Y
            <span className="flicker"> A</span>S
            <span className="fast-flicker">K</span>E
            <span className="flicker">D </span>Q
            <span className="fast-flicker">U</span>E
            <span className="flicker">S</span>T
            <span className="fast-flicker">I</span>O
            <span className="flicker">N</span>S
            <span className="fast-flicker"> (</span>F
            <span className="flicker">A</span>Q
            <span className="fast-flicker">S</span>
            <span className="flicker">)</span>
          </div>

          <div className="content">
            <div className="content">
              <h2>What are your accepted payment methods?</h2>
              <p>We accept various payment methods, including major credit cards (Visa, Mastercard, American Express), PayPal,
                and online banking transfers for your convenience.</p>
              <h2>How can I track my order?</h2>
              <p>Once your order is confirmed and dispatched, you will receive a tracking number via email or SMS. You can use
                this tracking number to monitor the status and location of your package.</p>
              <h2>Do you offer international shipping?</h2>
              <p>Yes, we offer international shipping to select countries. Shipping costs and delivery times may vary
                depending on your location. Please refer to our Shipping Policy or contact our customer service for more
                information.</p>
              <h2>Can I return or exchange an item?</h2>
              <p>We understand that sometimes items may not meet your expectations. We offer a hassle-free return and exchange
                policy within [number] days of purchase. Please ensure the item is in its original condition with tags
                attached. Refer to our Returns & Exchanges Policy for detailed instructions.</p>
              <h2>How can I contact your customer support?</h2>
              <p>Our dedicated customer support team is available to assist you with any inquiries or concerns. You can reach
                us via email at [email address], phone at [phone number], or through our online contact form on the website.
                We strive to respond to all queries promptly.</p>
              <h2>Do you offer gift wrapping services?</h2>
              <p>Yes, we offer complimentary gift wrapping services for your purchases. Simply select the gift wrapping option
                during checkout, and our team will ensure your item is beautifully wrapped and ready to be presented.</p>
              <h2>Are your products ethically sourced?</h2>
              <p>We are committed to ethical and sustainable practices. Our products are sourced from trusted suppliers who
                adhere to fair labor standards and environmentally friendly manufacturing processes. We prioritize quality
                and ethical sourcing in all our collections.</p>
              <h2>Can I cancel or modify my order?</h2>
              <p>We aim to process orders quickly; however, if you need to cancel or modify your order, please contact us as
                soon as possible. We will do our best to accommodate your request, depending on the order status.</p>
              <h2> Do you offer a loyalty program?</h2>
              <p>Yes, we value our loyal customers and offer a rewards program as a token of appreciation. Earn points with
                every purchase and redeem them for exclusive discounts and perks. Sign up for our loyalty program today to
                start earning rewards!</p>
              <h2>How can I stay updated on new arrivals and promotions?</h2>
              <p>Stay connected with us by subscribing to our newsletter and following us on social media platforms. Receive
                updates on new arrivals, promotions, and exclusive offers straight to your inbox or feed.</p>
            </div>



          </div>
        </div>

      </Wrapper>
      <Footer />
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

export default Faqs;