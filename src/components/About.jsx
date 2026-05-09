import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="section-header">
        <p className="section-subtitle">Who Am I</p>
        <h2 className="section-title">About Me</h2>
      </div>

      <div className="about-content">
        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="image-container">
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop" alt="Coding on Laptop" />
            <div className="floating-badge badge-react">React.js</div>
            <div className="floating-badge badge-python">Express.js</div>
            <div className="floating-badge badge-node">Node.js</div>
          </div>
        </motion.div>

        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p>
            I am a passionate Full Stack Developer and BCA student with a strong
            interest in building modern and scalable web applications. I enjoy
            turning ideas into real-world digital solutions using technologies like
            React, Node.js, Express, MongoDB, and JavaScript.
          </p>

          <p>
            My journey in tech started with curiosity about how websites and
            applications work behind the scenes. Since then, I have built several
            projects including a AI Powered Placement Preparation Platform, authentication
            systems, and full-stack MERN applications. I am also exploring
            System Design, Blockchain Development, and AI-powered applications.
          </p>

          <p>
            Apart from coding, I love solving DSA problems, learning new
            technologies, and improving my development skills every day. I believe
            in continuous learning, consistency, and creating impactful projects
            that solve real-world problems.
          </p>

          <div className="stats-grid">
            <div className="stat-card glass-card">
              <h3>2+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-card glass-card">
              <h3>15+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-card glass-card">
              <h3>3</h3>
              <p>Job Offers Received</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
