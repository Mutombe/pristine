// Properties data and utility functions

export const properties = [
  {
    id: '1',
    title: 'Luxury Villa in Borrowdale',
    description: 'Stunning 5-bedroom villa with modern amenities and beautiful garden. Located in the prestigious Borrowdale area with 24/7 security and easy access to shopping centers.',
    price: 850000,
    currency: 'USD',
    location: 'Borrowdale, Harare',
    area: 'Borrowdale',
    bedrooms: 5,
    bathrooms: 4,
    size: 450,
    type: 'house',
    status: 'for-sale',
    featured: true,
    images: [
      'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
      'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg'
    ],
    amenities: ['Swimming Pool', 'Garden', 'Garage', 'Security', 'Generator'],
    features: ['Modern Kitchen', 'Walk-in Closets', 'Ensuite Bathrooms', 'Fireplace', 'Study Room'],
    yearBuilt: 2020,
    parking: 3,
    agent: {
      name: 'Sarah Mukamuri',
      phone: '+263 77 123 4567',
      email: 'sarah@pristineproperties.co.zw',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg'
    }
  },
  {
    id: '2',
    title: 'Modern Apartment in Avondale',
    description: 'Contemporary 3-bedroom apartment with panoramic city views. Features include modern finishes, built-in wardrobes, and access to communal facilities.',
    price: 2500,
    currency: 'USD',
    location: 'Avondale, Harare',
    area: 'Avondale',
    bedrooms: 3,
    bathrooms: 2,
    size: 180,
    type: 'apartment',
    status: 'for-rent',
    featured: true,
    images: [
      'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg',
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
      'https://images.pexels.com/photos/2029731/pexels-photo-2029731.jpeg',
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg'
    ],
    amenities: ['Gym', 'Swimming Pool', 'Elevator', 'Security', 'Parking'],
    features: ['City Views', 'Modern Kitchen', 'Built-in Wardrobes', 'Balcony', 'Air Conditioning'],
    yearBuilt: 2019,
    parking: 2,
    agent: {
      name: 'David Chiweshe',
      phone: '+263 78 234 5678',
      email: 'david@pristineproperties.co.zw',
      image: 'https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg'
    }
  },
  {
    id: '3',
    title: 'Commercial Property in CBD',
    description: 'Prime commercial space in Harare CBD perfect for offices or retail. Ground floor location with excellent visibility and foot traffic.',
    price: 450000,
    currency: 'USD',
    location: 'CBD, Harare',
    area: 'CBD',
    bedrooms: 0,
    bathrooms: 2,
    size: 200,
    type: 'commercial',
    status: 'for-sale',
    featured: false,
    images: [
      'https://images.pexels.com/photos/2883049/pexels-photo-2883049.jpeg',
      'https://images.pexels.com/photos/2343466/pexels-photo-2343466.jpeg',
      'https://images.pexels.com/photos/2883049/pexels-photo-2883049.jpeg'
    ],
    amenities: ['Elevator', 'Security', 'Parking', 'Reception Area'],
    features: ['Prime Location', 'Ground Floor', 'High Visibility', 'Modern Finishes'],
    yearBuilt: 2018,
    parking: 5,
    agent: {
      name: 'Grace Sithole',
      phone: '+263 77 345 6789',
      email: 'grace@pristineproperties.co.zw',
      image: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg'
    }
  },
  {
    id: '4',
    title: 'Family Townhouse in Mount Pleasant',
    description: 'Beautiful 4-bedroom townhouse in a quiet residential area. Perfect for families with children, close to schools and shopping centers.',
    price: 580000,
    currency: 'USD',
    location: 'Mount Pleasant, Harare',
    area: 'Mount Pleasant',
    bedrooms: 4,
    bathrooms: 3,
    size: 320,
    type: 'townhouse',
    status: 'for-sale',
    featured: true,
    images: [
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
      'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
      'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg'
    ],
    amenities: ['Garden', 'Garage', 'Security', 'Playground'],
    features: ['Family Friendly', 'Quiet Area', 'Modern Kitchen', 'Patio', 'Storage Room'],
    yearBuilt: 2017,
    parking: 2,
    agent: {
      name: 'Michael Nyoni',
      phone: '+263 78 456 7890',
      email: 'michael@pristineproperties.co.zw',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg'
    }
  },
  {
    id: '5',
    title: 'Luxury Penthouse in Newlands',
    description: 'Exclusive penthouse with breathtaking views and premium finishes. Features include private elevator access, rooftop terrace, and smart home technology.',
    price: 1200000,
    currency: 'USD',
    location: 'Newlands, Harare',
    area: 'Newlands',
    bedrooms: 4,
    bathrooms: 4,
    size: 380,
    type: 'apartment',
    status: 'for-sale',
    featured: true,
    images: [
      'https://images.pexels.com/photos/2029731/pexels-photo-2029731.jpeg',
      'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg',
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg'
    ],
    amenities: ['Rooftop Terrace', 'Private Elevator', 'Concierge', 'Gym', 'Pool'],
    features: ['City Views', 'Smart Home', 'Premium Finishes', 'Wine Cellar', 'Home Theater'],
    yearBuilt: 2021,
    parking: 3,
    agent: {
      name: 'Patricia Moyo',
      phone: '+263 77 567 8901',
      email: 'patricia@pristineproperties.co.zw',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg'
    }
  },
  {
    id: '6',
    title: 'Cozy Cottage in Highlands',
    description: 'Charming 3-bedroom cottage with beautiful mountain views. Perfect retreat with large garden and traditional architecture.',
    price: 1800,
    currency: 'USD',
    location: 'Highlands, Harare',
    area: 'Highlands',
    bedrooms: 3,
    bathrooms: 2,
    size: 250,
    type: 'house',
    status: 'for-rent',
    featured: false,
    images: [
      'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg'
    ],
    amenities: ['Garden', 'Fireplace', 'Mountain Views', 'Parking'],
    features: ['Traditional Architecture', 'Large Garden', 'Cozy Interior', 'Quiet Location'],
    yearBuilt: 1995,
    parking: 2,
    agent: {
      name: 'James Banda',
      phone: '+263 78 678 9012',
      email: 'james@pristineproperties.co.zw',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg'
    }
  }
];

export const getPropertyById = (id) => {
  return properties.find(property => property.id === id);
};

export const getFeaturedProperties = () => {
  return properties.filter(property => property.featured);
};

export const getPropertiesByType = (type) => {
  return properties.filter(property => property.type === type);
};

export const getPropertiesByStatus = (status) => {
  return properties.filter(property => property.status === status);
};
