import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const neonPulse = keyframes`
  0%, 100% { 
    box-shadow: 
      0 0 5px currentColor,
      0 0 10px currentColor,
      0 0 15px currentColor,
      inset 0 0 5px currentColor;
  }
  50% { 
    box-shadow: 
      0 0 10px currentColor,
      0 0 20px currentColor,
      0 0 30px currentColor,
      inset 0 0 10px currentColor;
  }
`;

const hologramShimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

// 3D Button Component
export const Button3D = styled(motion.button)`
  background: linear-gradient(145deg, var(--bg-glass), rgba(255, 255, 255, 0.1));
  border: 2px solid ${props => props.color || 'var(--primary-gray)'};
  color: ${props => props.color || 'var(--primary-gray)'};
  padding: 1.2rem 2.5rem;
  border-radius: 12px;
  font-family: 'Space Grotesk', 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(15px);
  transition: all 0.3s ease;
  transform-style: preserve-3d;
  letter-spacing: -0.01em;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.5s;
  }
  
  &:hover {
    transform: translateY(-5px) rotateX(10deg);
    animation: ${neonPulse} 1.5s ease-in-out infinite;
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(-2px) rotateX(5deg);
  }
`;

// 3D Card Component
export const Card3D = styled(motion.div)`
  background: linear-gradient(145deg, var(--card-bg), rgba(255, 255, 255, 0.05));
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  backdrop-filter: blur(15px);
  position: relative;
  overflow: hidden;
  transform-style: preserve-3d;
  transition: all 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      transparent 30%,
      rgba(0, 255, 255, 0.1) 50%,
      transparent 70%
    );
    background-size: 200% 200%;
    animation: ${hologramShimmer} 3s ease-in-out infinite;
    pointer-events: none;
  }
  
  &:hover {
    transform: translateY(-10px) rotateX(5deg) rotateY(5deg);
    border-color: var(--neon-cyan);
    box-shadow: 
      0 20px 40px rgba(107, 114, 128, 0.2),
      0 0 20px rgba(107, 114, 128, 0.1);
  }
`;

// Neon Text Component
export const NeonText = styled(motion.h2)`
  font-family: 'Orbitron', sans-serif;
  font-weight: 700;
  font-size: ${props => props.size || '2rem'};
  color: ${props => props.color || 'var(--neon-cyan)'};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-shadow: 
    0 0 5px currentColor,
    0 0 10px currentColor,
    0 0 15px currentColor;
  margin: ${props => props.margin || '1rem 0'};
  
  &:hover {
    animation: ${neonPulse} 1s ease-in-out;
  }
`;

// Holographic Panel
export const HoloPanel = styled(motion.div)`
  background: linear-gradient(
    135deg,
    rgba(107, 114, 128, 0.1) 0%,
    rgba(31, 41, 55, 0.1) 50%,
    rgba(17, 24, 39, 0.1) 100%
  );
  border: 2px solid rgba(107, 114, 128, 0.3);
  border-radius: 15px;
  padding: 1.5rem;
  backdrop-filter: blur(20px);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(
      45deg,
      var(--neon-cyan),
      var(--neon-pink),
      var(--neon-purple),
      var(--neon-green)
    );
    background-size: 400% 400%;
    animation: ${hologramShimmer} 4s ease-in-out infinite;
    border-radius: 15px;
    z-index: -1;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--gradient-hero);
    border-radius: 13px;
    z-index: -1;
  }
`;

// Floating Action Button
export const FloatingButton = styled(motion.button)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(145deg, var(--neon-cyan), var(--neon-pink));
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1000;
  box-shadow: 
    0 10px 30px rgba(107, 114, 128, 0.3),
    0 0 20px rgba(107, 114, 128, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px) scale(1.1);
    box-shadow: 
      0 15px 40px rgba(0, 255, 255, 0.4),
      0 0 30px rgba(0, 255, 255, 0.3);
  }
`;

// Progress Bar 3D
export const ProgressBar3D = styled.div`
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  backdrop-filter: blur(5px);
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${props => props.progress || 0}%;
    background: linear-gradient(90deg, var(--neon-cyan), var(--neon-pink));
    border-radius: 4px;
    box-shadow: 0 0 10px currentColor;
    transition: width 0.3s ease;
  }
`;

// Skill Badge 3D
export const SkillBadge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(145deg, var(--glass-bg), rgba(255, 255, 255, 0.1));
  border: 1px solid ${props => props.color || 'var(--neon-cyan)'};
  color: ${props => props.color || 'var(--neon-cyan)'};
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 255, 255, 0.2);
    border-color: ${props => props.color || 'var(--neon-cyan)'};
  }
`;

// Navigation Link 3D
export const NavLink3D = styled(motion.a)`
  color: white;
  text-decoration: none;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  position: relative;
  transition: all 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, var(--neon-cyan), var(--neon-pink));
    border-radius: 10px;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }
  
  &:hover {
    color: white;
    transform: translateY(-2px);
    
    &::before {
      opacity: 0.2;
    }
  }
`;

export default {
  Button3D,
  Card3D,
  NeonText,
  HoloPanel,
  FloatingButton,
  ProgressBar3D,
  SkillBadge,
  NavLink3D
};
