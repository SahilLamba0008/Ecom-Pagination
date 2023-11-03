import React from "react";
import styled from "styled-components";
import Hero from "../Hero";

const StyledHome = styled.section`
  background-color: ${({ theme }) => theme.colors.darkSectionBg};
  padding: 0 20px;
`;

const HomePage = () => {
  return (
    <StyledHome>
      <Hero />
      {/*--- Will Add More later eg. Testimonials, Popular etc. ---*/}
    </StyledHome>
  );
};

export default HomePage;
