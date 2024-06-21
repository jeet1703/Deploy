// src/components/Testimonial.jsx
import React from 'react';
import { testimonials } from "../Constants";
import background from '../assets/testbg.png';

const Testimonial = () => {
  return (
    <div className="bg-black   text-white py-20" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-gradient mt-20">Testimonial</h2>
        <div className="flex justify-center space-x-4 flex-wrap">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-transparent border-gradient p-6 rounded-lg shadow-lg max-w-xs mx-2 my-4 mb-20">
              <p className="mb-4">"{testimonial.text}"</p>
              <div className="flex items-center justify-center mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-400'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.34 4.122a1 1 0 00.95.69h4.337c.969 0 1.371 1.24.588 1.81l-3.51 2.55a1 1 0 00-.364 1.118l1.34 4.122c.3.922-.755 1.688-1.54 1.118l-3.51-2.55a1 1 0 00-1.175 0l-3.51 2.55c-.785.57-1.84-.196-1.54-1.118l1.34-4.122a1 1 0 00-.364-1.118l-3.51-2.55c-.783-.57-.38-1.81.588-1.81h4.337a1 1 0 00.95-.69l1.34-4.122z" />
                  </svg>
                ))}
              </div>
              <div className="flex items-center justify-center space-x-2">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full" />
                <div className="text-left">
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
