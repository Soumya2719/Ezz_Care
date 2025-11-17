
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button';

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <h1 className="text-9xl font-extrabold text-primary-600 tracking-widest">404</h1>
      <div className="bg-black text-white px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link to="/">
        <Button className="mt-6">
          Go Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
