import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaBed,  
  FaMapPin, 
  FaMaximize,
  FaCar,
  FaHeart,
  FaShare,
  FaEye 
} from 'react-icons/fa6';
import { FaBath } from "react-icons/fa6";

const PropertyCard = ({ property, index = 0 }) => {
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
      <span className={`${config.color} text-white px-3 py-1 rounded-full text-xs font-medium`}>
        {config.text}
      </span>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          {getStatusBadge(property.status)}
        </div>

        {/* Featured Badge */}
        {property.featured && (
          <div className="absolute top-4 right-4">
            <span className="bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-medium">
              Featured
            </span>
          </div>
        )}

        {/* Action Buttons */}
        <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-white/90 hover:bg-white p-2 rounded-full transition-colors duration-200">
            <FaHeart className="w-4 h-4 text-gray-700" />
          </button>
          <button className="bg-white/90 hover:bg-white p-2 rounded-full transition-colors duration-200">
            <FaShare className="w-4 h-4 text-gray-700" />
          </button>
        </div>

        {/* Price Overlay */}
        <div className="absolute bottom-4 left-4">
          <div className="bg-black/70 text-white px-3 py-2 rounded-lg backdrop-blur-sm">
            <p className="text-lg font-bold">
              {formatPrice(property.price, property.currency, property.status)}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Location */}
        <div className="flex items-center text-gray-600 mb-2">
          <FaMapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{property.location}</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors duration-200">
          {property.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {property.description}
        </p>

        {/* Property Details */}
        <div className="flex items-center justify-between text-gray-600 mb-4">
          {property.bedrooms > 0 && (
            <div className="flex items-center">
              <FaBed className="w-4 h-4 mr-1" />
              <span className="text-sm">{property.bedrooms} Beds</span>
            </div>
          )}
          <div className="flex items-center">
            <FaBath className="w-4 h-4 mr-1" />
            <span className="text-sm">{property.bathrooms} Baths</span>
          </div>
          <div className="flex items-center">
            <FaMaximize className="w-4 h-4 mr-1" />
            <span className="text-sm">{property.size}m²</span>
          </div>
          {property.parking > 0 && (
            <div className="flex items-center">
              <FaCar className="w-4 h-4 mr-1" />
              <span className="text-sm">{property.parking}</span>
            </div>
          )}
        </div>

        {/* Amenities Preview */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {property.amenities.slice(0, 3).map((amenity) => (
              <span
                key={amenity}
                className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs"
              >
                {amenity}
              </span>
            ))}
            {property.amenities.length > 3 && (
              <span className="text-gray-500 text-xs">
                +{property.amenities.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Agent Info & Actions */}
        <div className="border-t pt-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src={property.agent.image}
              alt={property.agent.name}
              className="w-8 h-8 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-medium text-gray-900">{property.agent.name}</p>
              <p className="text-xs text-gray-600">Licensed Agent</p>
            </div>
          </div>
          
          <Link
            to={`/property/${property.id}`}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center space-x-1"
          >
            <FaEye className="w-4 h-4" />
            <span>View</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;
