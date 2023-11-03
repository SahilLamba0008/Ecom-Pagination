import React from "react";
import styled from "styled-components";
import { footerLinks } from "../constants/data";

const StyledFooter = styled.footer`
  font-size: 1.4rem;
  background-color: ${({ theme }) => theme.colors.darkBg};
  color: ${({ theme }) => theme.colors.textWhite};
  padding: 60px 0 20px 0;
  .hr {
    background-color: ${({ theme }) => theme.colors.textWhite};
    height: 1px;
    width: 80%;
    margin: 0 auto;
  }
  .footer-wrapper {
    width: 80%;
    margin: 0 auto;
    padding: 40px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    .footer-right {
      .footer-links {
        display: flex;
        gap: 6rem;
        flex-wrap: wrap;
        justify-content: flex-start;
      }
      ul {
        list-style: none;
        h4 {
          color: ${({ theme }) => theme.colors.textSecondary};
        }
        li {
          cursor: pointer;
          margin: 2rem 0;
          transition: color 0.2s;
          &:hover {
            color: ${({ theme }) => theme.colors.textSecondary};
          }
        }
      }
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div className="hr"></div>
      <div className="footer-wrapper">
        <div className="footer-left">
          <h1 className="cur-po">
            <i className="fa-solid fa-truck-fast"></i>Ecom.
          </h1>
          <p>
            your one place store <br /> for all the needs.
          </p>
        </div>
        <div className="footer-right">
          <div className="footer-links">
            {footerLinks.map((footerLink, index) => {
              return (
                <ul key={footerLink.id}>
                  <h4>{footerLink.title}</h4>
                  {footerLink.links.map((link, index) => (
                    <li key={index}>{link}</li>
                  ))}
                </ul>
              );
            })}
          </div>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
