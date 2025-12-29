
import { DesignProject, ServiceItem } from './types';

export const TAGLINE = "Design | Branding | Digital Marketing";

export const SERVICES: ServiceItem[] = [
  {
    icon: 'fa-pen-nib',
    title: 'Brand Logos',
    description: 'Unique, memorable visual identities that capture your brand essence.',
    price: 'Starting at ₹5,000'
  },
  {
    icon: 'fa-scroll',
    title: 'Posters & Flyers',
    description: 'High-impact promotional materials for events and marketing campaigns.',
    price: 'Starting at ₹2,500'
  },
  {
    icon: 'fa-book-open',
    title: 'Catalogues & Menus',
    description: 'Beautifully organized product layouts and restaurant menu designs.',
    price: 'Starting at ₹8,000'
  },
  {
    icon: 'fa-address-card',
    title: 'Business Cards',
    description: 'Professional networking tools that leave a lasting impression.',
    price: 'Starting at ₹1,500'
  },
  {
    icon: 'fa-envelope-open-text',
    title: 'Invitations',
    description: 'Custom digital and print invites for weddings, corporate events, and parties.',
    price: 'Starting at ₹3,000'
  },
  {
    icon: 'fa-tag',
    title: 'Tags & Labels',
    description: 'Branded packaging elements like thank you cards, product tags, and labels.',
    price: 'Starting at ₹2,000'
  },
  {
    icon: 'fa-rectangle-ad',
    title: 'Advertisements',
    description: 'Optimized creative assets for social media and digital ad platforms.',
    price: 'Starting at ₹4,500'
  },
  {
    icon: 'fa-calendar-star',
    title: 'Festive Creatives',
    description: 'Vibrant, culturally rich designs for holiday greetings and seasonal sales.',
    price: 'Starting at ₹2,500'
  }
];

export const PROJECTS: DesignProject[] = [
  {
    id: 1,
    title: 'Ethereal Logo Suite',
    category: 'Logos',
    imageUrl: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800',
    description: 'Modern minimalist logo system for a premium jewelry brand.'
  },
  {
    id: 2,
    title: 'Spice Route Menu',
    category: 'Menus',
    imageUrl: 'https://images.unsplash.com/photo-1546750248-a7d616946835?auto=format&fit=crop&q=80&w=800',
    description: 'Multi-page illustrated menu for an authentic Indian fusion restaurant.'
  },
  {
    id: 3,
    title: 'Diwali Festive Kit',
    category: 'Festive',
    imageUrl: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800',
    description: 'Comprehensive social and print package for Diwali celebrations.'
  },
  {
    id: 4,
    title: 'Nova Tech Catalog',
    category: 'Catalogues',
    imageUrl: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=800',
    description: 'Clean, futuristic product catalog for a high-end electronics retailer.'
  },
  {
    id: 5,
    title: 'Blossom Wedding Set',
    category: 'Invitations',
    imageUrl: 'https://images.unsplash.com/photo-1607192233390-dc0f5d4750f7?auto=format&fit=crop&q=80&w=800',
    description: 'Floral-themed invitation suite including save-the-dates and RSVP cards.'
  },
  {
    id: 6,
    title: 'Eco-Craft Labels',
    category: 'Labels',
    imageUrl: 'https://images.unsplash.com/photo-1605342432064-0738e40409c9?auto=format&fit=crop&q=80&w=800',
    description: 'Sustainable product packaging and thank you cards for a handmade soap brand.'
  }
];
