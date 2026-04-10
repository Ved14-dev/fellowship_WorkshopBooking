import React, { useState } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';

/**
 * Navbar Component
 * Modernized navigation to replace the legacy Django top-bar.
 * Designed to be sticky for quick navigation between stats and home.
 *
 * Notes on responsiveness:
 * - We hide the desktop nav and show a hamburger on small screens using `md:hidden` / `md:flex`.
 * - `md:flex` means "use flex layout at medium screens and up (>=768px)" so larger layouts show the full menu.
 * - This keeps mobile UI compact while allowing an expanded desktop nav for quick access.
 */
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-slate-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-lg text-white">
              <BookOpen size={24} />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-800">
              FOSSEE <span className="text-blue-600 font-medium">Workshops</span>
            </span>
          </div>

          {/* Desktop Navigation - Hidden on mobile devices */}
          <div className="hidden md:flex items-center space-x-10">
            <a href="/" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">Home</a>
            <a href="/stats" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">Workshop Statistics</a>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl font-bold transition-all shadow-lg shadow-blue-100">
              Login
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-500 hover:text-slate-800 p-2 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-50 p-6 space-y-4 shadow-xl animate-in slide-in-from-top">
          <a href="/" className="block text-lg font-bold text-slate-700">Home</a>
          <a href="/stats" className="block text-lg font-bold text-slate-700">Workshop Statistics</a>
          <hr className="border-slate-100" />
          <button className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg shadow-md">
            Sign In
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
