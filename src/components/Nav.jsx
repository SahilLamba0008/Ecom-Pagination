import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { navLinks } from "../constants/data";
import { useNavigate } from "react-router-dom";

const StyledNav = styled.section`
  .nav-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: "Roboto", sans-serif;
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: 1.6rem;
    margin: 20px 60px;
    .nav-left {
      color: ${({ theme }) => theme.colors.textSecondary};
      white-space: nowrap;
    }
    .nav-list {
      display: flex;
      align-items: center;
      gap: 3rem;
      list-style: none;
      background-color: ${({ theme }) => theme.colors.primaryBg};
      li {
        text-align: center;
        font-size: 1.6rem;
        transition: color 0.3s;
        &:hover {
          color: ${({ theme }) => theme.colors.textSecondary};
        }
      }
    }
    .mobile-nav-btn {
      i {
        display: none;
        position: absolute;
        z-index: 1111;
        top: 27px;
        right: 30px;
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.screens.sm}) {
    .nav-wrapper {
      margin: 20px 30px;
      .mobile-nav-btn {
        i {
          display: inline-block;
        }
      }
      .nav-list {
        flex-direction: column;
        justify-content: center;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        transform: translateX(-100%);
        transition: transform 0.3s, opacity 0.3s;
        gap: 6rem;
        z-index: 1;
        li {
          font-size: 3rem;
        }
        &.active {
          transform: translateX(0);
          opacity: 1;
        }
      }
    }
  }
`;

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  /*--- prevent scrolling and overflow, When the menu is open ---*/
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  return (
    <StyledNav>
      <div className="nav-wrapper">
        <div className="nav-left">
          <h1 className="cur-po" onClick={() => navigate("/")}>
            <i className="fa-solid fa-truck-fast"></i>Ecom.
          </h1>
        </div>
        <div className="nav-right">
          <div
            className="mobile-nav-btn cur-po"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <i
              className={menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
            ></i>
          </div>
          <ul className={menuOpen ? "nav-list active" : "nav-list"}>
            {navLinks.map((navItem) => (
              <li
                key={navItem.id}
                className="cur-po"
                onClick={() => navigate(navItem.route)}
              >
                {navItem.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </StyledNav>
  );
};

export default Nav;
