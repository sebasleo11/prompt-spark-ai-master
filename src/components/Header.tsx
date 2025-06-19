
import { Brain, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="p-2 rounded-lg bg-gradient-to-r from-neon-blue to-neon-purple glow-effect group-hover:animate-glow-pulse transition-all duration-300">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold neon-text">PromptMaster AI</h1>
              <p className="text-xs text-slate-400">Optimiza tus prompts</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                location.pathname === '/' 
                  ? 'bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 text-neon-blue border border-neon-blue/30' 
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Inicio
            </Link>
            <Link 
              to="/about" 
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                location.pathname === '/about' 
                  ? 'bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 text-neon-blue border border-neon-blue/30' 
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Acerca de
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 p-4 rounded-lg glass-effect border-t border-white/10">
            <div className="flex flex-col space-y-3">
              <Link 
                to="/" 
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-3 rounded-lg transition-all duration-300 ${
                  location.pathname === '/' 
                    ? 'bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 text-neon-blue border border-neon-blue/30' 
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                Inicio
              </Link>
              <Link 
                to="/about" 
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-3 rounded-lg transition-all duration-300 ${
                  location.pathname === '/about' 
                    ? 'bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 text-neon-blue border border-neon-blue/30' 
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                Acerca de
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
