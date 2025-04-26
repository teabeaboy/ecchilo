import React from 'react';
import { Twitter, MessageCircle, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/90 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center group">
              <span className="text-white relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-pink-500 after:transition-all after:duration-300 group-hover:after:w-full">ecchi</span>
              <span className="text-pink-500 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 group-hover:after:w-full">AI</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Your destination for unique character experiences and immersive storytelling.
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com/ecchi_online" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-pink-500 transition-all duration-300 hover:scale-110">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="t.me/ecchionline" target="_blank" rel="noopener noreferrer"
                 className="text-gray-400 hover:text-pink-500 transition-all duration-300 hover:scale-110">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-pink-500 transition-all duration-300 hover:translate-x-2 inline-block">Home</a></li>
              <li><a href="#girls" className="text-gray-400 hover:text-pink-500 transition-all duration-300 hover:translate-x-2 inline-block">Characters</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-pink-500 transition-all duration-300 hover:translate-x-2 inline-block">Buy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-500 transition-all duration-300 hover:translate-x-2 inline-block">Dexscreener</a></li>
              <li><a href="t.me/ecchionline" className="text-gray-400 hover:text-pink-500 transition-all duration-300 hover:translate-x-2 inline-block">Telegram</a></li>
              <li><a href="https://x.com/ecchi_online" className="text-gray-400 hover:text-pink-500 transition-all duration-300 hover:translate-x-2 inline-block">Twitter</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2025 ecchiAI. All rights reserved.</p>
          <p className="text-gray-400 text-sm flex items-center mt-4 sm:mt-0">
            Made with <Heart className="w-4 h-4 mx-1 text-pink-500 animate-pulse" /> for the community
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;