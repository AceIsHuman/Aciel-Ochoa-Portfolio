import hivestack_image from '../../assets/projects/hivestack.gif';
import gameOfLife_image from '../../assets/projects/gameoflife.gif'

export const hivestack = {
  name: 'Hive Stack',
  deploy_url: 'https://hivestack-fe.herokuapp.com',
  github_url: 'https://github.com/AceIsHuman/where-to-code-fe',
  description: 'Finding out details about public places to work can be tedious. Get the information you need, and only that information, to work and code on the go. Hive Stack is a web application that helps users find wifi in their area using Google Maps Services. Front-end built using React with axios, redux,  & styled-components. Back-end built using express, PostgreSQL, jsonwebtoken, & nesthydration. Our mission is to connect WiFi users with local businesses who offer internet access catered to the user’s needs, paired with a comfortable working environment, while offering businesses a way to engage with a new customer audience.',
  image: hivestack_image,
  image_alt: 'view-of-hivestack-deployment'
}

export const gameOfLife = {
  name: "Conway's Game of Life",
  deploy_url: 'https://gameoflife-ace.netlify.app/',
  github_url: 'https://github.com/AceIsHuman/game-of-life--cellular-automata',
  description: `Check out this classic computer science program replicated using the React framework! John Conway's "Game of Life" simulates cellular automaton by following a few set of rules for cells on a grid. In this simulation, a user may click on a cell in the grid to change it's state, alive or dead.`,
  image: gameOfLife_image,
  image_alt: 'game-of-life-simulation'
}