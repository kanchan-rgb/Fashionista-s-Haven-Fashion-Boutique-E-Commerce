import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";


const Blog = () => {
  return (
    <>
    <Header/>
    <Wrapper>
      <div className="container">

      <div className="sign">
          <span className="fast-flicker">E</span>L
          <span className="flicker">E</span>V
          <span className="fast-flicker">A</span>T
          <span className="flicker">E </span>
          <span className="fast-flicker">Y</span>O
          <span className="flicker">U</span>R
          <span className="fast-flicker"> S</span>T
          <span className="flicker">Y</span>L
          <span className="fast-flicker">E</span>
          {/* <span className="flicker"> O</span>U
          <span className="fast-flicker">R</span> 
          <span className="flicker"> S</span>P 
          <span className="fast-flicker">E</span>C
          <span className="flicker">I</span>A
          <span className="fast-flicker">L</span>I
          <span className="flicker">Z</span>A
          <span className="fast-flicker">T</span>I 
          <span className="flicker">O</span>N */}
        </div>


        <div className="content">
          <h2>Introduction</h2>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In the bustling world of fashion, boutiques stand as intimate havens where style meets individuality. Whether you’re a seasoned fashionista or a casual shopper seeking unique pieces, boutique shopping offers an unparalleled experience. Here are some essential points to consider when exploring the world of boutique fashion:</p>
          <h2>Personalized Service</h2>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Boutiques pride themselves on offering personalized service tailored to each customer. Unlike big-box stores, boutique staff often provide individualized attention, offering styling advice and assistance in finding the perfect pieces to complement your unique style.</p>
          <h2>Curated Collections</h2>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;One of the defining features of boutique shopping is the carefully curated selection of clothing and accessories. Boutiques often showcase independent designers and exclusive brands, offering customers a diverse array of high-quality, distinctive pieces that can't be found elsewhere.</p>
          <h2>Unique Finds</h2>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Boutiques are treasure troves of one-of-a-kind items that allow you to stand out from the crowd. From statement dresses to handcrafted jewelry, boutique shopping offers the opportunity to discover hidden gems that reflect your personality and taste.</p>
          <h2>Supporting Small Businesses</h2>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;By shopping at boutiques, you’re not just investing in your wardrobe – you’re also supporting small businesses and local artisans. Boutiques play a crucial role in fostering creativity and diversity within the fashion industry, ensuring that independent designers have a platform to showcase their talents.</p>
          <h2>Embracing Sustainable Fashion</h2>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Many boutiques prioritize sustainability and ethical practices, offering eco-friendly clothing options made from organic materials or recycled fabrics. By choosing boutique fashion, you can make a positive impact on the environment while still looking chic and stylish.</p>
          <h2>Community Connection</h2>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Boutiques often serve as hubs for building community connections and fostering a sense of camaraderie among like-minded fashion enthusiasts. Whether it's through in-store events, trunk shows, or online communities, boutique shoppers can engage with fellow fashion lovers and share their passion for style.</p>
          <h2>Versatile Wardrobe Staples</h2>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;While boutiques are known for their unique pieces, they also offer a range of versatile wardrobe staples that can be mixed and matched to create endless outfit possibilities. From classic denim to tailored blazers, boutique essentials form the foundation of a timeless and effortlessly chic wardrobe.</p>
          <h2>Conclusion</h2>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Boutique shopping isn't just about buying clothes – it's about embracing a lifestyle centered around self-expression, individuality, and creativity. Whether you're seeking personalized service, unique finds, or sustainable fashion options, boutiques offer a distinctive shopping experience that celebrates style in all its forms. So, next time you're looking to elevate your wardrobe, step into a boutique and discover the endless possibilities that await.</p>
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
margin-top: 15ch;
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

export default Blog;