import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { FiAward } from 'react-icons/fi';
import '../components/Experience.css'; // Reusing experience styles for consistency

const scholarshipData = [
  {
    id: 1,
    title: 'Merit Scholarship Award',
    organization: 'State Educational Board',
    date: '2018 - 2021',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&auto=format&fit=crop',
    description: 'Awarded full merit scholarship for outstanding academic performance during the Bachelor of Computer Applications program.',
  },
  {
    id: 2,
    title: 'Tech Innovator Grant',
    organization: 'Tech Foundation',
    date: '2020',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop',
    description: 'Received a grant for developing an innovative open-source tool that helped students learn programming interactively.',
  }
];

const Scholarship = () => {
  return (
    <section id="scholarship" className="experience" style={{ paddingTop: '20px' }}>
      <div className="section-header">
        <p className="section-subtitle">Recognition</p>
        <h2 className="section-title">Scholarship Achievements</h2>
      </div>

      <div className="experience-grid">
        {scholarshipData.map((item, index) => (
          <Tilt key={item.id} tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2000}>
            <motion.div 
              className="experience-card glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="experience-img">
                <img src={item.image} alt={item.title} />
                <div className="experience-overlay"></div>
                <div className="experience-date">{item.date}</div>
              </div>
              <div className="experience-content">
                <div className="experience-header">
                  <FiAward className="experience-icon" />
                  <h3 className="company-name">{item.title}</h3>
                </div>
                <h4 className="role-name">{item.organization}</h4>
                <p className="experience-desc">{item.description}</p>
                <a href="#" className="read-more">View Certificate +</a>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Scholarship;
