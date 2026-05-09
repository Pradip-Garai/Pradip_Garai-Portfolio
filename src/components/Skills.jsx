import { useState } from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { VscVscode } from "react-icons/vsc";
import {
  SiGooglecolab,
  SiN8N,
  SiPostman,
  SiApachenetbeanside,
} from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { PiNeedleFill } from "react-icons/pi";

import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { RiSparklingFill } from "react-icons/ri";

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaJava,
} from 'react-icons/fa';

import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
} from 'react-icons/si';

import { GrMysql } from 'react-icons/gr';
import { MdArchitecture } from 'react-icons/md';

import './Skills.css';

const skillsData = [
  {
    name: 'React',
    icon: <FaReact />,
    category: 'Frontend',
    color: '#61DAFB',
  },
  {
    name: 'JavaScript',
    icon: <SiJavascript />,
    category: 'Frontend',
    color: '#F7DF1E',
  },
  {
    name: 'HTML5',
    icon: <FaHtml5 />,
    category: 'Frontend',
    color: '#E34F26',
  },
  {
    name: 'CSS3',
    icon: <FaCss3Alt />,
    category: 'Frontend',
    color: '#1572B6',
  },
  {
    name: 'Tailwind',
    icon: <SiTailwindcss />,
    category: 'Frontend',
    color: '#38B2AC',
  },
  {
    name: 'Node.js',
    icon: <FaNodeJs />,
    category: 'Backend',
    color: '#339933',
  },
  {
    name: 'Python',
    icon: <FaPython />,
    category: 'Programming',
    color: '#3776AB',
  },
  {
    name: 'Express',
    icon: <SiExpress />,
    category: 'Backend',
    color: '#ffffff',
  },
  {
    name: 'MongoDB',
    icon: <SiMongodb />,
    category: 'Database',
    color: '#47A248',
  },
  {
    name: 'Java',
    icon: <FaJava />,
    category: 'Programming',
    color: '#f89820',
  },
  {
    name: 'MySQL',
    icon: <GrMysql />,
    category: 'Database',
    color: '#00758F',
  },
  {
    name: 'High Level System Design',
    icon: <MdArchitecture />,
    category: 'System Design',
    color: '#8E44AD',
  },
  {
    name: 'VS Code',
    icon: <VscVscode />,
    category: 'Tools',
    color: '#007ACC',
  },
  {
    name: 'Google Colab',
    icon: <SiGooglecolab />,
    category: 'Tools',
    color: '#F9AB00',
  },
  {
    name: 'n8n',
    icon: <SiN8N />,
    category: 'Tools',
    color: '#EA4B71',
  },
  {
    name: 'Postman',
    icon: <SiPostman />,
    category: 'Tools',
    color: '#FF6C37',
  },
  {
    name: 'Antigravity',
    icon: <TbBrandGoogleAnalytics />,
    category: 'Tools',
    color: '#8A2BE2',
  },
  {
    name: 'Gamma',
    icon: <RiSparklingFill />,
    category: 'Tools',
    color: '#FFD700',
  },
  {
    name: 'NetBeans',
    icon: <SiApachenetbeanside />,
    category: 'Tools',
    color: '#1B6AC6',
  },
  {
    name: 'Figma',
    icon: <FaFigma />,
    category: 'Tools',
    color: '#F24E1E',
  },
  {
    name: 'Stitch',
    icon: <PiNeedleFill />,
    category: 'Tools',
    color: '#7B61FF',
  },
];

const categories = [
  'All',
  'Frontend',
  'Backend',
  'Database',
  'Programming',
  'System Design',
  'Tools',
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills =
    activeCategory === 'All'
      ? skillsData
      : skillsData.filter(
        (skill) => skill.category === activeCategory
      );

  return (
    <section id="skills" className="skills">
      <div className="section-header">
        <p className="section-subtitle">My Expertise</p>

        <h2 className="section-title">
          Technical Skills
        </h2>

        <p className="section-desc">
          A comprehensive set of skills built through
          real-world project experience
        </p>
      </div>

      <div className="skills-filter">
        {categories.map((cat, index) => (
          <button
            key={index}
            className={`filter-btn ${activeCategory === cat ? 'active' : ''
              }`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div className="skills-grid" layout>
        {filteredSkills.map((skill, index) => (
          <Tilt
            key={skill.name}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            scale={1.05}
            transitionSpeed={2500}
          >
            <motion.div
              className="skill-card glass-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              layout
            >
              <div
                className="skill-icon"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </div>

              <h4 className="skill-name">
                {skill.name}
              </h4>
            </motion.div>
          </Tilt>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;