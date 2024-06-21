import React from 'react';

const Company = () => {
  return (
    <div className="bg-purple-700 text-white py-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center md:justify-between">
          <div className="text-center px-4 mb-4 md:mb-0">
            <span className="block text-2xl font-bold">100+</span>
            <span>Brands</span>
          </div>
          <div className="text-center px-4 mb-4 md:mb-0">
            <span className="block text-2xl font-bold">4B+</span>
            <span>Impressions</span>
          </div>
          <div className="text-center px-4 mb-4 md:mb-0">
            <span className="block text-2xl font-bold">80%</span>
            <span>Engagement</span>
          </div>
          <div className="text-center px-4">
            <span className="block text-2xl font-bold">500K+</span>
            <span>Saves</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Company;
