'use client';

import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface ContentSectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export function ContentSection({ 
  id, 
  title, 
  subtitle, 
  children, 
  variant = 'primary',
  className 
}: ContentSectionProps) {
  return (
    <section 
      id={id}
      className={cn(
        'relative py-20 lg:py-32 overflow-hidden',
        className
      )}
    >
      {/* Background Image - second.png for all content sections */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/second.png"
          alt="Section Background"
          fill
          className="object-cover object-center"
          quality={85}
        />
      </div>

      {/* Background Overlay */}
      <div 
        className={cn(
          'absolute inset-0 z-10',
          variant === 'primary' 
            ? 'bg-gradient-to-br from-black/95 via-black/90 to-gray-900/85'
            : 'bg-gradient-to-br from-gray-900/90 via-black/95 to-black/90'
        )}
      />

      {/* Subtle Texture Overlay */}
      <div 
        className="absolute inset-0 z-10 opacity-20"
        style={{
          background: `
            radial-gradient(circle at 30% 60%, rgba(255, 107, 53, 0.02) 0%, transparent 50%),
            radial-gradient(circle at 70% 40%, rgba(255, 215, 0, 0.01) 0%, transparent 50%)
          `
        }}
      />

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Title */}
          <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6">
            {title}
          </h2>

          {/* Section Subtitle */}
          {subtitle && (
            <h3 className="font-montserrat text-xl md:text-2xl font-medium text-orange-500 uppercase tracking-wide mb-12">
              {subtitle}
            </h3>
          )}

          {/* Section Content */}
          <div className="text-gray-200 font-inter text-lg leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}