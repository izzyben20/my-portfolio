import styled from 'styled-components';

export const Img = styled.img`
    width:100%;
    height: 100%;
    overflow: hidden;
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
    
`;

export const GridContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    padding: 3rem;
    place-items: center;
    column-gap: 2rem;
    row-gap: 3rem;

    @media ${(props) => props.theme.breakpoints.sm} {
        display: flex;
        flex-direction: column;
        padding: 2rem;
        padding-bottom: 0;
    }

`
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(0,0,0, 0.3);
  background-color: #0F1629;
  text-align: center;
  width: 400px;
  object-fit: cover;
  position: relative;
  padding-bottom: 1rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.01);
    transition: all 0.2s ease-in-out;
  }
  
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;

export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;

`;


export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb51;
`;

export const CardInfo = styled.p`
    width: 100%;
    padding: 0 2rem;
    color: rgba(250, 250, 250, 0.8);
    font-style: 2rem;
    line-height: 24px;
    text-align: justify;
`;


export const UtilityList = styled.ul`
    list-style-type: none;
    padding: 0;
    display: flex;
    gap: 2rem;
    margin: 0 2rem;
`;

export const ExternalLinks = styled.a`
    color: #26a0da;
    font-size: 1.6rem;
    transition: 0.5s;
`;

export const TagList = styled.ul`
    display: flex;
    justify-content: space-between;
    padding: 2rem;
`;
export const Tag = styled.li`
    color: #9cc9e3;
    font-size: 1.5rem;
    opacity: 0.8;
`;

export const ButtonContainer = styled.div`
  display: grid;
  place-content: center;

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 2.5rem;
  }
`;