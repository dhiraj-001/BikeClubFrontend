import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin } from 'lucide-react';
import clubLogo from '@/assets/club-logo.png';

const Footer = () => {
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Membership', href: '#membership' },
    { label: 'Events', href: '#events' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { label: 'YouTube', href: '#' },
    { label: 'Instagram', href: '#' },
    { label: 'Facebook', href: '#' }
  ];

  return (
    <footer className="bg-oil-black border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Club Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img src={clubLogo} alt="Steel Brothers MC" className="h-12 w-12" />
              <div>
                <h3 className="text-xl font-display font-bold text-vintage-gold">STEEL BROTHERS</h3>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Motorcycle Club</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              Brotherhood forged in steel. Adventure written on the road. Join us in the ride of a lifetime.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin size={16} />
                <span>1247 Steel Road, River City, RC 12345</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone size={16} />
                <span>(555) 123-RIDE</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail size={16} />
                <span>info@steelbrothersmc.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-vintage-gold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-vintage-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-display font-bold text-vintage-gold mb-4">Follow Us</h4>
            <ul className="space-y-2 mb-4">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-vintage-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground">
              Stay updated with our latest rides, events, and brotherhood moments.
            </p>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display font-bold text-vintage-gold mb-4">Stay Connected</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Get the latest updates on rides, events, and club news delivered straight to your inbox.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 bg-input border border-border rounded text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-vintage-gold"
              />
              <Button className="btn-vintage w-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-muted-foreground mb-4 md:mb-0">
              © 2024 Steel Brothers Motorcycle Club. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-vintage-gold transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-vintage-gold transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-vintage-gold transition-colors">
                Code of Conduct
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;