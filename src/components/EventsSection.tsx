import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Clock, Users, Ticket } from 'lucide-react';
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation';

const EventsSection = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      id: 1,
      title: 'Annual Thunder Rally',
      date: '2024-07-15',
      time: '09:00 AM',
      location: 'Sturgis, South Dakota',
      description: 'Join hundreds of riders for our biggest event of the year. Three days of rides, music, and brotherhood.',
      image: '/api/placeholder/400/300',
      price: 75,
      capacity: 500,
      registered: 387,
      category: 'Rally',
      featured: true,
      whatsappGroup: true
    },
    {
      id: 2,
      title: 'Monthly Chapter Meet',
      date: '2024-03-20',
      time: '07:00 PM',
      location: 'Steel Brothers Clubhouse',
      description: 'Regular monthly meeting for all members. Discuss upcoming rides and club business.',
      image: '/api/placeholder/400/300',
      price: 0,
      capacity: 100,
      registered: 65,
      category: 'Meeting',
      featured: false,
      whatsappGroup: true
    },
    {
      id: 3,
      title: 'Charity Ride for Veterans',
      date: '2024-04-10',
      time: '08:00 AM',
      location: 'Memorial Park',
      description: 'Supporting our veterans with a scenic ride through the mountains. All proceeds go to veteran support.',
      image: '/api/placeholder/400/300',
      price: 25,
      capacity: 200,
      registered: 156,
      category: 'Charity',
      featured: true,
      whatsappGroup: true
    },
    {
      id: 4,
      title: 'Steel Brothers BBQ',
      date: '2024-05-25',
      time: '02:00 PM',
      location: 'Riverside Park',
      description: 'Family-friendly BBQ event with live music, games, and great food. Bring the whole family!',
      image: '/api/placeholder/400/300',
      price: 15,
      capacity: 300,
      registered: 245,
      category: 'Social',
      featured: false,
      whatsappGroup: false
    },
    {
      id: 5,
      title: 'Night Ride & Campout',
      date: '2024-06-08',
      time: '06:00 PM',
      location: 'Blue Ridge Mountains',
      description: 'Evening ride through scenic mountain roads followed by camping under the stars.',
      image: '/api/placeholder/400/300',
      price: 35,
      capacity: 50,
      registered: 42,
      category: 'Adventure',
      featured: true,
      whatsappGroup: true
    },
    {
      id: 6,
      title: 'Bike Show & Competition',
      date: '2024-08-12',
      time: '10:00 AM',
      location: 'Downtown Convention Center',
      description: 'Show off your ride and compete for best in show. Categories for every type of bike.',
      image: '/api/placeholder/400/300',
      price: 20,
      capacity: 150,
      registered: 89,
      category: 'Competition',
      featured: false,
      whatsappGroup: false
    }
  ];

  const categories = ['All', 'Rally', 'Meeting', 'Charity', 'Social', 'Adventure', 'Competition'];

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getEventStatus = (event) => {
    const availableSpots = event.capacity - event.registered;
    if (availableSpots === 0) return { status: 'sold-out', text: 'SOLD OUT', color: 'bg-destructive' };
    if (availableSpots <= 10) return { status: 'limited', text: 'LIMITED SPOTS', color: 'bg-rust' };
    return { status: 'available', text: 'AVAILABLE', color: 'bg-vintage-gold' };
  };

  const [headerRef, headerVisible] = useScrollAnimation();
  const eventsRef = useStaggeredAnimation(150);

  return (
    <section id="events" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div ref={headerRef} className={`text-center mb-16 animate-on-scroll ${headerVisible ? 'animate' : ''}`}>
          <h2 className="text-4xl md:text-6xl font-header font-bold mb-4 text-vintage-gold">
            UPCOMING EVENTS
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join us for thrilling rides, meaningful gatherings, and unforgettable experiences that strengthen our brotherhood.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === 'All' ? 'default' : 'outline'}
              className={category === 'All' ? 'btn-vintage' : 'btn-chrome'}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Events Grid */}
        <div ref={eventsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => {
            const eventStatus = getEventStatus(event);
            
            return (
              <Card key={event.id} className="vintage-card group hover:scale-105 transition-all duration-300 animate-on-scroll">
                <CardHeader className="p-0 relative overflow-hidden">
                  {event.featured && (
                    <Badge className="absolute top-4 left-4 z-10 bg-vintage-gold text-oil-black font-bold">
                      FEATURED
                    </Badge>
                  )}
                  <Badge className={`absolute top-4 right-4 z-10 ${eventStatus.color} text-white font-bold`}>
                    {eventStatus.text}
                  </Badge>
                  <div className="aspect-video relative overflow-hidden bg-muted">
                    <div className="w-full h-full bg-gradient-to-br from-vintage-gold/20 to-copper/20 flex items-center justify-center">
                      <Calendar className="text-vintage-gold" size={48} />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="mb-3">
                    <Badge variant="outline" className="text-xs text-vintage-gold border-vintage-gold/30">
                      {event.category}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-vintage-gold transition-colors">
                    {event.title}
                  </CardTitle>
                  
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {event.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-sm">
                      <Calendar className="text-vintage-gold" size={16} />
                      <span>{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Clock className="text-vintage-gold" size={16} />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <MapPin className="text-vintage-gold" size={16} />
                      <span className="truncate">{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Users className="text-vintage-gold" size={16} />
                      <span>{event.registered}/{event.capacity} registered</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      {event.price === 0 ? (
                        <span className="text-2xl font-bold text-vintage-gold">FREE</span>
                      ) : (
                        <span className="text-2xl font-bold text-vintage-gold">${event.price}</span>
                      )}
                    </div>
                    {event.whatsappGroup && (
                      <Badge className="bg-green-600/20 text-green-400 border-green-600/30">
                        WhatsApp Group
                      </Badge>
                    )}
                  </div>

                  <Button 
                    className={`w-full ${eventStatus.status === 'sold-out' ? 'opacity-50 cursor-not-allowed' : 'btn-vintage'}`}
                    disabled={eventStatus.status === 'sold-out'}
                  >
                    <Ticket className="mr-2" size={16} />
                    {eventStatus.status === 'sold-out' ? 'Sold Out' : 'Book Now'}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* WhatsApp Integration Info */}
        <div className="mt-16 text-center">
          <Card className="vintage-card max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">W</span>
                </div>
              </div>
              <h3 className="text-2xl font-display font-bold text-vintage-gold mb-4">
                WhatsApp Event Updates
              </h3>
              <p className="text-muted-foreground mb-6">
                When you book an event, you'll receive instant confirmation and can join our WhatsApp group for real-time updates, 
                directions, and connect with other attendees.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-vintage-gold rounded-full"></div>
                  <span>Instant booking confirmation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-vintage-gold rounded-full"></div>
                  <span>QR code for event entry</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-vintage-gold rounded-full"></div>
                  <span>Real-time event updates</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-vintage-gold rounded-full"></div>
                  <span>Connect with attendees</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;