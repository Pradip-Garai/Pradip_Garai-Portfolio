import Experience from '../components/Experience';
import Scholarship from '../components/Scholarship';
import { motion } from 'framer-motion';

const Blogs = () => {
  return (
    <div style={{ paddingTop: '100px' }}>
      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="section-header">
          <h1 className="section-title">Blogs & Achievements</h1>
          <p className="section-desc">My professional journey, job offers, and scholarship achievements.</p>
        </div>
      </motion.div> */}

      <Experience />
      {/* <Scholarship /> */}
    </div>
  );
};

export default Blogs;
