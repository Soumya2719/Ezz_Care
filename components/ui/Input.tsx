import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({ label, id, name, error, className = '', ...props }) => {
  return (
    <div className="relative">
      <input
        id={id || name}
        name={name}
        className={`peer w-full px-3 py-3 bg-transparent border-b-2 ${error ? 'border-red-500' : 'border-white/20'} text-light placeholder-transparent focus:outline-none focus:border-accent transition-colors ${className}`}
        {...props}
      />
      {label && (
        <label htmlFor={id || name} className={`absolute left-3 -top-5 text-sm text-gray-300 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-accent peer-focus:text-sm`}>
          {label}
        </label>
      )}
      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Input;