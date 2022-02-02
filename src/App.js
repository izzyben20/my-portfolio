import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom/';
import GlobalStyles from './components/GlobalStyles/GlobalStyles';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';

const theme = {
    // Temp fonts
    fonts: {
      title: "Space Grotesk, sans-serif",
      main: "Space Grotesk, sans-serif"
    },
    // Colors for layout
    colors: {
      primary1: "hsl(204,23.8%,95.9%)",
      background1: "#0F1624",
      accent1: "hsl(34.9,98.6%,72.9%)",
      button: "hsl(205.1,100%,36.1%)",
      background2: "hsl(232.7,27.3%,23.7%)",
    },
    // Breakpoints for responsive design
    breakpoints: {
      sm: 'screen and (max-width: 640px)',
      md: 'screen and (max-width: 768px)',
      lg: 'screen and (max-width: 1024px)',
      xl: 'screen and (max-width: 1280px)'
    },
  }

const App = () => {
    return (
        <Router>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <Header />
                <Hero />
                <Projects />
                <Skills />
                <Contact />
                <Footer />
            </ThemeProvider>
        </Router>
    )
}

export default App;