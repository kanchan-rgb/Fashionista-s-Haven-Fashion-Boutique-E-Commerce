import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";



const Cancellation = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <div className="container">
          
          
          <div className="sign">
            <span className="fast-flicker">C</span>A
            <span className="flicker">N</span>C
            <span className="fast-flicker">E</span>L
            <span className="flicker">L</span>A
            <span className="fast-flicker">T</span>I
            <span className="flicker">O</span>N
            <span className="fast-flicker"> & </span>R
            <span className="flicker">E</span>T
            <span className="fast-flicker">U</span>R
            <span className="flicker">N </span>P
            <span className="fast-flicker">O</span>L
            <span className="flicker">I</span>C
            <span className="fast-flicker">Y</span>
          </div>



          <div className="content">
            <div className="content">
              <h2>Cancellation</h2>
              <p>Orders can be canceled within 24 hours of purchase, provided they have not been processed or shipped.
                To cancel an order, please contact our customer service team with your order details.</p>
              <h2>Returns</h2>
              <p>We accept returns within 14 days of delivery for a full refund or exchange.
                Items must be unused, unworn, and in their original condition with tags attached.
                To initiate a return, please contact us for a return authorization and shipping instructions.
                Customers are responsible for return shipping costs unless the return is due to a mistake on our part or a defective item.
                Refunds will be issued to the original payment method within 7-10 business days of receiving the returned item.</p>
              <h2>Exchanges</h2>
              <p>Exchanges are subject to availability. If the desired item is out of stock, a refund will be issued.
                To exchange an item, please contact our customer service team to arrange for the exchange.</p>
              <h2>Exceptions</h2>
              <p>Personalized or custom-made items are not eligible for return or exchange unless they are damaged or defective.
                Final sale items cannot be returned or exchanged.</p>
              <h2>Damaged or Defective Items:</h2>
              <p>If you receive a damaged or defective item, please contact us immediately with photos and a description of the issue.
                We will provide a prepaid return label and either a replacement or refund upon receiving the damaged or defective item.</p>
              <h2>Contact Us:</h2>
              <p>If you have any questions or concerns about our cancellation and return policy, please don't hesitate to contact our customer service team.</p>
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

export default Cancellation;