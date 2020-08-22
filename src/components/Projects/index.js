import React from 'react';
import { Container } from '@material-ui/core';
import { hivestack, gameOfLife, dadJokes, macroCalculator } from './project_info';
import Project from './Project';

function Projects() {
  return (
    <Container style={{marginBottom: '2rem'}}>
      <h2>Projects</h2>
      <div>
        <Project project={gameOfLife} />
        <Project project={hivestack} reversed/>
        <Project project={dadJokes} />
        <Project project={macroCalculator} reversed/>
      </div>
    </Container>
  );
}

export default Projects;
