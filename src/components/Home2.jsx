import React from 'react';
import './Home2.css';

function Home2() {
  return (
    <div className="flex gap-4 justify-evenly m-4 p-4 bg-white rounded-lg shadow-lg">
      <div className="w-2/3 p-6 m-4 bg-gray-100 rounded-lg shadow-md transition-transform transform hover:scale-105">
        <h1 className="text-3xl font-bold text-gray-800 animate-fadeIn">SYNERGY1</h1>
        <h6 className="text-xl text-gray-600 animate-fadeIn">Smart. Sustainable. Simple.</h6>
        <p className="w-4/5 mt-2 text-gray-700 animate-fadeIn">
          At Synergy, we believe that energy conservation and sustainability can
          be seamlessly integrated into everyday life. Our innovative solutions
          empower households to optimize their energy and water usage without
          compromising comfort or convenience. By harnessing the latest
          technology, we offer smart plug-in devices that monitor and manage
          energy consumption, ensuring that every home contributes to a greener
          planet. Join us on our journey to make sustainable living simple and
          accessible for everyone.
        </p>
        <button className="bg-green-500 text-white px-8 py-2 rounded-lg m-2 transition-transform transform hover:scale-110 animate-bounce">
          View all
        </button>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img src="path_to_your_image.jpg" alt="Synergy" className="w-full h-auto rounded-lg shadow-lg animate-fadeIn" />
      </div>
    </div>
  );
}

export default Home2;
