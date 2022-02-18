import React from 'react';
import { AiOutlineDownload } from 'react-icons/ai'
import { Slide, Fade } from 'react-reveal';
import { SectionDivider, SectionTitle, SectionText } from '../GlobalStyles/index';
import { Section, FlexContainer, LeftSection, RightSection, Img, Button } from './AboutStyles';
import profile from './profile.PNG';

const About = () => {
  return (
      <Slide bottom cascade>
        <Section id='about'>
            <SectionDivider />
            <SectionTitle>&#60;About Me &frasl;&#62;</SectionTitle>
            <FlexContainer>
                <LeftSection>
                    <Fade bottom cascade>
                        <Img src={profile} alt='profile-img' />
                    </Fade>
                </LeftSection>
                <RightSection>
                    <Fade bottom cascade>
                        <SectionText>
                        Hello! My name is Isaac Oyedele. <br />
                        I'm a frontend developer that enjoys merging well-structured code with nice interfaces and seamless performance. I use HTML, CSS, Javascript, and React to create web and mobile solutions. I'm a smart and creative professional, passionate about developing Tech solutions for every end users. 
                        </SectionText>
                        <SectionText>
                        I am committed to excellence, collaboration and teamwork and I am enthusiastic about using my engineering background to solve complex challenges and create enjoyable experiences. Learning new and better ways of doing things and writing efficient codes are two of my favorite things to accomplish. 
                        </SectionText>
                        <SectionText>As a conscientious, industrious, and results-oriented individual, I strive to achieve the greatest possible outcome on everything I do.
                        </SectionText>
                    </Fade>
                    <Button href='' download> R&eacute;sum&eacute;  <AiOutlineDownload /> </Button>
                </RightSection>
            </FlexContainer>
        </Section>
      </Slide>
  );
};

export default About;
