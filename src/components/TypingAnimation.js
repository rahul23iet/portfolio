import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const blink = keyframes`
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
`;

const TypingContainer = styled.div`
  display: inline-block;
`;

const Cursor = styled.span`
  display: inline-block;
  width: 3px;
  height: 1.2em;
  background: #00d4ff;
  margin-left: 2px;
  animation: ${blink} 1s infinite;
  box-shadow: 0 0 10px #00d4ff;
`;

const TypingAnimation = ({ 
  texts, 
  speed = 100, 
  deleteSpeed = 50, 
  pauseTime = 2000,
  className 
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentFullText = texts[currentTextIndex];
    
    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseTime);
      
      return () => clearTimeout(pauseTimer);
    }

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentFullText.length) {
          setCurrentText(currentFullText.substring(0, currentText.length + 1));
        } else {
          setIsPaused(true);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.substring(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((prevIndex) => 
            prevIndex === texts.length - 1 ? 0 : prevIndex + 1
          );
        }
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timer);
  }, [currentText, currentTextIndex, isDeleting, isPaused, texts, speed, deleteSpeed, pauseTime]);

  return (
    <TypingContainer className={className}>
      {currentText}
      <Cursor />
    </TypingContainer>
  );
};

export default TypingAnimation;
