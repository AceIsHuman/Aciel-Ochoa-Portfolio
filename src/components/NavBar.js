import React from 'react';
import { AppBar, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GitHub from '../assets/icons/github';
import LinkedIn from '../assets/icons/linkedin';
import Dev from '../assets/icons/web-development';

const useStyles = makeStyles(theme => ({
  icon: {
    paddingLeft: '0.5rem',
    width: '2.8rem',
  },
  icon2: {
    cursor: 'pointer'
  }
}));

const NavBar = props => {
  const classes = useStyles();
  
  return (
    <AppBar position='static'>
      <Dev className={classes.icon} />
      <Container style={{ display: 'flex', alignSelf: 'flex-end', width: 'auto', margin: '0.5rem' }}>
        <GitHub className={`${classes.icon} + ${classes.icon2}`} />
        <LinkedIn className={`${classes.icon} + ${classes.icon2}`} />
      </Container>
    </AppBar>
  )
};

export default NavBar;
