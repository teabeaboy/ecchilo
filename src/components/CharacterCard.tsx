import React from 'react';
import { Link } from 'react-router-dom';
import { Character } from '../types';

interface CharacterCardProps {
  character: Character;
  index: number;
  type: 'girl' | 'boy';
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character, index, type }) => {
  // Disable click for Mika (index 3)
  if (index === 3) {
    return (
      <div className="group relative overflow-hidden rounded-xl opacity-50 cursor-not-allowed">
        <div className="relative w-full aspect-[3/4] overflow-hidden rounded-xl shadow-lg">
          <img 
            src={character.image} 
            alt={character.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-90"></div>
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-xl font-bold text-white">{character.name}</h3>
            <p className="text-sm text-gray-300 line-clamp-1">{character.description.substring(0, 50)}...</p>
            <div className="mt-2 inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-500/80 text-white">
              Coming Soon
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link 
      to={`/character/${type}/${index}`} 
      className="group relative overflow-hidden rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]"
    >
      <div className="relative w-full aspect-[3/4] overflow-hidden rounded-xl shadow-lg">
        <img 
          src={character.image} 
          alt={character.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-300"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 transform transition-transform duration-300 group-hover:translate-y-[-8px]">
          <h3 className="text-xl font-bold text-white group-hover:text-pink-300 transition-colors duration-300">{character.name}</h3>
          <p className="text-sm text-gray-300 line-clamp-1 group-hover:text-white transition-colors duration-300">{character.description.substring(0, 50)}...</p>
          <div className="mt-2 inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-pink-500/80 text-white transform transition-all duration-300 group-hover:bg-pink-400 group-hover:scale-105">
            Learn more
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CharacterCard;