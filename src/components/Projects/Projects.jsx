import React from 'react';
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectStyles';
import { Section, SectionDivider, SectionTitle } from '../GlobalStyles/index';
import { projects } from '../constants/constants';
import { Fade, Slide } from 'react-reveal';


const Projects = () => {
    return (
        <Section nopadding id='projects'>
            <Slide bottom>
                <SectionDivider />
                <SectionTitle>&#60;Projects &frasl;&#62;</SectionTitle>
            </Slide>
            <GridContainer>
                {projects.map((project) => (
                    <Fade bottom cascade>
                        <BlogCard key={project.id}>
                            <Img src={project.image} />
                            <TitleContent>
                                <HeaderThree title>{project.title}</HeaderThree>
                                <Hr />
                            </TitleContent>
                            <CardInfo>{project.description}</CardInfo>
                            <div>
                                <TitleContent>Stack</TitleContent>
                                <TagList>
                                    {project.tags.map((tag, i) => (
                                        <Tag key={i}>{tag}</Tag>
                                    ))}
                                </TagList>
                            </div>
                            <UtilityList>
                                <ExternalLinks to={project.visit}>Code</ExternalLinks>
                                <ExternalLinks to={project.source}>Visit Site</ExternalLinks>
                            </UtilityList>
                        </BlogCard>
                    </Fade>
                ))}
            </GridContainer>
        </Section>
    )
}

export default Projects;
