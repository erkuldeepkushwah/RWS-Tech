'use client';

import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
}

export function Logo({ className = '', size = 'md', variant = 'dark' }: LogoProps) {
  const sizeClasses = {
    sm: { icon: 'w-7 h-7 text-xs', text: 'text-lg', sub: 'text-[9px]' },
    md: { icon: 'w-9 h-9 text-sm', text: 'text-xl', sub: 'text-[10px]' },
    lg: { icon: 'w-11 h-11 text-base', text: 'text-2xl', sub: 'text-xs' },
  }[size];

  const textColor = variant === 'light' ? 'text-white' : 'text-slate-900';
  const subColor = variant === 'light' ? 'text-blue-200' : 'text-blue-600';

  return (
    <div className={`flex items-center gap-2.5 font-bold tracking-tight select-none ${className}`}>
      {/* Stylized RWS Tech Mark */}
      <div
        className={`${sizeClasses.icon} relative flex items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 via-blue-600 to-blue-600 text-white shadow-md shadow-blue-600/20 ring-1 ring-blue-500/30 overflow-hidden group`}
      >
        {/* Geometric Tech Glyph Accent */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/20" />
        <span className="relative z-10 font-black tracking-tighter">
          R<span className="text-blue-200">W</span>S
        </span>
        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-blue-300 rounded-full blur-[2px] opacity-70" />
      </div>

      <div className="flex flex-col leading-none">
        <div className="flex items-center gap-1">
          <span className={`${sizeClasses.text} ${textColor} font-black tracking-tight`}>
            RWS<span className="text-blue-600">.</span>TECH
          </span>
          {/* Subtle accent chevron inspired by enterprise tech aesthetic */}
          <span className="text-blue-600 font-mono font-bold text-xs">></span>
        </div>
        <span className={`${sizeClasses.sub} ${subColor} font-semibold uppercase tracking-wider`}>
          Technology Academy
        </span>
      </div>
    </div>
  );
}
