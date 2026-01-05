import { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useProductContext } from "./ProductDisplay/ProductContext";
import FormatPrice from "./Helpers/FormatPrice";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import { RiSecurePaymentLine } from "react-icons/ri";
import { GiAchievement } from "react-icons/gi";
import Star from "./components/Star";
import AddToCart from "./components/AddToCart";
import Header from "./components/Header";
import SuggestionProduct from "./components/SuggestionProduct";
import SmallFooter from "./components/SmallFooter";


const API = "http://localhost:5050/products/getproductbyid";


const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();

  const { id } = useParams();

  
  const {
    id: alias,
    name,
    brand,
    price,
    description,
    stock,
    stars,
    reviews,
    imagelink,
    image,
    category,
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}${id}`);
  }, [id]);

  if (isSingleLoading) {
    return <div className="page_loading">Loading.....</div>;
  }

  return (
    <>
    <Header/>
    
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          {/* product Images  */}
          <div className="product_images">
            <img className="p_image" src={`data:image/jpeg;base64,${image}`} alt={name} />
          </div>

          {/* product dAta  */}
          <div className="product-data">
            <h2>{name}</h2>
            <Star stars={stars} reviews={reviews}/>
            <p className="product-data-price">
              MRP:
              <del>
                <FormatPrice price={price + 250000} />
              </del>
            </p>
            <p className="product-data-price product-data-real-price">
              Our Price: <span className="our_price"><FormatPrice price={price} /></span>
            </p>
            <p>{description}</p>
            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Free Delivery</p>
              </div>

              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>10 Days Replacement</p>
              </div>

              <div className="product-warranty-data">
                <RiSecurePaymentLine  className="warranty-icon" />
                <p>Secure Transaction </p>
              </div>

              <div className="product-warranty-data">
                <GiAchievement  className="warranty-icon" />
                <p>Top Quality </p>
              </div>
            </div>

            <div className="product-data-info">
              <p>
                Available:
                <span> {stock > 0 ? "In Stock" : "Not Available"}</span>
              </p>
              <p>
                ID : <span> {id} </span>
              </p>
              <p>
                Brand :<span> {brand} </span>
              </p>
            </div>
            <hr className="hr"></hr>
            {stock > 0 && <AddToCart product={singleProduct}/>}
          </div>
        </div>
      </div>
    </Wrapper>
    <SuggestionProduct category={category} />
    <SmallFooter/>
    </>
  );
};

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }
  .hr{
    height: 4px;
    background-color: purple;  
    border: none; 
  }
  .p_image{
    widht: 100ch;
    height: 100ch;
  }

  .product_images {
    display: flex;
    align-items: left;
    display: grid;
    place-items: center;
    object-fit: contain;
  }

  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
          color: purple;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
      color: red;
    }
    .product-data-real-price {
      color: purple;
    }
    .our_price{
       
        text-align: center;
        
        background: linear-gradient(to right, #47540e 20%, #0e5451 40%, #0e5451 60%, #22d64f 80%);
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
    
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .page_loading {
    font-size: 3.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;

export default SingleProduct;