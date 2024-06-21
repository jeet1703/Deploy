import React from 'react';
import background from '../assets/Backgroundc.png';
import Button from './Button';

const ContactUs = () => (
  <section
    className="bg-cover bg-center py-16 object-contain max-w-full"
    style={{
        backgroundImage: `url(${background})`,
      }}
  >
    <div className="container mx-auto ">
      <div className="bg-black bg-opacity-75 p-8 rounded-lg text-white max-w-2xl mx-auto">
        <h2 className="text-center text-3xl font-bold mb-4">CONTACT US</h2>
        <p className="text-center mb-8">
          If you are willing to conduct AR/VR events in your city, you can contact us at 
          <a href="mailto:connect@arexa.co" className="text-red-500"> connect@arexa.co</a>
        </p>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="First Name"
              className="p-3 bg-gray-800 rounded border border-gray-700 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="p-3 bg-gray-800 rounded border border-gray-700 focus:outline-none"
            />
          </div>
          <input
            type="email"
            placeholder="Work Email"
            className="p-3 w-full bg-gray-800 rounded border border-gray-700 mb-4 focus:outline-none"
          />
          <textarea
            placeholder="Message"
            className="p-3 w-full bg-gray-800 rounded border border-gray-700 mb-4 focus:outline-none h-32"
          ></textarea>
          <Button
            type="submit"
            className="w-full py-3 bg-purple-700 rounded-lg text-white font-semibold hover:bg-purple-800 transition duration-300"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  </section>
);

export default ContactUs;
