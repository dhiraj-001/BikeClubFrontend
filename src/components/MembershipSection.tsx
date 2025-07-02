import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Check, Crown, Shield, Star } from 'lucide-react';
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation';

const MembershipSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    motorcycleModel: '',
    bio: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Membership application:', formData);
  };

  const membershipTiers = [
    {
      name: 'Prospect',
      price: 'Free',
      icon: Shield,
      description: 'Start your journey with us',
      features: [
        'Access to public events',
        'Newsletter subscription',
        'Community forum access',
        'Basic merchandise discount (5%)'
      ],
      color: 'bg-secondary'
    },
    {
      name: 'Member',
      price: '$50/month',
      icon: Star,
      description: 'Full brotherhood membership',
      features: [
        'All Prospect benefits',
        'Exclusive member events',
        'Advanced merchandise discount (15%)',
        'Member profile page',
        'Voting rights',
        'Club patches and gear'
      ],
      color: 'bg-vintage-gold/20',
      popular: true
    },
    {
      name: 'VIP Rider',
      price: '$100/month',
      icon: Crown,
      description: 'Elite membership with premium perks',
      features: [
        'All Member benefits',
        'VIP event access',
        'Premium merchandise discount (25%)',
        'Priority support',
        'Custom bike features',
        'Leadership opportunities',
        'Exclusive VIP merchandise'
      ],
      color: 'bg-copper/20'
    }
  ];

  const [headerRef, headerVisible] = useScrollAnimation();
  const tiersRef = useStaggeredAnimation(200);
  const [formRef, formVisible] = useScrollAnimation();

  return (
    <section id="membership" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div ref={headerRef} className={`text-center mb-16 animate-on-scroll ${headerVisible ? 'animate' : ''}`}>
          <h2 className="text-4xl md:text-6xl font-header font-bold mb-4 text-vintage-gold">
            JOIN THE BROTHERHOOD
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Become part of a legendary community where riders unite, adventures begin, and lifelong bonds are forged on the open road.
          </p>
        </div>

        {/* Membership Tiers */}
        <div ref={tiersRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {membershipTiers.map((tier, index) => (
            <Card
              key={tier.name}
              className={`vintage-card ${tier.color} border-2 relative animate-on-scroll ${tier.popular ? 'border-vintage-gold scale-105 overflow-visible' : 'border-border'}`}
            >
              {tier.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-vintage-gold text-oil-black font-bold">
                  MOST POPULAR
                </Badge>
              )}
              <CardHeader className="text-center pb-4">
                <tier.icon className="mx-auto mb-4 text-vintage-gold" size={48} />
                <CardTitle className="text-2xl font-display text-vintage-gold">{tier.name}</CardTitle>
                <CardDescription className="text-muted-foreground">{tier.description}</CardDescription>
                <div className="text-3xl font-display font-bold text-foreground mt-2">{tier.price}</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <Check className="text-vintage-gold mt-0.5 flex-shrink-0" size={16} />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className={`w-full ${tier.popular ? 'btn-vintage' : 'btn-chrome'}`}>
                  {tier.name === 'Prospect' ? 'Apply Now' : 'Subscribe Now'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Application Form */}
        <div ref={formRef} className={`max-w-2xl mx-auto animate-scale ${formVisible ? 'animate' : ''}`}>
          <Card className="vintage-card">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-display text-vintage-gold">MEMBERSHIP APPLICATION</CardTitle>
              <CardDescription className="text-muted-foreground">
                Fill out the form below to start your journey with Steel Brothers MC
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-foreground font-semibold">Full Name</Label>
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone" className="text-foreground font-semibold">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-1 bg-input border-border text-foreground"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="motorcycleModel" className="text-foreground font-semibold">Motorcycle Model</Label>
                    <Input
                      id="motorcycleModel"
                      name="motorcycleModel"
                      value={formData.motorcycleModel}
                      onChange={handleInputChange}
                      className="mt-1 bg-input border-border text-foreground"
                      placeholder="e.g., Harley Davidson Street Glide"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="address" className="text-foreground font-semibold">Address</Label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="mt-1 bg-input border-border text-foreground"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="bio" className="text-foreground font-semibold">Tell Us About Yourself</Label>
                  <Textarea
                    id="bio"
                    name="bio"
                    value={formData.bio}
                    onChange={handleInputChange}
                    className="mt-1 bg-input border-border text-foreground min-h-[120px]"
                    placeholder="Share your riding experience, why you want to join, and what brotherhood means to you..."
                    required
                  />
                </div>

                <Button type="submit" className="btn-vintage w-full text-lg py-4">
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;