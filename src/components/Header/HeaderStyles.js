import styled from 'styled-components';
import { Link } from 'react-scroll';

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  background: ${({ scrollNav}) => scrollNav ? 'transparent' : '#0F1629'};
  padding: 1rem;
  padding-top: 2rem;
  position: fixed;
  left: 0;
  right: 0;
  z-index: 10;
  box-shadow: .5px .5px 5px rgba(0,0,0, 0.4);
`;


export const Logo = styled.div`
  justify-self: flex-start;
  cursor: pointer;
  font-size: 2rem;
  font-family: 'Permanent Marker', cursive;
  text-transform: uppercase;
  display: flex;
  color: #26a0da;
  align-items: center;
  margin-left: 2.4rem;
  text-decoration: none;
`;


export const Span = styled.span`
    font-size: 2rem;
`;

export const Div1 = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
`;

export const Div3 = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-right: 2rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    align-items: center;
    grid-area: 1 / 4 / 2 / 6;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    font-size: 2.5rem;
    cursor: pointer;
    color: #26a0da;
    transition: 0.3s ease;
    border-radius: 50px;
    padding: 8px;
    background-color: #212d45;
    margin-right: 1rem;

    &:hover {
      transform: scale(1.1);
      color: #fff;
    }
  }

`;

export const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  // margin-right: -2.2rem;
  gap: 50px;

  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
  }
`;

// Navigation Links
export const NavLink = styled(Link)`
  font-size: 1.8rem;
  line-height: 32px;
  color: #26a0da;
  transition: 0.4s ease;
  padding-bottom: 1.9rem;
  &:hover {
    color: rgba(250, 250, 250, 0.8);
    opacity: 1;
    cursor: pointer;
  }

  &.active {
    color: rgba(250, 250, 250, 0.8);
    border-bottom: 3px solid #26a0da;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;

// Social Icons 

export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: #26a0da;
  border-radius: 50px;
  padding: 8px;
  
  &:hover {
    background-color: #212d45;
    transform: scale(1.1);
    cursor: pointer;
    color: #fff;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
`;

export const SpanLogo = styled.span`
  border: 3px solid #26a0da;
  padding: 4px;
  font-size: 14px;
  font-weight: bold;
  border-top-left-radius: 12px;
  border-bottom-right-radius: 12px;
  margin-right: 5px;
`;