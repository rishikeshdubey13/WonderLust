import { motion } from 'framer-motion';
import { Gift } from 'lucide-react';
import { Package } from '../types';

interface Props {
  package: Package;
}

export default function PackageCard({ package: pkg }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <div className="relative h-64">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full">
          {pkg.duration}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">{pkg.title}</h3>
            <p className="text-gray-600">{pkg.description}</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-blue-600">${pkg.price}</p>
          </div>
        </div>
        
        <div className="border-t pt-4">
          <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
            <Gift className="h-4 w-4 mr-2" />
            What's Included
          </h4>
          <ul className="grid grid-cols-2 gap-2">
            {pkg.included.map((item, index) => (
              <li key={index} className="text-gray-600 flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        
        <button className="w-full mt-6 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
          Book Now
        </button>
      </div>
    </motion.div>
  );
}