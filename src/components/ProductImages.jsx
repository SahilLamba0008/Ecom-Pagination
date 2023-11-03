import React, { useState } from "react";
import styled from "styled-components";

const StyledProductImages = styled.section`
  display: flex;
  gap: 3rem;
  align-items: center;
  .product-images-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    figure {
      height: 10rem;
      width: 15rem;
      overflow: hidden;
      border: 2px solid ${({ theme }) => theme.colors.darkBg};
      border-radius: 10px;
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
      .images-in-box {
        height: 15rem;
        width: 15rem;
      }
    }
  }
  .main-image-wrapper {
    height: 35rem;
    width: 40rem;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border: 2px solid ${({ theme }) => theme.colors.darkBg};
    border-radius: 10px;
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    img {
      height: 35rem;
      padding: 2rem 1rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.screens.md}) {
    flex-direction: column-reverse;
    .product-images-wrapper {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      figure {
        height: 10rem;
        width: 8rem;
        .images-in-box {
          height: 10rem;
          width: 9rem;
        }
      }
    }
    .main-image-wrapper {
      height: 35rem;
      width: 30rem;
    }
  }
`;
const ProductImages = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <StyledProductImages>
      <div className="product-images-wrapper">
        {images.map((curElm, index) => {
          return (
            <figure key={index} className="cur-po">
              <img
                src={curElm}
                alt="product-images"
                className="images-in-box"
                key={index}
                onClick={() => setMainImage(curElm)}
              />
            </figure>
          );
        })}
      </div>
      <div className="main-image-wrapper">
        {mainImage && <img src={mainImage} alt="mainImage" />}
      </div>
    </StyledProductImages>
  );
};

export default ProductImages;
