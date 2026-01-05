import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";
import CartAmountToggle from "./CartAmountToggle";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../ProductDisplay/CartContext";
import styled from "styled-components";
import { Button } from "../Styles/Button";

const CartItem = () => {
  const { cart, removeItem } = useCartContext();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [itemToRemove, setItemToRemove] = useState(null);

  ; // Fetch data on every userId change

  const handleRemoveItem = (itemId) => {
    setItemToRemove(itemId);
    setShowConfirmation(true);
  };

  const confirmRemoveItem = () => {
    if (itemToRemove) {
      removeItem(itemToRemove);
      setShowConfirmation(false);
      window.location.reload(); // Reload the page after removing the item
    }
  };

  return (
    <div>
      {cart.map(cartItem => (
        <div className="cart_heading grid grid-five-column" key={cartItem.id} style={{ marginBottom: '25px' }}>
          <NavLink to={`/singleproduct/${cartItem.p_id}`}>
          <div className="cart-image--name">
            <div>
              <figure>

                <img className="pimage" src={`data:image/jpeg;base64,${cartItem.image}`} alt={cartItem.image} />

              </figure>
           
              <p>{cartItem.name.length > 30 ? cartItem.name.substring(0, 30) + '........' : cartItem.name}</p>
              <div className="color-div">
                {['accessories', 'saree', "kid's wear"].includes(cartItem.category) ? null : (
                  <p>Size: {cartItem.size}</p>
                )}
              </div>
            </div>
          </div>
        </NavLink>
          {/* price */ }
        < div className = "cart-hide" >
        <p>
          <FormatPrice price={cartItem.price} />
        </p>
          </div>

          {/* Quantity */ }
  <p>
    {cartItem.amount}
  </p>

  {/* Subtotal */ }
          <div className="cart-hide">
            <p>
              <FormatPrice price={cartItem.price * cartItem.amount} />
            </p>
          </div>

          <div>
            <FaTrash className="remove_icon" onClick={() => handleRemoveItem(cartItem.id)} />
          </div>
        </div >
      ))}
{ cart.length === 0 && <p>No items in the cart.</p> }

{/* Confirmation pop-up */ }
{
  showConfirmation && (
    <Pop>
      <div className="popup">
        <div className="popup-content">
          <p>Are you sure you want to remove this item from the cart?</p>
          <Button style={{ backgroundColor: "red" }} onClick={confirmRemoveItem}>Yes</Button>
          <Button style={{ backgroundColor: "green" }} onClick={() => setShowConfirmation(false)}>No</Button>
        </div>
      </div>
    </Pop>
  )
}
    </div >
  );
};

const Pop = styled.section`
/* CSS for the confirmation pop-up */
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* semi-transparent black overlay */
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.popup-content p {
  margin-bottom: 20px;
}

.popup-content button {
  padding: 10px 20px;
  margin-right: 10px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}

.popup-content button:last-child {
  margin-right: 0;
  background-color: #dc3545;
}

.popup-content button:hover {
  opacity: 0.8;
}

`
export default CartItem;
