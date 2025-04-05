import React from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import '../styles/Shop.css'

const products = [
  {
    id: 1,
    name: 'Urban Beats Hoodie',
    price: 89.99,
    image: 'https://kendricklamarstore.com/wp-content/uploads/2025/02/Kendrick-SZA-Merch-Album-Hoodie-768x768.jpg',
    category: 'Streetwear',
  },
  {
    id: 2,
    name: 'Rhythm Rider Jacket',
    price: 129.99,
    image: 'https://kayne-west.b-cdn.net/wp-content/uploads/2021/09/ssrcoclassic_teemensfafafaca443f4786front_altsquare_product600x600-7.jpg',
    category: 'Outerwear',
  },
  {
    id: 3,
    name: 'Bass Drop Tee',
    price: 34.99,
    image: 'https://i.ibb.co/kWKz9bx/9.jpg',
    category: 'T-Shirts',
  },
  {
    id: 4,
    name: 'Vinyl Vibes Cap',
    price: 29.99,
    image: 'https://kendricklamarstore.com/wp-content/uploads/2025/01/GNX-Kendrick-Lamar-Tour-2025-T-Shirt-768x768.jpg',
    category: 'Accessories',
  },
];

function Shop() {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="shop-container"
    >
      <h1 className="shop-title">Shop</h1>
      <div className="shop-grid">
        {products.map((product) => (
          <motion.div
            key={product.id}
            whileHover={{ y: -5 }}
            className="shop-card"
          >
            <Link to={`/product/${product.id}`}>
              <div className="shop-image-wrapper">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  src={product.image}
                  alt={product.name}
                  className="shop-image"
                />
              </div>
            </Link>
            <div className="shop-card-content">
              <span className="shop-category">{product.category}</span>
              <h3 className="shop-product-name">{product.name}</h3>
              <p className="shop-product-price">${product.price}</p>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={addToCart}
                className="shop-add-to-cart"
              >
                Add to Cart
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Shop;