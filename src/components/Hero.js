import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { NeonText, Button3D } from './UI3D';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown } from 'react-icons/fa';

// Floating animation
const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
`;

// Glow animation
const glow = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.3); }
  50% { box-shadow: 0 0 40px rgba(139, 92, 246, 0.6); }
`;

// Pulse animation
const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

const HeroSection = styled.section`
  id: hero;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  overflow: hidden;

  @media (max-width: 768px) {
    text-align: center;
    padding: 6rem 1rem 2rem;
  }
`;

const HeroContent = styled.div`
  max-width: 900px;
  text-align: center;
  z-index: 3;
  position: relative;
`;

const FloatingOrb = styled(motion.div)`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%);
  filter: blur(40px);
  z-index: -1;
  animation: ${float} 6s ease-in-out infinite;
`;

const HeroTitle = styled(motion.h1)`
  font-family: 'Space Grotesk', 'Poppins', sans-serif;
  font-size: 5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  background: var(--gradient-hero);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.03em;
  line-height: 1.1;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: var(--gradient-primary);
    border-radius: 2px;
    animation: ${glow} 2s ease-in-out infinite;
  }

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

const NameHighlight = styled.span`
  color: var(--primary-violet);
  background: linear-gradient(135deg, var(--primary-violet) 0%, var(--primary-cyan) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 900;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(135deg, var(--primary-violet) 0%, var(--primary-cyan) 100%);
    border-radius: 2px;
    animation: ${glow} 2s ease-in-out infinite;
  }
`;

const TypingText = styled(motion.span)`
  color: var(--primary-violet);
  position: relative;
  
  &::after {
    content: '|';
    animation: blink 1s infinite;
    color: var(--primary-violet);
  }
  
  @keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }
`;

const HeroSubtitle = styled(motion.h2)`
  font-family: 'Space Grotesk', 'Poppins', sans-serif;
  font-size: 2.2rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  background: var(--gradient-secondary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const HeroDescription = styled(motion.p)`
  font-size: 1.3rem;
  color: var(--text-muted);
  line-height: 1.8;
  margin-bottom: 3rem;
  max-width: 600px;
  font-weight: 400;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin: 0 auto 2rem;
  }
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
`;

const SocialIcon = styled(motion.a)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-violet), var(--primary-cyan));
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  text-decoration: none;
  transition: all 0.3s ease;
  animation: ${pulse} 2s ease-in-out infinite;
  
  &:hover {
    transform: translateY(-5px) scale(1.1);
    box-shadow: 0 10px 30px rgba(139, 92, 246, 0.4);
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--text-muted);
  cursor: pointer;
  
  &:hover {
    color: var(--primary-violet);
  }
`;

const ScrollText = styled.span`
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const ScrollIcon = styled(motion.div)`
  font-size: 1.5rem;
  animation: ${float} 2s ease-in-out infinite;
`;

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Full Stack & Blockchain Developer";
  
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const handleScrollDown = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <HeroSection id="hero">
      <FloatingOrb
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        style={{ top: '10%', left: '10%' }}
      />
      <FloatingOrb
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 1 }}
        style={{ bottom: '20%', right: '15%' }}
      />
      
      <HeroContent>
        <HeroTitle
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 100 }}
        >
          Hi, I'm <NameHighlight>Rahul</NameHighlight>
        </HeroTitle>
        
        <HeroSubtitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {currentText}
        </HeroSubtitle>
        
        <HeroDescription
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          I create beautiful, responsive web applications and blockchain solutions with modern technologies. 
          Passionate about full-stack development, smart contracts, DeFi, and bringing innovative ideas to life through cutting-edge technology.
        </HeroDescription>
        
        <ButtonContainer
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Button3D
            color="var(--primary-violet)"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </Button3D>
          
          <Button3D
            color="var(--primary-cyan)"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
          >
            View Projects
          </Button3D>
        </ButtonContainer>

        <SocialLinks
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <SocialIcon href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </SocialIcon>
          <SocialIcon href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </SocialIcon>
          <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </SocialIcon>
        </SocialLinks>
      </HeroContent>

      <ScrollIndicator
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        onClick={handleScrollDown}
      >
        <ScrollText>Scroll Down</ScrollText>
        <ScrollIcon>
          <FaArrowDown />
        </ScrollIcon>
      </ScrollIndicator>
    </HeroSection>
  );
};

export default Hero;
