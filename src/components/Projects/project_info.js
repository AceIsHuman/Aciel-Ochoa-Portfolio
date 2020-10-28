import hivestack_image from '../../assets/projects/hivestack.gif';
import gameOfLife_image from '../../assets/projects/gameoflife.gif';
import dadJokes_image from '../../assets/projects/dadjokes.gif';
import macroCalculator_image from '../../assets/projects/macrocalculator.gif';

export const hivestack = {
  name: 'Hive Stack',
  deploy_url: 'https://hivestack-fe.herokuapp.com',
  github_url: 'https://github.com/AceIsHuman/where-to-code-fe',
  description:
    'Finding out details about public places to work can be tedious. Get the information you need to work and code on the go. Hive Stack is a web application that helps users find wifi in their area using Google Maps Services. Front-end built using React with Axios, Redux,  & Styled-Components. Back-end built using express, PostgreSQL, jsonwebtoken, & nesthydration. Our mission is to connect WiFi users with local businesses who offer internet access catered to the user’s needs, paired with a comfortable working environment while offering businesses a way to engage with a new customer audience.',
  image: hivestack_image,
  image_alt: 'view-of-hivestack-deployment',
};

export const gameOfLife = {
  name: "Conway's Game of Life",
  deploy_url: 'https://gameoflife-ace.netlify.app/',
  github_url: 'https://github.com/AceIsHuman/game-of-life--cellular-automata',
  description: `Check out this classic computer science program replicated using the React framework! John Conway's "Game of Life" simulates cellular automaton by following a few set of rules for cells on a grid. In this simulation, a user may click on a cell in the grid to change its state, alive or dead.`,
  image: gameOfLife_image,
  image_alt: 'game-of-life-simulation',
};

export const dadJokes = {
  name: 'Dad Jokes',
  deploy_url: 'https://front-end.build-week-pt-dad-jokes.now.sh/',
  github_url: 'https://github.com/Build-Week-PT-Dad-Jokes/Front-End',
  description: `Dad Jokes gives users a single location to view and share jokes in a simple manner. Dads can create an account to post new jokes for all to see, or even construct a private stockpile of jokes. The best part is, you don't need an account to view all the hilarious banter! Built using the ReactJS framework with react-router, formik with yup to handle forms with validation, and redux with redux-thunk to handle asynchronous state changes.`,
  image: dadJokes_image,
  image_alt: 'dad-jokes-gif',
};

export const macroCalculator = {
  name: 'Macro Calculator Landing Page',
  deploy_url: 'https://bw-macro-calculator.github.io/bw-macro-calculator/',
  github_url: 'https://github.com/AceIsHuman/bw-macro-calculator',
  description: `As a responsive marketing website for an app called Macro Calculator, this project demonstrates mastery of web-fundamental skills in HTML, CSS, and JavaScript. By using semantic HTML with LESS and JavaScrip, we were able to create components that manipulate the DOM upon user interaction. This landing page includes hover effects on images, a drop-down navigation menu for mobile views, a customer testimonial carousel, and more.`,
  image: macroCalculator_image,
  image_alt: 'macro-calculator-gif',
};
