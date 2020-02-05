import React from 'react';
import { AppBar, Container } from '@material-ui/core';
import { GitHub, LinkedIn } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  icon: {
    paddingLeft: '0.5rem',
    cursor: 'pointer'
  }
}));

const NavBar = props => {
  const classes = useStyles();
  
  return (
    <AppBar position='static' style={{ display: 'flex'}}>
      <Container style={{ alignSelf: 'flex-end', width: 'auto', margin: '0.5rem' }}>
        <GitHub className={classes.icon} />
        <LinkedIn className={classes.icon} />
      </Container>
    </AppBar>
  )
};

export default NavBar;
