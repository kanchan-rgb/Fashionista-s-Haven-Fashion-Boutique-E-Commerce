import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";



const Shipping = () => {
  return (
    <>
      <Header />
      <Wrapper>

        <div className="container">

        <div className="sign">
            <span className="fast-flicker">S</span>H
            <span className="flicker">I</span>P
            <span className="fast-flicker">P</span>I
            <span className="flicker">N</span>G
            <span className="fast-flicker"> P</span>O
            <span className="flicker">L</span>I
            <span className="fast-flicker">C</span>Y
          </div>



          <div className="content">
            <h2>Shipping Rates and Times</h2>
            <p>We offer standard shipping rates for all orders within [region/country]. Shipping costs are calculated based
              on the weight of your order and your location. Please note that additional charges may apply for expedited
              shipping or international orders. Orders are typically processed and shipped within 1-3 business days.</p>
            <h2>Shipping Methods</h2>
            <p>We utilize trusted shipping carriers to ensure safe and timely delivery of your orders. Depending on your
              location and preferences, we offer a variety of shipping methods including standard shipping, express
              shipping, and overnight shipping. You can select your preferred shipping method during the checkout process.
            </p>
            <h2>Order Tracking</h2>
            <p>Once your order has been processed and shipped, you will receive a confirmation email containing a tracking
              number. You can use this tracking number to monitor the status and whereabouts of your package. Please allow
              up to 24 hours for tracking information to become available after your order has been shipped.</p>
            <h2>Shipping Destinations</h2>
            <p>We currently ship to addresses within [list of countries or regions you ship to]. If you are located outside
              of these areas and would like to place an order, please contact our customer support team for assistance.
            </p>
            <h2>Shipping Delays</h2>
            <p>While we strive to ensure prompt delivery of all orders, please be aware that shipping delays may occur due
              to factors beyond our control, such as weather conditions, customs processing, or carrier issues. In the
              event of a significant delay, we will notify you promptly and provide updates on the status of your order.
            </p>
            <h2>Shipping Restrictions</h2>
            <p>Certain items may be subject to shipping restrictions or regulations based on their contents or destination.
              Please review any applicable restrictions before placing your order. We reserve the right to cancel orders
              that violate these restrictions or cannot be shipped to the specified address.</p>
            <h2>Shipping Fees and Taxes</h2>
            <p>Shipping fees are non-refundable and do not include any applicable taxes, customs duties, or import fees.
              These charges, if any, are the responsibility of the customer and may be collected upon delivery by local
              authorities.</p>

            <p>For any further inquiries or assistance regarding our shipping policy, please don't hesitate to contact our
              customer support team.</p>
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

export default Shipping;