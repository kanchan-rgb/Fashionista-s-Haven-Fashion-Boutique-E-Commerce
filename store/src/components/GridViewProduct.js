import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";
import styled from "styled-components"
const GridViewProduct = (curElem) => {
  const { id, name, image, price, category } = curElem;
  return (
    <Wrapper>
    <NavLink to={`/singleproduct/${id}`}>
      <div className="card">
        <figure>
          <img src={`data:image/jpeg;base64,${image}`} alt={name} />
        </figure>

        <div className="card-data">
          <div className="card-data-flex">
            <h3>{name.slice(0, 20)}.....</h3>
            <p className="price">{<FormatPrice price={price}/>}</p>
          </div>
        </div>
      </div>
    </NavLink>
    </Wrapper>
  );
};
const Wrapper = styled.section`
.price{
       
    text-align: left;
    font-weight: 900;
    background: linear-gradient(to right, #a15ad1 20%, #461766 40%, #461766 60%, #c07eed 80%);
    background-size: 200% auto;
    
    color: #000;
    background-clip: text;
    text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    
    animation: shine 1s linear infinite;
    @keyframes shine {
      to {
        background-position: 200% center;
      }
    }
  }
`
export default GridViewProduct;