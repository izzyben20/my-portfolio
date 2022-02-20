import React from 'react';
import { FooterContainer, SocialIcons, IconsContainer } from './FooterStyles';
import { AiFillGithub, AiFillLinkedin, AiFillMail, AiFillTwitterCircle } from 'react-icons/ai';

const Footer = () => {
  return (
    <FooterContainer>
        <IconsContainer>
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
        </IconsContainer>
        <p>Copyright &copy; {new Date().getFullYear()} Isaac Oyedele</p>
    </FooterContainer>
  );
};

export default Footer;
