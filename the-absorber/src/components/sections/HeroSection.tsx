'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const trustBadges = [
  'Limited Edition',
  'Handcrafted'
];

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt="The Absorber Hero Background"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
      </div>

      {/* Background Overlays */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/8 via-black/3 to-transparent" />
      <div 
        className="absolute inset-0 z-10 opacity-20"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, rgba(255, 107, 53, 0.015) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 215, 0, 0.008) 0%, transparent 50%)
          `
        }}
      />

      {/* Trust Indicators */}
      <div className="absolute top-8 right-8 z-30 hidden lg:flex gap-4">
        {trustBadges.map((badge, index) => (
          <div
            key={badge}
            className={cn(
              'relative px-6 py-3 rounded-full overflow-hidden',
              'bg-white/8 backdrop-blur-md border border-white/15',
              'text-gray-200 text-xs font-montserrat font-semibold uppercase tracking-wider',
              'transition-all duration-300 hover:bg-white/12 hover:-translate-y-1',
              'hover:shadow-lg hover:shadow-black/30',
              'before:absolute before:inset-0 before:bg-gradient-to-r',
              'before:from-transparent before:via-white/10 before:to-transparent',
              'before:-translate-x-full before:transition-transform before:duration-600',
              'hover:before:translate-x-full',
              index === 0 ? 'animate-float' : ''
            )}
            style={{
              animationDelay: index === 1 ? '1.5s' : '0s'
            }}
          >
            {badge}
          </div>
        ))}
      </div>

      {/* Hero Content Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-end items-center min-h-screen py-20">
          <div className="max-w-2xl text-left lg:text-left">
            {/* Main Title */}
            <h1
              className={cn(
                'font-cormorant text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold',
                'leading-none mb-6 uppercase tracking-widest',
                'bg-gradient-to-br from-white via-gray-100 to-gray-300',
                'bg-clip-text text-transparent',
                'relative transition-all duration-300',
                'hover:scale-[1.02] hover:text-shadow-xl',
                'opacity-0 translate-y-10',
                isVisible && 'animate-fade-in-up'
              )}
              style={{
                animationDelay: '0.2s',
                animationFillMode: 'forwards',
                textShadow: '0 0 50px rgba(255, 255, 255, 0.3)',
              }}
            >
              THE ABSORBER
              <div className="absolute -bottom-2 left-0 w-16 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full" />
            </h1>

            {/* Subtitle */}
            <h2
              className={cn(
                'font-montserrat text-xl md:text-2xl font-medium mb-8',
                'text-orange-500 uppercase tracking-widest',
                'relative opacity-0 translate-y-10',
                isVisible && 'animate-fade-in-up'
              )}
              style={{
                animationDelay: '0.4s',
                animationFillMode: 'forwards',
                textShadow: '0 0 20px rgba(255, 107, 53, 0.3)',
              }}
            >
              <span className="absolute -left-8 top-1/2 -translate-y-1/2 text-orange-500 opacity-80">✦</span>
              HANDCRAFTED EXCELLENCE
            </h2>

            {/* Description */}
            <div
              className={cn(
                'relative pl-6 mb-12 opacity-0 translate-y-10',
                isVisible && 'animate-fade-in-up'
              )}
              style={{
                animationDelay: '0.6s',
                animationFillMode: 'forwards',
              }}
            >
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 to-transparent rounded-full" />
              <p className="font-inter text-lg md:text-xl leading-relaxed text-gray-200 max-w-md">
                Experience automotive perfection with our exclusive PVA technology. 
                Join the elite who demand nothing less than perfection.
              </p>
            </div>

            {/* CTA Button */}
            <div
              className={cn(
                'opacity-0 translate-y-10',
                isVisible && 'animate-fade-in-up'
              )}
              style={{
                animationDelay: '0.8s',
                animationFillMode: 'forwards',
              }}
            >
              <Button
                variant="primary"
                size="lg"
                href="#discover"
                className="text-sm font-semibold tracking-widest px-10 py-4 group"
              >
                JOIN THE ELITE
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-30 hidden lg:block">
        <div className="text-gray-400 text-sm font-inter opacity-70 animate-bounce-slow">
          Scroll to explore
        </div>
      </div>
    </section>
  );
}