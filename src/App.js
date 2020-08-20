import React from 'react';
import { Box } from '@material-ui/core';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './components/Projects/';
import About from './components/About';
import Contact from './components/Contact/';
import Skills from './components/Skills/';

function App() {
  return (
    <Box>
      <NavBar />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </Box>
  );
}

export default App;
