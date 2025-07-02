import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail } from 'lucide-react';
import clubLogo from '@/assets/club-logo.png';
import { motion, AnimatePresence } from 'framer-motion';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Membership', href: '#membership' },
    { label: 'Merchandise', href: '#merchandise' },
    { label: 'Events', href: '#events' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info */}
        <div className="hidden md:flex justify-end items-center py-2 text-sm text-muted-foreground border-b border-border/30">
          <div className="flex items-center space-x-6">
            <a href="tel:+1234567890" className="flex items-center space-x-2 hover:text-vintage-gold transition-colors">
              <Phone size={14} />
              <span>(123) 456-7890</span>
            </a>
            <a href="mailto:info@steelbrothersmc.com" className="flex items-center space-x-2 hover:text-vintage-gold transition-colors">
              <Mail size={14} />
              <span>info@steelbrothersmc.com</span>
            </a>
          </div>
        </div>

        {/* Main navigation */}
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={clubLogo} alt="Steel Brothers MC" className="h-12 w-12" />
            <div className="hidden sm:block">
              <h1 className="text-xl font-display font-bold text-vintage-gold">STEEL BROTHERS</h1>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Motorcycle Club</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-vintage-gold transition-colors font-medium uppercase tracking-wide text-sm"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button className="btn-vintage">
              Join the Club
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-vintage-gold transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="lg:hidden absolute top-full left-0 right-0 bg-card border-b border-border shadow-vintage"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block text-foreground hover:text-vintage-gold transition-colors font-medium uppercase tracking-wide"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <div className="pt-4 border-t border-border/30">
                  <Button className="btn-vintage slow-glow w-full">
                    Join the Club
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;