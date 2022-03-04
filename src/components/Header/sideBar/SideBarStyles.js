import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Container = styled.aside`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: #0F1629;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  z-index: 9;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const SideBarWrapper = styled.div`
  color: #26a0da;
`;

export const SideBarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 40px);
  text-align: center;

  @media screen and (max-width: 760px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SideBarItem = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.2rem;
  list-style: none;
  text-decoration: none;
  transition: 0.2s ease-in-out;
  color: #26a0da;
  cursor: pointer;

  &:hover {
    color: #fff;
    transition: 0.2s ease-in-out;
    transform: scale(1.05);
  }
`;

export const SocialIconsContainer = styled.div`
  display: flex;
  margin-top: 2rem;
`;