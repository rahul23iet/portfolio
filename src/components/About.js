import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutSection = styled.section`
  padding: 5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 3rem;
  background: var(--gradient-hero);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const AboutText = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-secondary);

  p {
    margin-bottom: 1.5rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const AboutStats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled(motion.div)`
  background: linear-gradient(135deg, rgba(107, 114, 128, 0.1) 0%, rgba(31, 41, 55, 0.1) 100%);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(107, 114, 128, 0.3);
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(107, 114, 128, 0.6);
    box-shadow: 0 10px 30px rgba(107, 114, 128, 0.2);
    background: linear-gradient(135deg, rgba(107, 114, 128, 0.15) 0%, rgba(31, 41, 55, 0.15) 100%);
  }
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary-gray);
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 1rem;
  color: var(--text-muted);
  font-weight: 500;
`;

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <AboutSection id="about" ref={ref}>
      <SectionTitle
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </SectionTitle>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <AboutContent>
          <motion.div variants={itemVariants}>
            <AboutText>
              <p>
                I'm a passionate full-stack and blockchain developer with expertise in 
                building scalable web applications and decentralized solutions. From 
                frontend React applications to backend microservices and smart contracts, 
                I create end-to-end solutions that solve real-world problems.
              </p>
              <p>
                My journey spans traditional web development and cutting-edge blockchain 
                technology. I specialize in building DeFi platforms, NFT marketplaces, 
                and enterprise-grade applications using modern JavaScript frameworks, 
                Node.js backends, and Solidity smart contracts.
              </p>
              <p>
                When I'm not coding, you can find me exploring new blockchain protocols, 
                contributing to open-source Web3 projects, or sharing knowledge about 
                decentralized technologies with the developer community.
              </p>
            </AboutText>
          </motion.div>

          <motion.div variants={itemVariants}>
            <AboutStats>
              <StatCard
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <StatNumber>3+</StatNumber>
                <StatLabel>Years Experience</StatLabel>
              </StatCard>

              <StatCard
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <StatNumber>50+</StatNumber>
                <StatLabel>Projects Completed</StatLabel>
              </StatCard>

              <StatCard
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <StatNumber>20+</StatNumber>
                <StatLabel>Technologies</StatLabel>
              </StatCard>

              <StatCard
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <StatNumber>100%</StatNumber>
                <StatLabel>Client Satisfaction</StatLabel>
              </StatCard>
            </AboutStats>
          </motion.div>
        </AboutContent>
      </motion.div>
    </AboutSection>
  );
};

export default About;
