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
  width: 80%;
  flex-direction: column;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* width: 100%; */
  gap: 2rem;
  margin-bottom: 2.5rem;
`;

export const LeftInput = styled.div`
  flex: 60%;
  /* width: 100%; */
`;

export const RightInput = styled.div`
  flex: 50%;
  /* width: 100%; */
`;

export const Input = styled.input`
  width: 100%;
  padding: 1.2rem;
  background-color: rgba(250, 250, 250, 0.7);
  border: none;

  &:focus {
    outline: none;
  }

`;

export const TextArea = styled.textarea`
  /* width: 100%; */
  height: 200px;
  padding: 1.2rem;
  border: none;
  background-color: rgba(250, 250, 250, 0.7);

  &:focus {
    outline: none;
  }
`;

export const Button = styled.input`
  border: none;
  padding: 15px;
  background-color: darkblue;
  color: white;
  font-size: 1.5rem;
  border-radius: 10px;
  margin-top: 20px;
  cursor: pointer;
  opacity: 0.7;
  max-width: 100px;

  &:hover {
      opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 5px;
    font-size: 14px;
  }
`;

export const Span = styled.span`
  color: #fff;
  text-decoration: underline cadetblue;
  color: #945DD6;
`;