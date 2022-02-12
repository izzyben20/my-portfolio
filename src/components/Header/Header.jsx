import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import { animateScroll as scroll } from 'react-scroll';
import { RiMenu3Line } from 'react-icons/ri';
import { Div1, Div3, NavLink, SocialIcons, Span, NavContainer, Logo, MobileIcon, NavMenu, SpanLogo } from './HeaderStyles';

const Header = ({ toggle }) => {

    return (
        <Fade top cascade>
            <NavContainer>
                <Div1 onClick={() => scroll.scrollToTop()}>
                    <Logo>
                        <Span> <SpanLogo>IO</SpanLogo>IsaacDele</Span>
                    </Logo>
                </Div1>

                <NavMenu>
                        <li>
                            <NavLink
                                to="about"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="projects"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                            >
                                Projects
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="skills"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                            >
                                Skills
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="contact"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                            >
                                Contact
                            </NavLink>
                        </li>
                </NavMenu>

                <Div3>
                        <SocialIcons href='https://github.com/izzyben20'>
                            <AiFillGithub size='2.5rem' title='Github' />
                        </SocialIcons>
                        <SocialIcons href='https://linkedin.com/in/isaac-oyedele'>
                            <AiFillLinkedin size='2.5rem' title='Linkedin'/>
                        </SocialIcons>
                        <SocialIcons href='mailto:isaacoyedele@hotmail.com'>
                            <AiFillMail size='2.5rem' title='Email'/>
                        </SocialIcons>
                </Div3>

                <MobileIcon>
                    <RiMenu3Line onClick={toggle} />
                </MobileIcon>
            </NavContainer>
        </Fade>
    )
}

export default Header;
