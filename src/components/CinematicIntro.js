import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const glitch = keyframes`
  0%, 100% { transform: translate(0); }
  10% { transform: translate(-2px, 2px); }
  20% { transform: translate(2px, -2px); }
  30% { transform: translate(-2px, -2px); }
  40% { transform: translate(2px, 2px); }
  50% { transform: translate(-2px, 2px); }
  60% { transform: translate(2px, -2px); }
  70% { transform: translate(-2px, -2px); }
  80% { transform: translate(2px, 2px); }
  90% { transform: translate(-2px, 2px); }
`;

const neonGlow = keyframes`
  0%, 100% { 
    text-shadow: 
      0 0 5px var(--neon-cyan),
      0 0 10px var(--neon-cyan),
      0 0 15px var(--neon-cyan),
      0 0 20px var(--neon-cyan);
  }
  50% { 
    text-shadow: 
      0 0 10px var(--neon-cyan),
      0 0 20px var(--neon-cyan),
      0 0 30px var(--neon-cyan),
      0 0 40px var(--neon-cyan);
  }
`;

const scanlines = keyframes`
  0% { transform: translateY(-100vh); }
  100% { transform: translateY(100vh); }
`;

const IntroContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  overflow: hidden;
`;

const IntroTitle = styled(motion.h1)`
  font-family: 'Space Grotesk', 'Poppins', sans-serif;
  font-size: 4.5rem;
  font-weight: 700;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const IntroSubtitle = styled(motion.p)`
  font-size: 1.6rem;
  background: var(--gradient-secondary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  margin-bottom: 3rem;
  font-weight: 500;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const GlitchText = styled.span`
  position: relative;
  display: inline-block;
  animation: ${glitch} 0.3s infinite;
  
  &::before,
  &::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  
  &::before {
    color: var(--neon-pink);
    z-index: -1;
    animation: ${glitch} 0.3s infinite;
    clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
  }
  
  &::after {
    color: var(--neon-green);
    z-index: -2;
    animation: ${glitch} 0.3s infinite reverse;
    clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%);
  }
`;

const Scanlines = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--neon-cyan), transparent);
  animation: ${scanlines} 2s linear infinite;
  opacity: 0.7;
`;

const LoadingBar = styled(motion.div)`
  width: 300px;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  overflow: hidden;
  margin-top: 2rem;
`;

const LoadingProgress = styled(motion.div)`
  height: 100%;
  background: var(--gradient-primary);
  border-radius: 2px;
  box-shadow: 0 0 15px rgba(79, 70, 229, 0.5);
`;

const SkipButton = styled(motion.button)`
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  background: transparent;
  border: 2px solid var(--primary-blue);
  color: var(--primary-blue);
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  cursor: pointer;
  font-family: 'Space Grotesk', 'Poppins', sans-serif;
  font-weight: 600;
  transition: all 0.3s ease;
  letter-spacing: -0.01em;
  
  &:hover {
    background: var(--primary-blue);
    color: white;
    box-shadow: 0 0 20px rgba(79, 70, 229, 0.4);
  }
`;

function CinematicIntro({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [showSkip, setShowSkip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowSkip(true), 2000);
    
    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => {
      clearTimeout(timer);
      clearInterval(progressTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <IntroContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 0.5 }}
      >
        <Scanlines />
        
        <IntroTitle
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <GlitchText data-text="PORTFOLIO">
            PORTFOLIO
          </GlitchText>
        </IntroTitle>
        
        <IntroSubtitle
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Welcome to the Future of Web Development
        </IntroSubtitle>
        
        <LoadingBar
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 300, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <LoadingProgress
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </LoadingBar>
        
        <AnimatePresence>
          {showSkip && (
            <SkipButton
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              onClick={onComplete}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              SKIP INTRO
            </SkipButton>
          )}
        </AnimatePresence>
      </IntroContainer>
    </AnimatePresence>
  );
}

export default CinematicIntro;
