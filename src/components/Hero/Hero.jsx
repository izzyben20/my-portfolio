import React from 'react';
import { SectionText, SectionText2, Animate } from '../GlobalStyles/index';
import {
  LeftSection,
  RightSection,
  Container,
  Img,
  HeadingContainer,
  Title,
  Button,
} from './HeroStyles';
import AnimatedShapes from '../AnimatedShapes';
import avatar from './avatar.png';
import { Fade } from 'react-reveal';
import svg from './svg.svg';

const Hero = () => {
  return (
    <Fade bottom cascade>
      <div style={{ backgroundImage: `url(${svg})` }}>
        <Container>
          <LeftSection>
            <HeadingContainer>
              <SectionText2>
                Hi, I'm <span>Isaac Oyedele</span>
                <Animate>&#128075;</Animate>,
              </SectionText2>
              <Title main center>
                A FRONTEND <br />
                DEVELOPER.
              </Title>
            </HeadingContainer>
            <SectionText main>
              I create dependable and scalable frontend solutions, I'm
              passionate about leveraging code to bring application designs to
              life. I specialize in building the user interface of the web and
              creating exceptional, meaningful and seamless experience to users.
            </SectionText>
            <Button
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Contact Me
            </Button>
          </LeftSection>
          <RightSection>
            <Img src={avatar} alt="hero img" />
          </RightSection>
        </Container>
        <AnimatedShapes />
      </div>
    </Fade>
  );
};

export default Hero;
