import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex justify-center space-x-8 text-white">
        <li><Link to="/" className="hover:text-gray-400">About Me</Link></li>
        <li><Link to="/projects" className="hover:text-gray-400">Projects</Link></li>
        <li><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
