import React from 'react';
import { FooterContainer, SocialIcons, IconsContainer } from './FooterStyles';
import { AiFillGithub, AiFillLinkedin, AiFillMail, AiFillTwitterCircle } from 'react-icons/ai';
import { Fade } from 'react-reveal';

const Footer = () => {
  return (
    <Fade bottom>
        <FooterContainer>
            <IconsContainer>
                <SocialIcons to='https://github.com/izzyben20' >
                    <AiFillGithub size='2.5rem' title='Github'/>
                </SocialIcons>
                <SocialIcons to='https://linkedin.com'>
                    <AiFillLinkedin size='2.5rem' title='Linkedin'/>
                </SocialIcons>
                <SocialIcons to='https://twitter.com'>
                    <AiFillMail size='2.5rem' title='Email'/>
                </SocialIcons>
                <SocialIcons to='https://twitter.com'>
                    <AiFillTwitterCircle size='2.5rem' title='Twitter'/>
                </SocialIcons>
            </IconsContainer>
            <p>Copyright &copy; {new Date().getFullYear()} Isaac Oyedele</p>
        </FooterContainer>
    </Fade>
  );
};

export default Footer;
