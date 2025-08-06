import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import {
  FaBed,
  FaBath,
  FaMaximize,
  FaCar,
  FaMapPin,
  FaCalendar,
  FaPhone,
  FaShare,
  FaHeart,
  FaChevronLeft,
  FaChevronRight,
  FaArrowLeft,
  FaCheck,
  FaStar,
  FaCamera
} from 'react-icons/fa6';
import { CiMail } from "react-icons/ci";
import { getPropertyById } from '../data/data';

const PropertyDetail = () => {
  const { id } = useParams();
  const property = id ? getPropertyById(id) : null;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    visitDate: '',
    visitTime: ''
  });

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Property Not Found</h1>
          <Link 
            to="/properties" 
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg transition-colors duration-200"
          >
            Back to Properties
          </Link>
        </div>
      </div>
    );
  }

  const formatPrice = (price, currency, status) => {
    const formattedPrice = new Intl.NumberFormat().format(price);
    if (status === 'for-rent') {
      return `${currency} $${formattedPrice}/month`;
    }
    return `${currency} $${formattedPrice}`;
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      'for-sale': { text: 'For Sale', color: 'bg-emerald-600' },
      'for-rent': { text: 'For Rent', color: 'bg-blue-600' },
      'sold': { text: 'Sold', color: 'bg-gray-600' },
      'rented': { text: 'Rented', color: 'bg-purple-600' }
    };
    
    const config = statusConfig[status];
    return (
      <span className={`${config.color} text-white px-4 py-2 rounded-full text-sm font-medium`}>
        {config.text}
      </span>
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: property.title,
        text: property.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success('Property link copied to clipboard!');
    }
  };

  const handleSaveToFavorites = () => {
    toast.success('Property added to favorites!');
  };

  const handleSubmitContact = (e) => {
    e.preventDefault();
    toast.success('Your inquiry has been sent! We\'ll contact you soon.');
    setShowContactForm(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      visitDate: '',
      visitTime: ''
    });
  };

  const handleScheduleVisit = () => {
    toast.success('Visit request sent! Our agent will confirm shortly.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="bg-white shadow-sm sticky top-16 z-40">
        <div className="container mx-auto px-4 py-4">
          <Link
            to="/properties"
            className="flex items-center text-gray-600 hover:text-emerald-600 transition-colors duration-200"
          >
            <FaArrowLeft className="w-5 h-5 mr-2" />
            <span>Back to Properties</span>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative bg-white rounded-2xl overflow-hidden shadow-lg mb-8"
            >
              <div className="relative h-96 md:h-[500px]">
                <img
                  src={property.images[currentImageIndex]}
                  alt={`${property.title} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
                
                {/* Navigation Buttons */}
                {property.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200"
                    >
                      <FaChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200"
                    >
                      <FaChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm flex items-center">
                  <FaCamera className="w-4 h-4 mr-1" />
                  {currentImageIndex + 1} / {property.images.length}
                </div>

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button
                    onClick={handleShare}
                    className="bg-white/90 hover:bg-white p-2 rounded-full transition-colors duration-200"
                  >
                    <FaShare className="w-5 h-5 text-gray-700" />
                  </button>
                  <button
                    onClick={handleSaveToFavorites}
                    className="bg-white/90 hover:bg-white p-2 rounded-full transition-colors duration-200"
                  >
                    <FaHeart className="w-5 h-5 text-gray-700" />
                  </button>
                </div>

                {/* Status and Featured Badges */}
                <div className="absolute top-4 left-4 flex space-x-2">
                  {getStatusBadge(property.status)}
                  {property.featured && (
                    <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  )}
                </div>
              </div>

              {/* Thumbnail Strip */}
              {property.images.length > 1 && (
                <div className="p-4 bg-gray-50">
                  <div className="flex space-x-2 overflow-x-auto">
                    {property.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                          currentImageIndex === index
                            ? 'border-emerald-600'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <img
                          src={image}
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>

            {/* Property Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-8 mb-8"
            >
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-center text-gray-600 mb-2">
                  <FaMapPin className="w-5 h-5 mr-2" />
                  <span className="text-lg">{property.location}</span>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{property.title}</h1>
                <div className="text-3xl font-bold text-emerald-600 mb-4">
                  {formatPrice(property.price, property.currency, property.status)}
                </div>
              </div>

              {/* Key Details */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {property.bedrooms > 0 && (
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <FaBed className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">{property.bedrooms}</div>
                    <div className="text-sm text-gray-600">Bedrooms</div>
                  </div>
                )}
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <FaBath className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{property.bathrooms}</div>
                  <div className="text-sm text-gray-600">Bathrooms</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <FaMaximize className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{property.size}</div>
                  <div className="text-sm text-gray-600">m² Size</div>
                </div>
                {property.parking > 0 && (
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <FaCar className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">{property.parking}</div>
                    <div className="text-sm text-gray-600">Parking</div>
                  </div>
                )}
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Description</h3>
                <p className="text-gray-600 leading-relaxed">{property.description}</p>
                {property.yearBuilt && (
                  <div className="flex items-center mt-4 text-gray-600">
                    <FaCalendar className="w-5 h-5 mr-2" />
                    <span>Built in {property.yearBuilt}</span>
                  </div>
                )}
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {property.features.map((feature) => (
                    <div key={feature} className="flex items-center text-gray-600">
                      <FaCheck className="w-5 h-5 text-emerald-600 mr-3" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Amenities</h3>
                <div className="flex flex-wrap gap-2">
                  {property.amenities.map((amenity) => (
                    <span
                      key={amenity}
                      className="bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Contact Agent Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-6 mb-6 sticky top-32"
            >
              <div className="text-center mb-6">
                <img
                  src={property.agent.image}
                  alt={property.agent.name}
                  className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-1">{property.agent.name}</h3>
                <p className="text-gray-600 text-sm mb-2">Licensed Real Estate Agent</p>
                <div className="flex items-center justify-center">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="w-4 h-4 text-amber-400 fill-current" />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">(4.9)</span>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <a
                  href={`tel:${property.agent.phone}`}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center"
                >
                  <FaPhone className="w-5 h-5 mr-2" />
                  Call Agent
                </a>
                <a
                  href={`mailto:${property.agent.email}`}
                  className="w-full border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-4 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center"
                >
                  <CiMail className="w-5 h-5 mr-2" />
                  Email Agent
                </a>
                <button
                  onClick={() => setShowContactForm(!showContactForm)}
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-3 rounded-lg font-medium transition-colors duration-200"
                >
                  Send Message
                </button>
              </div>

              {/* Contact Form */}
              {showContactForm && (
                <motion.form
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  onSubmit={handleSubmitContact}
                  className="space-y-4 pt-6 border-t border-gray-200"
                >
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Your Phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 rounded-lg font-medium transition-colors duration-200"
                  >
                    Send Message
                  </button>
                </motion.form>
              )}

              {/* Quick Actions */}
              <div className="pt-6 border-t border-gray-200">
                <button
                  onClick={handleScheduleVisit}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white px-4 py-3 rounded-lg font-medium transition-colors duration-200 mb-3"
                >
                  Schedule a Visit
                </button>
                <div className="text-xs text-gray-500 text-center">
                  Response time: Usually within 2 hours
                </div>
              </div>
            </motion.div>

            {/* Property Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4">Property Summary</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Property Type</span>
                  <span className="font-medium text-gray-900">
                    {property.type.charAt(0).toUpperCase() + property.type.slice(1)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Status</span>
                  <span className="font-medium text-gray-900">
                    {property.status.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Area</span>
                  <span className="font-medium text-gray-900">{property.area}</span>
                </div>
                {property.yearBuilt && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Year Built</span>
                    <span className="font-medium text-gray-900">{property.yearBuilt}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-gray-600">Property ID</span>
                  <span className="font-medium text-gray-900">PP-{property.id.padStart(6, '0')}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;