
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t dark:border-gray-700">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center text-center">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} MedConnect. All Rights Reserved.
          </p>
          <div className="flex mt-4 -mx-2">
            <Link to="/about" className="mx-2 text-sm text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400">About</Link>
            <Link to="/privacy" className="mx-2 text-sm text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400">Privacy Policy</Link>
            <Link to="/contact" className="mx-2 text-sm text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
