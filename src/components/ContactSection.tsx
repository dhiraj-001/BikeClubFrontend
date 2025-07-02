import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MapPin, Phone, Mail, Clock, Users, MessageCircle } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submission:', formData);
  };

  const clubOfficers = [
    {
      name: 'Marcus "Steel" Rodriguez',
      role: 'Club President',
      avatar: '/api/placeholder/80/80',
      email: 'president@steelbrothersmc.com',
      phone: '(555) 123-4567',
      bio: '25 years riding experience, leading Steel Brothers since 2018'
    },
    {
      name: 'Sarah "Phoenix" Chen',
      role: 'Road Captain',
      avatar: '/api/placeholder/80/80',
      email: 'roadcaptain@steelbrothersmc.com',
      phone: '(555) 234-5678',
      bio: 'Expert navigator and safety coordinator for all club rides'
    },
    {
      name: 'Tommy "Wrench" Johnson',
      role: 'Club Mechanic',
      avatar: '/api/placeholder/80/80',
      email: 'mechanic@steelbrothersmc.com',
      phone: '(555) 345-6789',
      bio: 'ASE certified mechanic specializing in Harley Davidson'
    },
    {
      name: 'Lisa "Rebel" Martinez',
      role: 'Events Coordinator',
      avatar: '/api/placeholder/80/80',
      email: 'events@steelbrothersmc.com',
      phone: '(555) 456-7890',
      bio: 'Organizing unforgettable experiences and charity events'
    }
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Clubhouse Location',
      details: '1247 Steel Road\nRiver City, RC 12345',
      action: 'Get Directions'
    },
    {
      icon: Phone,
      title: 'Phone Number',
      details: '(555) 123-RIDE\n(555) 123-7433',
      action: 'Call Now'
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: 'info@steelbrothersmc.com\nsupport@steelbrothersmc.com',
      action: 'Send Email'
    },
    {
      icon: Clock,
      title: 'Operating Hours',
      details: 'Mon-Fri: 6:00 PM - 10:00 PM\nWeekends: 10:00 AM - 10:00 PM',
      action: 'View Schedule'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 text-vintage-gold">
            GET IN TOUCH
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about joining? Want to learn more about our rides? Ready to become part of the Steel Brothers family? We're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <Card className="vintage-card">
            <CardHeader>
              <CardTitle className="text-2xl font-display text-vintage-gold">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-foreground font-semibold">Your Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="mt-1 bg-input border-border text-foreground"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-foreground font-semibold">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-1 bg-input border-border text-foreground"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject" className="text-foreground font-semibold">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="mt-1 bg-input border-border text-foreground"
                    placeholder="What's this about?"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-foreground font-semibold">Your Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="mt-1 bg-input border-border text-foreground min-h-[150px]"
                    placeholder="Tell us what's on your mind..."
                    required
                  />
                </div>

                <Button type="submit" className="btn-vintage w-full text-lg py-4">
                  <MessageCircle className="mr-2" size={20} />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="vintage-card">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-vintage-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon className="text-vintage-gold" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display font-bold text-vintage-gold mb-2">{info.title}</h3>
                      <p className="text-muted-foreground whitespace-pre-line mb-3">{info.details}</p>
                      <Button variant="outline" className="btn-chrome">
                        {info.action}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Club Officers */}
        <div>
          <h3 className="text-3xl font-display font-bold text-vintage-gold mb-8 text-center">
            CLUB LEADERSHIP
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clubOfficers.map((officer, index) => (
              <Card key={index} className="vintage-card text-center">
                <CardContent className="p-6">
                  <Avatar className="w-20 h-20 mx-auto mb-4 border-2 border-vintage-gold">
                    <AvatarImage src={officer.avatar} alt={officer.name} />
                    <AvatarFallback className="bg-vintage-gold text-oil-black font-bold text-lg">
                      {officer.name.split(' ')[0][0]}
                    </AvatarFallback>
                  </Avatar>
                  
                  <h4 className="font-display font-bold text-foreground mb-1">{officer.name}</h4>
                  <p className="text-vintage-gold font-semibold text-sm mb-3">{officer.role}</p>
                  <p className="text-xs text-muted-foreground mb-4">{officer.bio}</p>
                  
                  <div className="space-y-2">
                    <a 
                      href={`mailto:${officer.email}`}
                      className="flex items-center justify-center space-x-2 text-xs text-muted-foreground hover:text-vintage-gold transition-colors"
                    >
                      <Mail size={12} />
                      <span className="truncate">{officer.email}</span>
                    </a>
                    <a 
                      href={`tel:${officer.phone}`}
                      className="flex items-center justify-center space-x-2 text-xs text-muted-foreground hover:text-vintage-gold transition-colors"
                    >
                      <Phone size={12} />
                      <span>{officer.phone}</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Social Media & Additional Info */}
        <div className="mt-16 text-center">
          <Card className="vintage-card max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-display font-bold text-vintage-gold mb-4">
                FOLLOW OUR JOURNEY
              </h3>
              <p className="text-muted-foreground mb-6">
                Stay connected with Steel Brothers MC on social media for the latest rides, events, and brotherhood moments.
              </p>
              <div className="flex justify-center space-x-6 mb-6">
                <Button variant="outline" className="btn-chrome">
                  YouTube
                </Button>
                <Button variant="outline" className="btn-chrome">
                  Instagram
                </Button>
                <Button variant="outline" className="btn-chrome">
                  Facebook
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div className="flex items-center justify-center space-x-2">
                  <Users size={16} />
                  <span>500+ Active Members</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <MapPin size={16} />
                  <span>5 Chapters Nationwide</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;