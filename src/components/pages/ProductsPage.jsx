import React from "react";
import styled from "styled-components";
import ProductCard from "../ProductCard";
import { useProductContext } from "../../context/productsContext";
import { useFilterContext } from "../../context/filterContext";

const StyledProductsPage = styled.section`
  padding: 40px 20px;
  .products-wrapper {
    .filter-menu {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: ${({ theme }) => theme.colors.darkBg};
      color: white;
      margin-bottom: 4rem;
      font-size: 1.5rem;
      font-family: "Roboto", sans-serif;
      padding: 1rem 3rem;
      border-radius: 8px;
      box-shadow: 0px 4px 14px 0px rgba(123, 123, 123, 0.2);
      .filter-menu-left select,
      .filter-menu-right select {
        padding: 5px 10px;
        font-size: 1.5rem;
        color: ${({ theme }) => theme.colors.textLight};
        outline: none;
        border-radius: 5px;
        cursor: pointer;
      }
    }
    .pagination {
      padding: 1rem;
      margin: 1.5rem 0;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      font-size: 1.5rem;
      font-weight: bold;
      .change-page-arrow {
        color: ${({ theme }) => theme.colors.textSecondary};
        cursor: pointer;
        font-size: 4rem;
      }
      .page-number {
        height: 4rem; /* Hard-Coded for consistent sizing */
        width: 4rem;
        margin: 0 0.3rem;
        cursor: pointer;
        background-color: ${({ theme }) => theme.colors.textSecondary};
        border: 2px solid ${({ theme }) => theme.colors.darkBg};
        border-radius: 8px;
        color: white;
      }
    }
  }
  .selected {
    height: 4.5rem;
    width: 4.5rem;
    margin: 0 0.3rem;
    background-color: ${({ theme }) => theme.colors.darkBg};
    border: 2px solid ${({ theme }) => theme.colors.textSecondary};
    border-radius: 8px;
    color: white;
  }
`;

const ProductsPage = () => {
  const { isLoading, isError, pageNo, totalPages, setPageNo } =
    useProductContext();

  const { handleSortChange, handleFilterChange, filter_products } =
    useFilterContext();

  const handlePageChange = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= totalPages &&
      selectedPage !== pageNo
    ) {
      setPageNo(selectedPage);
    }
  };
  return (
    <StyledProductsPage>
      <div className="products-wrapper max-width">
        <div className="filter-menu">
          <div className="filter-menu-left">
            <label>Filter: </label>
            <select onChange={handleFilterChange}>
              <option value="all">All</option>
              <option value="price100-500">Price: $100 - $500</option>
              <option value="price500-1000">Price: $500 - $1000</option>
              <option value="price1000+">Price: $1000+</option>
            </select>
          </div>
          <div className="filter-menu-right">
            <label>Sort By: </label>
            <select onChange={handleSortChange}>
              <option value="none">--Select --</option>
              <option value="lowToHigh">Price: Low to High</option>
              <option value="highToLow">Price: High to Low</option>
            </select>
          </div>
        </div>
        {isLoading ? (
          <div className="loading-container flex-center-all">
            <img
              src="/assets/loading.gif"
              alt="loading"
              className="loading-gif"
            />
          </div>
        ) : isError ? (
          <div className="flex-center-all">
            <img src="/assets/error.png" alt="error" className="error-img" />
          </div>
        ) : (
          <div className="load-products grid-three-col">
            {filter_products.map((product, index) => (
              <ProductCard
                name={product.title}
                img={product.thumbnail}
                price={product.price}
                brand={product.brand}
                description={product.description}
                key={index}
                id={product.id}
              />
            ))}
          </div>
        )}

        {filter_products.length > 0 && (
          <div className="pagination">
            <span onClick={() => handlePageChange(pageNo - 1)}>
              <i className="fa-solid fa-caret-left change-page-arrow"></i>
            </span>
            <span className="page-numbers-bar flex-center-all">
              {[...Array(Math.ceil(totalPages))].map((_, index) => {
                return (
                  <span
                    key={index}
                    className={
                      pageNo === index + 1
                        ? "flex-center-all selected"
                        : "page-number flex-center-all"
                    }
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </span>
                );
              })}
            </span>
            <span onClick={() => handlePageChange(pageNo + 1)}>
              <i className="fa-solid fa-caret-right change-page-arrow"></i>
            </span>
          </div>
        )}
      </div>
    </StyledProductsPage>
  );
};

export default ProductsPage;
