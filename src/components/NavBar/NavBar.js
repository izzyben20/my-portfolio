import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  background: ${({ scrollNav}) => scrollNav ? 'transparent' : 'red'};
  height: 80px;
  margin-top: -8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.7rem;

  @media screen and (max-width: 900px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  width: 100%;
  padding: 0 2.4rem;
  max-width: 110rem;
  position: relative;
`;

export const Logo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  margin-left: 2.4rem;
  text-decoration: none;
  font-weight: 600;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 760px) {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 18px;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: -2.2rem;

  @media screen and (max-width: 760px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  font-size: 16px;
  font-weight: 500;
`;

export const NavLink = styled(LinkR)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #fff;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 760px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border: none;
  border-radius: 5rem;
  outline: none;
  background: #01bf71;
  color: #010606;
  font-size: 16px;
  font-weight: 400;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  padding: 0.5rem 1.5rem;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #01bf71;
  }

  &:active {
    transform: translateY(2px);
  }
`;
