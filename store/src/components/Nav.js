import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";
import { Button } from "../Styles/Button";
import { useCartContext } from "../ProductDisplay/CartContext";
import axios from 'axios';
import LogoutConfirmationDialog from './LogoutConfirmationDialog';

const Nav = () => {
  const [menuIcon, setMenuIcon] = useState();
  const { cart, total_item } = useCartContext();
  const [user, setUser] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    const userId = sessionStorage.getItem('user');
    if (userId) {
      // Fetch user information from the database using the user ID
      axios.get(`http://localhost:5050/users/getusers/${userId}`)
        .then(response => {
          setUser(response.data);
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
        });
    }
  }, []);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    setShowConfirmation(true);
  };

  const handleConfirmLogout = () => {
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("admin");
    sessionStorage.removeItem("userlogin");
    // localStorage.setItem('isAuthenticated', false);
    setIsAuthenticated(false);
    setUser(null);

    window.location.href = '/';
    setShowConfirmation(false);
  };

  const handleCancelLogout = () => {
    setShowConfirmation(false);
  };
  const Nav = styled.nav`

  
    .navbar-lists {
      display: flex;
      gap: 4.8rem;
      align-items: center;

      .navbar-link {
        &:link,
        &:visited {
          display: inline-block;
          text-decoration: none;
          width: 100%;
          font-size: 1.8rem;
          font-weight: 500;
          text-transform: uppercase;
          color: ${({ theme }) => theme.colors.black};
          transition: color 0.3s linear;
        }

        &:hover,
        &:active {
          color: ${({ theme }) => theme.colors.helper};
        }
      }
    }
   
    .navbar-link-logout{
      &:link,
      &:visited {
        display: inline-block;
        text-decoration: none;
        width: 100%;
        font-size: 1.8rem;
        font-weight: 500;
        text-transform: uppercase;
        color: white;
        transition: color 0.3s linear;
      }

      &:hover,
      &:active {
        color: red;
      }
    }
    .mobile-navbar-btn {
      display: none;
      background-color: transparent;
      cursor: pointer;
      border: none;
    }

    .mobile-nav-icon[name="close-outline"] {
      display: none;
    }

    .close-outline {
      display: none;
    }

    .cart-trolley--link {
      position: relative;

      .cart-trolley {
        position: relative;
        font-size: 3.2rem;
      }

      .cart-total--item {
        width: 2.4rem;
        height: 2.4rem;
        position: absolute;
        color: #fff;
        border-radius: 50%;
        display: grid;
        place-items: center;
        top: -20%;
        left: 70%;
        background-color: #4d0596;
      }
    }

    .user-login--name {
      text-transform: capitalize;
    }

    .user-logout,
    .user-login {
      font-size: 1.4rem;
      padding: 0.8rem 1.4rem;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .mobile-navbar-btn {
        display: inline-block;
        z-index: 9999;
        border: ${({ theme }) => theme.colors.black};

        .mobile-nav-icon {
          font-size: 4.2rem;
          color: ${({ theme }) => theme.colors.black};
        }
      }

      .active .mobile-nav-icon {
        display: none;
        font-size: 4.2rem;
        position: absolute;
        top: 30%;
        right: 10%;
        color: ${({ theme }) => theme.colors.black};
        z-index: 9999;
      }

      .active .close-outline {
        display: inline-block;
      }

      .navbar-lists {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        visibility: hidden;
        opacity: 0;
        transform: translateX(100%);
        /* transform-origin: top; */
        transition: all 3s linear;
      }

      .active .navbar-lists {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        z-index: 999;
        transform-origin: right;
        transition: all 3s linear;

        .navbar-link {
          font-size: 4.2rem;
        }
      }
      .cart-trolley--link {
        position: relative;

        .cart-trolley {
          position: relative;
          font-size: 5.2rem;
        }

        .cart-total--item {
          width: 4.2rem;
          height: 4.2rem;
          font-size: 2rem;
        }
      }

      .user-logout,
      .user-login {
        font-size: 2.2rem;
        padding: 0.8rem 1.4rem;
      }
    }
  `;

  const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 35px;
  background-color: #fff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 100;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  border-radius: 4px;
  overflow: hidden; /* Ensure dropdown is fully visible even with long content */
  max-height: 200px; /* Set a maximum height for the dropdown to enable scrolling */
