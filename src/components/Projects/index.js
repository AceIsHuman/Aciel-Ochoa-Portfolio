import React from 'react';
import { Container } from '@material-ui/core';
import { hivestack, gameOfLife } from './project_info';
import Project from './Project';

function Projects() {
  return (
    <Container style={{marginBottom: '2rem'}}>
      <h2>Projects</h2>
      <div>
        <Project project={gameOfLife} />
        <Project project={hivestack} reversed/>
      </div>
    </Container>
  );
}

export default Projects;
