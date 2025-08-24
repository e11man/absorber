'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#home', label: 'Home', active: true },
  { href: '#products', label: 'Products' },
  { href: '#technology', label: 'Technology' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | 'none'>('none');
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY && currentScrollY > 100) {
        setScrollDirection('up');
      } else if (currentScrollY <= 100) {
        setScrollDirection('none');
      }
      
      setLastScrollY(currentScrollY);
      
      // Add scrolled class for background changes
      setIsScrolled(currentScrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleLinkClick = (href: string) => {
    setActiveLink(href);
    closeMobileMenu();
  };

  // Dynamic navbar width classes based on scroll direction
  const getNavbarWidthClasses = () => {
    if (scrollDirection === 'down') {
      return 'left-12 right-12'; // More compact, professional look
    } else if (scrollDirection === 'up') {
      return 'left-1 right-1'; // More expanded, welcoming look
    }
    return 'left-4 right-4'; // Default state
  };

  return (
    <>
      <nav
        className={cn(
          'fixed top-4 z-50 transition-all duration-600 ease-out',
          'border border-white/8 rounded-3xl',
          'shadow-lg shadow-black/10',
          getNavbarWidthClasses(),
          isScrolled
            ? 'bg-gray-600/25 backdrop-blur-3xl border-white/12 shadow-xl shadow-black/15'
            : 'bg-gray-700/15 backdrop-blur-2xl border-white/8 shadow-lg shadow-black/10'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <div className="relative w-10 h-10 transition-all duration-300 hover:scale-105 hover:drop-shadow-xl">
                <Image
                  src="/logo.png"
                  alt="The Absorber Logo"
                  fill
                  className="object-contain filter drop-shadow-sm hover:drop-shadow-md transition-all duration-300"
                  priority
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className={cn(
                    'relative px-4 py-2 text-sm font-montserrat font-medium uppercase tracking-wide',
                    'transition-all duration-300 ease-out rounded-lg',
                    'hover:text-white hover:bg-white/5 hover:backdrop-blur-sm',
                    'after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5',
                    'after:bg-orange-500 after:transition-all after:duration-300 after:-translate-x-1/2',
                    'hover:after:w-4/5',
                    activeLink === link.href
                      ? 'text-orange-500 bg-orange-500/10 backdrop-blur-sm after:w-4/5'
                      : 'text-gray-200'
                  )}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Right Side - Desktop CTA */}
            <div className="hidden md:flex items-center">
              <Button
                variant="primary"
                size="sm"
                href="#discover"
                className="text-xs tracking-widest font-semibold"
              >
                JOIN THE ELITE
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className={cn(
                'md:hidden relative p-3 rounded-xl transition-all duration-300',
                'hover:bg-white/10 active:bg-white/20 active:scale-95',
                'focus:outline-none focus:ring-2 focus:ring-orange-500/50',
                'min-w-11 min-h-11 flex items-center justify-center'
              )}
              aria-label="Toggle mobile menu"
            >
              <div className="relative w-6 h-6">
                <Menu
                  className={cn(
                    'absolute inset-0 w-6 h-6 text-white transition-all duration-300',
                    isMobileMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
                  )}
                />
                <X
                  className={cn(
                    'absolute inset-0 w-6 h-6 text-white transition-all duration-300',
                    isMobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
                  )}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-40 md:hidden transition-all duration-400 ease-out',
          'bg-gray-700/20 backdrop-blur-3xl',
          isMobileMenuOpen
            ? 'opacity-100 visible'
            : 'opacity-0 invisible'
        )}
        onClick={closeMobileMenu}
      >
        <div
          className={cn(
            'absolute inset-x-0 top-0 bg-gradient-to-b from-gray-800/90 to-gray-900/95',
            'backdrop-blur-3xl border-b border-white/10',
            'transition-all duration-400 ease-out',
            isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="px-6 pt-24 pb-8">
            <div className="flex flex-col space-y-0">
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className={cn(
                    'flex items-center justify-center py-6 text-lg font-montserrat font-medium',
                    'uppercase tracking-wide transition-all duration-300',
                    'border-b border-white/8 min-h-16',
                    'opacity-0 translate-y-5',
                    'hover:text-orange-500 hover:bg-white/5 active:bg-orange-500/10',
                    activeLink === link.href
                      ? 'text-orange-500 bg-orange-500/10'
                      : 'text-gray-200',
                    isMobileMenuOpen && 'animate-fade-in-up'
                  )}
                  style={{
                    animationDelay: isMobileMenuOpen ? `${index * 0.1 + 0.1}s` : '0s',
                    animationFillMode: 'forwards',
                  }}
                >
                  {link.label}
                  {activeLink === link.href && (
                    <div className="absolute right-8 w-2 h-2 bg-orange-500 rounded-full" />
                  )}
                </a>
              ))}
              
              <div
                className={cn(
                  'px-4 py-6 opacity-0 translate-y-5',
                  isMobileMenuOpen && 'animate-fade-in-up'
                )}
                style={{
                  animationDelay: isMobileMenuOpen ? `${navLinks.length * 0.1 + 0.2}s` : '0s',
                  animationFillMode: 'forwards',
                }}
              >
                <Button
                  variant="primary"
                  size="lg"
                  href="#discover"
                  className="w-full font-semibold tracking-widest"
                  onClick={closeMobileMenu}
                >
                  JOIN THE ELITE
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}