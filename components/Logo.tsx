import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={className} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-label="AutomateX AI Logo"
    >
      <defs>
        <linearGradient id="logo_grad_1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" /> {/* Sky 400 */}
          <stop offset="100%" stopColor="#3b82f6" /> {/* Blue 500 */}
        </linearGradient>
        <linearGradient id="logo_grad_2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2dd4bf" /> {/* Teal 400 */}
          <stop offset="100%" stopColor="#0ea5e9" /> {/* Sky 500 */}
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      
      {/* Background Glow */}
      <circle cx="50" cy="50" r="30" fill="#38bdf8" fillOpacity="0.1" filter="url(#glow)" />

      {/* The X Shape constructed from overlapping chevrons/lines */}
      {/* Left-to-Right Diagonal */}
      <path 
        d="M25 25 L75 75" 
        stroke="url(#logo_grad_1)" 
        strokeWidth="10" 
        strokeLinecap="round" 
      />
      
      {/* Right-to-Left Diagonal - split to create 'woven' look if desired, or solid */}
      <path 
        d="M75 25 L25 75" 
        stroke="url(#logo_grad_2)" 
        strokeWidth="10" 
        strokeLinecap="round" 
      />

      {/* Tech Accents - dots at terminals */}
      <circle cx="25" cy="25" r="3" fill="#38bdf8" />
      <circle cx="75" cy="75" r="3" fill="#3b82f6" />
      <circle cx="75" cy="25" r="3" fill="#2dd4bf" />
      <circle cx="25" cy="75" r="3" fill="#0ea5e9" />
    </svg>
  );
};
