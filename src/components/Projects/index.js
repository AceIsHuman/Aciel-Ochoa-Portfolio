import React from 'react';
import { Box } from '@material-ui/core';
import { hivestack, gameOfLife } from './project_info';
import Project from './Project';

function Projects() {
  return (
    <Box>
      <h2>Projects</h2>
      <div>
        <Project project={hivestack} />
        <Project project={gameOfLife} reversed />
      </div>
    </Box>
  );
}

export default Projects;
