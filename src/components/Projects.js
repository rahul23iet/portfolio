import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsSection = styled.section`
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, rgba(6, 182, 212, 0.08) 100%);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(139, 92, 246, 0.25);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    border-color: rgba(139, 92, 246, 0.5);
    box-shadow: 0 20px 40px rgba(139, 92, 246, 0.2);
    background: linear-gradient(135deg, rgba(139, 92, 246, 0.12) 0%, rgba(6, 182, 212, 0.12) 100%);
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  background: var(--gradient-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: white;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%);
    transform: translateX(-100%);
    transition: transform 0.6s;
  }

  ${ProjectCard}:hover &::before {
    transform: translateX(100%);
  }
`;

const ProjectContent = styled.div`
  padding: 2rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: #ffffff;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const ProjectDescription = styled.p`
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 1rem;
`;

const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  background: rgba(6, 182, 212, 0.15);
  color: var(--primary-cyan);
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary-cyan);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #ffffff;
  }
`;

const Projects = () => {
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

  const projects = [
    {
      title: "DeFi Trading Platform",
      description: "A decentralized finance platform with smart contracts for token swapping, liquidity pools, and yield farming. Built with Solidity and Web3 integration.",
      tech: ["Solidity", "React", "Web3.js", "Ethereum", "Node.js"],
      github: "#",
      live: "#",
      icon: "🪙"
    },
    {
      title: "NFT Marketplace",
      description: "A full-stack NFT marketplace with smart contracts for minting, buying, and selling NFTs. Features include auction system and royalty distribution.",
      tech: ["Solidity", "Next.js", "IPFS", "Ethereum", "MongoDB"],
      github: "#",
      live: "#",
      icon: "🎨"
    },
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with microservices architecture, Redis caching, and GraphQL API. Features include real-time inventory and payment processing.",
      tech: ["React", "Node.js", "GraphQL", "Redis", "PostgreSQL", "Docker"],
      github: "#",
      live: "#",
      icon: "🛒"
    },
    {
      title: "Real-time Chat & Collaboration",
      description: "A scalable real-time chat application with video calls, file sharing, and collaborative workspaces. Built with WebRTC and Socket.io.",
      tech: ["React", "Socket.io", "WebRTC", "Node.js", "MongoDB", "AWS"],
      github: "#",
      live: "#",
      icon: "💬"
    },
    {
      title: "Blockchain Voting System",
      description: "A secure and transparent voting system built on blockchain technology with smart contracts ensuring immutable and verifiable elections.",
      tech: ["Solidity", "React", "Web3.js", "Truffle", "Ganache"],
      github: "#",
      live: "#",
      icon: "🗳️"
    },
    {
      title: "API Gateway & Microservices",
      description: "A scalable microservices architecture with API gateway, service discovery, and containerized deployment using Docker and Kubernetes.",
      tech: ["Node.js", "Express", "Docker", "Kubernetes", "Redis", "PostgreSQL"],
      github: "#",
      live: "#",
      icon: "⚙️"
    }
  ];

  return (
    <ProjectsSection id="projects" ref={ref}>
      <SectionTitle
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        Featured Projects
      </SectionTitle>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <ProjectImage>
                {project.icon}
              </ProjectImage>
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectTech>
                  {project.tech.map((tech, techIndex) => (
                    <TechTag key={techIndex}>{tech}</TechTag>
                  ))}
                </ProjectTech>
                <ProjectLinks>
                  <ProjectLink
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                  >
                    <FaGithub /> Code
                  </ProjectLink>
                  <ProjectLink
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </ProjectLink>
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </motion.div>
    </ProjectsSection>
  );
};

export default Projects;
