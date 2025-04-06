import React from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import '../styles/Shop.css'

const products = [
  
  {
    id: 1,
    name: 'Kendrik Lamar Hoodie(Grand National)',
    price: 59.99.toFixed(2),
    image: 'https://kendricklamarstore.com/wp-content/uploads/2025/02/Kendrick-SZA-Merch-Album-Hoodie-768x768.jpg',
    category: 'Hoodie',
  },

  {
    id: 2,
    name: 'EMINEM Arrest Hooded Sweatshirt',
    price: 64.99.toFixed(2),
    image: 'https://rockabilia.com/cdn/shop/files/418512F_1024x1024.jpg?v=1701533113',
    category: 'Hoodie',
  },

  {
    id: 3,
    name: 'Streetwear Hoodie - Music Fan Apparel - Rap Merchandise - Rap Concert Apparel',
    price: 73.50.toFixed(2),
    image: 'https://i.etsystatic.com/20701597/r/il/160c7d/6762464595/il_1588xN.6762464595_e4if.jpg',
    category: 'Hoodie',
  },

  {
    id: 4,
    name: 'Kanye West T-shirt (Red Edition Tour 2025 Edition)',
    price: 45.99.toFixed(2),
    image: 'https://kayne-west.b-cdn.net/wp-content/uploads/2021/09/ssrcoclassic_teemensfafafaca443f4786front_altsquare_product600x600-7.jpg',
    category: 'T-Shirts',
  },
  
  {
    id: 5,
    name: 'Kanye West T-shirt(Black Edition)',
    price: 34.99.toFixed(2),
    image: 'https://i.ibb.co/kWKz9bx/9.jpg',
    category: 'T-Shirts',
  },

  {
    id: 6,
    name: 'Kendrik Lamar T-Shirt (Grand National Tour 2025 Edition)',
    price: 29.99.toFixed(2),
    image: 'https://kendricklamarstore.com/wp-content/uploads/2025/01/GNX-Kendrick-Lamar-Tour-2025-T-Shirt-768x768.jpg',
    category: 'T-Shirts',
  },
  
  {
    id: 7,
    name: '2PAC LA Skyline Kids Tee Childrens T-shirt',
    price: 29.99.toFixed(2),
    image: 'https://rockabilia.com/cdn/shop/products/422192F_1024x1024.jpg?v=1654705707',
    category: 'T-Shirts',
  },
  {
    id: 8,
    name: 'EMINEM Detroit Portrait T-shirt',
    price: 29.99.toFixed(2),
    image: 'https://rockabilia.com/cdn/shop/products/140182F_1024x1024.jpg?v=1672981387',
    category: 'T-Shirts',
  },
  {
    id: 9,
    name: 'GOLD RING Dollar Sign',
    price: 929.99.toFixed(2),
    image: 'https://static-01.daraz.com.bd/p/4c603b2c35a9ad44562172081604eb02.jpg',
    category: 'Accessories',
  },

  {
    id:10,
    name: 'EMINEM Slim Shady Snapback Baseball Cap',
    price: 20.99.toFixed(2),
    image: 'https://rockabilia.com/cdn/shop/products/418956F_1024x1024.jpg?v=1654786552',
    category: 'Accessories',
  }


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