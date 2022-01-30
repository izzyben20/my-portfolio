import React, { useEffect, useState } from 'react';
import { RiMenu3Line } from 'react-icons/ri';
import { animateScroll as scroll } from 'react-scroll';
import {
  Nav,
  NavbarContainer,
  Logo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
} from './NavBar';

export const toggleHome = () => {
  scroll.scrollToTop();
};

const NavBar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <Logo to="/" onClick={toggleHome}>
            Naira
          </Logo>

          <MobileIcon onClick={toggle}>
            <RiMenu3Line />
          </MobileIcon>

          <NavMenu>
            <NavItem>
              <NavLink
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="discover"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="services"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Projects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="signup"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Skills
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="signup"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Contact
              </NavLink>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default NavBar;
