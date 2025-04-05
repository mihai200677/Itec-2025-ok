import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag, Sun, Moon, Music } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';

function Navbar() {
  const { cartCount } = useCart();
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-white dark:bg-gray-900 shadow-lg z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Music className="h-8 w-8 text-purple-600" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">CultureDrop</span>
            </Link>
          </div>

          <div className="flex items-center space-x-8">
            <Link to="/shop" className="text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              Shop
            </Link>
            <Link to="/about" className="text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              Contact
            </Link>
            
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isDark ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-gray-700" />}
            </button>

            <div className="relative">
              <ShoppingBag className="h-6 w-6 text-gray-700 dark:text-gray-200" />
              {cartCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
                >
                  {cartCount}
                </motion.span>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;