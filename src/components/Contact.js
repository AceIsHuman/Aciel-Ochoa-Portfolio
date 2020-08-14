import React from 'react';
import { Box, Container, styled, Typography } from '@material-ui/core';

function Contact() {
  return (
    <Background>
      <Content>
        <Box>
          <h2>Contact</h2>

          <Divider />
          <Typography variant="subtitle1">
            Shoot me a message. Let's talk 👋<br />
            Email: <a href='mailto: aciel.ochoa1995@gmail.com'>aciel.ochoa1995@gmail.com</a>
          </Typography>
        </Box>
      </Content>
    </Background>
  );
}

const Background = styled('div')({
  background: '#E0E0E0',
  boxShadow: '0rem 0rem 0.1rem 0.5rem #E0E0E0',
  height: '20rem',
});

const Content = styled(Container)({
  display: 'flex',
  justifyContent: 'space-between',
});

const Divider = styled('hr')({
  borderTop: '.2rem solid #3f51b5',
  borderRadius: '.2rem',
  width: '100%',
  marginBottom: '2rem',
});

export default Contact;
