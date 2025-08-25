'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  asChild?: boolean;
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, asChild = false, href, ...props }, ref) => {
    const baseStyles = `
      relative inline-flex items-center justify-center
      font-montserrat font-semibold text-center
      transition-all duration-500 ease-out
      border border-transparent
      overflow-hidden
      group
      disabled:opacity-50 disabled:cursor-not-allowed
      focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:ring-offset-2 focus:ring-offset-black
      active:scale-[0.98]
      cursor-pointer
    `;

    const variants = {
      primary: `
        bg-gradient-to-br from-orange-600 to-orange-700
        hover:from-orange-700 hover:to-orange-600
        text-white
        shadow-lg shadow-orange-500/40
        hover:shadow-xl hover:shadow-orange-500/50
        border-white/10
        before:absolute before:inset-0 before:bg-gradient-to-br before:from-orange-700 before:to-orange-600
        before:translate-x-[-100%] before:transition-transform before:duration-400 before:ease-out
        hover:before:translate-x-0
        hover:-translate-y-1
      `,
      secondary: `
        bg-gradient-to-br from-gray-800 to-gray-900
        hover:from-gray-700 hover:to-gray-800
        text-white
        shadow-lg shadow-black/40
        hover:shadow-xl hover:shadow-black/50
        border-white/20
        hover:-translate-y-1
      `,
      outline: `
        bg-transparent
        hover:bg-white/5
        text-white
        border-white/20
        hover:border-white/40
        backdrop-blur-md
      `,
      ghost: `
        bg-transparent
        hover:bg-white/10
        text-gray-200
        hover:text-white
      `
    };

    const sizes = {
      sm: 'text-xs px-4 py-2 rounded-md uppercase tracking-wide',
      md: 'text-sm px-6 py-3 rounded-lg uppercase tracking-wider',
      lg: 'text-base px-8 py-4 rounded-xl uppercase tracking-widest'
    };

    const combinedStyles = cn(
      baseStyles,
      variants[variant],
      sizes[size],
      className
    );

    if (href) {
      return (
        <a
          href={href}
          className={combinedStyles}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          <span className="relative z-10">{children}</span>
        </a>
      );
    }

    if (asChild) {
      return (
        <span className={combinedStyles}>
          <span className="relative z-10">{children}</span>
        </span>
      );
    }

    return (
      <button
        className={combinedStyles}
        ref={ref}
        {...props}
      >
        <span className="relative z-10">{children}</span>
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
export type { ButtonProps };