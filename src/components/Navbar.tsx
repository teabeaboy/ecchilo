import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Zap, BarChart2, Github } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              <img 
                src="https://media.discordapp.net/attachments/1317225422299201608/1365725492333772874/Untitled_design_13.png?ex=680e5a7b&is=680d08fb&hm=1fcff281649a6b9d5fa28e856ebd3aba3a7427caff1a59dc73df6e42efd1ef96&=&format=webp&quality=lossless&width=1000&height=1000"
                alt="ecchiAI "
                className="h-8 w-8 mr-2 rounded-full"
              />
              <span className="text-white font-bold text-xl relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-pink-500 after:transition-all after:duration-300 group-hover:after:w-full">ecchi</span>
              <span className="text-pink-500 font-bold text-xl relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 group-hover:after:w-full">AI</span>
            </Link>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://pump.fun/coin/ComingSoon" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-pink-500 hover:text-pink-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(236,72,153,0.3)] hover:scale-105"
            >
              <Zap className="w-4 h-4 mr-1" />
              <span>Buy</span>
            </a>
            
            <a 
              href="https://dexscreener.com/solana/ComingSoon" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-pink-500 hover:text-pink-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(236,72,153,0.3)] hover:scale-105"
            >
              <BarChart2 className="w-4 h-4 mr-1" />
              <span>Dexscreener</span>
            </a>
            
            <a 
              href="https://github.com/teabeaboy/ecchilo" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center text-pink-500 hover:text-pink-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(236,72,153,0.3)] hover:scale-105"
            >
              <Github className="w-4 h-4 mr-1" />
              <span>GitHub</span>
            </a>
            
            <a 
              href="https://x.com/ecchi_online" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-pink-500 hover:text-pink-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(236,72,153,0.3)] hover:scale-105"
            >
              <ExternalLink className="w-4 h-4 mr-1" />
              <span>Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;