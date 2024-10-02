import React from 'react';

const DarkModeToggle = ({ toggleDarkMode }) => {
  return (
    <button 
      onClick={toggleDarkMode} 
      className="fixed top-4 right-4 bg-gray-800 text-white p-2 rounded"
    >
      Toggle Dark Mode
    </button>
  );
};

export default DarkModeToggle;
