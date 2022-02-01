import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle, AiFillMail } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { RiMenu3Line } from 'react-icons/ri';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span, NavContainer, Logo, MobileIcon, NavMenu } from './HeaderStyles';

const Header = () => {
    return (
        <NavContainer>
            <Div1>
                <Logo to='/'>
                    <DiCssdeck />
                    <Span>Isaac-Oyedele</Span>
                </Logo>
            </Div1>

            <NavMenu>
                <li>
                    <Link to='about'><NavLink>About</NavLink></Link>
                </li>
                <li>
                    <Link to='about'><NavLink>Projects</NavLink></Link>
                </li>
                <li>
                    <Link to='about'><NavLink>Skills</NavLink></Link>
                </li>
                <li>
                    <Link to='about'><NavLink>Contact</NavLink></Link>
                </li>
            </NavMenu>

            <Div3>
                <SocialIcons to='https://github.com'>
                    <AiFillGithub size='2.5rem' />
                </SocialIcons>
                <SocialIcons to='https://linkedin.com'>
                    <AiFillLinkedin size='2.5rem' />
                </SocialIcons>
                <SocialIcons to='https://twitter.com'>
                    <AiFillMail size='2.5rem' />
                </SocialIcons>
            </Div3>

            <MobileIcon>
                <RiMenu3Line />
            </MobileIcon>
        </NavContainer>
        // <Container>
        //     <Div1>
        //         <Link to='/' style={{ display: 'flex', alignItem: 'center', color: 'white', marginBottom: '20px'}}>
        //             <DiCssdeck />
        //             <Span>Isaac-Oyedele</Span>
        //         </Link>
        //     </Div1>
        //     <Div2>
        //         <li>
        //             <Link to='projects'>
        //                 <NavLink>About</NavLink>
        //             </Link>
        //         </li>
        //         <li>
        //             <Link to='#tech'>
        //                 <NavLink>Projects</NavLink>
        //             </Link>
        //         </li>
        //         <li>
        //             <Link to='#about'>
        //                 <NavLink>Skills</NavLink>
        //             </Link>
        //         </li>
        //         <li>
        //             <Link to='#about'>
        //                 <NavLink>Contact</NavLink>
        //             </Link>
        //         </li>
        //     </Div2>
            // {/* <Div3>
            //     <SocialIcons to='https://github.com'>
            //         <AiFillGithub size='3rem' />
            //     </SocialIcons>
            //     <SocialIcons to='https://linkedin.com'>
            //         <AiFillLinkedin size='3rem' />
            //     </SocialIcons>
            //     <SocialIcons to='https://twitter.com'>
            //         <AiFillTwitterCircle size='3rem' />
            //     </SocialIcons>
            // </Div3> */}
        // </Container>
    )
}

export default Header;
