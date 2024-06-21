import React from 'react';
import Header from './Header';
import background from '../assets/Background.png';
import Person from '../assets/person.png';
import Button from './Button';
import { socialMediaLinks } from '../Constants';

// Import your PNG icons
import FacebookIcon from '../assets/face.png';
import InstagramIcon from '../assets/insta.png';
import LinkedInIcon from '../assets/link.png';
import SnapchatIcon from '../assets/snap.png';
import TwitterIcon from '../assets/tweet.png';

const Hero = () => {
  return (
    <div
      id='hero'
      className="relative h-screen bg-cover bg-center overflow-hidden border-4 object-cover border-gradient1"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="absolute inset-0 from-[#140639] via-[#7961BA] to-[#15073A] opacity-90 z-0"></div>
      <Header />
      <div className="container relative mx-auto h-full flex flex-col lg:flex-row items-center z-10">
        <div className="w-full lg:w-1/2 p-8 text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-6xl text-white mt-20 lg:mt-0">
            Design Revolution Through AR Innovation
          </h1>
          <Button className="mt-8 px-6 py-3 bg-blue-600 text-white text-base md:text-lg font-semibold">
            Learn More
          </Button>
          <div className=" justify-center lg:justify-start mt-14 hidden md:block">
            {/* Social Media Icons */}
            <a href={socialMediaLinks.facebook} target="_blank" rel="noopener noreferrer" className="inline-block transition-transform transform hover:scale-110">
              <img src={FacebookIcon} alt="Facebook" className="w-6 h-6 mx-2" />
            </a>
            <a href={socialMediaLinks.instagram} target="_blank" rel="noopener noreferrer" className="inline-block transition-transform transform hover:scale-110">
              <img src={InstagramIcon} alt="Instagram" className="w-6 h-6 mx-2" />
            </a>
            <a href={socialMediaLinks.linkedin} target="_blank" rel="noopener noreferrer" className="inline-block transition-transform transform hover:scale-110">
              <img src={LinkedInIcon} alt="LinkedIn" className="w-6 h-6 mx-2" />
            </a>
            <a href={socialMediaLinks.snapchat} target="_blank" rel="noopener noreferrer" className="inline-block transition-transform transform hover:scale-110">
              <img src={SnapchatIcon} alt="Snapchat" className="w-6 h-6 mx-2" />
            </a>
            <a href={socialMediaLinks.twitter} target="_blank" rel="noopener noreferrer" className="inline-block transition-transform transform hover:scale-110">
              <img src={TwitterIcon} alt="Twitter" className="w-6 h-6 mx-2" />
            </a>
            {/* Add more icons here as needed */}
          </div>
        </div>
        <div className="w-full lg:w-5/12 flex justify-center lg:justify-end">
          <img
            src={Person}
            alt="Description of image"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
