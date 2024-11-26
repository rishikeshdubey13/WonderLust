import { motion } from 'framer-motion';
import { User, MapPin, Phone, Mail, Calendar, Users } from 'lucide-react';
import { mockUser } from '../data';
import { destinations } from '../data';

export default function UserProfile() {
  const getDestinationName = (id: number) => {
    return destinations.find(d => d.id === id)?.name || 'Unknown Destination';
  };

  return (
    <div className="pt-24 pb-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-center mb-6">
                <img
                  src={mockUser.avatar}
                  alt={mockUser.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h2 className="text-2xl font-bold">{mockUser.name}</h2>
                <p className="text-gray-600">Travel Enthusiast</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-600 mr-3" />
                  <span>{mockUser.email}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-600 mr-3" />
                  <span>{mockUser.phone}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                  <span>{mockUser.country}</span>
                </div>
              </div>

              <button className="w-full mt-6 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
                Edit Profile
              </button>
            </div>
          </motion.div>

          {/* Bookings and Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">My Bookings</h3>
              <div className="space-y-4">
                {mockUser.bookings.map((booking) => (
                  <div
                    key={booking.id}
                    className="border rounded-lg p-4 hover:border-blue-500 transition-colors"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold">
                          {getDestinationName(booking.destinationId)}
                        </h4>
                        <div className="flex items-center text-gray-600 mt-2">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>{booking.date}</span>
                          <Users className="h-4 w-4 ml-4 mr-2" />
                          <span>{booking.guests} guests</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className={`px-3 py-1 rounded-full text-sm ${
                          booking.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                          booking.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                        </span>
                        <p className="mt-2 font-semibold">${booking.totalPrice}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}