import React from 'react';
import { Bot } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-orange-600/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <div className="flex items-center gap-2 font-display font-bold text-2xl">
            <Bot className="text-orange-600" />
            CFanatic
          </div>
          <p className="text-stone-400 leading-relaxed">
            The advanced AI companion for competitive programmers. Level up your Codeforces rating with personalized insights.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold mb-6">Product</h4>
          <ul className="space-y-4 text-stone-400">
            <li><a href="#" className="hover:text-orange-500 transition-colors">Features</a></li>
            <li><a href="#" className="hover:text-orange-500 transition-colors">Integrations</a></li>
            <li><a href="#" className="hover:text-orange-500 transition-colors">Changelog</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Resources</h4>
          <ul className="space-y-4 text-stone-400">
            <li><a href="#" className="hover:text-orange-500 transition-colors">Community</a></li>
            <li><a href="#" className="hover:text-orange-500 transition-colors">Blog</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Legal</h4>
          <ul className="space-y-4 text-stone-400">
            <li><a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-orange-500 transition-colors">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-stone-500 text-sm">
        <p>© 2025 CFanatic. All rights reserved.</p>
        <p>Built with ❤️ for the Codeforces community.</p>
      </div>
    </footer>
  );
};
