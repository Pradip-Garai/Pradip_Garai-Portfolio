import { motion } from 'framer-motion';

import {
  FiArrowRight,
  FiSend,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
  FiChevronDown,
} from 'react-icons/fi';

import { TypeAnimation } from 'react-type-animation';

import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="greeting">
            Hello, I'm
          </p>

          <h1 className="name">
            Pradip Garai
          </h1>

          <h2 className="role">
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                1000,
                'Frontend Developer',
                1000,
                'React.js Developer',
                1000,
                'Node.js Developer',
                1000,
                'Backend Developer',
                1000,
                'Java Developer',
                1000,
              ]}
              wrapper="span"
              speed={50}
              className="gradient-text"
              repeat={Infinity}
            />
          </h2>

          <p className="description">
            I build modern and scalable web
            applications using React, Node.js,
            Express, MongoDB, and Java.
            Passionate about solving real-world
            problems through clean code and
            innovative technologies.
          </p>

          <div className="hero-actions">
            <a
              href="#projects"
              className="btn btn-primary"
            >
              View Projects
              <FiArrowRight />
            </a>

            <a
              href="#contact"
              className="btn btn-outline"
            >
              Contact Me
              <FiSend />
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/Pradip-Garai"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
            >
              <FiGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/pradip-garai-1190232a7/"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
            >
              <FiLinkedin />
            </a>

            <a
              href="https://x.com/Pradip_Garai12"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
            >
              <FiTwitter />
            </a>

            <a
              href="mailto:pradipgarai2026@gmail.com"
              className="social-icon"
            >
              <FiMail />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
        >
          <div className="image-wrapper">
            <div className="profile-placeholder">
              <img
                src="./PIC.jpeg"
                alt="Profile"
              />
            </div>

            <div className="orbit orbit-1">
              <div className="orbit-item react-badge">
                React
              </div>
            </div>

            <div className="orbit orbit-2">
              <div className="orbit-item node-badge">
                Node.js
              </div>
            </div>

            <div className="orbit orbit-3">
              <div className="orbit-item express-badge">
                Express
              </div>
            </div>

            <div className="orbit orbit-4">
              <div className="orbit-item java-badge">
                Java
              </div>
            </div>

            <div className="orbit orbit-5">
              <div className="orbit-item mongo-badge">
                MongoDB
              </div>
            </div>

            <div className="orbit orbit-6">
              <div className="orbit-item mysql-badge">
                MySQL
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <a href="#about" className="scroll-down">
        <span>Scroll Down</span>

        <FiChevronDown className="bounce" />
      </a>
    </section>
  );
};

export default Hero;