import React from 'react';
import { FooterContainer, SocialIcons, IconsContainer } from './FooterStyles';
import { AiFillGithub, AiFillLinkedin, AiFillMail, AiFillTwitterCircle } from 'react-icons/ai';

const Footer = () => {
  return (
    <FooterContainer>
        <IconsContainer>
            <SocialIcons to='https://github.com/izzyben20' >
                <AiFillGithub size='2.5rem' />
            </SocialIcons>
            <SocialIcons to='https://linkedin.com'>
                <AiFillLinkedin size='2.5rem' />
            </SocialIcons>
            <SocialIcons to='https://twitter.com'>
                <AiFillMail size='2.5rem' />
            </SocialIcons>
            <SocialIcons to='https://twitter.com'>
                <AiFillTwitterCircle size='2.5rem' />
            </SocialIcons>
        </IconsContainer>
        <p>All right reserved</p>
    </FooterContainer>
  );
};

export default Footer;
