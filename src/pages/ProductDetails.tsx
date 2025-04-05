import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { Star, Music, Tag } from 'lucide-react';
import '../styles/ProductDetails.css'
const products = {
  1: {
    name: 'Urban Beats Hoodie',
    price: 89.99,
    description: 'Premium cotton blend hoodie featuring urban-inspired graphics and comfortable fit.',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80',
    category: 'Streetwear',
    features: ['100% Cotton', 'Relaxed Fit', 'Machine Washable', 'Music-inspired Graphics'],
    rating: 4.5,
    reviews: 128
  },
  2: {
    name: 'Rhythm Rider Jacket',
    price: 129.99,
    description: 'Sleek jacket with modern cut and weather-resistant material.',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80',
    category: 'Outerwear',
    features: ['Water Resistant', 'Breathable Fabric', 'Multiple Pockets', 'Adjustable Cuffs'],
    rating: 4.8,
    reviews: 96
  },
  3: {
    name: 'Bass Drop Tee',
    price: 34.99,
    description: 'Classic t-shirt with music-inspired graphic print.',
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80',
    category: 'T-Shirts',
    features: ['100% Organic Cotton', 'Regular Fit', 'Screen Printed Design', 'Pre-shrunk'],
    rating: 4.3,
    reviews: 75
  },
  4: {
    name: 'Vinyl Vibes Cap',
    price: 29.99,
    description: 'Adjustable cap with embroidered music-inspired design.',
    image: 'https://images.unsplash.com/photo-1534215754734-18e55d13e346?auto=format&fit=crop&w=800&q=80',
    category: 'Accessories',
    features: ['Adjustable Strap', 'Embroidered Design', 'Breathable Mesh', 'One Size Fits Most'],
    rating: 4.6,
    reviews: 52
  },
  5: {
    name: 'Vinyl Vibes Cap',
    price: 29.99,
    description: 'Adjustable cap with embroidered music-inspired design.',
    image: 'https://i.pinimg.com/736x/b5/ac/c5/b5acc58353e13c3a705ff5d535cdf8f4.jpg',
    category: 'Accessories',
    features: ['Adjustable Strap', 'Embroidered Design', 'Breathable Mesh', 'One Size Fits Most'],
    rating: 4.6,
    reviews: 52
  },
  6: {
    image: "https://i.pinimg.com/736x/cf/8d/fa/cf8dfaa5552132580111377f4f82e6cf.jpg"
  },
  7: {
    image: "https://kendricklamarstore.com/wp-content/uploads/2025/01/Grand-National-Tour-2025-Hoodie-Kendrick-Lamar-SZA-768x768.jpg",
  },
  8: {
    image: "https://kendricklamarstore.com/wp-content/uploads/2025/02/Kendrick-SZA-Merch-Album-Hoodie-768x768.jpg"
  },
  9: {
    image: "https://kayne-west.b-cdn.net/wp-content/uploads/2021/09/ssrcoclassic_teemensfafafaca443f4786front_altsquare_product600x600-7.jpg"
  }
  
};

function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const product = products[id as keyof typeof products];

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ x: -50 }}
          animate={{ x: 0 }}
          className="relative"
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            src={product.image}
            alt={product.name}
            className="w-full h-[500px] object-cover rounded-lg shadow-lg"
          />
          <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full">
            {product.category}
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 50 }}
          animate={{ x: 0 }}
          className="space-y-6"
        >
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{product.name}</h1>
            <div className="flex items-center mt-2 space-x-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400'
                        : 'text-gray-300'
                    }`}
                    fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                  />
                ))}
              </div>
              <span className="text-gray-600 dark:text-gray-300">
                ({product.reviews} reviews)
              </span>
            </div>
          </div>

          <div className="text-2xl font-bold text-purple-600">${product.price}</div>

          <p className="text-gray-600 dark:text-gray-300">{product.description}</p>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Features</h3>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                  <Music className="w-4 h-4 text-purple-600" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={addToCart}
            className="w-full bg-purple-600 text-white py-3 px-6 rounded-md hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2"
          >
            <Tag className="w-5 h-5" />
            <span>Add to Cart</span>
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default ProductDetails;