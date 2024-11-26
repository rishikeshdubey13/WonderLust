import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Star, DollarSign, Clock, Users, Camera, Sunrise, Cloud, Thermometer } from 'lucide-react';
import { destinations } from '../data';

export default function DestinationProfile() {
  const { id } = useParams();
  const destination = destinations.find(d => d.id === Number(id));

  if (!destination) {
    return (
      <div className="pt-24 text-center">
        <h2 className="text-2xl font-bold">Destination not found</h2>
      </div>
    );
  }

  return (
    <div className="pt-16">
      <div className="relative h-[60vh]">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl font-bold mb-2">{destination.name}</h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-1" />
                  {destination.location}
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 fill-current mr-1" />
                  {destination.rating} Rating
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">About this Destination</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {destination.description}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                  <span>Best Time: Spring</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-blue-600 mr-2" />
                  <span>{destination.duration}</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-blue-600 mr-2" />
                  <span>Family Friendly</span>
                </div>
                <div className="flex items-center">
                  <Camera className="h-5 w-5 text-blue-600 mr-2" />
                  <span>Photo Spots</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Weather & Climate</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Sunrise className="h-5 w-5 text-blue-600 mr-2" />
                    <h3 className="font-semibold">Summer</h3>
                  </div>
                  <p className="text-gray-600">25°C - 32°C</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Cloud className="h-5 w-5 text-blue-600 mr-2" />
                    <h3 className="font-semibold">Winter</h3>
                  </div>
                  <p className="text-gray-600">10°C - 18°C</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Thermometer className="h-5 w-5 text-blue-600 mr-2" />
                    <h3 className="font-semibold">Best Season</h3>
                  </div>
                  <p className="text-gray-600">Spring & Fall</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-lg shadow-lg p-8 sticky top-24">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-blue-600">
                    ${destination.price}
                  </h3>
                  <p className="text-gray-600">per person</p>
                </div>
                <DollarSign className="h-8 w-8 text-blue-600" />
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Duration</span>
                  <span className="font-semibold">{destination.duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Group Size</span>
                  <span className="font-semibold">2-12 People</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Rating</span>
                  <span className="font-semibold flex items-center">
                    {destination.rating}
                    <Star className="h-4 w-4 text-yellow-400 fill-current ml-1" />
                  </span>
                </div>
              </div>

              <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors mb-4">
                Book Now
              </button>
              <button className="w-full border-2 border-blue-600 text-blue-600 py-3 rounded-md hover:bg-blue-50 transition-colors">
                Add to Wishlist
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}