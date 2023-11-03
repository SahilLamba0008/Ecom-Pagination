import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProductContext } from "../../context/productsContext";
import styled from "styled-components";
import ProductImages from "../ProductImages";

const StyledSingleProductsPage = styled.section`
  padding: 40px 20px;
  min-height: 50rem;
  .product-data-container {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    gap: 5rem;
    .product-data {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .product-price {
        font-size: 2rem;
        color: ${({ theme }) => theme.colors.textSecondary};
        font-weight: bold;
      }
      .product-data-info {
        font-size: 1.2rem;
        color: ${({ theme }) => theme.colors.textLight};
        font-weight: bold;
      }
      .product-description {
        font-size: 1.5rem;
        color: ${({ theme }) => theme.colors.textPrimary};
      }
      .product-data-warranty {
        display: flex;
        justify-content: space-evenly;
        text-align: center;
        padding: 2rem 0;
        .product-warranty-data {
          cursor: pointer;
          .warranty-icon {
            background-color: rgba(220, 220, 220, 0.5);
            color: ${({ theme }) => theme.colors.textSecondary};
            font-size: 3rem;
            border-radius: 50%;
            padding: 1rem;
            box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.2);
          }
          p {
            font-size: 1.4rem;
            padding: 0.4rem;
            font-weight: bold;
            color: ${({ theme }) => theme.colors.textLight};
          }
        }
      }
    }
    .action-buttons {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
  }
  @media (max-width: ${({ theme }) => theme.screens.md}) {
    .product-data-container {
      flex-direction: column;
    }
    .action-buttons {
      justify-content: center;
    }
  }
`;
const SingleProductPage = () => {
  const navigate = useNavigate();

  const {
    fetchSingleProductData,
    isSingleProductLoading,
    singleProduct,
    isSingleProductError,
  } = useProductContext();

  const { id } = useParams();

  useEffect(() => {
    const API = `https://dummyjson.com/products/${id}`;
    fetchSingleProductData(API);
  }, []);
  console.log(singleProduct);

  const { name, brand, price, description, stock, images } = singleProduct;

  return (
    <StyledSingleProductsPage>
      {isSingleProductLoading ? (
        <div className="loading-container flex-center-all">
          <img
            src="/assets/loading.gif"
            alt="loading"
            className="loading-gif"
          />
        </div>
      ) : isSingleProductError ? (
        <div className="flex-center-all">
          <img src="/assets/error.png" alt="error" className="error-img" />
        </div>
      ) : (
        <div className="product-data-container max-width">
          <div className="product_images">
            <ProductImages images={images} />
          </div>

          <div className="product-data">
            <h2>{name}</h2>

            <p className="product-price">MRP: ${price}</p>
            <div className="product-data-info">
              <p>
                Available:
                <span> {stock > 0 ? "In Stock" : "Not Available"}</span>
              </p>
              <p>
                Brand :<span> {brand} </span>
              </p>
            </div>
            <p className="product-description">{description}</p>
            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <i className="fa-solid fa-truck-front warranty-icon"></i>
                <p>Free Delivery</p>
              </div>

              <div className="product-warranty-data">
                <i className="fa-solid fa-check-to-slot warranty-icon"></i>
                <p>30 Days Replacement</p>
              </div>

              <div className="product-warranty-data">
                <i className="fa-solid fa-shield warranty-icon"></i>
                <p>2 Year Warranty </p>
              </div>
            </div>
            <div className="action-buttons">
              <button className="btn add-cart-btn">
                Add to Cart <i class="fa-solid fa-cart-shopping"></i>
              </button>
              <button
                className="btn add-cart-btn"
                onClick={() => navigate("/products")}
              >
                Back <i className="fa-solid fa-arrow-left"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </StyledSingleProductsPage>
  );
};

export default SingleProductPage;
