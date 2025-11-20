import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#171B2E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-[#CB1F2F] mb-4">KR Net Makers</h3>
            <p className="text-gray-400 mb-4">
              Your trusted partner for premium sports equipment and apparel. Quality you can count on.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#CB1F2F] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[#CB1F2F] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[#CB1F2F] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[#CB1F2F] transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-[#CB1F2F] transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#CB1F2F] transition-colors">Shop</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#CB1F2F] transition-colors">Categories</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#CB1F2F] transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-[#CB1F2F] transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#CB1F2F] transition-colors">Returns</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#CB1F2F] transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#CB1F2F] transition-colors">Size Guide</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-1 flex-shrink-0 text-[#CB1F2F]" />
                <span className="text-gray-400">123 Sports Avenue, New York, NY 10001</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 flex-shrink-0 text-[#CB1F2F]" />
                <span className="text-gray-400">+932 0105 5156</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 flex-shrink-0 text-[#CB1F2F]" />
                <span className="text-gray-400">krnetmakersofficial@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; 2024 KR Net Makers. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#CB1F2F] transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-[#CB1F2F] transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-[#CB1F2F] transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
