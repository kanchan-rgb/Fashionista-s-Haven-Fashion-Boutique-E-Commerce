import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import FormatPrice from '../Helpers/FormatPrice';

const UpdateProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [imagePreview, setImagePreview] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    imagelink: "",
    price: "",
    category: "",
    description: "",
    stock: "",
    reviews: "",
    stars: "",
    brand: "Fashionista's Haven",
    featured: "",
  });
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:5050/products/getproductbyid${id}`)
      .then(response => {
        const { data } = response;
        setFormData({
          ...data, // Set form data with response data
          featured: data.featured || false, // Ensure boolean value for checkbox
        });
        setImagePreview(`data:image/jpeg;base64,${data.image}`)
      })
      .catch(error => {
        console.error('Error fetching product:', error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    if (name === 'image') {
      const selectedImage = e.target.files[0];
      setFormData({ ...formData, [name]: selectedImage });
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(selectedImage);
    } else {
      setFormData({ ...formData, [name]: newValue });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    const formDatas = new FormData();
    formDatas.append('image', formData.image);
    formDatas.append('name', formData.name);
    formDatas.append('price', formData.price);
    formDatas.append('category', formData.category);
    formDatas.append('description', formData.description);
    formDatas.append('stock', formData.stock);
    formDatas.append('reviews', formData.reviews);
    formDatas.append('stars', formData.stars);
    formDatas.append('brand', formData.brand);
    formDatas.append('imagelink', formData.imagelink);
    formDatas.append('featured', formData.featured);
    
    const response = await axios.put(`http://localhost:5050/products/${id}`, formDatas, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    
        console.log('Product updated successfully:', response.data);
        setShowPopup(true);
        setTimeout(() => {
          navigate('/admin/adminproductdatabase');
        }, 1500);
  
      } catch(error) {
        console.error('Error updating product:', error);
      };
  };

  return (
    <Wrapper>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <h2 className='heading'>Update Product</h2>
          <div className="input-group">
            <label>Name :</label>
            <input
              type="text"
              required
              className='input'
              name="name"
              value={formData.name}
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
              name="imagelink"
              value={formData.imagelink}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <span><label>Price : </label>
              <FormatPrice price={formData.price} />
            </span>
            <input
              type="number"
              required
              className='input'
              name="price"
              value={formData.price}
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
              value={formData.category}
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
              value={formData.description}
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
              value={formData.stock}
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
              value={formData.reviews}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <label>Stars :</label>
            <input
              type="number"
              step="0.01"
              required
              max={5}
              className='input'
              name="stars"
              value={formData.stars}
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
              value={formData.brand}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <label>Featured :</label>
            <input
              type="checkbox"
              className='checkbox'
              name="featured"
              checked={formData.featured}
              onChange={handleChange}
            />
          </div>
          <button className="submit-btn" type="submit">Update</button>
        </form>
      </div>
      {showPopup && (
        <Popup>
          <p style={{ color: "white" }}>Product updated successfully!</p>
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
  background-color: #19826f;
  padding: 20px;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 9999;
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
  .input {
    width: 100%;
    display: flex;
    border: 1px solid purple;
    box-shadow: none;
    text-transform: none;
    outline: none;
  }
  .input-group > span {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.3rem;
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

export default UpdateProduct;
