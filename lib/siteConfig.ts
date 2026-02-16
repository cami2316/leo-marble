/**
 * Centralized Site Configuration
 * 
 * This file contains all customizable settings for the template.
 * Change these values to adapt the site for different clients.
 */

export const siteConfig = {
  // Company Information
  companyName: 'Biaggio Flooring',
  niche: 'Flooring & Bathroom Remodeling',
  tagline: 'Premium Craftsmanship',
  
  // Contact Details
  phone: '321 4425003',
  phoneFormatted: '(321) 442-5003',
  whatsapp: '3214425003',
  email: 'biaggioflooringllc@gmail.com',
  
  // Location
  city: 'Orlando',
  state: 'Florida',
  region: 'Central Florida',
  serviceAreas: [
    'Orlando',
    'Lake Nona',
    'Winter Park',
    'Celebration',
    'Greater Central Florida'
  ],
  
  // Brand Colors (Tailwind CSS variables)
  primaryColor: 'brand-primary',
  secondaryColor: 'brand-accent',
  
  // Hero Section
  heroTitle: 'Premium Flooring & Bathroom Remodeling in Central Florida',
  heroSubtitle: 'Luxury flooring installation and bathroom remodeling in Central Florida. Trusted craftsmanship with over 15 years of experience.',
  
  // About Section
  yearsExperience: '15+',
  projectsCompleted: '500+',
  
  // Social Media
  instagram: {
    handle: '@biaggioflooring',
    url: 'https://www.instagram.com/biaggioflooring/'
  },
  
  // SEO
  siteUrl: 'https://biaggioflooring.com',
  defaultImage: '/images/hero/place_1.jpg',
  
  // Business Hours
  businessHours: 'Mon–Fri 8AM–6PM • Sat 9AM–4PM',
  
  // Core Services
  services: [
    {
      title: 'Flooring Installation',
      description: 'Hardwood, LVP, laminate, and tile installed with precision and long-lasting performance.',
      image: '/images/services/floor1.jpg',
      alt: 'Premium hardwood flooring installation',
    },
    {
      title: 'Bathroom Remodeling',
      description: 'Luxury showers, tile walls, and functional layouts designed for modern living.',
      image: '/images/services/bath.jpg',
      alt: 'Modern bathroom remodeling with custom tile',
    },
    {
      title: 'Custom Tile Work',
      description: 'Decorative accents, backsplashes, and statement feature walls that elevate your space.',
      image: '/images/services/bath04.jpg',
      alt: 'Custom tile installation with premium finish',
    }
  ],
  
  // Features/Values
  values: [
    {
      title: 'Precision Craftsmanship',
      description: 'Every layout, cut, and installation follows strict alignment and finish standards.'
    },
    {
      title: 'Client Relationships',
      description: 'We treat every home with respect, clear communication, and professional care.'
    },
    {
      title: 'Transparent Pricing',
      description: 'Detailed written estimates and honest guidance before any project begins.'
    }
  ],
  
  // Trust Stats
  stats: [
    { value: '15+', label: 'Years Experience' },
    { value: '500+', label: 'Completed Projects' },
    { value: 'Licensed', label: '& Insured' },
    { value: '5-Star', label: 'Customer Rating' }
  ]
}
