import React from 'react';
import { Container, styled, Typography } from '@material-ui/core';
import ContactForm from './ContactForm';

function Contact() {
  return (
    <Background>
      <Container>
        <h2>Contact</h2>
        <Divider />
        <Content>
          <Typography variant="subtitle1">
            Shoot me a message. Let's talk
            <span role="img" aria-label="wave-emoji">
              👋
            </span>
          </Typography>
          <ContactForm />
        </Content>
      </Container>
    </Background>
  );
}

const Background = styled('div')({
  background: '#E0E0E0',
  boxShadow: '0rem 0rem 0.1rem 0.5rem #E0E0E0',
  padding: '1rem 0',
});

const Content = styled('div')({
  display: 'flex',
  justifyContent: 'space-around',
});

const Divider = styled('hr')({
  borderTop: '.2rem solid #3f51b5',
  borderRadius: '.2rem',
  width: '100%',
  marginBottom: '2rem',
});

export default Contact;
