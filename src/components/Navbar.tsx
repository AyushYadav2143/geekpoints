import { Link, useLocation } from 'react-router-dom';
import { useGlobal } from '@/contexts/GlobalContext';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useGlobal();
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="flex justify-center items-center w-10 h-10 rounded-full bg-purple-600 text-white font-bold text-xl">
            G
          </div>
          <Link to="/" className="text-xl font-bold text-foreground hover:text-purple-600 transition-colors">
            GeekPoints
          </Link>
        </div>
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
          </Button>
        </div>
          </Button>
        </div>
      </nav>
    </header>
  );
};

