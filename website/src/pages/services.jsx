import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FiHome,
  FiMapPin,
  FiTrendingUp,
  FiShield,
  FiFileText,
  FiDollarSign,
  FiUsers,
  FiCheck,
  FiArrowRight,
  FiPhone,
  FiStar,
  FiClock,
  FiTarget,
  FiAward
} from 'react-icons/fi';

const Services = () => {
  const mainServices = [
    {
      icon: FiHome,
      title: 'Property Sales',
      description: 'Expert guidance through buying and selling properties with comprehensive market analysis and professional support.',
      features: [
        'Professional property valuation',
        'Market analysis and pricing strategy',
        'Professional photography and marketing',
        'Negotiation and closing support',
        'Legal documentation assistance',
        'Post-sale support and guidance'
      ],
      process: [
        'Initial consultation and property assessment',
        'Market analysis and pricing strategy',
        'Professional marketing and promotion',
        'Buyer screening and viewings',
        'Negotiation and agreement',
        'Legal completion and handover'
      ]
    },
    {
      icon: FiMapPin,
      title: 'Property Rentals',
      description: 'Find the perfect rental property or maximize returns on your investment properties with our rental management services.',
      features: [
        'Tenant screening and background checks',
        'Rent collection and management',
        'Property maintenance coordination',
        'Lease agreement preparation',
        'Regular property inspections',
        'Market rent analysis and adjustments'
      ],
      process: [
        'Property listing and marketing',
        'Tenant applications and screening',
        'Lease negotiation and signing',
        'Move-in inspection and handover',
        'Ongoing management and support',
        'Lease renewal or termination'
      ]
    },
    {
      icon: FiShield,
      title: 'Property Management',
      description: 'Comprehensive property management services to maximize your investment returns while minimizing your involvement.',
      features: [
        '24/7 emergency maintenance support',
        'Financial reporting and accounting',
        'Tenant relations and communication',
        'Property maintenance and repairs',
        'Rent collection and late payment handling',
        'Legal compliance and documentation'
      ],
      process: [
        'Property assessment and setup',
        'Marketing and tenant placement',
        'Monthly rent collection',
        'Regular property maintenance',
        'Financial reporting',
        'Annual property reviews'
      ]
    },
    {
      icon: FiTrendingUp,
      title: 'Investment Advisory',
      description: 'Strategic investment advice to help you make informed real estate decisions and build a profitable property portfolio.',
      features: [
        'Market research and analysis',
        'ROI calculations and projections',
        'Portfolio planning and diversification',
        'Risk assessment and mitigation',
        'Tax optimization strategies',
        'Exit strategy planning'
      ],
      process: [
        'Investment goals assessment',
        'Market opportunity analysis',
        'Property selection and evaluation',
        'Financing strategy development',
        'Acquisition support',
        'Ongoing portfolio monitoring'
      ]
    }
  ];

  const additionalServices = [
    {
      icon: FiFileText,
      title: 'Property Valuation',
      description: 'Professional property valuations for sale, purchase, insurance, or legal purposes.',
      features: ['Market analysis', 'Detailed reports', 'Legal compliance']
    },
    {
      icon: FiDollarSign,
      title: 'Mortgage Advisory',
      description: 'Expert guidance on mortgage options and financing solutions for your property purchase.',
      features: ['Loan options', 'Application support', 'Rate comparison']
    },
    {
      icon: FiUsers,
      title: 'Relocation Services',
      description: 'Comprehensive relocation support for individuals and corporate clients moving to Zimbabwe.',
      features: ['Area orientation', 'School information', 'Service connections']
    }
  ];

  const whyChooseUs = [
    {
      icon: FiAward,
      title: 'Industry Expertise',
      description: '15+ years of experience in Zimbabwe\'s real estate market with proven track record.'
    },
    {
      icon: FiTarget,
      title: 'Results-Driven',
      description: '98% success rate in property transactions with average sale time of 45 days.'
    },
    {
      icon: FiClock,
      title: 'Responsive Service',
      description: '24/7 support with average response time of under 2 hours for urgent matters.'
    },
    {
      icon: FiStar,
      title: 'Client Satisfaction',
      description: '4.9/5 star rating from over 1200+ satisfied clients across Zimbabwe.'
    }
  ];

  const testimonials = [
    {
      name: 'Robert Chivanga',
      role: 'Property Investor',
      text: 'Pristine Properties helped me build a profitable rental portfolio. Their investment advisory service is exceptional.',
      rating: 5
    },
    {
      name: 'Linda Mpofu',
      role: 'First-time Buyer',
      text: 'The team guided me through every step of buying my first home. Professional, knowledgeable, and patient.',
      rating: 5
    },
    {
      name: 'James Marowa',
      role: 'Property Owner',
      text: 'Their property management service has been outstanding. My properties are well-maintained and consistently rented.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg"
            alt="Services Background"
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl mb-8 text-emerald-100 leading-relaxed">
              Comprehensive real estate solutions tailored to meet all your property needs across Zimbabwe. 
              From buying and selling to investment advisory, we've got you covered.
            </p>
            <Link
              to="/contact"
              className="bg-amber-500 hover:bg-amber-600 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 inline-flex items-center"
            >
              <FiPhone className="mr-2" />
              Get Started Today
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional real estate services designed to deliver exceptional results for every client
            </p>
          </motion.div>

          <div className="space-y-20">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="bg-emerald-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-xl text-gray-600 mb-8">{service.description}</p>
                  
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">What's Included:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center text-gray-600">
                          <FiCheck className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center"
                  >
                    Learn More
                    <FiArrowRight className="ml-2" />
                  </Link>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h4 className="text-xl font-bold text-gray-900 mb-6">Our Process</h4>
                    <div className="space-y-4">
                      {service.process.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex items-start">
                          <div className="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                            {stepIndex + 1}
                          </div>
                          <div>
                            <p className="text-gray-700">{step}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized services to support every aspect of your real estate journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-emerald-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <service.icon className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center justify-center text-sm text-gray-600">
                      <FiCheck className="w-4 h-4 text-emerald-600 mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Pristine Properties</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference that comes with Zimbabwe's most trusted real estate professionals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center shadow-lg"
              >
                <div className="bg-emerald-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <reason.icon className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-gray-600 text-sm">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real experiences from clients who achieved their real estate goals with our services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FiStar key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
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
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-emerald-100 max-w-2xl mx-auto">
              Contact us today for a free consultation and discover how our expert services can help you achieve your real estate goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
              >
                <FiPhone className="mr-2" />
                Free Consultation
              </Link>
              <Link
                to="/properties"
                className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
              >
                <FiHome className="mr-2" />
                View Properties
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;