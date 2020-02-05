import React from 'react';
import { Container, Box } from '@material-ui/core';
import NavBar from './components/NavBar';
import Header from './components/Header';

function App() {
  return (
    <Box>
      <NavBar />
      <Container>
        <Header />
      </Container>
    </Box>
  );
}

export default App;
