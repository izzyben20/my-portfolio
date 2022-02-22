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
import About from './components/About/About';
import SideBar from './components/Header/sideBar/SideBar';
import { theme } from './components/GlobalStyles/index';

const App = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
    return (
        <Router>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <SideBar toggle={toggle} isOpen={isOpen} />
                <Header toggle={toggle} />
                <Hero />
                <About />
                <Projects />
                <Skills />
                <Contact />
                <Footer />
            </ThemeProvider>
        </Router>
    )
}

export default App;