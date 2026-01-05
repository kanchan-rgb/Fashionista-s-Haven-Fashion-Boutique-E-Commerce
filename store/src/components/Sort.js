import React from "react";
import styled from "styled-components";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from "../ProductDisplay/FilterContext";

const Sort = () => {
  const { filter_products, grid_view, setGridView, setListView, sorting } =
    useFilterContext();
  return (
    <Wrapper className="sort-section">
      {/* 1st column  */}
      <div className="sorting-list--grid">
        <button
          className={grid_view ? "active sort-btn" : "sort-btn"}
          onClick={setGridView}>
          <BsFillGridFill className="icon" />
        </button>

        <button
          className={!grid_view ? "active sort-btn" : " sort-btn"}
          onClick={setListView}>
          <BsList className="icon" />
        </button>
      </div>
      {/* 2nd column  */}
      <div className="product-data">
        <p>{`${filter_products.length} Products Available`}</p>
      </div>

      {/* 3rd column  */}
      <div className="sort-selection">
        <form action="#">
          <label htmlFor="sort"></label>
          <select
            name="sort"
            id="sort"
            className="sort-selection--style"
            onClick={sorting}>
            <option value="lowest" className="option">Price(lowest)</option>
            <option value="#" disabled></option>
            <option value="highest" className="option">Price(highest)</option>
            <option value="#" disabled></option>
            <option value="a-z" className="option">Price(a-z)</option>
            <option value="#" disabled></option>
            <option value="z-a" className="option">Price(z-a)</option>
          </select>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;

  .sorting-list--grid {
    display: flex;
    gap: 2rem;

    .sort-btn {
      padding: 0.8rem 1rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    .icon {
      font-size: 1.6rem;
    }
    .active {
      background-color: ${({ theme }) => theme.colors.black};
      color: #fff;
    }
  }

  .sort-selection--style{
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
  .sort-selection--style:hover{
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

export default Sort;