import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FiSearch, 
  FiHome, 
  FiTrendingUp, 
  FiShield, 
  FiUsers,
  FiAward,
  FiMapPin,
  FiPhone,
  FiArrowRight,
  FiStar
} from 'react-icons/fi';
import { HiLocationMarker } from 'react-icons/hi';
import { getFeaturedProperties } from '../data/data';
import PropertyCard from '../components/propertyCard';

const Home = () => {
  const featuredProperties = getFeaturedProperties();

  const stats = [
    { icon: FiHome, number: '500+', label: 'Properties Listed' },
    { icon: FiUsers, number: '1200+', label: 'Happy Clients' },
    { icon: FiAward, number: '15+', label: 'Years Experience' },
    { icon: FiTrendingUp, number: '98%', label: 'Success Rate' },
  ];

  const services = [
    {
      icon: FiHome,
      title: 'Property Sales',
      description: 'Expert guidance through the entire buying process with comprehensive market analysis.',
      features: ['Market Analysis', 'Property Valuation', 'Legal Support', 'Financing Assistance']
    },
    {
      icon: FiMapPin,
      title: 'Property Rentals',
      description: 'Find the perfect rental property or manage your investment properties professionally.',
      features: ['Tenant Screening', 'Rent Collection', 'Property Maintenance', 'Market Insights']
    },
    {
      icon: FiShield,
      title: 'Property Management',
      description: 'Comprehensive property management services to maximize your investment returns.',
      features: ['24/7 Support', 'Maintenance Services', 'Financial Reporting', 'Tenant Relations']
    },
    {
      icon: FiTrendingUp,
      title: 'Investment Advisory',
      description: 'Strategic investment advice to help you make informed real estate decisions.',
      features: ['Market Research', 'ROI Analysis', 'Portfolio Planning', 'Risk Assessment']
    },
  ];

  const testimonials = [
    {
      name: 'Tendai Mukamuri',
      role: 'Property Investor',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      rating: 5,
      text: 'Pristine Properties helped me find the perfect investment property in Borrowdale. Their market knowledge and professional service exceeded my expectations.'
    },
    {
      name: 'Sharon Ndoro',
      role: 'First-time Buyer',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      rating: 5,
      text: 'As a first-time buyer, I was nervous about the process. The team at Pristine Properties guided me every step of the way and found me my dream home.'
    },
    {
      name: 'Robert Chivanga',
      role: 'Commercial Client',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg',
      rating: 5,
      text: 'Excellent service for commercial properties. They found us the perfect office space in the CBD with terms that worked for our business.'
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800 text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg"
            alt="Hero Background"
            className="w-full h-full object-cover mix-blend-overlay opacity-30"
          />
        </div>
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Find Your Perfect
                <span className="block text-amber-300">Property in Zimbabwe</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-emerald-100 leading-relaxed">
                Discover premium real estate opportunities across Harare, Bulawayo, and beyond. 
                Your dream property awaits with Zimbabwe's most trusted real estate experts.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  to="/properties"
                  className="bg-amber-500 hover:bg-amber-600 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
                >
                  <FiSearch className="mr-2" />
                  Browse Properties
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-emerald-800 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
                >
                  <FiPhone className="mr-2" />
                  Get Consultation
                </Link>
              </div>
            </motion.div>

            {/* Quick Search */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Property Type</label>
                  <select className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/70">
                    <option value="">All Types</option>
                    <option value="house">Houses</option>
                    <option value="apartment">Apartments</option>
                    <option value="commercial">Commercial</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Location</label>
                  <select className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/70">
                    <option value="">All Areas</option>
                    <option value="borrowdale">Borrowdale</option>
                    <option value="avondale">Avondale</option>
                    <option value="newlands">Newlands</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Price Range</label>
                  <select className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/70">
                    <option value="">Any Price</option>
                    <option value="0-500000">$0 - $500K</option>
                    <option value="500000-1000000">$500K - $1M</option>
                    <option value="1000000+">$1M+</option>
                  </select>
                </div>
                <div className="flex items-end">
                  <Link
                    to="/properties"
                    className="w-full bg-amber-500 hover:bg-amber-600 text-black px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
                  >
                    <FiSearch className="mr-2" />
                    Search
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold mb-2">{stat.number}</h3>
                <p className="text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Properties</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our handpicked selection of premium properties across Zimbabwe's most desirable locations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProperties.map((property, index) => (
              <PropertyCard key={property.id} property={property} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Link
              to="/properties"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 inline-flex items-center"
            >
              View All Properties
              <FiArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive real estate solutions tailored to meet all your property needs in Zimbabwe
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="bg-emerald-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-200 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real experiences from satisfied clients who found their perfect properties with us
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FiStar key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Find Your Dream Property?</h2>
            <p className="text-xl mb-8 text-emerald-100 max-w-2xl mx-auto">
              Let our experienced team help you navigate Zimbabwe's real estate market and find the perfect property for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
              >
                <FiPhone className="mr-2" />
                Schedule Consultation
              </Link>
              <Link
                to="/properties"
                className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
              >
                <FiSearch className="mr-2" />
                Browse Properties
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;