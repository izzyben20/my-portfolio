import React from 'react';

import { SectionText, SectionText2 } from '../GlobalStyles/index';
import { LeftSection, RightSection, Container, Img, HeadingContainer, Title, Button } from './HeroStyles';
import AnimatedShapes from '../AnimatedShapes';
import avatar from './avatar.png';
import { Zoom } from 'react-reveal';

const Hero = () => {
    return (
        // <Zoom bottom cascade>
            <Container nopadding >
                <LeftSection>
                    <HeadingContainer>
                        <SectionText2>Hi, I'm Isaac Oyedele<span>&#128075;</span></SectionText2>
                        <Title main center>
                            A FRONTEND <br />
                            DEVELOPER
                        </Title>
                    </HeadingContainer>
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
        // </Zoom>
    )
}

export default Hero;
