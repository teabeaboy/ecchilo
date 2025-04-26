import React, { useEffect, useRef } from 'react';
import CharacterCard from './CharacterCard';
import { Character } from '../types';

interface CharacterGridProps {
  Companions: Character[];
  type: 'girl' | 'boy';
  title: string;
}

const CharacterGrid: React.FC<CharacterGridProps> = ({ Companions, type, title }) => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = gridRef.current?.querySelectorAll('.character-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="py-12">
      <h2 className="text-2xl font-bold mb-6 text-white opacity-0 animate-slide-up">
        <span className="inline-block border-b-2 border-pink-500 pb-1">{title}</span>
      </h2>
      <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Companions.map((character, index) => (
          <div 
            key={character.name} 
            className="character-card opacity-0"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <CharacterCard 
              character={character} 
              index={index} 
              type={type}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterGrid;