import React from 'react';
import { AppBar, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GitHub from '../assets/icons/github';
import LinkedIn from '../assets/icons/linkedin';
import Dev from '../assets/icons/web-development';

const useStyles = makeStyles(theme => ({
  icon: {
    padding: '0.5rem',
    width: '2.8rem'
  },
  link: {
    cursor: 'pointer'
  },
  appBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  linkContainer: {
    display: 'flex',
    alignSelf: 'flex-end',
    width: 'auto',
    margin: '0',
    padding: '0'
  }
}));

const NavBar = props => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position='static'>
      <Dev className={classes.icon} />
      <Container className={classes.linkContainer}>
        <a href='https://github.com/AceIsHuman' target='_blank' rel="noopener noreferrer">
          <GitHub className={`${classes.icon} + ${classes.link}`} />
        </a>
        <a href='https://www.linkedin.com/in/aciel-ochoa' target='_blank' rel="noopener noreferrer">
          <LinkedIn className={`${classes.icon} + ${classes.link}`} />
        </a>
      </Container>
    </AppBar>
  );
};

export default NavBar;
