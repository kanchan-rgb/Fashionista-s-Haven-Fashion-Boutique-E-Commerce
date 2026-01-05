import { useState } from "react";
import styled from "styled-components";
import CartAmountToggle from "./CartAmountToggle";
import { NavLink } from "react-router-dom";
import { Button } from "../Styles/Button";
import { useCartContext } from "../ProductDisplay/CartContext";

const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();
  const { id: p_id, stock, category, image, price, imagelink, name } = product;
  const userid = sessionStorage.getItem('user');
  const [showPopup, setShowPopup] = useState(false);

  const [amount, setAmount] = useState(1);
  const [size, setSize] = useState("s");

  const setDecrease = () => {
    setAmount((prevAmount) => Math.max(prevAmount - 1, 1));
  };

  const setIncrease = () => {
    setAmount((prevAmount) => Math.min(prevAmount + 1, stock));
  };

  const handleAddToCart = () => {
    // Add item to cart
    addToCart(userid, p_id, size, amount, name, image,imagelink, price, category);

    // Show popup
    setShowPopup(true);

    // Hide popup after 1.3 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 1400);
  };


  return (
    <Wrapper>
      {category !== "accessories" && category !== "kid's wear" && category !== "saree" &&(
        <div className="ax">
          <select
            className="select"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          >
            <option value="s">S</option>
            <option value="m">M</option>
            <option value="l">L</option>
            <option value="xl">XL</option>
            <option value="xxl">XXL</option>
            <option value="xxxl">XXXL</option>
          </select>
        </div>
      )}

      <CartAmountToggle
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />

      {/* <NavLink
        to="/cart"
        onClick={() => addToCart(userid, p_id, size, amount, name, image, price)}
      >
        <Button className="btn">Add To Cart</Button>
      </NavLink> */}
       <NavLink  onClick={handleAddToCart}>
        <Button className="btn">Add To Cart</Button>
      </NavLink>
      {showPopup && (
        <Popup>
          <p style={{color: "white"}}>Item added to cart!</p>
        </Popup>
      )}
    </Wrapper>
  );
};

const Popup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: green;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 9999;
`;

const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  /* we can use it as a global one too  */
  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }
  
  .select{
    cursor: pointer;
    padding: 3px;
    outline: none;
    border: none;
    background: radial-gradient(circle at 100% 100%, #ffffff 3px, #ffffff 3px, transparent 3px) 0% 0%/8px 8px no-repeat,
            radial-gradient(circle at 0 100%, #ffffff 0, #ffffff 3px, transparent 3px) 100% 0%/8px 8px no-repeat,
            radial-gradient(circle at 100% 0, #ffffff 0, #ffffff 3px, transparent 3px) 0% 100%/8px 8px no-repeat,
            radial-gradient(circle at 0 0, #ffffff 0, #ffffff 3px, transparent 3px) 100% 100%/8px 8px no-repeat,
            linear-gradient(#ffffff, #ffffff) 50% 50%/calc(100% - 3px) calc(100% - 3px) no-repeat,
            linear-gradient(#ffffff, #ffffff) 50% 50%/calc(100% - 3px) calc(100% - 3px) no-repeat,
            radial-gradient(at 77% 75%, rgba(218,24,180,0.66) 0%, rgba(40,155,235,0.66) 34.177%, transparent 64.524%, rgba(235,74,169,0.36) 90.055%, rgba(153,235,34,0.57) 100%) 78% 87%/180% 181%,
            linear-gradient(349deg, #437cee 0%, #9118bb 1.741%, #33a0eb 65.971%, #e4399e 100%);
    border-radius: 2px;
    padding: 9px;
    box-sizing: border-box;
  }
  .select:hover{
    -webkit-box-shadow: 5px 5px 8px -2px rgba(94,37,147,0.79); 
    box-shadow: 5px 5px 8px -2px c;
    background: none;
    color: rgba(94,37,147,0.79);
  }
  .option {
    background-color: rgba(94,37,147,0.79);
    color: white;
  }
  .option:not(:checked) {
    background-color: white;
    color: black;
  }
`;
export default AddToCart;