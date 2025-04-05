import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useGlobal } from '@/contexts/GlobalContext';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useGlobal();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full px-4 py-4 sm:px-6 md:px-8 transition-all fixed top-0 z-50 backdrop-blur-md bg-background/90">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Left Logo */}
        <div className="flex items-center gap-2">
          <div className="flex justify-center items-center w-10 h-10 rounded-full bg-purple-600 text-white font-bold text-xl">
            G
          </div>
          <Link to="/" className="text-xl font-bold text-foreground hover:text-purple-600 transition-colors">
            GeekPoints
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link 
            to="/" 
            className={`font-medium transition-colors hover:text-purple-600 ${isActive('/') ? 'text-purple-600' : 'text-foreground'}`}
          >
            Home
          </Link>
          <Link 
            to="/leaderboard" 
            className={`font-medium transition-colors hover:text-purple-600 ${isActive('/leaderboard') ? 'text-purple-600' : 'text-foreground'}`}
          >
            Leaderboard
          </Link>
          <Link 
            to="/about" 
            className={`font-medium transition-colors hover:text-purple-600 ${isActive('/about') ? 'text-purple-600' : 'text-foreground'}`}
          >
            About
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className="ml-2"
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={toggleDarkMode} aria-label="Toggle theme">
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden mt-2 px-4 pb-4 space-y-2 bg-background shadow-sm rounded-lg">
          <Link 
            to="/" 
            onClick={() => setIsMenuOpen(false)}
            className={`block py-2 font-medium transition-colors hover:text-purple-600 ${isActive('/') ? 'text-purple-600' : 'text-foreground'}`}
          >
            Home
          </Link>
          <Link 
            to="/leaderboard" 
            onClick={() => setIsMenuOpen(false)}
            className={`block py-2 font-medium transition-colors hover:text-purple-600 ${isActive('/leaderboard') ? 'text-purple-600' : 'text-foreground'}`}
          >
            Leaderboard
          </Link>
          <Link 
            to="/about" 
            onClick={() => setIsMenuOpen(false)}
            className={`block py-2 font-medium transition-colors hover:text-purple-600 ${isActive('/about') ? 'text-purple-600' : 'text-foreground'}`}
          >
            About
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;