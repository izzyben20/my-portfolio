import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  margin-bottom: 4rem;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const Form = styled.form`
  min-height: 300px;
  display: flex;
  width: 90%;
  flex-direction: column;

  @media ${(props) => props.theme.breakpoints.md} {
      width: 100%;
    }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* width: 100%; */
  gap: 2rem;
  margin-bottom: 2.5rem;

  @media ${(props) => props.theme.breakpoints.sm} {
        flex-direction: column;
      
    }
`;

export const LeftInput = styled.div`
  flex: 60%;
`;

export const RightInput = styled.div`
  flex: 50%;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1.2rem;
  background-color: rgba(250, 250, 250, 0.6);
  border: none;

  &:focus {
    outline: none;
    border-bottom: 2px solid blue;
  }

`;

export const TextArea = styled.textarea`
  height: 200px;
  padding: 1.2rem;
  border: none;
  background-color: rgba(250, 250, 250, 0.6);

  &:focus {
    outline: none;
    border-bottom: 2px solid blue;
  }
`;

export const Button = styled.input`
  border: none;
  padding: 15px;
  background-color: #26a9df;
  color: #fff;
  font-size: 1.5rem;
  font-weight: 400;
  border-radius: 10px;
  margin-top: 20px;
  cursor: pointer;
  opacity: 0.7;
  width: 100px;
  box-shadow: 3px 3px 10px rgba(0,0,0, 0.4);

  &:hover {
      opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
      width: 100%;
    }
`;

export const Span = styled.span`
   a {
    color: #26a0da;
    text-decoration: underline cadetblue;
    font-weight: 500;
  }
`;