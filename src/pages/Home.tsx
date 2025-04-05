import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Music2, Shirt, Globe } from 'lucide-react';
import '../styles/Home.css';

function Home() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
        <section id="section1" className="Top_of_page">
          <div className="home-hero-content">
            <motion.h1
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="home-title"
            >
              <button onClick={() => scrollToSection('section1')}>
                CultureDrop
              </button>
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
        </section>
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
                id: 1,
                name: 'Urban Beats Hoodie',
                price: 70.99+"$",
                image: 'https://kendricklamarstore.com/wp-content/uploads/2025/02/Kendrick-SZA-Merch-Album-Hoodie-768x768.jpg',
                category: 'Hoodie',
                
              },
              {
                id: 2,
                name: 'Kanye West T-shirt (Red Edition)',
                price: 129.99+"$",
                image: 'https://kayne-west.b-cdn.net/wp-content/uploads/2021/09/ssrcoclassic_teemensfafafaca443f4786front_altsquare_product600x600-7.jpg',
                category: 'T-Shirts',
              },
              {
                id: 3,
                name: 'Kanye West T-shirt(Black Edition',
                price: 34.99+"$",
                image: 'https://i.ibb.co/kWKz9bx/9.jpg',
                category: 'T-Shirts',
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
