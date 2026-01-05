import React from "react";
import styled from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";

const About = () => {

  let message = `Hi,hello`;

  return (
    <>
      <Header />
      <Wrapper className="test">
        <section className="section-white">
          <div className="container">
            <div className="row">


              <svg viewBox="0 0 1320 300">
                <text x="50%" y="25%" dy=".35em" text-anchor="middle">
                   The Team Behind This Project
                </text>
              </svg>


              <div className="slide">
                <div className="col-sm-6 col-md-4">
                  <div className="team-item">

                    <img src="./images/ABOUT US/ATRI_BISWAS.png" className="team-img" alt="pic" />
                    <h3>ATRI BISWAS</h3>
                    <div className="team-info">
                      <p className="sub-catagory">Our CEO & Founder</p>
                      <p className="details">Meet ATRI BISWAS, the visionary behind Fashionista's Haven. With a passion for style and a keen eye for trends, ATRI BISWAS has transformed a simple idea into a thriving fashion destination. Their dedication to curating a collection of chic and sophisticated pieces has redefined the way we approach fashion. As a true fashion enthusiast and entrepreneur, ATRI BISWAS is committed to empowering individuals to express themselves through their personal style. With their innovative vision and unwavering determination, Fashionista's Haven continues to inspire and elevate the wardrobes of fashion-forward individuals worldwide.</p>
                    </div>
                  </div>
                </div>



                <div className="col-sm-6 col-md-4">
                  <div className="team-item">

                    <img src="./images/ABOUT US/SMITA_PAL.png" className="team-img" alt="pic" />
                    <h3>SMITA PAL</h3>
                    <div className="team-info">
                      <p className="sub-catagory">Our Art Director</p>
                      <p className="details">Introducing our Art Director, SMITA PAL, the creative force behind Fashionista's Haven's captivating visual aesthetic. With a keen eye for design and a passion for innovation, SMITA PAL leads our talented team in creating stunning imagery and captivating visuals that bring our brand to life. From conceptualizing photo shoots to overseeing graphic design projects, SMITA PAL ensures that every aspect of Fashionista's Haven's visual identity reflects our commitment to style, sophistication, and creativity. With their exceptional talent and artistic vision, SMITA PAL plays a pivotal role in shaping the unique look and feel of our brand, inspiring fashion enthusiasts around the world to embrace their individuality and express themselves through their personal style.</p>
                    </div>
                  </div>
                </div>



                <div className="col-sm-6 col-md-4">
                  <div className="team-item">

                    <img src="./images/ABOUT US/Kanchan_Majumder.png" className="team-img" alt="pic" />
                    <h3>KANCHAN KUMAR MAJUMDER</h3>
                    <div className="team-info">
                      <p className="sub-catagory">Our Designer</p>
                      <p className="details">Meet our Designer, KANCHAN KUMAR MAJUMDER, the mastermind behind the chic and elegant designs that define Fashionista's Haven. With a flair for creativity and a passion for fashion, KANCHAN KUMAR MAJUMDER brings a fresh perspective to every collection, infusing each piece with sophistication and style. From conceptualizing new trends to bringing sketches to life, KANCHAN KUMAR MAJUMDER is dedicated to creating garments and accessories that empower individuals to express themselves through their personal style. With meticulous attention to detail and a commitment to quality craftsmanship, KANCHAN KUMAR MAJUMDER ensures that every Fashionista's Haven creation is not just a garment, but a statement piece that inspires confidence and celebrates individuality.</p>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>



      </Wrapper>;
      <Footer />
    </>
  );
};

const Wrapper = styled.section`
overflow: hidden;
height: auto;
margin-bottom: 5ch;
.section-white{
  background: #fff;
  padding: 4px 0;

}
.team-item{
  background: #e4e3e6;
  text-align: center;
  margin: 20px 0;
  padding: 50px 20px 40px 20px;
  width: 60ch;
  height: 190ch;
  border-radius: 8px 8px;
  transition: all 0.25s ease-in-out;
}

.team-item:hover{
  background: #d5d3db;
}
.slide{
  margin-top: -150px;
  margin-bottom: -12rem;
  margin-left: 8rem;
  margin-right: 8rem;
  display: flex;
  justify-content: space-between;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  flex-direction: row;
}
.team-item h3{
  margin: 30px 0 1px 0;
  color: #440f73;
  font-size: 19px;
  font-weight: 1000;
  text-transform: uppercase;
  -webkit-transition: all 0.25s ease-in-out;
  -moz-transition: all 0.25s ease-in-out;
  transition: all 0.25s ease-in-out;
}

.section-subtitle{
  white-space: pre-line;
}

.team-item:hover h3{
  color: #440f73;
}

.team-info{
  display: block;
  margin-bottom: 0;
}

.details{
  color: black;
  margin-top: 20px;
}

.team-info::after{
  background: #008aff;
  background: -webkit-linear-gradient(
      135deg, #fff 0%, #fff 100%
  );
  background: -o-linear-gradient(
      135deg, #fff 0%, #fff 100%
  );
  background: -moz-linear-gradient(
      135deg, #fff 0%, #fff 100%
  );
  background: linear-gradient(
      135deg, #440f73 0%, #440f73 100%
  );

  display: inline-block;
  vertical-align: middle;
  content: '';
  width: 50px;
  height: 3px;
  margin-top: 20px;
}

.sub-catagory{
  font-style: bold;
  font-family: Fantasy;
  color: red;
  margin-top: 10px;
}

.team-img{
  max-width: 140px;
  padding: 1px 1px;
  background-color: purple;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  margin-top: -15px;
}

.svg {
  font-family: 'Russo One', sans-serif;
  position: absolute; 
  margin-top: -70px;
}
svg text {
  margin-top: -70px;
  text-transform: uppercase;
  animation: stroke 5s infinite alternate;
  stroke-width: 10;
  stroke: #365fa0;
  font-size: 60px;
}
@keyframes stroke {
  0%   {
    fill: rgba(72,138,20,0); stroke: rgba(54,95,160,1);
    stroke-dashoffset: 25%; stroke-dasharray: 0 50%; stroke-width: 2;
  }
  70%  {fill: rgba(72,138,20,0); stroke: rgba(54,95,160,1); }
  80%  {fill: rgba(72,138,20,0); stroke: rgba(54,95,160,1); stroke-width: 3; }
  100% {
    fill: rgba(72,138,204,1); stroke: rgba(54,95,160,0); 
    stroke-dashoffset: -25%; stroke-dasharray: 50% 0; stroke-width: 0;
  }
}
`;

export default About;