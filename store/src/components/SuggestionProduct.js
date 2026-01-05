import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";
import styled from "styled-components";
import { Button } from "../Styles/Button";

const SuggestionProduct = ({ category }) => {

    const [data, getSuggestionProducts] = useState([]);

  useEffect(() => {
    const fetchSuggestionProducts = async () => {
      try {
        const response = await fetch(`http://localhost:5050/products/getbycategory/${category}?count=6`);
        const data = await response.json();
        getSuggestionProducts(data); // Assuming getSuggestionProducts updates suggestionProducts state in context
      } catch (error) {
        console.error("Error fetching suggestion products:", error);
      }
    };

    fetchSuggestionProducts();
  }, [category]);

  return (
    <Wrapper className="section">
      <div className="container">
        <div className="neons col-12">
          <h1>
            <em>Products You Might Like</em>
          </h1>
        </div>
        <div className="grid grid-three-column">
          {data.map((curElem) => (
            <NavLink to={`/singleproduct/${curElem.id}`}>
              <div className="card">
                <figure>
                  <img src={`data:image/jpeg;base64,${curElem.image}`} alt={curElem.name} />
                  <figcaption className="caption">{curElem.category}</figcaption>
                </figure>
                <div className="card-data">
                  <div className="card-data-flex">
                    <h3>{curElem.name}</h3>
                    <p className="card-data--price">{<FormatPrice price={curElem.price} />}</p>
                  </div>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
      <div className="btnDiv">
        <NavLink to={'/products'}>
            <Button className="btn">Show More</Button>
        </NavLink>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
.btnDiv{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
}
.btn{
    background: linear-gradient(-45deg, #cab4d1, #2c0b36, #8eb1d4, #23d5ab);
    background-size: 400% 400%;
    animation: gradient 5s ease infinite;
    color: #fff;
    font-weight: 600;
}
@keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
padding: 1rem 0;
margin-top: 8ch;
background-color: ${({ theme }) => theme.colors.bg};

.container {
  max-width: 120rem;
}
.neons {
  text-align: left;
  text-transform: uppercase;
}

.neons h1 {
 font-size: 3rem;
 margin-bottom: 5rem;
 text-align: left;
  font-weight: bold;
 -webkit-animation: glow 2s ease-in-out infinite alternate;
 -moz-animation: glow 2s ease-in-out infinite alternate;
 animation: glow 2s ease-in-out infinite alternate;
}

@-webkit-keyframes glow {
    from {
     color: #fff;
     text-shadow: 1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue;
 }
 
 to {
    color: black;
   text-shadow: 0 0 20px #00fff2, 0 0 30px #00fff2, 0 0 40px #00fff2, 0 0 50px #00fff2, 0 0 60px #00fff2, 0 0 70px #00fff2, 0 0 80px #00fff2, 0 1 90px #00fff2;
 }
}

figure {
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  transition: all 0.5s linear;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    transition: all 0.2s linear;
    cursor: pointer;
  }
  &:hover::after {
    width: 100%;
  }
  &:hover img {
    transform: scale(1.2);
  }
  img {
    max-width: 90%;
    margin-top: 1.5rem;
    height: 20rem;
    transition: all 0.2s linear;
  }

  .caption {
    position: absolute;
    top: 15%;
    right: 10%;
    text-transform: uppercase;
    background-color: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.helper};
    padding: 0.8rem 2rem;
    font-size: 1.2rem;
    border-radius: 2rem;
  }
}

.card {
  background-color: #fff;
  border-radius: 1rem;

  .card-data {
    padding: 0 2rem;
  }

  .card-data-flex {
    margin: 2rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h3 {
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }

  .card-data--price {
    color: ${({ theme }) => theme.colors.helper};
  }

  .btn {
    margin: 2rem auto;
    background-color: rgb(0 0 0 / 0%);
    border: 0.1rem solid rgb(98 84 243);
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background-color: rgb(98 84 243);
    }

    &:hover a {
      color: #fff;
    }
    a {
      color: rgb(98 84 243);
      font-size: 1.4rem;
    }
  }
}
`;

export default SuggestionProduct;
