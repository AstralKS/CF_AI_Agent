import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter } from 'lucide-react';
import { Button } from './Button';

export const Navbar: React.FC = () => {

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6 pointer-events-none">
      <div className="glass-panel rounded-full px-6 py-3 flex items-center gap-8 pointer-events-auto">
        <Link to="/" className="font-display font-bold text-xl tracking-tight hover:text-orange-500 transition-colors">
          CFanatic
        </Link>
        
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-400">
          <a href="#" className="hover:text-white transition-colors">Features</a>
          <a href="#" className="hover:text-white transition-colors">How it Works</a>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 text-stone-400">
            <a href="#" className="p-2 hover:text-white transition-colors"><Github size={20} /></a>
            <a href="#" className="p-2 hover:text-white transition-colors"><Twitter size={20} /></a>
          </div>
          
          <Link to="/chat">
            <Button variant="primary" className="!px-4 !py-2 !text-sm">
              Open Chat
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
