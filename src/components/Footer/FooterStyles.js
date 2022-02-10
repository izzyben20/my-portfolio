import styled from "styled-components";

export const FooterContainer = styled.footer`
    background: #0F1626;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 7rem;
    box-shadow: 6px 2px 10px rgba(0, 0, 2, 0.7);

    p {
        padding-bottom: 2rem;
        color: rgba(255, 255, 255, 0.5);
    }

    @media ${(props) => props.theme.breakpoints.md} {
      margin-top: 0;
  }
`;

export const IconsContainer = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 1rem;
`;

export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: #26a1da;
  text-decoration: none;
  border-radius: 50px;
  padding: 7px;
  
  &:hover {
    background-color: #212d45;
    transform: scale(1.1);
    cursor: pointer;
    color: #fff; 
  }
`;