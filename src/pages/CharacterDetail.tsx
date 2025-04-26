import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Twitter } from 'lucide-react';
import { girls } from '../data/girls';
import { Character } from '../types';
import Chat from '../components/Chat';

const CharacterDetail: React.FC = () => {
  const { type, id } = useParams<{ type: string; id: string }>();
  
  const characters: Character[] = type === 'girl' ? girls : [];
  const character = characters[parseInt(id || '0', 10)];
  
  if (!character) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Link 
          to="/" 
          className="text-pink-500 hover:text-pink-400 transition-colors duration-300 flex items-center"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left column - Character info */}
          <div className="space-y-6">
            <Link 
              to="/" 
              className="inline-flex items-center text-pink-400 hover:text-pink-300 transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              <span>Back to all characters</span>
            </Link>

            <div className="grid grid-cols-2 gap-4">
              {[character.image, ...character.images.slice(0, 1)].map((img, index) => (
                <div 
                  key={index}
                  className="aspect-square rounded-xl overflow-hidden shadow-lg"
                >
                  <img 
                    src={img} 
                    alt={`${character.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="bg-gray-800 rounded-xl p-6">
              <h2 className="text-lg font-semibold text-white mb-4">Characteristics</h2>
              <div className="space-y-2">
                <div className="flex justify-between text-gray-300">
                  <span>Age:</span>
                  <span>{character.age}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Boobs:</span>
                  <span>{character.boobs}</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-6">
              <h2 className="text-lg font-semibold text-white mb-4">More about me</h2>
              <p className="text-gray-300 mb-4">{character.description}</p>
              <a 
                href="https://x.com/ecchidotlove"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-pink-500 hover:text-pink-400 transition-colors duration-300"
              >
                <Twitter className="w-4 h-4" />
                <span>Follow me on Twitter</span>
              </a>
            </div>
          </div>

          {/* Right column - Chat */}
          <div>
            <Chat character={character} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;