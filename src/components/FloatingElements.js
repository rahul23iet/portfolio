import React from 'react';
import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
  }
`;

const glow = keyframes`
  0%, 100% {
    box-shadow: 0 0 5px rgba(107, 114, 128, 0.5);
  }
  50% {
    box-shadow: 0 0 20px rgba(107, 114, 128, 0.8), 0 0 30px rgba(107, 114, 128, 0.6);
  }
`;

const FloatingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -2;
  overflow: hidden;
`;

const FloatingElement = styled.div`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border: 2px solid rgba(107, 114, 128, 0.3);
  background: rgba(107, 114, 128, 0.1);
  animation: 
    ${float} ${props => props.duration}s ease-in-out infinite,
    ${glow} ${props => props.glowDuration}s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
  
  &.triangle {
    width: 0;
    height: 0;
    border-left: ${props => props.size/2}px solid transparent;
    border-right: ${props => props.size/2}px solid transparent;
    border-bottom: ${props => props.size}px solid rgba(107, 114, 128, 0.3);
    background: transparent;
  }
  
  &.circle {
    border-radius: 50%;
  }
  
  &.square {
    border-radius: 4px;
  }
  
  &.hexagon {
    width: ${props => props.size}px;
    height: ${props => props.size * 0.866}px;
    background: rgba(107, 114, 128, 0.1);
    border-radius: 6px;
    position: relative;
    
    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 0;
      border-left: ${props => props.size/2}px solid transparent;
      border-right: ${props => props.size/2}px solid transparent;
    }
    
    &::before {
      bottom: 100%;
      border-bottom: ${props => props.size * 0.289}px solid rgba(107, 114, 128, 0.1);
    }
    
    &::after {
      top: 100%;
      border-top: ${props => props.size * 0.289}px solid rgba(107, 114, 128, 0.1);
    }
  }
`;

const CodeSymbol = styled.div`
  position: absolute;
  font-family: 'Courier New', monospace;
  font-size: ${props => props.size}px;
  color: rgba(107, 114, 128, 0.4);
  font-weight: bold;
  animation: 
    ${float} ${props => props.duration}s ease-in-out infinite,
    ${glow} ${props => props.glowDuration}s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
  text-shadow: 0 0 10px rgba(107, 114, 128, 0.5);
`;

const FloatingElements = () => {
  const shapes = ['circle', 'square', 'triangle', 'hexagon'];
  const codeSymbols = ['{', '}', '<', '>', '/', '*', '+', '=', '&', '#', '$', '%'];
  
  const elements = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    type: Math.random() > 0.6 ? 'symbol' : 'shape',
    shape: shapes[Math.floor(Math.random() * shapes.length)],
    symbol: codeSymbols[Math.floor(Math.random() * codeSymbols.length)],
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 30 + 15,
    duration: Math.random() * 10 + 8,
    glowDuration: Math.random() * 4 + 3,
    delay: Math.random() * 5,
  }));

  return (
    <FloatingContainer>
      {elements.map((element) => (
        element.type === 'symbol' ? (
          <CodeSymbol
            key={element.id}
            size={element.size}
            duration={element.duration}
            glowDuration={element.glowDuration}
            delay={element.delay}
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
            }}
          >
            {element.symbol}
          </CodeSymbol>
        ) : (
          <FloatingElement
            key={element.id}
            className={element.shape}
            size={element.size}
            duration={element.duration}
            glowDuration={element.glowDuration}
            delay={element.delay}
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
            }}
          />
        )
      ))}
    </FloatingContainer>
  );
};

export default FloatingElements;
