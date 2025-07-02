import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';
import heroImage from '@/assets/hero-motorcycle.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Vintage Motorcycle" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
        <div className="absolute inset-0 texture-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-vintage-gold/20 backdrop-blur-sm border border-vintage-gold/30 rounded-full px-6 py-2 mb-8 fade-in-up">
            <Star className="text-vintage-gold" size={16} />
            <span className="text-vintage-gold font-semibold uppercase tracking-wider text-sm">Established 1969</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-header font-bold mb-6 fade-in-up text-glow">
            <span className="block text-vintage-gold">RIDE HARD</span>
            <span className="block text-foreground">LIVE FREE</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-foreground mb-8 max-w-2xl mx-auto fade-in-up leading-relaxed">
            Join the brotherhood of steel, chrome, and freedom. Where legends are born on two wheels.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 fade-in-up">
            <Button className="btn-vintage text-lg px-8 py-4">
              Join the Brotherhood
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button variant="outline" className="btn-chrome text-lg px-8 py-4">
              Watch Our Story
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto fade-in-up">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-vintage-gold mb-2">500+</div>
              <div className="text-foreground uppercase tracking-wider text-sm">Members Strong</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-vintage-gold mb-2">50+</div>
              <div className="text-foreground uppercase tracking-wider text-sm">Years of Brotherhood</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-vintage-gold mb-2">1000+</div>
              <div className="text-foreground uppercase tracking-wider text-sm">Miles Conquered</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-vintage-gold animate-bounce">
        <div className="w-6 h-10 border-2 border-vintage-gold rounded-full flex justify-center">
          <div className="w-1 h-3 bg-vintage-gold rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;