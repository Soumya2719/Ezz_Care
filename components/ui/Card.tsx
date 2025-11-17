import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`relative bg-glass backdrop-blur-lg rounded-2xl shadow-lg border border-white/10 overflow-hidden ${className}`}>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent"></div>
      <div className="relative">
        {children}
      </div>
    </div>
  );
};

export default Card;