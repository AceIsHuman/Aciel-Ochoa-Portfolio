import React from 'react'
import { Typography, Box, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  box: {
    minHeight: '50vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  divider: {
    marginBottom: '0.5rem'
  }
}));

const Header = props => {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <Typography variant='h2' gutterBottom>Aciel Ochoa</Typography>
      <Divider className={classes.divider} variant='middle' />
      <Typography variant='h4' gutterBottom>Full Stack Web Developer</Typography>
    </Box>
  )
};

export default Header;