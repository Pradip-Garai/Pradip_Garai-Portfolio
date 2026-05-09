import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { FiBriefcase } from 'react-icons/fi';
import './Experience.css';

const experienceData = [
  {
    id: 1,
    company: 'TCS Ignite',
    role: 'Assistant System Engineer',
    date: 'April 2026',
    image: './TCS.png',
    description: 'Received an offer letter from Tata Consultancy Services through the TCS Ignite program. This prestigious program is designed to nurture talented individuals through rigorous technical training and enterprise software development opportunities.',
  },
  {
    id: 2,
    company: 'Cognizant',
    role: 'Analyst Trainee',
    date: 'April 2026',
    image: './Cognizant.png',
    description: 'Selected by Cognizant as an Analyst Trainee after rigorous technical and HR rounds. This role involves working with cutting-edge technologies and enterprise clients globally.',
  },
  {
    id: 3,
    company: 'Concentrix',
    role: 'Customer Advisor 1',
    date: 'January 2026',
    image: './Concentrix.png',
    description: 'Received an Expression of Interest from Concentrix for the role of Advisor 1 – Customer Service, recognizing my potential for technical training and professional development opportunities.',
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="section-header">
        <p className="section-subtitle">My Achievements</p>
        <h2 className="section-title">Job Offers</h2>
        <p className="section-desc">Grateful for the opportunities from these prestigious organizations</p>
      </div>

      <div className="experience-grid">
        {experienceData.map((exp, index) => (
          <Tilt key={exp.id} tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2000}>
            <motion.div
              className="experience-card glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="experience-img">
                <img src={exp.image} alt={exp.company} />
                <div className="experience-overlay"></div>
                <div className="experience-date">{exp.date}</div>
              </div>
              <div className="experience-content">
                <div className="experience-header">
                  <FiBriefcase className="experience-icon" />
                  <h3 className="company-name">{exp.company}</h3>
                </div>
                <h4 className="role-name">{exp.role}</h4>
                <p className="experience-desc">{exp.description}</p>

              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Experience;
