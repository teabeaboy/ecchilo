import React from 'react';
import Hero from '../components/Hero';
import CharacterGrid from '../components/CharacterGrid';
import { girls } from '../data/girls';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Hero />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section id="girls" className="mb-16">
          <CharacterGrid Companions={girls} type="girl" title="AI Companions" />
        </section>
      </div>
    </div>
  );
};

export default Home;