import React from 'react';
import { Slide } from 'react-reveal';
import styled from 'styled-components';
import { Section, SectionText, SectionTitle, SectionDivider } from '../GlobalStyles/index';


const FormContainer = styled.div`
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

const Form = styled.form`
  min-height: 300px;
  display: flex;
  width: 80%;
  flex-direction: column;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 2rem;
  margin-bottom: 2.5rem;
`;

const LeftInput = styled.div`
  flex: 60%;
  width: 100%;
`;

const RightInput = styled.div`
  flex: 50%;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  padding: 1.2rem;
  background-color: rgba(250, 250, 250, 0.7);
  border: none;

  &:focus {
    outline: none;
  }

`;

const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 1.2rem;
  border: none;
  background-color: rgba(250, 250, 250, 0.7);

  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  border: none;
  padding: 15px;
  background-color: darkblue;
  color: white;
  font-size: 20px;
  border-radius: 10px;
  margin-top: 20px;
  cursor: pointer;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 5px;
    font-size: 14px;
  }
`;

const Span = styled.span`
  color: #fff;
  text-decoration: underline cadetblue;
`


const Contact = () => {
  return (
    <Slide bottom>
      <Section contact>
          <SectionDivider colorAlt />
          <SectionTitle>&#60;Contact Me &frasl;&#62;</SectionTitle>
          <SectionText>Have a project or want to say hello? Do email me at <Span>isaacoyedele@hotmail.com</Span> or use the form below.</SectionText>
          <FormContainer>
            <Form>
              <InputContainer>
                <LeftInput>
                  <Input type='text' placeholder="Your Name" required />   
                </LeftInput>
                <RightInput>
                <Input type='email' placeholder="Your Email" required /> 
                </RightInput>
              </InputContainer>
              <TextArea placeholder="Your Message" />
              {/* <Button>Send</Button> */}
            </Form>
          </FormContainer>
      </Section>
    </Slide>
  );
};

export default Contact;