import { motion } from 'framer-motion';
import { packages } from '../data';
import { Package as PackageIcon } from 'lucide-react';
import PackageCard from '../components/PackageCard';

export default function Packages() {
  return (
    <div className="pt-16">
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold mb-4">Travel Packages</h1>
            <div className="flex items-center justify-center">
              <PackageIcon className="h-5 w-5 mr-2" />
              <p className="text-xl">Curated experiences for every traveler</p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} package={pkg} />
          ))}
        </div>
      </div>
    </div>
  );
}