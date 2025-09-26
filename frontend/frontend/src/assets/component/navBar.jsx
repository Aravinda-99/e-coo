import React from 'react';
import { 
  Search, 
  Phone, 
  Heart, 
  User, 
  ChevronDown, 
  ShoppingBag, 
  Store 
} from 'lucide-react';

const navbar = () => {
  return (
    <header className="bg-white border-b border-gray-200 font-sans">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* ## Top Bar ## */}
        <div className="flex justify-between items-center py-4">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-indigo-600 text-white p-2 rounded-md flex items-center justify-center h-12 w-12">
              <span className="font-bold text-xl">S</span>
              <ChevronDown className="h-6 w-6 -ml-1" />
            </div>
            <div>
              <a href="#" className="font-bold text-2xl text-gray-800">Swoo</a>
              <p className="text-xs text-gray-500">Electronic Market</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-xl mx-6">
            <div className="flex w-full border border-gray-200 rounded-lg overflow-hidden">
              <div className="flex items-center px-4 bg-gray-100 border-r border-gray-200">
                <button className="text-sm text-gray-700 whitespace-nowrap">All Categories</button>
                <ChevronDown className="h-4 w-4 ml-2 text-gray-500" />
              </div>
              <input
                type="text"
                placeholder="Search anything..."
                className="w-full p-3 text-sm bg-white focus:outline-none"
              />
              <button className="bg-indigo-600 text-white p-3 hover:bg-indigo-700 transition-colors">
                <Search className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Right Icons & Info */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 bg-gray-100 rounded-full">
                 <Phone className="h-6 w-6 text-gray-700" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Hotline 24/7</p>
                <p className="font-bold text-lg text-blue-600 tracking-tighter">(025) 3686 25 16</p>
              </div>
            </div>
            
            <div className="relative cursor-pointer">
              <Heart className="h-7 w-7 text-gray-600 hover:text-indigo-600" />
              <span className="absolute -top-1 -right-2 bg-indigo-600 text-white text-xs font-semibold rounded-full h-5 w-5 flex items-center justify-center">2</span>
            </div>
            
            <div className="relative cursor-pointer">
              <User className="h-7 w-7 text-gray-600 hover:text-indigo-600" />
              <span className="absolute -top-1 -right-2 bg-indigo-600 text-white text-xs font-semibold rounded-full h-5 w-5 flex items-center justify-center">2</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200"></div>

        {/* ## Bottom Bar ## */}
        <div className="flex justify-between items-center py-3 text-sm">
          {/* Left Navigation */}
          <div className="flex items-center gap-8">
            <a href="#" className="flex items-center text-gray-800 hover:text-indigo-600 font-medium">
              Demos <ChevronDown className="h-4 w-4 ml-1" />
            </a>
            <a href="#" className="flex items-center text-gray-800 hover:text-indigo-600 font-medium">
              Pages <ChevronDown className="h-4 w-4 ml-1" />
            </a>
            <a href="#" className="flex items-center text-gray-800 hover:text-indigo-600 font-medium">
              Products <ChevronDown className="h-4 w-4 ml-1" />
            </a>
            <a href="#" className="text-gray-800 hover:text-indigo-600 font-medium">Contact</a>
          </div>

          {/* Right Navigation */}
          <div className="flex items-center gap-6 text-gray-600">
             <a href="#" className="flex items-center hover:text-indigo-600">
              <Store className="h-5 w-5 mr-1.5" />
              Sell on Swo
            </a>
             <a href="#" className="flex items-center hover:text-indigo-600">
              <ShoppingBag className="h-5 w-5 mr-1.5" />
              Order Tracking
            </a>
            <a href="#" className="flex items-center hover:text-indigo-600">
              Recently Viewed <ChevronDown className="h-4 w-4 ml-1" />
            </a>
            <div className="flex items-center gap-4">
              <a href="#" className="flex items-center hover:text-indigo-600">
                USD <ChevronDown className="h-4 w-4 ml-1" />
              </a>
              <a href="#" className="flex items-center hover:text-indigo-600">
                <img src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" alt="USA Flag" className="h-4 w-6 mr-2 object-cover" />
                Eng <ChevronDown className="h-4 w-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default navbar;