import { motion } from 'framer-motion';
import { FiCalendar, FiAward } from 'react-icons/fi';
import './Education.css';

const educationData = [
  {
    year: '2020 - 2021',
    title: '10th Standard',
    institution: 'Prafulla Kanan Deshpriya Vidyamandir, Kolkata | WBBSE',
    score: '80%',
    description: 'Completed Secondary Education under the West Bengal Board with strong academic performance. Built a solid foundation in analytical thinking, problem-solving, and core subjects.',
    align: 'left'
  },
  {
    year: '2022 - 2023',
    title: '12th Standard',
    institution: 'Krishnapur Adarsha Vidyamandir, Kolkata | WBCHSE',
    score: '91%',
    description: 'Focused on Computer Science and Geography. Built foundational knowledge in programming and core science subjects.',
    align: 'right'
  },
  {
    year: '2023 - 2026',
    title: 'Bachelor of Computer Applications',
    institution: 'Institute Of Engineering & Management, Kolkata | UEM',
    score: '8.9 CGPA',
    description: 'Graduated with honors. Participated in various hackathons and tech events. Specialized in web development and software engineering.',
    align: 'left'
  }
];

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="section-header">
        <p className="section-subtitle">My Journey</p>
        <h2 className="section-title">Education</h2>
      </div>

      <div className="timeline">
        <div className="timeline-line"></div>

        {educationData.map((item, index) => (
          <motion.div
            key={index}
            className={`timeline-item ${item.align}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content glass-card">
              <div className="timeline-year">
                <FiCalendar /> {item.year}
              </div>
              <h3 className="timeline-title">{item.title}</h3>
              <p className="timeline-institution">{item.institution}</p>
              <div className="timeline-score">
                {item.score} <span className="dot"></span>
              </div>
              <p className="timeline-desc">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
