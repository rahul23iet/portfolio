import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Scene3D from './components/Scene3D';
import CinematicIntro from './components/CinematicIntro';
import GlobalStyle from './styles/GlobalStyle';

const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
  color: var(--text-primary);
  overflow-x: hidden;
  position: relative;
  z-index: 0;
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 2;
`;

function App() {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  return (
    <Router>
      <GlobalStyle />
      {showIntro && <CinematicIntro onComplete={handleIntroComplete} />}
      <AppContainer>
        <Scene3D />
        <ContentContainer>
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </ContentContainer>
      </AppContainer>
    </Router>
  );
}

export default App;
