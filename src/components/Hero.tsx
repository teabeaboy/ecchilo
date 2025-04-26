import React from 'react';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://media.discordapp.net/attachments/1317225422299201608/1365732577448820736/IMG_6255.jpg?ex=680e6114&is=680d0f94&hm=8b95138b81f583911fd4eab201bdfb04fb2abf1ab3e5156f038ab9d7abdb27f8&=&format=webp"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
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
          <Link 
            to="#girls" 
            className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-full flex items-center transition-all duration-300 transform hover:scale-105"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('girls')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <Heart className="w-5 h-5 mr-2" />
            Explore Characters
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;