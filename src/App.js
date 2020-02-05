import React from 'react';
import { Container, Box } from '@material-ui/core';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Box>
      <NavBar />
      <Container>
        <Header />
      </Container>
      <Footer />
    </Box>
  );
}

export default App;
