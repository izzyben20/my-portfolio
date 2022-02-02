import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  padding: ${(props) => props.nopadding ? "0" : "32px 48px 0" } ;
  margin: 0 auto;
  max-width: 1040px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  gap: 1.5rem;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 24px 48px 0;
    flex-direction: column;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) => props.nopadding ? "0" : "16px 16px 0" } ;

    width: calc(100vw - 32px);
    flex-direction: column;
  }
`

export const LeftSection = styled.div`
  flex: 70%;
  flex-direction: column;
  display: flex;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    /* margin: 0 auto; */
  }
  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
    margin: 0 auto;
  }
`;

export const RightSection = styled.div`
  flex: 30%;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    margin: 0 auto;
  }
`;

export const Img = styled.img`
  border-radius: 50%;
  box-shadow: .5px .5px 4px rgba(80, 78, 78, 0.5);
  width: 100%;

  @media ${(props) => props.theme.breakpoints.md} {
    width: 50%;
  }
`;