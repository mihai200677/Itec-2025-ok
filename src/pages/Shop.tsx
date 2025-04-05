import React from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import '../styles/Shop.css'

const products = [
  {
    id: 1,
    name: 'Kendrik Lamar Hoodie(Grand National )',
    price: 70.99+"$",
    image: 'https://kendricklamarstore.com/wp-content/uploads/2025/02/Kendrick-SZA-Merch-Album-Hoodie-768x768.jpg',
    category: 'Hoodie',
  },
  {
    id: 2,
    name: 'Kanye West T-shirt (Red Edition Tour 2025 Edition)',
    price: 129.99+"$",
    image: 'https://kayne-west.b-cdn.net/wp-content/uploads/2021/09/ssrcoclassic_teemensfafafaca443f4786front_altsquare_product600x600-7.jpg',
    category: 'T-Shirts',
  },
  {
    id: 3,
    name: 'Kanye West T-shirt(Black Edition)',
    price: 34.99+"$",
    image: 'https://i.ibb.co/kWKz9bx/9.jpg',
    category: 'T-Shirts',
  },
  {
    id: 4,
    name: 'Kendrik Lamar T-Shirt (Grand National Tour 2025 Edition)',
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