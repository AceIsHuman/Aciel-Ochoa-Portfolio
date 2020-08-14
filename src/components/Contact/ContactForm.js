import React from 'react';
import { styled, TextField, Button } from '@material-ui/core';

function ContactForm() {
  return (
    <FormContainer name="contact" method="POST" data-netlify="true">
      <TextField required id="contact-name" type="text" label="Your Name" />
      <TextField
        required
        id="constact-email"
        type="email"
        label="Email Address"
      />
      <TextField required id="message" label="Message" multiline />
      <Button
        type="submit"
        variant="outlined"
        color="primary"
        disableElevation
        style={{ margin: '2rem auto 0', width: '75%' }}
      >
        Send
      </Button>
    </FormContainer>
  );
}

const FormContainer = styled('form')({
  width: '70%',
  padding: '2rem 1rem',
  display: 'flex',
  flexDirection: 'column',
  background: 'white',
  boxShadow: '0 0.2rem 0.3rem rgba(0, 0, 0, 0.5)',
  borderRadius: '0.5rem',
});

export default ContactForm;
