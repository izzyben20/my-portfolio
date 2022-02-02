import React from 'react';
import { Section, SectionDivider, SectionTitle } from '../GlobalStyles/index';
import { IconContainer, Skill } from './SkillsStyles';
import { DiCss3, DiHtml5, DiReact, DiSass, DiGit } from 'react-icons/di'
import { SiRedux, SiMaterialui, SiStyledcomponents, SiGithub, SiJavascript, SiBootstrap } from 'react-icons/si'

const Skills = () => {
  return (
      <Section>
          <SectionDivider colorAlt/>
          <SectionTitle>&#60;Skills &amp; Technologies &frasl;&#62;</SectionTitle>
          <IconContainer>
              <Skill>
                <DiHtml5 size='8rem' />
                <p>HTML</p>
              </Skill>
              <Skill>
                <DiCss3 size='8rem' />
                <p>CSS</p>
              </Skill>
              <Skill>
                <SiJavascript size='8rem' />
                <p>Javascript</p>
              </Skill>
              <Skill>
                <DiReact size='8rem' />
                <p>React</p>
              </Skill>
              <Skill>
                <SiRedux size='8rem' />
                <p>Redux/Redux-Toolkit</p>
              </Skill>
              <Skill>
                <DiSass size='8rem'/>
                <p>Sass</p>
              </Skill>
              <Skill>
                <DiGit size='8rem' />
                <p>Git</p>
              </Skill>
              <Skill>
                <SiGithub size='8rem'/>
                <p>Github</p>
              </Skill>
              <Skill>
                <SiMaterialui size='8rem'/>
                <p>MaterialUi</p>
              </Skill>
              <Skill>
                <SiStyledcomponents size='8rem'/>
                <p>Styled-Components</p>
              </Skill>
              <Skill>
                <SiBootstrap size='8rem'/>
                <p>Bootstrap</p>
              </Skill>
          </IconContainer>
      </Section>
  );
};

export default Skills;
