import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledProductCard = styled.div`
  width: 25rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0px 34px 74px 0px rgba(123, 123, 123, 0.2);
  border-radius: 8px;
  cursor: pointer;
  .card-top {
    background-color: ${({ theme }) => theme.colors.cardBg};
    box-shadow: 0px 1px 2px rgba(0, 53, 53, 0.2);
    img {
      height: 15rem;
      width: 28rem;
    }
  }
  .card-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    padding: 5px 10px;
    .card-bottom-left {
      width: 75%;
      .card-product-name {
        width: 100%;
        color: ${({ theme }) => theme.colors.textPrimary};
        font-weight: bold;
        font-size: 1.5rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .card-product-brand {
        color: ${({ theme }) => theme.colors.textLight};
        font-weight: bold;
      }
    }
    .card-bottom-right {
      .card-product-price {
        color: ${({ theme }) => theme.colors.textSecondary};
        font-weight: bold;
        font-size: 1.7rem;
      }
    }
  }
  .hr {
    background-color: ${({ theme }) => theme.colors.textSecondary};
    height: 1px;
    width: 95%;
    margin: 5px auto 10px auto;
  }
  .product-description {
    padding: 0px 10px;
    margin-bottom: 15px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${({ theme }) => theme.colors.textPrimary};
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-sizing: border-box;
    border: 4px solid transparent;
    transition: border 0.3s;
  }
  &:hover::before {
    border: 3px solid ${({ theme }) => theme.colors.textSecondary};
    box-shadow: 0px 34px 74px 0px rgba(0, 223, 53, 0.2);
    border-radius: 8px;
  }
`;

const ProductCard = ({ name, img, price, brand, description, id }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/singleproduct/${id}`);
  };
  return (
    <StyledProductCard onClick={handleCardClick}>
      <div className="card-top flex-center-all">
        <img src={img} alt={name} />
      </div>
      <div className="card-bottom">
        <div className="card-bottom-left">
          <p className="card-product-name">{name}</p>
          <p className="card-product-brand">{brand}</p>
        </div>
        <div className="card-bottom-right">
          <p className="card-product-price">${price}</p>
        </div>
      </div>
      <div className="hr"></div>
      <p className="product-description">{description}</p>
    </StyledProductCard>
  );
};

export default ProductCard;
