import React from 'react';
import { Heart } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          className="w-full h-full object-cover"
          poster="https://images.pexels.com/photos/1671643/pexels-photo-1671643.jpeg"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-anime-girl-looking-intimidatingly-at-camera-40847-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
          Meet Your <span className="text-pink-500">Favorite</span> Characters
        </h1>
        <p className="text-xl text-gray-200 mb-8">
          Discover a world of unique personalities and stunning visuals
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-full flex items-center transition-all duration-300 transform hover:scale-105">
            <Heart className="w-5 h-5 mr-2" />
            Explore Characters
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;