import React from 'react';
import { Grid, styled } from '@material-ui/core';

function SkillCard(props) {
  return (
    <Container item color="primary" xs>
      {props.skill}
    </Container>
  );
}

const Container = styled(Grid)({
  background: '#FFFFFF',
  boxSizing: 'border-box',
  maxWidth: 'fit-content',
  margin: '0.2rem',
  borderRadius: '0.2rem',
});

export default SkillCard;
