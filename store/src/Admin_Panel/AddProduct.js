import React, { useState } from 'react';
import styled from "styled-components";
import AdminHeader from '../components/AdminHader';
import axios from 'axios';
import { Button } from '../Styles/Button';
import FormatPrice from '../Helpers/FormatPrice';

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    image: "",
    inputlink: "",
    price: "",
    category: "",
    description: "",
    stock: "",
    reviews: "",
    stars: "",
    brand: "Fashionista's Haven",
    featured: false,
  });

  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showClearConfirmation, setShowClearConfirmation] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    if (name === 'image') {
      // Update imagePreview state with the selected image file
      const selectedImage = e.target.files[0];
      setProduct({ ...product, [name]: selectedImage });

      // Optionally, display a preview of the selected image
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(selectedImage);
    } else {
      setProduct({ ...product, [name]: newValue });
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Create FormData object to send form data including files
      const formData = new FormData();
      formData.append('image', product.image);
      formData.append('name', product.name);
      formData.append('price', product.price);
      formData.append('category', product.category);
      formData.append('description', product.description);
      formData.append('stock', product.stock);
      formData.append('reviews', product.reviews);
      formData.append('stars', product.stars);
      formData.append('brand', product.brand);
      formData.append('imagelink', product.inputlink); // Assuming inputlink corresponds to imagelink in backend
      formData.append('featured', product.featured);
      // Assuming product.image corresponds to the image file

      console.log(formData);
      console.log(product.image)
      const response = await axios.post('http://localhost:5050/products/addproduct', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });



      console.log('Product added successfully:', response.data);
      confirmClearForm();
      setShowSuccessPopup(true);
      // Optionally, reset the form after successful submission
      setTimeout(() => {
        setShowSuccessPopup(false);
      }, 1200);

    } catch (error) {
      console.error('Error adding product:', error);
    };
  };

  const handleClearForm = () => {
    setShowClearConfirmation(true);
  };

  const confirmClearForm = () => {
    setProduct({
      name: "",
      image: null,
      inputlink: "",
      price: "",
      category: "",
      description: "",
      stock: "",
      reviews: "",
      stars: "",
      brand: "Fashionista's Haven",
      featured: false,
    });
    setImagePreview(false)
    setShowClearConfirmation(false);
  };

  const cancelClearForm = () => {
    setShowClearConfirmation(false);
  };

  return (
    <>
      <AdminHeader />
      <Wrapper>
        <div className='container'>
          <form onSubmit={handleSubmit}>
            <h2 className='heading'>Add New Product</h2>
            <div className="input-group">
              <label>Name :</label>
              <input
                type="text"
                required
                className='input'
                name="name"
                value={product.name}
                onChange={handleChange}
              />
            </div>
            <div className="input-group">

              <label>Image :</label>
              <div className="file-input">
                <label htmlFor="file-upload" className="custom-file-upload">
                  Choose File
                </label>
                <input
                  id="file-upload"
                  type="file"
                  required
                  accept="image/png,image/jpg,image/jpeg"
                  name="image"
                  onChange={handleChange}
                />
              </div>
              {imagePreview && <img src={imagePreview} alt="Product Preview" className="image-preview" />}
            </div>
            <div className="input-group">
              <label>Image Link :</label>
              <input
                type="text"
                required
                className='input'
                name="inputlink"
                value={product.inputlink}
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <span><label>Price : </label>
                <FormatPrice price={product.price} />
              </span>
              <input
                type="number"
                required
                className='input'
                name="price"
                value={product.price}
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <label htmlFor="category">Category:</label>
              <select
                id="category"
                required
                className="input_select"
                name="category"
                value={product.category}
                onChange={handleChange}
              >
                <option className='option' value="" disabled>Select category</option>
                <option className='option' value="saree">Saree</option>
                <option className='option' value="women's wear">Women's Wear</option>
                <option className='option' value="men's wear">Men's Wear</option>
                <option className='option' value="kid's wear">Kid's Wear</option>
                <option className='option' value="accessories">Accessories</option>
              </select>
            </div>
            <div className="input-group">
              <label>Description :</label>
              <input
                type="text"
                required
                className='input'
                name="description"
                value={product.description}
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <label>Stock :</label>
              <input
                type="number"
                required
                className='input'
                name="stock"
                value={product.stock}
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <label>Reviews :</label>
              <input
                type="number"
                required
                className='input'
                name="reviews"
                value={product.reviews}
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <label>Stars :</label>
              <input
                type="number"
                required
                max={5}
                step="0.01"
                className='input'
                name="stars"
                value={product.stars}
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <label>Brand :</label>
              <input
                type="text"
                required
                className='input'
                name="brand"
                value="Fashionista's Haven"
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <label>Featured :</label>
              <input
                type="checkbox"
                className='checkbox'
                name="featured"
                checked={product.featured}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="submit-btn">+ Add Product</button>
            <button type="button" className="clear-btn" onClick={handleClearForm}>
              Clear Form
            </button>
          </form>
        </div>
        {showSuccessPopup && (
          <SuccessPopup>
            <p>Product added successfully!!!!</p>
          </SuccessPopup>
        )}
        {showClearConfirmation && (
          <ConfirmationPopup>
            <p>Are you sure you want to clear the form?</p>
            <div>
              <Button style={{ backgroundColor: "red", color: "white" }} onClick={confirmClearForm}>Yes</Button>
              <Button onClick={cancelClearForm}>No</Button>
            </div>
          </ConfirmationPopup>
        )}
      </Wrapper>
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
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 9999;

  p {
    font-size: 18px;
    margin-bottom: 20px;
    text-align: center;
    color: #333;
  }

  div {
    display: flex;
    justify-content: center;
    gap: 20px;
  }

  button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #17966c;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #10876d;
  }
