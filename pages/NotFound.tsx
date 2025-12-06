import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-4 text-center bg-brand-offWhite">
      <h1 className="font-serif text-8xl font-bold text-brand-teal mb-4">404</h1>
      <h2 className="text-2xl font-serif text-gray-800 mb-6">Page Not Found</h2>
      <p className="text-gray-600 mb-8 max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link to="/">
        <Button size="lg">Return Home</Button>
      </Link>
    </div>
  );
};

export default NotFound;