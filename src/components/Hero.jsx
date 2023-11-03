import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledHero = styled.section`
  background-color: ${({ theme }) => theme.colors.darkSectionBg};
  padding: 0 20px;
  .hero-wrapper {
    padding: 40px 10px;
    margin: 80px 0;
    flex-direction: column;
    max-width: 1024px;
    background-color: rgba(247, 248, 250, 0.8);
    text-align: center;
    border-radius: 25px;
    .header {
      font-size: 4rem;
      color: ${({ theme }) => theme.colors.textSecondary};
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
    }
    .title {
      font-size: 4rem;
      font-weight: bold;
    }
    .sub-title {
      font-size: 1.5rem;
      margin: 10px 0 30px 0;
    }
  }
`;

const Hero = () => {
  const navigate = useNavigate();

  return (
    <StyledHero className="flex-center-all">
      <div className="hero-wrapper flex-center-all">
        <div className="header">
          <i className="fa-solid fa-house-laptop"></i>
        </div>
        <div className="title">One Place For All your Needs</div>
        <div className="sub-title">
          All type of products eg.
          clothing,electronics,households,digitals,cosmetics etc. <br />
          all your needs just at one place.
        </div>
        <div className="btn" onClick={() => navigate("/products")}>
          <span>
            Discover Our Collection
            <i className="fa-solid fa-arrow-right icon"></i>
          </span>
        </div>
      </div>
    </StyledHero>
  );
};

export default Hero;
