import React from 'react';
import { Container } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

function About() {
  return (
    <Container
      maxWidth="md"
      style={{ margin: '5rem auto', textAlign: 'center' }}
    >
      <h2>Who am I?</h2>
      <Divider />
      <Description>
        Hailing from the small town of Uvalde, TX, I am a Full Stack Web
        Developer who loves music. In my free time, I love hearing the live
        sounds of electric guitars and hard-hitting drums. When I am behind the
        screen, I enjoy using the DOM as my canvas. I have worked on development
        teams using Git flow to create responsive, interactive single-page
        applications in ReactJS. I have worked on everything from styling,
        building forms, creating reusable components, handling HTTP requests,
        and even building them on the back-end server. Contributing to all
        aspects of the web development process, I am ready to help you with your
        application needs.
      </Description>
    </Container>
  );
}

const Divider = styled('hr')({
  borderTop: '0.2rem solid #3f51b5',
  borderRadius: '0.2rem',
  marginBottom: '2rem',
});

const Description = styled('p')(({ theme }) => ({
  fontFamily: "'Recursive', sans-serif",
  boxSizing: 'border-box',
  fontSize: '1.2rem',
  margin: '0 auto',
  padding: '0.75rem',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));

export default About;
