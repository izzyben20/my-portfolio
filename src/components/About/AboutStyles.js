import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0 auto;
  max-width: 1040px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 24px 48px 0;
    flex-direction: column;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) => (props.nopadding ? '0' : '16px 16px 0')};
    width: calc(100vw - 32px);
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  margin-bottom: 4rem;

  @media ${(props) => props.theme.breakpoints.md} {
    flex-direction: column;
  }
`;

export const LeftSection = styled.div`
  flex: 50%;
  margin-top: 1rem;
  margin: 0 auto;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 95%;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    margin: 0 auto;
  }
`;

export const RightSection = styled.div`
  flex: 50%;
  flex-direction: column;
  display: flex;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    margin: 0 auto;
  }
`;

export const Img = styled.img`
  width: 80%;
  cursor: pointer;
  filter: opacity(0.6);

  &:hover {
    filter: opacity(0.8);
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 60%;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;

export const Button = styled.a`
   margin-bottom: 6rem;
   padding: 15px 25px;
   text-align: center;
   outline: 2px solid #26a8da; 
   font-weight: ${({ project }) => project ? '' : 'bold'};
   font-size: 18px;
   transition: 0.5s;
   background-size: 200% auto;
   color: #26a8da;            
   box-shadow: 0 0 20px #000;
   border-radius: 8px;
   display: block;
   max-width: 155px;
   border: none;
   cursor: pointer;
   display: flex;
   justify-content: center;
   align-items: center;
   animation: ${({ project }) => project ? '0.2s ease-in' : 'animateDown infinite 1.5s' };

   &:hover {
    outline: 2.3px solid #26a8da;
    background: rgba(250, 250, 250, 0.1)
  }

  @keyframes animateDown {
        0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
        }

        40% {
            transform: translateY(5px);
        }

        60% {
            transform: translateY(3px);
        }
    }
`;
