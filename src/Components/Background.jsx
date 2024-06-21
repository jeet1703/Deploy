import React from 'react';
import 'tailwindcss/tailwind.css';
import Ellipse1 from '../assets/Eone.svg';
import Ellipse2 from '../assets/Etwo.svg';
import Ellipse3 from '../assets/Ethree.svg';
import Ellipse4 from '../assets/Efour.svg';

const Background = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black overflow-hidden -z-10">
      <img src={Ellipse1} className="absolute w-28 h-48 top-10 left-10 transform  -translate-x-2/3 -translate-y-1/2 parallax" style={{ top: '10%', left: '10%' }} alt="Ellipse 1" />
      <img src={Ellipse2} className="absolute w-58 h-48 top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 parallax" style={{ top: '50%', left: '33%' }} alt="Ellipse 2" />
      <img src={Ellipse3} className="absolute w-28 h-48 bottom-10 right-10 transform -translate-x-1/2 -translate-y-1/2 parallax" style={{ bottom: '10%', right: '10%' }} alt="Ellipse 3" />
      <img src={Ellipse4} className="absolute w-96 h-48 bottom-1/2 right-1/4 transform -translate-x-1/2 -translate-y-1/2 parallax" style={{ bottom: '50%', right: '25%' }} alt="Ellipse 4" />
    </div>
  );
};

export default Background;
