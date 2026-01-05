import styled from "styled-components";
import { useFilterContext } from "../ProductDisplay/FilterContext";
import { FaSearch } from "react-icons/fa";
import FormatPrice from "../Helpers/FormatPrice";
import {Button} from "../Styles/Button";

const FilterSection = () => {
  const {
    filters: { text, category, price, maxPrice, minPrice },
    updateFilterValue,
    all_products,
    clearFilters,
  } = useFilterContext();

  // get the unique values of each property
  const getUniqueData = (data, attr) => {
    let newVal = data.map((curElem) => {
      return curElem[attr];
    });
    return (newVal = ["all", ...new Set(newVal)]);
  };

  // we need to have the individual data of each in an array format
  const categoryData = getUniqueData(all_products, "category");


  return (
    <Wrapper>
      <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <i><FaSearch className="search_icon" /></i>
          <input
            type="text"
            className="search"
            name="text"
            placeholder="Search"
            value={text}
            onChange={updateFilterValue}
          />


        </form>
      </div>

      <div className="filter-category">
        <h3>Category</h3>
        <div>
          {categoryData.map((curElem, index) => {
            return (
              <button
                key={index}
                type="button"
                name="category"
                value={curElem}
                className={curElem === category ? "active" : ""}
                onClick={updateFilterValue}>
                {curElem}
              </button>
            );
          })}
        </div>
      </div>
      <div className="filter_price">
        <h3>Price</h3>
        <p>
          <FormatPrice price={price} />
        </p>
        <input
          type="range"
          className="price_range"
          name="price"
          min={minPrice}
          max={maxPrice}
          value={price}
          onChange={updateFilterValue}
        />
      </div>


    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;


  h3 {
    padding: 2rem 0;
    font-size: bold;
  }

  .filter-search {
    color: #555;
    display: flex;
    padding: 2px;
    border: 1px solid currentColor;
    border-radius: 5px;
    border: 3px groove rgba(109, 18, 148, 1);
    border-radius: 34px;
    transition: background-color 300ms ease-out;
    outline: none;
    font-size: 17px;
    margin: 0;
    font-size: 14px;
    color: inherit;
    width: 100%;
    input {
      padding: 0.6rem 1rem;
      width: 80%;
      float: left;
      outline: none;
      border: none;
      background-color: transparent;
      box-shadow: none;
      margin-top: 2px;
    }
  }
  
  .filter-search:hover {
    box-shadow: 8px 8px 18px 0px rgba(100, 13, 120, 0.73);
  }

  .search_icon{
    color: purple;
    width: 20px;
    height: 20px;  
    text-indent: -999px;
    overflow: hidden;
    padding: 0;
    margin-top: 3.5px;
    border: 1px solid transparent;
    border-radius: inherit; 
    float: right;
  }

  .filter-category {
    h3{
      font-weight: 700;
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;
      margin-left: 15px;
      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;

        &:hover {
          color: purple;
        }
      }

      .active {
        color: purple;
        font-weight: 900;
      }
    }
  }


  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }
 
  .price_range {
    -webkit-appearance: none;
    width: 90%;
    height: 10px;
    background: #4b1069;
    outline: none;
    opacity: 0.7;
    -webkit-transition: .2s;
    transition: opacity .2s;
  }
  
  .price_range:hover {
    opacity: 1;
  }
  
  .price_range::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    border-radius: 40px;
    width: 24px;
    height: 24px;
    background: #91247a;
    cursor: pointer;
  }
  
  .price_range::-moz-range-thumb {
    width: 25px;
    height: 25px;
    background: #04AA6D;
    cursor: pointer;
  }
`;

export default FilterSection;