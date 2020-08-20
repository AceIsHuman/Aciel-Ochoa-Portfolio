import React from 'react';
import SkillCard from './SkillCard';
import { Grid, styled, Container } from '@material-ui/core';

function Skills() {
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'ReactJS',
    'NodeJS',
    'Git',
    'Express',
    'APIs',
    'SQL',
    'PostgreSQL',
    'Data Structures',
    'Algorithms',
    'Deployment',
    'REST',
  ];

  return (
    <Background>
      <Container maxWidth="md">
        <Grid container justify="center">
          <Title style={{ color: '#FFFFFF' }}>Skills</Title>
          <Divider />
          <Grid container justify="center" spacing={4}>
            {skills.map(skill => (
              <SkillCard key={skill} skill={skill} />
            ))}
          </Grid>
        </Grid>
      </Container>
    </Background>
  );
}

const Background = styled('div')({
  background: '#3f51b5',
  padding: '2rem 0 4rem',
});

const Title = styled('h2')({
  textShadow: '0 0.1rem 0.3rem black',
  color: '#FFFFF',
});

const Divider = styled('hr')({
  borderTop: '.2rem solid #FFFFFF',
  borderRadius: '.2rem',
  width: '100%',
  marginBottom: '2rem',
});

export default Skills;
