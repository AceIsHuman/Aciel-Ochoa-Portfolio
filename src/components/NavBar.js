import React from 'react';
import Link from './reuseables/Link';
import { AppBar, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GitHub from '../assets/icons/github';
import LinkedIn from '../assets/icons/linkedin';
import Dev from '../assets/icons/web-development';

const useStyles = makeStyles(theme => ({
  icon: {
    padding: '0.5rem',
    width: '2.8rem',
  },
  link: {
    cursor: 'pointer',
  },
  appBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  linkContainer: {
    display: 'flex',
    alignSelf: 'flex-end',
    width: 'auto',
    margin: '0',
    padding: '0',
  },
}));

const NavBar = props => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" style={{ opacity: '0.95' }}>
      <Container className={classes.appBar}>
        <Dev className={classes.icon} />
        <Container className={classes.linkContainer}>
          <Link src="https://github.com/AceIsHuman" newTab>
            <GitHub className={`${classes.icon} + ${classes.link}`} />
          </Link>
          <Link src="https://www.linkedin.com/in/aciel-ochoa" newTab>
            <LinkedIn className={`${classes.icon} + ${classes.link}`} />
          </Link>
        </Container>
      </Container>
    </AppBar>
  );
};

export default NavBar;
