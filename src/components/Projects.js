import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Projects</h2>
      <ul>
        <li>Project 1: A cool project I built using React.</li>
        <li>Project 2: Another interesting project focused on data analysis.</li>
      </ul>
    </motion.section>
  );
};

export default Projects;
