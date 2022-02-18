import React from 'react';
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
  ButtonContainer
} from './ProjectStyles';
import {
  Section,
  SectionDivider,
  SectionTitle,
  SectionText,
} from '../GlobalStyles/index';
import { projects } from '../constants/constants';
import { Fade, Slide } from 'react-reveal';
import AnimatedShapes from '../AnimatedShapes';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { Button } from '../About/AboutStyles';

const Projects = () => {
  return (
    <div style={{position: 'relative'}}>
      <Section nopadding id="projects">
        <Slide bottom>
          <SectionDivider />
          <SectionTitle>&#60;Projects &frasl;&#62;</SectionTitle>
          <SectionText>
            These are some of the projects I built to practice and get better at
            the technologies mentioned above
          </SectionText>
        </Slide>
        <GridContainer>
          {projects.map(
            ({ id, image, title, description, tags, visit, source }) => (
              <Fade bottom cascade>
                <BlogCard key={id}>
                  <Img src={image} alt="project img" />
                  <TitleContent>
                    <HeaderThree title>{title}</HeaderThree>
                    <Hr />
                  </TitleContent>
                  <CardInfo>{description}</CardInfo>
                  <TagList>
                    {tags.map((tag, i) => (
                      <Tag key={i}>{tag}</Tag>
                    ))}
                  </TagList>
                  <UtilityList>
                    <ExternalLinks href={visit}>
                        <FiGithub size='2rem' title='Github' />
                    </ExternalLinks>
                    <ExternalLinks href={source}>
                        <FiExternalLink size='2rem' title='External Link' />
                    </ExternalLinks>
                  </UtilityList>
                </BlogCard>
              </Fade>
            )
          )}
        </GridContainer>
        <Fade bottom>
          <ButtonContainer>
            <Button project href='https://github.com/izzyben20'> Show More </Button>
          </ButtonContainer>
        </Fade>
      </Section>
      <AnimatedShapes />
    </div>
  );
};

export default Projects;
