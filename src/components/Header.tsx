import { useState } from 'react';
import { Search, User, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import ShoppingCart from './ShoppingCart';
import FavoritesList from './FavoritesList';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const Header = ({ searchQuery, setSearchQuery }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 mr-8">
            <Link to="/">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-slate-800 to-blue-900 bg-clip-text text-transparent">
                SRK Styles
              </h1>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/men" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">Men</Link>
            <Link to="/women" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">Women</Link>
            <Link to="/children" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">Children</Link>
            <Link to="/occasions" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">Occasions</Link>
            <Link to="/seasonal" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">Seasonal</Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="Search for styles, occasions, seasons..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 rounded-full border-2 border-gray-200 focus:border-blue-400 transition-all duration-300"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Link to="/account">
              <Button variant="ghost" size="sm" className="p-2 hover:bg-blue-100 transition-colors duration-300">
                <User className="w-5 h-5 text-gray-700" />
              </Button>
            </Link>
            <FavoritesList />
            <ShoppingCart />
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 rounded-full"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              </div>
              <nav className="flex flex-col space-y-2">
                <Link to="/men" className="text-gray-700 hover:text-blue-600 py-2">Men</Link>
                <Link to="/women" className="text-gray-700 hover:text-blue-600 py-2">Women</Link>
                <Link to="/children" className="text-gray-700 hover:text-blue-600 py-2">Children</Link>
                <Link to="/occasions" className="text-gray-700 hover:text-blue-600 py-2">Occasions</Link>
                <Link to="/seasonal" className="text-gray-700 hover:text-blue-600 py-2">Seasonal</Link>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
