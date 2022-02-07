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
    padding: ${(props) => props.nopadding ? "0" : "16px 16px 0" } ;
    width: calc(100vw - 32px);
  }
`

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
    width: 80%;
    /* margin: 0 auto; */
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

  @media ${(props) => props.theme.breakpoints.md} {
    width: 60%;
  }
`;