import React from 'react';
import { Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CreditBadge from '../assets/images/credit-badges/kevin-ku';
import banner from '../assets/images/banner.jpg';

const useStyles = makeStyles(theme => ({
  imageTag: {
    float: 'left',
    position: 'absolute',
    bottom: '0',
    right: '0',
    zIndex: 2,
  },
  imageContainer: {
    position: 'relative',
    minHeight: '100vh',
    maxWidth: '100%',
    overflow: 'hidden',
    backgroundImage: `url(${banner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
    margin: '0',
  },
  text: {
    color: 'rgb(231, 231, 236)',
    position: 'absolute',
    bottom: '0',
  },
}));

const Header = props => {
  const classes = useStyles();

  return (
    <Container className={classes.imageContainer}>
      <div className={classes.text}>
        <Typography variant="h2">Aciel Ochoa</Typography>
        <Typography variant="h4" gutterBottom>
          Full Stack Web Developer
        </Typography>
      </div>
      <div className={classes.imageTag}>
        <CreditBadge />
      </div>
    </Container>
  );
};

export default Header;
