import React from 'react';
import styled from 'styled-components';
import { Button } from '../Styles/Button';
const ProductButton = () => {
    return (
        <Wrapper>
            <div className="container">
                <div className="slide">
                <Button className='pbutton'>
                    <img className='pbimg' src='./images/Product Button/1.png' alt='Women"s Ware'/>
                    
                </Button>
                <Button className='pbutton'>
                    <img className='pbimg' src='./images/Product Button/2.png' alt='Men"s Ware'/>
                    
                </Button>
          
                <Button className='pbutton'>
                    <img className='pbimg' src='./images/Product Button/3.png' alt='Kid"s Ware'/>
                    
                </Button>
         
                <Button className='pbutton'>
                    <img className='pbimg' src='./images/Product Button/4.png' alt='Accesorices'/>
                    
                </Button>
                </div>
            </div>
        </Wrapper>
    );
};
const Wrapper = styled.section`
padding: 10rem 0;
.grid {
  gap: 4.8rem;
}

.pbutton{
    height: 20ch;
    width: 20ch;
    background: transparent;
    animation: shadow 2s infinite alternate;
    color: black;
    border-radius:100ch;
}
@keyframes shadow {
    0% {
      box-shadow: 9px 9px 9px rgb(58, 7, 74);
    }
    100% {
      box-shadow: 9px 9px 30px rgb(85, 8, 110);
    }
  }

  .pbutton:hover{
    height: 20ch;
    width: 20ch;
    background: transparent;
    animation: shadow2 0.3s infinite alternate;
    color: black;
    border-radius:100ch;
}
@keyframes shadow2 {
    0% {
      box-shadow: 9px 9px 9px rgb(58, 7, 74);
    }
    100% {
      box-shadow: 9px 9px 30px rgb(85, 8, 110);
    }
  }

.pbimg{
    width: 13ch;
    height: 13ch;
}
.slide{
    margin-top: 3.2rem;
    margin-bottom: -12rem;
    margin-left: 8rem;
    margin-right: 8rem;
    display: flex;
    justify-content: space-between;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    flex-direction: row;
}
@media (max-width: ${({ theme }) => theme.media.mobile}) {
    .slide{
      margin-top: 50%;
      display: grid;
      grid-template-columns: 2fr 1fr;
      /* background-color: red; */
      text-align: center;
    }
    .pbutton{
      margin-top:20%;
      margin-right: -3ch;
      height: 13ch;
      width: 13ch;
      margin-left: -3ch;
    }
    .pbimg{
      width: 8ch;
      height: 8ch;
  }
  }
`;
export default ProductButton;