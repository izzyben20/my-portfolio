import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillMail, AiFillTwitterCircle } from 'react-icons/ai';
import { SocialIcons } from '../../Footer/FooterStyles';
import { AiOutlineDownload } from 'react-icons/ai';
import { Button } from '../../About/AboutStyles';
import {
  SideBarWrapper,
  SideBarMenu,
  SideBarItem,
  Container,
  SocialIconsContainer
} from './SideBarStyles';

const SideBar = ({ toggle, isOpen }) => {
  return (
    <Container isOpen={isOpen}>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarItem 
            to="about" 
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            About
          </SideBarItem>
          <SideBarItem 
            to="skills" 
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Skills
          </SideBarItem>
          <SideBarItem 
            to="projects" 
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Projects
          </SideBarItem>
          <SideBarItem 
            to="contact" 
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Contact
          </SideBarItem>
          <Button 
            href='/images/isaac-resume.pdf' 
            download 
            style={{padding: '25px 20px', marginTop: '1.2rem'}}
          > 
            R&eacute;sum&eacute;  
            <AiOutlineDownload /> 
          </Button>
          <SocialIconsContainer>
            <SocialIcons href='https://github.com/izzyben20'>
                <AiFillGithub size='2.5rem' title='Github' />
            </SocialIcons>
            <SocialIcons href='https://linkedin.com/in/isaac-oyedele'>
                <AiFillLinkedin size='2.5rem' title='Linkedin'/>
            </SocialIcons>
            <SocialIcons href='mailto:isaacoyedele2@gmail.com'>
                <AiFillMail size='2.5rem' title='Email'/>
            </SocialIcons>
            <SocialIcons href='https://twitter.com/izzyben0'>
                <AiFillTwitterCircle size='2.5rem' title='Twitter'/>
            </SocialIcons>
        </SocialIconsContainer>
            
        </SideBarMenu>
      </SideBarWrapper>
    </Container>
  );
};

export default SideBar;
