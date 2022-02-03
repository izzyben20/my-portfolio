import React from 'react';

import { SectionText, SectionTitle, SectionText2 } from '../GlobalStyles/index';
import Button from '../GlobalStyles/Button';
import { LeftSection, RightSection, Container, Img } from './HeroStyles';
import AnimatedShapes from '../AnimatedShapes';
import avatar from './avatar.png';

const Hero = () => {
    return (
        <Container nopadding >
            <LeftSection>
                <SectionTitle main center>
                <SectionText2>Hi, I'm Isaac Oyedele<span style={{color: 'transparent'}}>&#128075;</span></SectionText2>
                    FRONTEND <br />
                    DEVELOPER
                </SectionTitle>
                <SectionText>
                    I craft solid and scalable frontend products, I'm passionate about bringing web application designs to life using code. I specialize in building the user interface of the web and creating exceptional, meaningful and seamless experience.
                </SectionText>
                <Button>Contact Me</Button>
                <AnimatedShapes />
            </LeftSection>
            <RightSection>
                <Img src={avatar} alt='hero' />
            </RightSection>
        </Container>
    )
}

export default Hero;
