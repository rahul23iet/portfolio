import React from 'react';
import styled, { keyframes } from 'styled-components';

const gridAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-50px);
  }
`;

const pulseAnimation = keyframes`
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.8;
  }
`;

const GridContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -3;
  overflow: hidden;
`;

const GridLines = styled.div`
  position: absolute;
  width: 120%;
  height: 120%;
  background-image: 
    linear-gradient(rgba(107, 114, 128, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(107, 114, 128, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: ${gridAnimation} 20s linear infinite;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, transparent 0%, rgba(15, 15, 15, 0.8) 70%);
  }
`;

const TechNodes = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Node = styled.div`
  position: absolute;
  width: 4px;
  height: 4px;
  background: #6B7280;
  border-radius: 50%;
  box-shadow: 0 0 10px #6B7280;
  animation: ${pulseAnimation} 3s ease-in-out infinite;
  
  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    width: 24px;
    height: 24px;
    border: 1px solid rgba(107, 114, 128, 0.2);
    border-radius: 50%;
    animation: ${pulseAnimation} 2s ease-in-out infinite reverse;
  }
`;

const ConnectionLine = styled.div`
  position: absolute;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(107, 114, 128, 0.3), transparent);
  transform-origin: left center;
  animation: ${pulseAnimation} 4s ease-in-out infinite;
`;

const TechGrid = () => {
  // Generate random nodes
  const nodes = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 3,
  }));

  // Generate connection lines between some nodes
  const connections = [];
  for (let i = 0; i < nodes.length - 1; i++) {
    if (Math.random() > 0.7) { // 30% chance of connection
      const node1 = nodes[i];
      const node2 = nodes[i + 1];
      const distance = Math.sqrt(
        Math.pow(node2.x - node1.x, 2) + Math.pow(node2.y - node1.y, 2)
      );
      const angle = Math.atan2(node2.y - node1.y, node2.x - node1.x) * (180 / Math.PI);
      
      connections.push({
        id: `connection-${i}`,
        x: node1.x,
        y: node1.y,
        width: distance,
        angle: angle,
        delay: Math.random() * 2,
      });
    }
  }

  return (
    <GridContainer>
      <GridLines />
      <TechNodes>
        {nodes.map((node) => (
          <Node
            key={node.id}
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              animationDelay: `${node.delay}s`,
            }}
          />
        ))}
        {connections.map((connection) => (
          <ConnectionLine
            key={connection.id}
            style={{
              left: `${connection.x}%`,
              top: `${connection.y}%`,
              width: `${connection.width}%`,
              transform: `rotate(${connection.angle}deg)`,
              animationDelay: `${connection.delay}s`,
            }}
          />
        ))}
      </TechNodes>
    </GridContainer>
  );
};

export default TechGrid;
