import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../Styles/Button";

const Banner = ({ myData }) => {
  const { name } = myData;

  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="banner-section-data">
            <p className="intro-data">Welcome to </p>
            <div className="sign">
            <span className="fast-flicker">F</span>a<span className="flicker">s</span>h<span className="fast-flicker">i</span>o<span className="flicker">n</span>i<span className="fast-flicker">s</span>t<span className="flicker">a</span>'s <span className="fast-flicker">H</span>a<span className="flicker">v</span>e<span className="fast-flicker">n</span>
            </div>
            
            <p>
            "Elevate your style from anywhere with our boutique's chic and curated collection, 
            now available at your fingertips on our seamless e-commerce platform."
            </p>
            <NavLink to={`/products`}>
              <Button>show now</Button>
            </NavLink>
          </div>
          {/* our homepage image  */}
          <div className="banner-section-image">
            <figure>
              <div className="slideset1">
                
                  <img
                    src="./images/Banner/BF1.gif"
                    alt="banner-section-photo"
                    className="img-style"
                  />
               
                
                  <img
                    src="./images/Banner/BF2.gif"
                    alt="banner-section-photo"
                    className="img-style"
                  />
                
                  <img
                    src="./images/Banner/BF3.gif"
                    alt="banner-section-photo"
                    className="img-style"
                  />
               
                  <img
                    src="./images/Banner/BF4.gif"
                    alt="banner-section-photo"
                    className="img-style"
                  />
              
                
               
              </div>
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 1rem 0;

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .banner-section-data {
    p {
      margin: 2rem 0;
      margin-top:10%;
    }

   

    .intro-data {
        text-transform: uppercase;
        background-image: linear-gradient(
         -225deg,
         #231557 0%,
         #44107a 29%,
         #ff1361 67%,
         #fff800 100%
       );
       font-weight: bold;
       margin-bottom: -10px;
       background-size: auto auto;
       background-clip: border-box;
       background-size: 200% auto;
       color: #fff;
       background-clip: text;
       text-fill-color: transparent;
       -webkit-background-clip: text;
       -webkit-text-fill-color: transparent;
       animation: textclip 2s linear infinite;
       display: inline-block;
       font-size: 19px;
     }
     
     @keyframes textclip {
       to {
         background-position: 200% center;
       }
     }
  }

  .banner-section-image {
    width: 100%;
    height: auto;
    margin-top: 10ch;
    justify-content: center;
    align-items: center;
  }
 
  .img-style {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }

  }

  .slideset1 {  
    transform-style: preserve-3d;
  }
  .slideset1::before {
    content: "";
    position: absolute;	
    inset: 2px;
    widht: 280px;
    height: 270px;
    background: conic-gradient(from 90deg at 40% -25%, #4d0500,#4d0550, #4d0587, #4d0560, #81278f, #5e1869, #6e1e96, #6e1e96, #cf1261, #d61039, #de0d0d, #ee6907, #f79d03, #ffd700, #ffd700, #ffd700);
    filter: blur(11px);
    transform: translate3d(14px,-11px,-1px);
    clip-path: polygon(-100vmax -100vmax,100vmax -100vmax,100vmax 100vmax,-100vmax 100vmax,-100vmax -100vmax,calc(0px - 14px) calc(0px - -11px),calc(0px - 14px) calc(100% - -11px - 0px),calc(100% - 14px - 0px) calc(100% - -11px - 0px),calc(100% - 14px - 0px) calc(0px - -11px),calc(0px - 14px) calc(0px - -11px));
    pointer-events: none;
    pointer-events: none;
  }
  .slideset1 > * {
    visibility: hidden; 
    position: absolute;
    width: 100%;
    height: auto;
    top: 0; 
    left: 0; 
    animation: 16s autoplay1 infinite
    
  }
  @keyframes autoplay1 {
    0% {visibility: visible}
    33.33% {visibility: hidden}
  }
  .slideset1 > *:nth-child(1) {animation-delay: 0s}
  .slideset1 > *:nth-child(2) {animation-delay: 4s}
  .slideset1 > *:nth-child(3) {animation-delay: 8s}
  .slideset1 > *:nth-child(4) {animation-delay: 12s}
  .slideset1 > *:nth-child(5) {animation-delay: 16s}

  .sign {
    position: relative;
    
    width: 50%;
    height: 50%;
    
    transform: translate(-50%, -50%);
    letter-spacing: 8px;
    left: 3.5%;
    top: 60%;
    display: inline-block;
    font-family: "Clip";
    text-transform: uppercase;
    font-size: 4em;
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

export default Banner;