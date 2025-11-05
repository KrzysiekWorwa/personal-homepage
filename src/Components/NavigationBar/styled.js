import styled from "styled-components";
import { Link } from "react-scroll";
import { ReactComponent as Home } from "./svg/Codify-logo.svg"


export const Navbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 90px;
  background-color: rgb(0 0 0 / 30%);
  backdrop-filter: blur(10px); 
  z-index: 1000;
  display: flex;
  text-align: center;

        @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        height: 60px;
        background-color: ${({ theme }) => theme.colors.navbarColor};
        backdrop-filter: none;
  }
`;

export const NavWrapper = styled.div`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
`;

export const NavLogo = styled(Home)`
    color: ${({ theme }) => theme.colors.textPrimary};
    height: 70px;
    width: auto;
    cursor: pointer;
    margin-top: 4px;
    transition: color 0.3s ease, transform 0.7s ease;

        &:hover {
        color: ${({ theme }) => theme.colors.Link};
        transform: rotate(45deg);
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
         height: 50px;
         width: 50px;
         margin-top: 4px;
    }
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 30px;
  margin-left: 20px;
  align-items: center;

   @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        display: none;
  }
`;

export const NavItem = styled(Link)`
  font-size: 20px;
  cursor: pointer;
  color: rgb(255, 255, 255);
  text-decoration: none;
  transition: color 0.3s ease;
  text-align: center;

  &:hover {
    color: ${({ theme }) => theme.colors.Link};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        color: ${({ theme }) => theme.colors.textPrimary};
    }
`;

export const Burger = styled.div`
    display: none;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;

    div {
        width: 25px;
        height: 3px;
        background: ${({ theme }) => theme.colors.textPrimary};
        border-radius: 2px;
    }


      @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        display: flex;
  }
`;

export const MobileMenu = styled.div`
    display: none;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        display: ${({ $open }) => ($open ? "flex" : "none")};
        position: absolute;
        top: 60px;
        left: 0;
        width: 100%;
        flex-direction: column;
        align-items:center;
        background-color: ${({ theme }) => theme.colors.navbarColor};
        padding: 20px 0;
        gap: 15px;
        z-index: 999;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
    }
`;

export const NavIcons = styled.div`
    display: flex;
    gap: 20px;

          @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        display: none;
  }
`;

export const ContactButton = styled(Link)`
  padding: 14px 30px;
  text-decoration: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.buttonColor};
  background: ${({ theme }) => theme.colors.textPrimary};
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.textPrimary};
  border-radius: 5px;
  text-align: center;
  transition: 0.3s ease;
  align-self: flex-start;
  font-size: 25px;

      &:hover {
        background: ${({ theme }) => theme.colors.Link};
        border-color: ${({ theme }) => theme.colors.Link};
    }
`;

