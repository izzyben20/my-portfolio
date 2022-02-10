import React from 'react';
import { AiFillCloseCircle, AiOutlineDownload } from 'react-icons/ai';
import { Button } from '../../About/AboutStyles';
import {
  SideBarWrapper,
  SideBarMenu,
  SideBarItem,
  Icon,
  Container
} from './SideBarStyles';

const SideBar = ({ toggle, isOpen }) => {
  return (
    <Container isOpen={isOpen}>
      <Icon onClick={toggle}>
        <AiFillCloseCircle />
      </Icon>

      <SideBarWrapper>
        <SideBarMenu>
          <SideBarItem 
            to="about" 
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-50}
          >
            About
          </SideBarItem>
          <SideBarItem 
            to="projects" 
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-50}
          >
            Projects
          </SideBarItem>
          <SideBarItem 
            to="skills" 
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-50}
          >
            Skills
          </SideBarItem>
          <SideBarItem 
            to="contact" 
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-30}
          >
            Contact
          </SideBarItem>
          <Button href='' download style={{padding: '25px 20px'}}> Resume  <AiOutlineDownload /> </Button>
        </SideBarMenu>
      </SideBarWrapper>
    </Container>
  );
};

export default SideBar;
