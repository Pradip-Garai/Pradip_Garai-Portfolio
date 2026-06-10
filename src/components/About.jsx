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
            <div className="floating-badge badge-react">Python</div>
            <div className="floating-badge badge-python">Machine Learning</div>
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
            I am a Backend Engineer with 2+ years of experience and a passionate AI/ML Engineer focused on building scalable, efficient backend systems and intelligent data solutions. I specialize in robust REST APIs and microservices using Node.js, Express, and MongoDB, while leveraging Python for machine learning and data analysis.
          </p>

          <p>
            Over the past 2 years, I have designed high-performance backend systems, built end-to-end ML pipelines, and created intelligent applications. My expertise spans full-stack backend development with MySQL and MongoDB, data science, statistical analysis, and deploying ML models using tools like VS Code, Postman, Google Colab, and n8n.
          </p>

          <p>
            I am passionate about solving engineering challenges and leveraging AI to create data-driven solutions. I believe in writing clean, maintainable code and collaborating effectively with teams to build products that make a real impact.
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
