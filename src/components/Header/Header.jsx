import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () => {
    return (
        <Container>
            <Div1>
                <Link to='/' style={{ display: 'flex', alignItem: 'center', color: 'white', marginBottom: '20px'}}>
                    <DiCssdeck />
                    <Span>Portfolio</Span>
                </Link>
            </Div1>
            <Div2>
                <li>
                    <Link to='projects'>
                        <NavLink>Projects</NavLink>
                    </Link>
                </li>
                <li>
                    <Link to='#tech'>
                        <NavLink>Technologies</NavLink>
                    </Link>
                </li>
                <li>
                    <Link to='#about'>
                        <NavLink>About</NavLink>
                    </Link>
                </li>
            </Div2>
            <Div3>
                <SocialIcons to='https://github.com'>
                    <AiFillGithub size='3rem' />
                </SocialIcons>
                <SocialIcons to='https://linkedin.com'>
                    <AiFillLinkedin size='3rem' />
                </SocialIcons>
                <SocialIcons to='https://twitter.com'>
                    <AiFillTwitterCircle size='3rem' />
                </SocialIcons>
            </Div3>
        </Container>
    )
}

export default Header;
