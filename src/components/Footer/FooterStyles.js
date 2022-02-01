import styled from "styled-components";
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
    background: #0F1626;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    box-shadow: .5px .5px 6px rgba(80, 78, 78, 0.7);

    p {
        margin-bottom: 1rem;
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