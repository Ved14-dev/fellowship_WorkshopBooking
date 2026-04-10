import React, { useState } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';

const Navbar = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 h-20 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 p-2 rounded-lg text-white">
            <BookOpen size={24} />
          </div>
          <span className="text-xl font-bold text-slate-900">
            FOSSEE <span className="text-blue-600">Workshops</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => handleNavigation('home')} 
            className={`font-semibold transition-colors pb-1 border-b-2 ${
              currentPage === 'home' ? 'text-blue-600 border-blue-600' : 'text-slate-600 hover:text-blue-600 border-transparent'
            }`}
          >
            Home
          </button>
          <button 
            onClick={() => handleNavigation('stats')} 
            className={`font-semibold transition-colors pb-1 border-b-2 ${
              currentPage === 'stats' ? 'text-blue-600 border-blue-600' : 'text-slate-600 hover:text-blue-600 border-transparent'
            }`}
          >
            Statistics
          </button>
          <button 
            onClick={() => handleNavigation('login')} 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-all"
          >
            Login
          </button>
        </div>

        <button
          className="md:hidden bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 p-4 space-y-2">
          <button onClick={() => handleNavigation('home')} className="w-full text-left px-4 py-2 text-slate-700 font-semibold hover:bg-slate-50">
            Home
          </button>
          <button onClick={() => handleNavigation('stats')} className="w-full text-left px-4 py-2 text-slate-700 font-semibold hover:bg-slate-50">
            Statistics
          </button>
          <button onClick={() => handleNavigation('login')} className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold mt-2">
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
