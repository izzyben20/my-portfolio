import React from 'react';

import { Section, SectionText, SectionTitle, SectionText2 } from '../GlobalStyles/index';
import Button from '../GlobalStyles/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => {
    return (
        <Section row nopadding >
            <LeftSection>
                <div>
                <SectionTitle main center>
                <SectionText2>Hi, I'm Isaac Oyedele</SectionText2>
                    FRONTEND <br />
                    DEVELOPER
                </SectionTitle>
                </div>
                <SectionText>
                    I craft solid and scalable frontend products, I'm passionate about bringing web applications designs to life using code. I specialize in building the user interface of the web and creating exceptional, meaningful and seamless experience.
                </SectionText>
                <Button>Contact Me</Button>
            </LeftSection>
        </Section>
    )
}

export default Hero;
