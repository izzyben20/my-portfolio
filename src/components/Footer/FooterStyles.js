import styled from "styled-components";
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
    background: #0F1626;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 7rem;
    box-shadow: .5px .5px 4px rgba(255, 255, 255, 0.5);

    p {
        padding-bottom: 3rem;
        color: rgba(255, 255, 255, 0.5);
    }
`;

export const IconsContainer = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 1rem;
`;

export const SocialIcons = styled(Link)`
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
  padding: 8px;
  
  &:hover {
    background-color: #212d45;
    transform: scale(1.1);
    cursor: pointer;
    
  }
`;