`;

  const DropdownList = styled.ul`
  list-style-type: none; /* Remove default list styles */
  padding: 0;
  margin: 0;
  border: 1px solid gray;
  border-top: none;
`;

  const DropdownItem = styled.li`
padding: 10px 5px; /* Add padding to increase the gap between items */
border-bottom: 1px solid #e0e0e0; /* Add a border between dropdown items */
&:last-child {
  border-bottom: none; /* Remove border from the last item */
}
&:hover {
  background-color: #f2f2f2; /* Apply background color on hover */
}
`;

  const DropdownItemLogOut = styled.li`
padding: 10px 5px; /* Add padding to increase the gap between items */
border-bottom: 1px solid #e0e0e0; /* Add a border between dropdown items */
background-color:red;
&:last-child {
  border-bottom: none; /* Remove border from the last item */
}
&:hover {
  background-color: white;
}
`;

  return (
    <Nav>
      <div className={menuIcon ? "navbar active" : "navbar"}>
        <ul className="navbar-lists">
          <li>
            <NavLink
              to="/"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}>
              About US
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}>
              Contact US
            </NavLink>
          </li>
          <li>
            <NavLink to='/cart' className="navbar-link cart-trolley--link">
              <FiShoppingCart className="cart-trolley" />
              <span className="cart-total--item"> {cart.length} </span>
            </NavLink>
          </li>
          {/*<li>
            <NavLink
              to="/login"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}>
              <Button>Login</Button>
            </NavLink>
          </li>*/}

          {user ? (
            <li>
              <div style={{ display: 'flex', alignItems: 'center', cursor: "pointer" }} onClick={toggleDropdown}>
                <img
                  src={`data:image/jpeg;base64,${user.photo}`}
                  alt=""
                  style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '5px' }}
                />
                <p className="user-login--name"><b>{user.name}</b></p>
              </div>

              <Dropdown isOpen={isDropdownOpen}>
                <DropdownList>
                  <DropdownItem>
                    <NavLink
                      to={`/profile/${user.id}`}
                      className="navbar-link"
                      onClick={() => {
                        setMenuIcon(false);
                        setIsDropdownOpen(false);
                      }}
                    >
                      Profile
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink
                      to="/address"
                      className="navbar-link"
                      onClick={() => {
                        setMenuIcon(false);
                        setIsDropdownOpen(false);
                      }}
                    >
                      My Address
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink
                      to="/order"
                      className="navbar-link"
                      onClick={() => {
                        setMenuIcon(false);
                        setIsDropdownOpen(false);
                      }}
                    >
                      My Orders
                    </NavLink>
                  </DropdownItem>
                  <DropdownItemLogOut>
                    <NavLink

                      className="navbar-link-logout"
                      onClick={handleLogout}
                    >
                      Logout
                    </NavLink>
                  </DropdownItemLogOut>
                </DropdownList>
              </Dropdown>


            </li>
          ) : (
            <li>
              <NavLink to="/login" className="navbar-link" onClick={() => setMenuIcon(false)}>
                <Button>Login</Button>
              </NavLink>
            </li>
          )}
        </ul>

        {/* two button for open and close of menu */}
        <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setMenuIcon(true)}
          />
          <CgClose
            name="close-outline"
            className="mobile-nav-icon close-outline"
            onClick={() => setMenuIcon(false)}
          />
        </div>
      </div>
      {showConfirmation && (
        <LogoutConfirmationDialog
          onConfirm={handleConfirmLogout}
          onCancel={handleCancelLogout}
        />
      )}
    </Nav>
  );
};

export default Nav;