import React from 'react';
import { motion } from 'framer-motion';
import { Music2, Headphones, Shirt } from 'lucide-react';
import '../styles/About.css';

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="about-container"
    >
      <div className="about-header">
        <motion.h1
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="about-title"
        >
          About CultureDrop
        </motion.h1>
        <p className="about-subtitle">
          Where Music Meets Fashion
        </p>
      </div>

      <div className="about-grid">
        <motion.div
          whileHover={{ y: -10 }}
          className="about-card"
        >
          <Music2 className="about-icon" />
          <h3 className="about-card-title">Music Culture</h3>
          <p className="about-card-text">
            Celebrating the rhythm and soul of urban music scenes worldwide.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ y: -10 }}
          className="about-card"
        >
          <Shirt className="about-icon" />
          <h3 className="about-card-title">Street Style</h3>
          <p className="about-card-text">
            Authentic streetwear inspired by global urban culture.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ y: -10 }}
          className="about-card"
        >
          <Headphones className="about-icon" />
          <h3 className="about-card-title">Cultural Fusion</h3>
          <p className="about-card-text">
            Bridging communities through shared passion for music and fashion.
          </p>
        </motion.div>
      </div>

      <div className="about-story">
        <h2 className="about-story-title">Our Story</h2>
        <p className="about-story-text">
          Founded in 2025, CultureDrop emerged from a simple vision: to create a space where music and fashion converge. 
          We believe that style is more than just clothing—it's an expression of cultural identity, musical taste, and personal creativity.
        </p>
        <p className="about-story-text">
          Today, we curate collections that represent the diverse sounds and styles of urban culture, 
          bringing together authentic streetwear with the pulse of contemporary music scenes.
        </p>
      </div>
    </motion.div>
  );
}

export default About;