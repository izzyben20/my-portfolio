import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Fade } from 'react-reveal';
import { Section, SectionText, SectionTitle, SectionDivider } from '../GlobalStyles/index';
import { FormContainer, Form, InputContainer, LeftInput, RightInput, Span, Input, TextArea, Button } from './ContactStyles';

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_98g6w11',
        'template_s7iyqfm',
        formRef.current,
        'user_AHi1G9m42MQQMQc1sJ4jb'
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <Fade bottom>
      <Section contact id='contact'>
          <SectionDivider />
          <SectionTitle>&#60;Contact Me &frasl;&#62;</SectionTitle>
          <SectionText>Have a project or want to hire me? Do email me at <Span><a href='mailto:isaacoyedele@hotmail.com'>isaacoyedele@hotmail.com</a> </Span> or use the form below, I'm open to working full-time, freelance or contract frontend position.</SectionText>
          <FormContainer>
            <Form ref={formRef} onSubmit={sendEmail}>
              <InputContainer>
                <LeftInput>
                  <Input type='text' placeholder="Your Name" required name="user_name" />   
                </LeftInput>
                <RightInput>
                <Input type='email' placeholder="Your Email" required name="user_email" /> 
                </RightInput>
              </InputContainer>
              <TextArea placeholder="Your Message" name="message" />
              <Button type="submit" value="Send" />
              { done && <p style={{marginTop: '12px'}}>Your message has been sent</p>}
            </Form>
          </FormContainer>
      </Section>
    </Fade>
  );
};

export default Contact;