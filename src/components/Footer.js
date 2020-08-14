import React from 'react';
import { styled } from '@material-ui/core';

const Footer = () => {
  return (
    <FooterContainer>
      Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
    </FooterContainer>
  )
};

const FooterContainer = styled('footer')({
  padding: '1rem',
})

export default Footer;