`;


const SuccessPopup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #19826f;
  padding: 10px;
  height: 46px;
  box-shadow: 1px 1px 1px 2px #19826f;
  z-index: 9999;
  
  p {
    font-size: 18px;
    color: #fff;
    margin-bottom: 20px;
  }
`;

const Wrapper = styled.section`
.file-input {
  position: relative;
  width: fit-content;
  margin-left: 70px;
  margin-top: -20px;
}

.custom-file-upload {
  display: inline-block;
  padding: 10px 20px;
  background-color: #17966c;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
}

.custom-file-upload:hover {
  background-color: #10876d;
}

#file-upload {
  display: none;
}

.image-preview {
  width: 100px;
  height: 130px;
  margin-top: 10px;
}


.input-group input[type="number"] {
  -moz-appearance: textfield; /* Firefox */
}

/* Disable scrolling for number input fields */
.input-group input[type="number"]::-webkit-inner-spin-button,
.input-group input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.heading {
    text-align: center;
    margin-top: 10px;
    text-transform: uppercase; /* Corrected property name */
    color: purple;
}
form {
    margin: 3rem auto;
    width: 500px;
    max-width: 80%;
    padding: 1rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
  form > div {
    display: flex;
  }
  .input-group {
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
    outline: none;
  }
  .input-group > label {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.3rem;
  }
  .input-group > span {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.3rem;
  }
  .input {
    width: 100%;
    display: flex;
    border: 1px solid purple;
    box-shadow: none;
    outline: none;
    text-transform: none;
  }
  .input > input:focus {
    outline: none;
  }
  .input_select {
    padding: 10px;
    border: 1px solid purple;
    width: 100%;
    outline: none;
    cursor: pointer;
  }
  .option {
    background-color: rgba(94,37,147,0.79);
    color: white;
  }
  .option:not(:checked) {
    background-color: white;
    color: black;
  }
  .checkbox{
    width: 20px;
    height: 20px;
    margin-top: -20px;
    margin-left: 80px;
    accent-color: green;
  }
  .input > div {
    padding: 0.5rem 1rem;
    background: #e34728;
    margin-left: 0.5rem;
    color: #fff;
    font-weight: 700;
    cursor: pointer;
  }
  .add-btn {
    padding: 0.5rem 1rem;
    background: #ccc;
    border: none;
    font-size: 0.9rem;
    color: #fff;
    font-weight: 700;
    cursor: pointer;
  }
  .center {
    display: flex;
    justify-content: center;
  }
  .submit-btn {
    width: 100%;
    padding: 0.5rem 1rem;
    background: #17966c;
    margin: 1.2rem 0;
    border: none;
    color: white;
    font-size: 0.9rem;
    font-weight: 700;
    cursor: pointer;
  }
  .submit-btn:hover{
    box-shadow: 1px 2px 4px black;
    padding: 7px;
  }
  .error{
    color: red;
  }
  .clear-btn {
    width: 100%;
    padding: 0.5rem 1rem;
    background: #e34728;
    margin: 1.2rem 0;
    border: none;
    color: white;
    font-size: 0.9rem;
    font-weight: 700;
    cursor: pointer;
  }
  
  .clear-btn:hover {
    background: #c3311c;
  }
  
`

export default AddProduct;