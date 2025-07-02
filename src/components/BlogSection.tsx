import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Heart, MessageCircle, Share2, Calendar, User } from 'lucide-react';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Brotherhood Code: What It Means to Ride Together',
      excerpt: 'Exploring the unwritten rules and bonds that make our motorcycle club a true family. From the road to life, we stand together.',
      author: {
        name: 'Marcus "Steel" Rodriguez',
        avatar: '/api/placeholder/64/64',
        role: 'Club President'
      },
      date: '2024-02-28',
      category: 'Brotherhood',
      image: '/api/placeholder/600/400',
      likes: 156,
      comments: 23,
      readTime: '5 min read',
      featured: true
    },
    {
      id: 2,
      title: 'Epic Ride: Cross-Country Adventure to Sturgis',
      excerpt: 'Our 2,000-mile journey to the legendary Sturgis Rally. Stories, challenges, and memories from the open road.',
      author: {
        name: 'Sarah "Phoenix" Chen',
        avatar: '/api/placeholder/64/64',
        role: 'Road Captain'
      },
      date: '2024-02-25',
      category: 'Adventure',
      image: '/api/placeholder/600/400',
      likes: 89,
      comments: 31,
      readTime: '8 min read',
      featured: true
    },
    {
      id: 3,
      title: 'Motorcycle Maintenance: Essential Tips for Long Rides',
      excerpt: 'Keep your steel horse running strong with these essential maintenance tips from our club mechanics.',
      author: {
        name: 'Tommy "Wrench" Johnson',
        avatar: '/api/placeholder/64/64',
        role: 'Club Mechanic'
      },
      date: '2024-02-22',
      category: 'Technical',
      image: '/api/placeholder/600/400',
      likes: 134,
      comments: 18,
      readTime: '6 min read',
      featured: false
    },
    {
      id: 4,
      title: 'Charity Ride Success: $50K Raised for Veterans',
      excerpt: 'Our latest charity ride exceeded all expectations. See how the Steel Brothers community came together for a great cause.',
      author: {
        name: 'Lisa "Rebel" Martinez',
        avatar: '/api/placeholder/64/64',
        role: 'Events Coordinator'
      },
      date: '2024-02-20',
      category: 'Community',
      image: '/api/placeholder/600/400',
      likes: 203,
      comments: 45,
      readTime: '4 min read',
      featured: true
    },
    {
      id: 5,
      title: 'New Member Spotlight: Jake "Thunder" Wilson',
      excerpt: 'Meet our newest prospect and learn about his journey from civilian to Steel Brother.',
      author: {
        name: 'Alex "Nomad" Thompson',
        avatar: '/api/placeholder/64/64',
        role: 'Member Relations'
      },
      date: '2024-02-18',
      category: 'Members',
      image: '/api/placeholder/600/400',
      likes: 76,
      comments: 12,
      readTime: '3 min read',
      featured: false
    },
    {
      id: 6,
      title: 'Safety First: Riding Gear That Could Save Your Life',
      excerpt: 'A comprehensive guide to protective gear every rider should own. Your safety is our priority.',
      author: {
        name: 'Dave "Guardian" Brown',
        avatar: '/api/placeholder/64/64',
        role: 'Safety Officer'
      },
      date: '2024-02-15',
      category: 'Safety',
      image: '/api/placeholder/600/400',
      likes: 167,
      comments: 29,
      readTime: '7 min read',
      featured: false
    }
  ];

  const categories = ['All', 'Brotherhood', 'Adventure', 'Technical', 'Community', 'Members', 'Safety'];

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-header font-bold mb-4 text-vintage-gold">
            RIDERS' STORIES
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Real stories from real riders. Share your adventures, wisdom, and experiences with the Steel Brothers community.
          </p>
          <Button className="btn-vintage">
            Write Your Story
          </Button>
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

        {/* Featured Posts */}
        <div className="mb-16">
          <h3 className="text-2xl font-display font-bold text-vintage-gold mb-8 text-center">Featured Stories</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {blogPosts.filter(post => post.featured).slice(0, 2).map((post) => (
              <Card key={post.id} className="vintage-card group hover:scale-105 transition-all duration-300">
                <CardHeader className="p-0 relative overflow-hidden">
                  <Badge className="absolute top-4 left-4 z-10 bg-vintage-gold text-oil-black font-bold">
                    FEATURED
                  </Badge>
                  <div className="aspect-video relative overflow-hidden bg-muted">
                    <div className="w-full h-full bg-gradient-to-br from-vintage-gold/20 to-copper/20 flex items-center justify-center">
                      <User className="text-vintage-gold" size={48} />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline" className="text-xs text-vintage-gold border-vintage-gold/30">
                      {post.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-vintage-gold transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center space-x-4 mb-4">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={post.author.avatar} alt={post.author.name} />
                      <AvatarFallback className="bg-vintage-gold text-oil-black font-bold">
                        {post.author.name.split(' ')[0][0]}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-sm">{post.author.name}</p>
                      <p className="text-xs text-muted-foreground">{post.author.role}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Calendar size={14} />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Heart size={14} />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle size={14} />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button className="btn-vintage flex-1">
                      Read Story
                    </Button>
                    <Button variant="outline" size="sm" className="p-2">
                      <Share2 size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Posts Grid */}
        <div>
          <h3 className="text-2xl font-display font-bold text-vintage-gold mb-8 text-center">Latest Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="vintage-card group hover:scale-105 transition-all duration-300">
                <CardHeader className="p-0 relative overflow-hidden">
                  <div className="aspect-video relative overflow-hidden bg-muted">
                    <div className="w-full h-full bg-gradient-to-br from-vintage-gold/20 to-copper/20 flex items-center justify-center">
                      <User className="text-vintage-gold" size={32} />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="text-xs text-vintage-gold border-vintage-gold/30">
                      {post.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-lg font-display font-bold text-foreground mb-2 group-hover:text-vintage-gold transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center space-x-3 mb-4">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={post.author.avatar} alt={post.author.name} />
                      <AvatarFallback className="bg-vintage-gold text-oil-black font-bold text-xs">
                        {post.author.name.split(' ')[0][0]}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-xs">{post.author.name}</p>
                      <p className="text-xs text-muted-foreground">{formatDate(post.date)}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Heart size={12} />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle size={12} />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                  </div>

                  <Button className="btn-vintage w-full">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Community Features */}
        <div className="mt-16 text-center">
          <Card className="vintage-card max-w-3xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-3xl font-display font-bold text-vintage-gold mb-4">
                JOIN THE CONVERSATION
              </h3>
              <p className="text-muted-foreground mb-6">
                Every member has a story worth telling. Share your adventures, lessons learned, and brotherhood moments with our community.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-vintage-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <User className="text-vintage-gold" size={24} />
                  </div>
                  <h4 className="font-display font-bold text-vintage-gold mb-2">Write Stories</h4>
                  <p className="text-sm text-muted-foreground">Share your riding experiences and adventures</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-vintage-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Heart className="text-vintage-gold" size={24} />
                  </div>
                  <h4 className="font-display font-bold text-vintage-gold mb-2">Like & Share</h4>
                  <p className="text-sm text-muted-foreground">Support fellow riders and spread great stories</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-vintage-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <MessageCircle className="text-vintage-gold" size={24} />
                  </div>
                  <h4 className="font-display font-bold text-vintage-gold mb-2">Comment</h4>
                  <p className="text-sm text-muted-foreground">Engage with the community and build connections</p>
                </div>
              </div>
              <Button className="btn-vintage text-lg px-8 py-4">
                Start Writing Your Story
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;