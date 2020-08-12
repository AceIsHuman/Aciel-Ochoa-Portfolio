import React from 'react';
import { Box } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

function About() {
  return (
    <Box style={{ margin: '5rem auto', textAlign: 'center' }}>
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
        aspects of web applications, I am positive I can help you with your
        application needs.
      </Description>
    </Box>
  );
}

const Divider = styled('hr')({
  borderTop: '.2rem solid #3f51b5',
  borderRadius: '.2rem',
  width: '80%',
  marginBottom: '2rem',
});

const Description = styled('p')({
  fontFamily: "'Recursive', sans-serif",
  boxSizing: 'border-box',
  width: '80%',
  fontSize: '1.2rem',
  margin: '0 auto',
  padding: '0.75rem',
});

export default About;
