'use client';

import React from 'react';
import { Navbar } from '@/components/navigation/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { ContentSection } from '@/components/sections/ContentSection';

export default function HomePage() {
  return (
    <main className="relative">
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Products Section */}
      <ContentSection 
        id="products"
        title="Premium PVA Technology"
        subtitle="The Ultimate Automotive Drying Solution"
        variant="primary"
      >
        <div className="space-y-8">
          <p className="text-xl leading-relaxed">
            Our revolutionary PVA (Poly Vinyl Alcohol) towel represents the pinnacle of automotive care technology. 
            Engineered for the discerning enthusiast who accepts nothing less than perfection.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="space-y-4">
              <h4 className="font-montserrat text-xl font-semibold text-orange-500 uppercase tracking-wide">
                Superior Absorbency
              </h4>
              <p>
                Experience unmatched water absorption that outperforms traditional terrycloth towels and 
                leather chamois. Our PVA technology ensures a streak-free, perfect finish every time.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-montserrat text-xl font-semibold text-orange-500 uppercase tracking-wide">
                Gentle on Paint
              </h4>
              <p>
                Specially formulated to be completely safe on all automotive finishes. The soft, 
                non-abrasive material protects your investment while delivering professional results.
              </p>
            </div>
          </div>
        </div>
      </ContentSection>
      
      {/* Technology Section */}
      <ContentSection 
        id="technology"
        title="Advanced Engineering"
        subtitle="Science Meets Luxury"
        variant="secondary"
      >
        <div className="space-y-8">
          <p className="text-xl leading-relaxed">
            Years of research and development have resulted in a product that sets new standards 
            in automotive care. Our proprietary PVA formula delivers consistent, reliable performance.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold">10x</span>
              </div>
              <h4 className="font-montserrat text-lg font-semibold text-orange-500">
                More Absorbent
              </h4>
              <p className="text-sm">
                Absorbs 10 times more water than traditional towels
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold">5+</span>
              </div>
              <h4 className="font-montserrat text-lg font-semibold text-orange-500">
                Years Lifespan
              </h4>
              <p className="text-sm">
                Durable construction ensures years of reliable use
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold">0</span>
              </div>
              <h4 className="font-montserrat text-lg font-semibold text-orange-500">
                Scratches Guaranteed
              </h4>
              <p className="text-sm">
                Completely safe on all automotive finishes
              </p>
            </div>
          </div>
        </div>
      </ContentSection>
      
      {/* About Section */}
      <ContentSection 
        id="about"
        title="Crafted for Excellence"
        subtitle="The Elite Choice"
        variant="primary"
      >
        <div className="space-y-8">
          <p className="text-xl leading-relaxed">
            The Absorber is more than a product—it&apos;s a statement. Designed for Porsche, Mercedes, 
            BMW owners and professional detailers who understand that excellence is not negotiable.
          </p>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mt-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-montserrat text-xl font-semibold text-orange-500 mb-4">
                  Premium Features
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Convenient storage tube included</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Handcrafted to perfection</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Limited edition availability</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Professional detailer approved</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-montserrat text-xl font-semibold text-orange-500 mb-4">
                  Perfect For
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Luxury vehicle owners</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Car enthusiasts</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Professional detailers</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Those who appreciate quality</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>
      
      {/* Contact Section */}
      <ContentSection 
        id="contact"
        title="Join The Elite"
        subtitle="Experience Perfection"
        variant="secondary"
      >
        <div className="space-y-8">
          <p className="text-xl leading-relaxed max-w-3xl mx-auto">
            Ready to elevate your automotive care routine? The Absorber is available exclusively 
            to those who appreciate the finest things in life. Limited quantities ensure exclusivity.
          </p>
          
          <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 backdrop-blur-sm border border-orange-500/20 rounded-2xl p-8 mt-12">
            <div className="text-center space-y-6">
              <h4 className="font-cormorant text-3xl font-semibold text-white">
                Ready to Experience Excellence?
              </h4>
              <p className="text-lg text-gray-300">
                Contact our specialists to secure your limited edition Absorber today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
                <a 
                  href="mailto:contact@theabsorber.com"
                  className="text-orange-500 hover:text-orange-400 font-montserrat font-medium tracking-wide transition-colors"
                >
                  contact@theabsorber.com
                </a>
                <span className="hidden sm:block text-gray-500">|</span>
                <a 
                  href="tel:+1-800-ABSORBER"
                  className="text-orange-500 hover:text-orange-400 font-montserrat font-medium tracking-wide transition-colors"
                >
                  1-800-ABSORBER
                </a>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>
    </main>
  );
}