import styled from "styled-components";

const TrustedBrands = () => {
  return (
    <Wrapper className="brand-section">
      <div className="container">
        <h3>Trusted By 1000+ Companies</h3>
        <div className="brand-section-slider">
          {/* my 1st img  */}
          <div className="slide">
            <img
              src="./images/Trusted Brands/01.jpeg"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="./images/Trusted Brands/02.png"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="./images/Trusted Brands/03.png"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="./images/Trusted Brands/04.png"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="./images/Trusted Brands/05.png"
              alt="trusted-brands"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 1rem 1rem;
  margin-bottom: 1.5rem;
  background-color: ${({ theme }) => theme.colors.bg};
  
  .brand-section {
    padding: 12rem 0 0 0;
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
  }

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .brand-section-slider {
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      margin-top: 3.2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      /* background-color: red; */
      text-align: center;
    }
  }
`;

export default TrustedBrands;