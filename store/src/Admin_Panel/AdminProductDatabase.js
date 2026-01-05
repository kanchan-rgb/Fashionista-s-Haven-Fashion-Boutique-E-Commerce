import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminHeader from '../components/AdminHader';
import { Button } from '../Styles/Button';
import styled from "styled-components";
import FormatPrice from '../Helpers/FormatPrice';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const AdminProductDatabase = () => {
  const [products, setProducts] = useState([]);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [productIdToDelete, setProductIdToDelete] = useState(null);
  const [productId, setProductId] = useState("");
  const navigate = useNavigate();


  useEffect(() => {
    if (productId) {
      axios.get(`http://localhost:5050/products/getproductbyid${productId}`)
        .then(response => {
          const productData = response.data;
          if (productData) {
            setProducts([productData]);
          } else {
            setProducts([]); // Set products array to empty if no product is found
          }
        })
        .catch(error => {
          console.error('Error fetching product details:', error);
        });
    } else {
      axios.get('http://localhost:5050/products/getall')
        .then(response => {
          setProducts(response.data);
        })
        .catch(error => {
          console.error('Error fetching products:', error);
        });
    }
  }, [productId]);


  const handleProductIdChange = (event) => {
    const { value } = event.target;
    if (value.length >= 3 || value === "") {
      setProductId(value.trim()); // Trim whitespace and set the productId state
    }
  };


  // useEffect(() => {
  //   axios.get('http://localhost:5050/products/getall')
  //     .then(response => {
  //       setProducts(response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching products:', error);
  //     });
  // }, []);

  const handleDeleteProduct = (productId) => {
    setProductIdToDelete(productId);
    setShowDeleteConfirmation(true);
  };

  const handleConfirmDelete = () => {
    if (!productIdToDelete) return;
    axios.delete(`http://localhost:5050/products/deleteProduct/${productIdToDelete}`)
      .then(response => {
        setProducts(products.filter(product => product.id !== productIdToDelete));
        setShowDeleteConfirmation(false);
      })
      .catch(error => {
        console.error('Error deleting product:', error);
      });
  };

  const handleCancelDelete = () => {
    setProductIdToDelete(null);
    setShowDeleteConfirmation(false);
  };


  // const handleDeleteProduct = (productId) => {
  //   if (!productId) return;
  //   if (window.confirm("Are you sure you want to delete this product?")) {
  //     axios.delete(`http://localhost:5050/products/deleteProduct/${productId}`)
  //       .then(response => {
  //         setProducts(products.filter(product => product.id !== productId));
  //       })
  //       .catch(error => {
  //         console.error('Error deleting product:', error);
  //       });
  //   }
  // };

  const handleUpdateProduct = (productId) => {
    navigate(`/admin/update-product/${productId}`); // Use navigate to navigate to the update product page
  };

  return (
    <>
      <AdminHeader />
      <Wrapper>

        <>
          <input
            type="number"
            className='input'
            placeholder="Enter Product's ID"
            onChange={handleProductIdChange} // Handle changes in the input field
          />
          <NavLink to="/admin/addproduct">
            <Button className='add_product'>
              + ADD NEW PRODUCT
            </Button>
          </NavLink>
          {products.length === 0 ? (
            <div className="centered">
            <p>No product found</p>
          </div>
          ) : (
            <div>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Image Link</th>
                    <th>Price</th>
                    <th>Brand</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Stock</th>
                    <th>Reviews</th>
                    <th>Stars</th>
                    <th>Featured</th>
                    <th>Update</th>
                    <th>Delete</th>
                    {/* Add other table headers for additional fields */}
                  </tr>
                </thead>
                <tbody>
                  {products.map(product => (
                    <tr key={product.id} style={{ backgroundColor: product.stock === 0 ? '#ffcccc' : 'inherit' }}>
                      <td>{product.id}</td>
                      <td>{product.name}</td>
                      <td><img className='image' src={`data:image/jpeg;base64,${product.image}`} alt={product.name} /></td>
                      <td>{product.imagelink}</td>
                      <td>{<FormatPrice price={product.price} />}</td>
                      <td>{product.brand}</td>
                      <td>{product.description}</td>
                      <td>{product.category}</td>
                      <td>{product.stock}</td>
                      <td>{product.reviews}</td>
                      <td>{product.stars}</td>
                      <td>{product.featured ? 'Yes' : 'No'}</td>
                      <td>
                        <Button className='update_btn' onClick={() => handleUpdateProduct(product.id)}>
                          Update
                        </Button>
                      </td>
                      <td>
                        <Button className='delete_btn' onClick={() => handleDeleteProduct(product.id)}>
                          Delete
                        </Button>
                      </td>
                      {/* Add other table cells for additional fields */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
               )}
          </>
     
      </Wrapper>
      {showDeleteConfirmation && (
        <ConfirmationPopup>
          <p>Are you sure you want to delete this product?</p>
          <Button className="confirm-delete-btn" onClick={handleConfirmDelete}>Yes</Button>
          <Button className="cancel-delete-btn" onClick={handleCancelDelete}>No</Button>
        </ConfirmationPopup>
      )}
    </>
  );
};


const ConfirmationPopup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  border: 2px solid purple;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 9999;
  
  p {
    font-size: 18px;
    margin-bottom: 20px;
  }

  .confirm-delete-btn,
  .cancel-delete-btn {
    padding: 10px 20px;
    margin: 0 10px;
    cursor: pointer;
  }

  .confirm-delete-btn {
    background-color: #bd080e;
    color: #fff;
    border: none;
  }

  .cancel-delete-btn {
    background-color: #10876d;
    color: #fff;
    border: none;
  }
`;


const Wrapper = styled.section`

.centered {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30vh; /* Adjust as needed */
}

.centered p {
  text-align: center;
  font-size: 30px;
  text-weight: 800;
  color: red;
  text-transform: uppercase;
}


.input{
  float: right;
  margin-top: 20px;
  margin-right: 20px;
  outline: none;
}

.input:hover{
  box-shadow: 0px 0px 41px 0px rgba(108, 70, 184, 1);
}

input[type="number"] {
  -moz-appearance: textfield; /* Firefox */
}

/* Disable scrolling for number input fields */
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}


.add_product{
  margin-top: 20px;
  margin-left: 20px;
  background-color: #099176;
}
.image{
  width: 50px;
  height: 70px;
}
table{
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  border: 2px solid purple;
  border-collapse: collapse;
}
th, td{
  padding: 5px;
  border: 1px solid purple;
  text-align: center;
  color: black;
}
.update_btn{
  font-size: 15px;
  padding: 5px;
  background-color: #10876d;
  margin-right: 10px;
  margin-left: 10px;
}
.delete_btn{
  font-size: 15px;
  padding: 5px;
  background-color: #bd080e;
  margin-right: 10px;
  margin-left: 10px;
}
`

export default AdminProductDatabase;
