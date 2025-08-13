import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const CursorContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 9999;
`;

const CursorDot = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  background: #6B7280;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.1s ease;
  box-shadow: 0 0 10px #6B7280, 0 0 20px #6B7280, 0 0 30px #6B7280;
  
  &.clicking {
    transform: translate(-50%, -50%) scale(2);
    background: #4B5563;
    box-shadow: 0 0 15px #4B5563, 0 0 30px #4B5563, 0 0 45px #4B5563;
  }
`;

const CursorRing = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  border: 2px solid rgba(107, 114, 128, 0.5);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.2s ease;
  
  &.hovering {
    width: 50px;
    height: 50px;
    border-color: #4B5563;
    box-shadow: 0 0 20px rgba(75, 85, 99, 0.3);
  }
`;

const TrailDot = styled.div`
  position: absolute;
  width: 4px;
  height: 4px;
  background: rgba(107, 114, 128, 0.6);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  animation: fadeOut 0.8s ease-out forwards;
  
  @keyframes fadeOut {
    0% {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
    100% {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0);
    }
  }
`;

const CursorEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Add trail effect
      setTrail(prev => [
        ...prev.slice(-10), // Keep only last 10 trail dots
        { x: e.clientX, y: e.clientY, id: Date.now() }
      ]);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    
    const handleMouseEnter = (e) => {
      const target = e.target;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.classList.contains('interactive')) {
        setIsHovering(true);
      }
    };
    
    const handleMouseLeave = () => setIsHovering(false);

    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
    };
  }, []);

  // Clean up old trail dots
  useEffect(() => {
    const timer = setTimeout(() => {
      setTrail(prev => prev.slice(1));
    }, 100);
    
    return () => clearTimeout(timer);
  }, [trail]);

  return (
    <CursorContainer>
      {/* Trail effect */}
      {trail.map((dot, index) => (
        <TrailDot
          key={dot.id}
          style={{
            left: dot.x,
            top: dot.y,
            animationDelay: `${index * 0.05}s`,
          }}
        />
      ))}
      
      {/* Main cursor ring */}
      <CursorRing
        className={isHovering ? 'hovering' : ''}
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      />
      
      {/* Main cursor dot */}
      <CursorDot
        className={isClicking ? 'clicking' : ''}
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      />
    </CursorContainer>
  );
};

export default CursorEffect;
