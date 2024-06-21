import React from 'react';
import windows from '../assets/windows.svg';
import Apple from '../assets/apple.svg';

const Footer = () => {
  return (
    <>
    <div className="bg-black text-white py-8  hidden md:block">
      <div className="container mx-auto px-4 lg:px-8 xl:px-12">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-4 mb-4 lg:mb-0">
            <div>
              <p className="text-sm lg:text-base">
                We grow your business with a personal AI manager.
              </p>
              <p className="text-sm lg:text-base md:mt-2">Maxwell, 2023.</p>
            </div>
          </div>
          <div className="flex flex-wrap space-x-8">
            <div className="mb-4 lg:mb-0 w-full sm:w-auto">
              <p className="font-bold text-sm lg:text-base">Platform</p>
              <ul>
                <li><a href="#" className="text-sm lg:text-base hover:underline">Plans & Pricing</a></li>
                <li><a href="#" className="text-sm lg:text-base hover:underline">Personal AI Manager</a></li>
                <li><a href="#" className="text-sm lg:text-base hover:underline">AI Business Writer</a></li>
              </ul>
            </div>
            <div className="mb-4 lg:mb-0 w-full sm:w-auto">
              <p className="font-bold text-sm lg:text-base">Company</p>
              <ul>
                <li><a href="#" className="text-sm lg:text-base hover:underline">Blog</a></li>
                <li><a href="#" className="text-sm lg:text-base hover:underline">Careers</a></li>
                <li><a href="#" className="text-sm lg:text-base hover:underline">News</a></li>
              </ul>
            </div>
            <div className="mb-4 lg:mb-0 w-full sm:w-auto">
              <p className="font-bold text-sm lg:text-base">Resources</p>
              <ul>
                <li><a href="#" className="text-sm lg:text-base hover:underline">Documentation</a></li>
                <li><a href="#" className="text-sm lg:text-base hover:underline">Papers</a></li>
                <li><a href="#" className="text-sm lg:text-base hover:underline">Press Conferences</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-4 lg:mt-0">
            <p className="font-bold text-sm lg:text-base">Get the app</p>
            <div className="flex space-x-4 mt-2">
              <a href="#"><img src={windows} alt="Windows" className="w-8 h-8" /></a>
              <a href="#"><img src={Apple} alt="macOS" className="w-8 h-8" /></a>
            </div>
          </div>
        </div>
          </div>   

           
      </div>
      <div className="bg-purple-700 text-white py-2 mt-4">
        <div className="container mx-auto px-4 lg:px-8 xl:px-12 flex flex-wrap justify-between items-center">
          <p className="text-sm lg:text-base text-black">© 2023 Maxwell Inc. All rights reserved.</p>
          <div className="flex space-x-4 text-black">
            <a href="#" className="text-sm lg:text-base hover:underline">Terms of Service</a>
            <a href="#" className="text-sm lg:text-base hover:underline">Privacy Policy</a>
            <a href="#" className="text-sm lg:text-base hover:underline">Cookies</a>
          </div>
        </div>
      </div>
    </>
    
           
  );
};

export default Footer;
