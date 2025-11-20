import { ShoppingCart, Menu, X, Search } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#171B2E] text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-[#CB1F2F]">KR Net Makers</h1>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#" className="hover:text-[#CB1F2F] transition-colors">Home</a>
            <a href="#" className="hover:text-[#CB1F2F] transition-colors">Shop</a>
            <a href="#" className="hover:text-[#CB1F2F] transition-colors">Categories</a>
            <a href="#" className="hover:text-[#CB1F2F] transition-colors">About</a>
            <a href="#" className="hover:text-[#CB1F2F] transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="hover:text-[#CB1F2F] transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="hover:text-[#CB1F2F] transition-colors relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-[#CB1F2F] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-[#CB1F2F] transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-3">
              <a href="#" className="hover:text-[#CB1F2F] transition-colors">Home</a>
              <a href="#" className="hover:text-[#CB1F2F] transition-colors">Shop</a>
              <a href="#" className="hover:text-[#CB1F2F] transition-colors">Categories</a>
              <a href="#" className="hover:text-[#CB1F2F] transition-colors">About</a>
              <a href="#" className="hover:text-[#CB1F2F] transition-colors">Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
