import { useState } from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import './Projects.css';

const projectsData = [
  {
    id: 1,
    title: 'AI Powered Placement Preparation Platform',
    category: 'Full Stack',
    image: './Zentor.png',
    tech: ['Next.js', 'Firebase', 'Grok AI'],
    description: 'A full-featured placement preparation platform with ai-based personalized learning and interview preparation.',
    githubLink: 'https://github.com/Pradip-Garai/Zentor_Platform', // Add your GitHub link here
    liveLink: 'https://meetzentor.vercel.app',   // Add your Live link here
  },
  {
    id: 2,
    title: 'LinkedIn Post Generator',
    category: 'Web Apps',
    image: './Linkdin.png',
    tech: ['Python', 'Streamlit', 'MySQL', 'Meta AI'],
    description: 'A web application that generates LinkedIn posts using AI. It is a very simple and easy-to-use application.',
    githubLink: 'https://github.com/Pradip-Garai/Linkedin_Post_Generator', // Add your GitHub link here
    liveLink: 'https://linkedin-post-generator2.streamlit.app',   // Add your Live link here
  },
  {
    id: 3,
    title: 'IMAGE FORGE - Image Extension Conversion',
    category: 'Web Apps',
    image: './image.png',
    tech: ['Python', 'Stramlit', 'pillow'],
    description: 'Image Extension Converter is a web application that converts images from one format to another. It is a very simple and easy-to-use application. PNG , JPG, JPEG, WEBP',
    githubLink: 'https://github.com/Pradip-Garai/Streamlit_App/blob/main/main.py', // Add your GitHub link here
    liveLink: 'https://images-extension-converter.streamlit.app/',   // Add your Live link here
  }
];

const categories = ['All', 'Web Apps', 'Full Stack'];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="projects">
      <div className="section-header">
        <p className="section-subtitle">My Work</p>
        <h2 className="section-title">Featured Projects</h2>
      </div>

      <div className="projects-filter">
        {categories.map((cat, index) => (
          <button
            key={index}
            className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <Tilt key={project.id} tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2000}>
            <motion.div
              className="project-card glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="project-img">
                <img src={project.image} alt={project.title} />
                <div className="project-links">
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FiGithub />
                    </a>
                  )}
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FiExternalLink />
                    </a>
                  )}
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <p className="project-desc">{project.description}</p>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Projects;
