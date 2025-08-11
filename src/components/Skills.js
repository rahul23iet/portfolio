import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { 
  FaReact, 
  FaNodeJs, 
  FaJs, 
  FaPython, 
  FaGitAlt, 
  FaDocker,
  FaHtml5,
  FaCss3Alt,
  FaEthereum
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiMongodb, 
  SiPostgresql, 
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
  SiSolidity,
  SiWeb3Dotjs,
  SiRedis,
  SiGraphql,
  SiAmazonaws,
  SiKubernetes
} from 'react-icons/si';

const SkillsSection = styled.section`
  padding: 5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.03) 0%, rgba(6, 182, 212, 0.03) 100%);

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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const SkillCategory = styled(motion.div)`
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, rgba(6, 182, 212, 0.08) 100%);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(139, 92, 246, 0.25);
  border-radius: 20px;
  padding: 2rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(139, 92, 246, 0.5);
    box-shadow: 0 15px 40px rgba(139, 92, 246, 0.2);
    background: linear-gradient(135deg, rgba(139, 92, 246, 0.12) 0%, rgba(6, 182, 212, 0.12) 100%);
  }
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--primary-cyan);
  margin-bottom: 1.5rem;
  text-align: center;
  font-weight: 600;
`;

const SkillsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1.5rem;
`;

const SkillItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.06) 0%, rgba(6, 182, 212, 0.06) 100%);
  border-radius: 15px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: rgba(6, 182, 212, 0.12);
    transform: translateY(-3px);
  }
`;

const SkillIcon = styled.div`
  font-size: 2.5rem;
  color: var(--primary-cyan);
  margin-bottom: 0.5rem;
`;

const SkillName = styled.div`
  font-size: 0.9rem;
  color: var(--text-muted);
  text-align: center;
  font-weight: 500;
`;

const Skills = () => {
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

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "Tailwind", icon: <SiTailwindcss /> }
      ]
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express", icon: <SiExpress /> },
        { name: "Python", icon: <FaPython /> },
        { name: "GraphQL", icon: <SiGraphql /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "Redis", icon: <SiRedis /> }
      ]
    },
    {
      title: "Blockchain & Web3",
      skills: [
        { name: "Solidity", icon: <SiSolidity /> },
        { name: "Ethereum", icon: <FaEthereum /> },
        { name: "Web3.js", icon: <SiWeb3Dotjs /> }
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "Docker", icon: <FaDocker /> },
        { name: "AWS", icon: <SiAmazonaws /> },
        { name: "Kubernetes", icon: <SiKubernetes /> }
      ]
    }
  ];

  return (
    <SkillsSection id="skills" ref={ref}>
      <SectionTitle
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        Skills & Technologies
      </SectionTitle>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <SkillsGrid>
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <CategoryTitle>{category.title}</CategoryTitle>
              <SkillsList>
                {category.skills.map((skill, skillIndex) => (
                  <SkillItem
                    key={skillIndex}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <SkillIcon>{skill.icon}</SkillIcon>
                    <SkillName>{skill.name}</SkillName>
                  </SkillItem>
                ))}
              </SkillsList>
            </SkillCategory>
          ))}
        </SkillsGrid>
      </motion.div>
    </SkillsSection>
  );
};

export default Skills;
