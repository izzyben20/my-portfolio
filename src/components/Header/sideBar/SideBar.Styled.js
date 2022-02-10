import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Container = styled.aside`
  position: fixed;
  width: 100%;
  height: 100vh;
  background: #0F1629;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  z-index: 1000;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const Icon = styled.div`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  top: 2rem;
  right: 2rem;
  font-size: 3rem;
  cursor: pointer;
  color: #26a0da;
  transition: 0.3s ease;
  border-radius: 100%;
  padding: 8px;
  background-color: #212d45;

    &:hover {
      transform: scale(1.1);
      color: #fff;
    }
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