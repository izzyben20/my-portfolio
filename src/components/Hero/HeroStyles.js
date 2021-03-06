import styled from 'styled-components';
import { Link } from 'react-scroll'

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  padding: ${(props) => props.nopadding ? "0" : "32px 48px 0" } ;
  margin: 0 auto;
  max-width: 1040px;
  height: 100%;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  gap: 1.5rem;
  margin-bottom: 16rem;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0;
    flex-direction: column;
  }
`;

export const HeadingContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0;
    justify-content: center;

    @media ${props => props.theme.breakpoints.sm}{
      margin-top: 8rem;
  }
`;

export const Title = styled.h2`
  font-weight: 900;
  font-size: 55px;
  line-height: 60px;
  letter-spacing: 12px;
  width: max-content;
  max-width: 100%;
  background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding: 10px 0 8px;

  @media ${props => props.theme.breakpoints.md}{
    font-size: ${(props) => props.main ? '56px' : '48px'};
    line-height: ${(props) => props.main ? '56px' : '48px'};
    margin-bottom: 12px;
    padding: ${(props) => props.main ? '40px 0 12px' : '0'};
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 44px;
    line-height: 40px;
    font-size: ${(props) => props.main ? '28px' : '32px'};
    line-height: ${(props) => props.main ? '32px' : '40px'};
    margin-bottom: 8px;
    padding: ${(props) => props.main ? '16px 0 8px' : '0'};
    max-width: 100%;
  }
`

export const LeftSection = styled.div`
  flex: 70%;
  flex-direction: column;
  display: flex;
  margin-top: 4rem;
  
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 1.5rem;
    width: 100%;
  }
`;

export const RightSection = styled.div`
  flex: 30%;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 12rem 1rem 0 0;
  @media ${(props) => props.theme.breakpoints.md} {
    width: 80%;
    display: none;
  }
`;

export const Img = styled.img`
  border-radius: 50%;
  box-shadow: .5px .5px 10px rgba(0,0,0, 0.5);
  width: 100%;

  @media ${(props) => props.theme.breakpoints.md} {
    width: 50%;
  }
`;

export const Button = styled(Link)`
  background-image: linear-gradient(to right, #314755 0%, #26a0da  51%, #314755  100%);
   padding: 20px 15px;
   margin-bottom: 2rem;
   text-align: center;
   font-weight: bold;
   font-size: 18px;
   transition: 0.5s;
   background-size: 200% auto;
   color: white;            
   box-shadow: 0 0 20px #000;
   border-radius: 10px;
   display: block;
   max-width: 150px;
   border: none;
   cursor: pointer;

   &:hover {
    background-position: right center;
    color: #fff;
    text-decoration: none;
  }
`;

export const Ainime = styled.svg`
  
`;