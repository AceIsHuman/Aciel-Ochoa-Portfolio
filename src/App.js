import React from 'react';
import { Container, Box } from '@material-ui/core';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './components/Projects/';

function App() {
  return (
    <Box>
      <NavBar />
      <Container>
        <Header />
        <Projects />
      </Container>
      <Footer />
    </Box>
  );
}

export default App;
