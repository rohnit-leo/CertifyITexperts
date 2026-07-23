import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white' | 'outlineWhite';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
  children: React.ReactNode;
};

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-bold rounded transition-all duration-300 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-light shadow-lg shadow-blue-900/10 focus:ring-primary',
    secondary: 'bg-secondary text-white hover:opacity-90 shadow-sm focus:ring-secondary',
    outline: 'border border-border text-primary hover:bg-gray-50 focus:ring-primary',
    ghost: 'text-text-muted hover:text-primary hover:bg-surface focus:ring-primary',
    white: 'bg-white text-primary hover:bg-gray-100 shadow-md focus:ring-white',
    outlineWhite: 'border-2 border-white text-white hover:bg-white/10 focus:ring-white'
  };

  const sizes = {
    sm: 'text-xs px-5 py-2.5',
    md: 'text-sm px-6 py-3',
    lg: 'text-sm px-8 py-4'
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    // If it's an external link or starts with http
    if (href.startsWith('http')) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link to={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <motion.button 
      whileTap={{ scale: 0.98 }}
      className={classes} 
      {...props}
    >
      {children}
    </motion.button>
  );
}
