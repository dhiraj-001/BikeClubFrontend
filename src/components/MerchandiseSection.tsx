import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Star, Users } from 'lucide-react';
import merchandiseHero from '@/assets/merchandise-hero.jpg';
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation';

const MerchandiseSection = () => {
  const products = [
    {
      id: 1,
      name: 'Steel Brothers Leather Jacket',
      price: 299.99,
      originalPrice: 349.99,
      image: merchandiseHero,
      category: 'Apparel',
      memberDiscount: 25,
      rating: 4.9,
      inStock: true,
      featured: true
    },
    {
      id: 2,
      name: 'Club Logo T-Shirt',
      price: 29.99,
      originalPrice: 39.99,
      image: merchandiseHero,
      category: 'Apparel',
      memberDiscount: 15,
      rating: 4.7,
      inStock: true,
      featured: false
    },
    {
      id: 3,
      name: 'Vintage Riding Gloves',
      price: 79.99,
      originalPrice: 99.99,
      image: merchandiseHero,
      category: 'Gear',
      memberDiscount: 20,
      rating: 4.8,
      inStock: true,
      featured: true
    },
    {
      id: 4,
      name: 'Chain Wallet',
      price: 49.99,
      originalPrice: 59.99,
      image: merchandiseHero,
      category: 'Accessories',
      memberDiscount: 15,
      rating: 4.6,
      inStock: false,
      featured: false
    },
    {
      id: 5,
      name: 'Club Bandana',
      price: 19.99,
      originalPrice: 24.99,
      image: merchandiseHero,
      category: 'Accessories',
      memberDiscount: 10,
      rating: 4.5,
      inStock: true,
      featured: false
    },
    {
      id: 6,
      name: 'Steel Brothers Keychain',
      price: 14.99,
      originalPrice: 19.99,
      image: merchandiseHero,
      category: 'Collectibles',
      memberDiscount: 10,
      rating: 4.4,
      inStock: true,
      featured: false
    }
  ];

  const categories = ['All', 'Apparel', 'Gear', 'Accessories', 'Collectibles'];

  const [headerRef, headerVisible] = useScrollAnimation();
  const productsRef = useStaggeredAnimation(150);
  const [ctaRef, ctaVisible] = useScrollAnimation();

  return (
    <section id="merchandise" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div ref={headerRef} className={`text-center mb-16 animate-on-scroll ${headerVisible ? 'animate' : ''}`}>
          <h2 className="text-4xl md:text-6xl font-header font-bold mb-4 text-vintage-gold">
            CLUB STORE
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Wear your colors with pride. Premium merchandise crafted for riders who live the steel brotherhood lifestyle.
          </p>

          {/* Member Benefits Banner */}
          <div className="inline-flex items-center space-x-3 bg-vintage-gold/20 backdrop-blur-sm border border-vintage-gold/30 rounded-full px-6 py-3">
            <Users className="text-vintage-gold" size={20} />
            <span className="text-vintage-gold font-semibold">Members get up to 25% OFF all merchandise</span>
          </div>
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

        {/* Product Grid */}
        <div ref={productsRef} className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {products.map((product) => (
            <Card key={product.id} className="vintage-card group hover:scale-105 transition-all duration-300 animate-on-scroll">
              <CardHeader className="p-0 relative overflow-hidden">
                {product.featured && (
                  <Badge className="absolute top-4 left-4 z-10 bg-vintage-gold text-oil-black font-bold">
                    FEATURED
                  </Badge>
                )}
                {!product.inStock && (
                  <Badge className="absolute top-4 right-4 z-10 bg-destructive text-destructive-foreground">
                    SOLD OUT
                  </Badge>
                )}
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-oil-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="mb-3">
                  <Badge variant="outline" className="text-xs text-vintage-gold border-vintage-gold/30">
                    {product.category}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-display font-bold text-foreground mb-2 group-hover:text-vintage-gold transition-colors">
                  {product.name}
                </h3>
                
                <div className="flex items-center space-x-2 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={i < Math.floor(product.rating) ? 'text-vintage-gold fill-current' : 'text-muted-foreground'}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">({product.rating})</span>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-vintage-gold">${product.price}</span>
                    {product.originalPrice > product.price && (
                      <span className="text-sm text-muted-foreground line-through ml-2">${product.originalPrice}</span>
                    )}
                  </div>
                  {product.memberDiscount > 0 && (
                    <Badge className="bg-copper/20 text-copper border-copper/30">
                      -{product.memberDiscount}% Member
                    </Badge>
                  )}
                </div>

                <Button 
                  className={`w-full ${product.inStock ? 'btn-vintage' : 'opacity-50 cursor-not-allowed'}`}
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="mr-2" size={16} />
                  {product.inStock ? 'Add to Cart' : 'Sold Out'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-display font-bold text-vintage-gold mb-4">
              WANT EXCLUSIVE ACCESS?
            </h3>
            <p className="text-muted-foreground mb-6">
              Become a club member to unlock special discounts, early access to new merchandise, and member-only collectibles.
            </p>
            <Button className="btn-vintage text-lg px-8 py-4">
              Join for Exclusive Benefits
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MerchandiseSection;