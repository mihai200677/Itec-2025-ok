import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Music2, Shirt, Globe } from 'lucide-react';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home-container">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="home-hero"
      >
        <div
          className="home-hero-bg"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?cs=srgb&dl=pexels-sebastian-ervi-866902-1763075.jpg&fm=jpg)',
          }}
        />
        <div className="home-hero-content">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="home-title"
          >
            CultureDrop
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="home-subtitle"
          >
            Where Music Meets Fashion
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Link to="/shop" className="home-shop-button">
              Shop Now
              <ArrowRight className="home-shop-icon" />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <section className="home-features">
        <div className="home-features-container">
          <div className="home-features-header">
            <h2 className="home-features-title">Why Choose CultureDrop?</h2>
            <p className="home-features-text">
              Experience the perfect blend of music and fashion
            </p>
          </div>
          <div className="home-features-grid">
            <motion.div whileHover={{ y: -10 }} className="home-feature-card">
              <Music2 className="home-feature-icon" />
              <h3 className="home-feature-title">Music Inspired</h3>
              <p className="home-feature-text">
              Every piece channels the raw energy of urban life—graffiti, concrete, motion—fused with the rhythm, emotion, and attitude of music. 
              It’s where style meets sound.
              </p>
            </motion.div>
            <motion.div whileHover={{ y: -10 }} className="home-feature-card">
              <Shirt className="home-feature-icon" />
              <h3 className="home-feature-title">Quality Fashion</h3>
              <p className="home-feature-text">
                Premium materials and authentic streetwear designs
              </p>
            </motion.div>
            <motion.div whileHover={{ y: -10 }} className="home-feature-card">
              <Globe className="home-feature-icon" />
              <h3 className="home-feature-title">Global Culture</h3>
              <p className="home-feature-text">
                Celebrating diversity through fashion and music
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="home-products">
        <div className="home-products-container">
          <div className="home-products-header">
            <h2 className="home-products-title">Featured Collection</h2>
            <p className="home-products-text">
              Latest drops from our exclusive collection
            </p>
          </div>
          <div className="home-products-grid">
            {[
              {
                name: 'Urban Beats Hoodie',
                price: '$89.99',
                image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80',
              },
              {
                name: 'Rhythm Rider Jacket',
                price: '$129.99',
                image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80',
              },
              {
                name: 'Bass Drop Tee',
                price: '$34.99',
                image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80',
              },
            ].map((product, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="home-product-card"
              >
                <div className="home-product-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="home-product-info">
                  <h3 className="home-product-name">{product.name}</h3>
                  <p className="home-product-price">{product.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;