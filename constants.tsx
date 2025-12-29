
import { DesignProject, ServiceItem } from './types';

export const SERVICES: ServiceItem[] = [
  {
    icon: 'fa-share-nodes',
    title: 'Social Media Kits',
    description: 'Cohesive Instagram grids, stories, and LinkedIn templates that stop the scroll.',
    price: 'Starting at ₹12,000'
  },
  {
    icon: 'fa-chalkboard-user',
    title: 'Pitch Decks',
    description: 'Impactful presentations that secure funding and win clients.',
    price: 'Starting at ₹16,500'
  },
  {
    icon: 'fa-id-card',
    title: 'Brand Identity',
    description: 'Complete visual systems including logos, fonts, and custom Canva brand kits.',
    price: 'Starting at ₹25,000'
  },
  {
    icon: 'fa-rocket',
    title: 'Ad Campaigns',
    description: 'High-conversion static and animated graphics for Meta and Google ads.',
    price: 'Starting at ₹8,500'
  }
];

export const PROJECTS: DesignProject[] = [
  {
    id: 1,
    title: 'Aura Skincare Hub',
    category: 'Social Media',
    imageUrl: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=800',
    description: 'Minimalist Instagram aesthetic for a luxury wellness brand.'
  },
  {
    id: 2,
    title: 'Nebula AI Pitch',
    category: 'Presentations',
    imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800',
    description: 'Tech-forward deck design using custom gradient overlays.'
  },
  {
    id: 3,
    title: 'The Green Roastery',
    category: 'Branding',
    imageUrl: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80&w=800',
    description: 'Full identity suite for an artisanal eco-friendly cafe.'
  },
  {
    id: 4,
    title: 'Zenith Conference',
    category: 'Print',
    imageUrl: 'https://images.unsplash.com/photo-1540575861501-7ad060e39fe5?auto=format&fit=crop&q=80&w=800',
    description: 'Event banners, brochures, and digital badges.'
  },
  {
    id: 5,
    title: 'Bloom Cosmetics',
    category: 'Social Media',
    imageUrl: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800',
    description: 'Playful and vibrant campaign for a Gen-Z beauty startup.'
  },
  {
    id: 6,
    title: 'Global Nomad Guide',
    category: 'Branding',
    imageUrl: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800',
    description: 'Logo and visual language for a modern travel community.'
  }
];
