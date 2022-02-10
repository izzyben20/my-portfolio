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
            <SectionTitle>&#60;About me &frasl;&#62;</SectionTitle>
            <FlexContainer>
                <LeftSection>
                    <Fade bottom cascade>
                        <Img src={profile} alt='profile-img' />
                    </Fade>
                </LeftSection>
                <RightSection>
                <Fade bottom cascade>
                        <SectionText>
                        I’m Isaac Oyedele, a professional and talented Product Designer with front end development skills. I am passionate about leveraging my diverse backgrounds to decipher challenging problems and create delightful experiences. I honed my skills at web development, technical writing, product design and SEO analytics. 
                        </SectionText>
                        <SectionText>
                        I develop websites with HTML, CSS and JavaScript. I have top skills in using design softwares like Figma, Adobe XD, Invision and PhotoShop; with prototype tools like Framer and Protopie. 
                        </SectionText>
                        <SectionText>
                        Being a diligent, hardworking and result oriented, I always work towards achieving best result on each project I lay my hands on. 
                        </SectionText>
                        <Button href='' download> Resume  <AiOutlineDownload /> </Button>
                    </Fade>
                </RightSection>
            </FlexContainer>
        </Section>
      </Slide>
  );
};

export default About;
