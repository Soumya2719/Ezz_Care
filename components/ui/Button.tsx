import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  isLoading = false,
  ...props
}) => {
  // ALIGNMENT: `inline-flex items-center justify-center` ensures all content (icons, text) is perfectly centered.
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-full shadow-lg focus:outline-none focus:ring-4 transition-all duration-300 ease-in-out transform disabled:opacity-50 disabled:cursor-not-allowed';

  const variantStyles = {
    // ACCESSIBILITY FIX: Changed text color from white to a high-contrast dark color (`text-primary`) to ensure readability on the bright gradient, meeting WCAG standards.
    primary: 'bg-gradient-to-r from-accent to-secondary text-primary focus:ring-accent/50 hover:shadow-glow-md hover:-translate-y-1',
    // ACCESSIBILITY FIX: Changed low-contrast `text-dark` to `text-light` for readability on dark `bg-primary-light`.
    secondary: 'bg-primary-light text-light hover:bg-white/20 focus:ring-primary-light/50',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500/50 hover:shadow-lg hover:shadow-red-500/50',
    ghost: 'bg-transparent text-light hover:bg-white/10 focus:ring-white/50',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm tracking-wide',
    lg: 'px-8 py-4 text-base tracking-wider uppercase',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      disabled={isLoading}
      {...props}
    >
      {isLoading && (
        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {children}
    </button>
  );
};

export default Button;