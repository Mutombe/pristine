import React from 'react';
import { motion } from 'framer-motion';
import {
  FiUsers,
  FiAward,
  FiTrendingUp,
  FiHome,
  FiMapPin,
  FiPhone,
  FiMail,
  FiLinkedin,
  FiStar,
  FiShield,
  FiHeart
} from 'react-icons/fi';

const About = () => {
  const stats = [
    { icon: FiHome, number: '500+', label: 'Properties Sold' },
    { icon: FiUsers, number: '1200+', label: 'Happy Clients' },
    { icon: FiAward, number: '15+', label: 'Years Experience' },
    { icon: FiTrendingUp, number: '98%', label: 'Success Rate' },
  ];

  const values = [
    {
      icon: FiShield,
      title: 'Trust & Integrity',
      description: 'We build lasting relationships based on honesty, transparency, and ethical practices in every transaction.'
    },
    {
      icon: FiStar,
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of our service, from initial consultation to final closing.'
    },
    {
      icon: FiHeart,
      title: 'Client-Centered',
      description: 'Your needs and satisfaction are our top priority. We listen, understand, and deliver personalized solutions.'
    },
    {
      icon: FiUsers,
      title: 'Professional Expertise',
      description: 'Our experienced team brings deep market knowledge and professional skills to every property transaction.'
    }
  ];

  const team = [
    {
      name: 'Sarah Mukamuri',
      role: 'Managing Director',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      description: 'With over 15 years in Zimbabwe\'s real estate market, Sarah leads our team with vision and expertise.',
      phone: '+263 77 123 4567',
      email: 'sarah@pristineproperties.co.zw',
      linkedin: '#'
    },
    {
      name: 'David Chiweshe',
      role: 'Sales Director',
      image: 'https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg',
      description: 'David specializes in luxury properties and commercial real estate across Harare and surrounding areas.',
      phone: '+263 78 234 5678',
      email: 'david@pristineproperties.co.zw',
      linkedin: '#'
    },
    {
      name: 'Grace Sithole',
      role: 'Property Manager',
      image: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg',
      description: 'Grace oversees our property management division, ensuring maximum returns for our investors.',
      phone: '+263 77 345 6789',
      email: 'grace@pristineproperties.co.zw',
      linkedin: '#'
    },
    {
      name: 'Michael Nyoni',
      role: 'Investment Advisor',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg',
      description: 'Michael provides strategic investment advice to help clients make informed real estate decisions.',
      phone: '+263 78 456 7890',
      email: 'michael@pristineproperties.co.zw',
      linkedin: '#'
    }
  ];

  const timeline = [
    {
      year: '2008',
      title: 'Company Founded',
      description: 'Pristine Properties was established with a vision to transform Zimbabwe\'s real estate landscape.'
    },
    {
      year: '2012',
      title: 'Market Expansion',
      description: 'Expanded operations to Bulawayo and Mutare, serving clients across multiple cities.'
    },
    {
      year: '2016',
      title: 'Commercial Division',
      description: 'Launched dedicated commercial real estate division to serve business clients.'
    },
    {
      year: '2020',
      title: 'Digital Innovation',
      description: 'Implemented cutting-edge technology and digital platforms to enhance client experience.'
    },
    {
      year: '2024',
      title: 'Market Leader',
      description: 'Recognized as Zimbabwe\'s leading real estate company with over 1000+ successful transactions.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg"
            alt="About Us Background"
            className="w-full h-full object-cover mix-blend-overlay opacity-30"
          />
        </div>
        
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Pristine Properties</h1>
            <p className="text-xl md:text-2xl mb-8 text-emerald-100 leading-relaxed">
              Zimbabwe's trusted real estate partner for over 15 years. We turn property dreams into reality 
              through expert guidance, market knowledge, and unwavering commitment to excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
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
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-3xl font-bold mb-2 text-gray-900">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-6">
                  Founded in 2008, Pristine Properties emerged from a simple yet powerful vision: to revolutionize 
                  Zimbabwe's real estate market by providing exceptional service, unmatched expertise, and 
                  unwavering integrity in every transaction.
                </p>
                <p className="mb-6">
                  What started as a small family business in Harare has grown into Zimbabwe's most trusted 
                  real estate company, serving clients across major cities including Bulawayo, Mutare, and 
                  Victoria Falls. Our success is built on the foundation of understanding our clients' unique 
                  needs and delivering solutions that exceed expectations.
                </p>
                <p>
                  Today, we proudly stand as market leaders, having facilitated over 500 successful property 
                  transactions and helped more than 1200 families find their perfect homes. Our commitment 
                  to excellence, combined with deep local market knowledge, continues to drive our growth 
                  and client satisfaction.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg"
                alt="Our Story"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-emerald-600 text-white p-6 rounded-2xl">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our relationships with clients, partners, and communities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg text-center group hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-200 transition-colors duration-300">
                  <value.icon className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones that have shaped Pristine Properties into Zimbabwe's leading real estate company
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-emerald-200 h-full hidden md:block"></div>
              
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                      <div className="text-emerald-600 font-bold text-lg mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-emerald-600 rounded-full border-4 border-white shadow-lg"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals dedicated to helping you achieve your real estate goals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg group hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-emerald-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.description}</p>
                  
                  <div className="flex space-x-3">
                    <a
                      href={`tel:${member.phone}`}
                      className="flex items-center justify-center w-10 h-10 bg-emerald-100 hover:bg-emerald-200 text-emerald-600 rounded-lg transition-colors duration-200"
                    >
                      <FiPhone className="w-4 h-4" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center justify-center w-10 h-10 bg-emerald-100 hover:bg-emerald-200 text-emerald-600 rounded-lg transition-colors duration-200"
                    >
                      <FiMail className="w-4 h-4" />
                    </a>
                    <a
                      href={member.linkedin}
                      className="flex items-center justify-center w-10 h-10 bg-emerald-100 hover:bg-emerald-200 text-emerald-600 rounded-lg transition-colors duration-200"
                    >
                      <FiLinkedin className="w-4 h-4" />
                    </a>
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
            <h2 className="text-4xl font-bold mb-6">Ready to Work with Zimbabwe's Best?</h2>
            <p className="text-xl mb-8 text-emerald-100 max-w-2xl mx-auto">
              Experience the difference that comes with working with Zimbabwe's most trusted real estate professionals. 
              Let us help you achieve your property goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
              >
                <FiUsers className="mr-2" />
                Meet Our Team
              </a>
              <a
                href="/properties"
                className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
              >
                <FiHome className="mr-2" />
                View Properties
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;