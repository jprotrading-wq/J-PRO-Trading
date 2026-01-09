
import React from 'react';

export const COLORS = {
  deepBlue: '#002366',
  darkGrey: '#333333',
  lightGrey: '#F8F9FA',
};

export const Logo: React.FC<{ className?: string, dark?: boolean }> = ({ className, dark = false }) => (
  <div className={`flex items-center gap-2 font-bold text-xl tracking-tight ${className} ${dark ? 'text-[#002366]' : 'text-white'}`}>
    <div className="relative w-8 h-8 flex items-center justify-center">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 4L12 12L4 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11 4L19 12L11 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
      </svg>
    </div>
    <span>J PRO <span className="font-light">Trading</span></span>
  </div>
);
