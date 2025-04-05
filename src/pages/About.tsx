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
          At CultureDrop, we are at the intersection of fashion and music. We are not an online retailer—we are a platform for culture expression. Born from the rhythm of the streets and the beat of global sounds, we combine streetwear with the spirit of music and identity. We believe style has a narrative. That a hoodie can embody hip-hop legacy, a cap can contain a local beat, and sneakers can speak volumes. From drill to techno, from Tokyo to Timişoara, we curate drops that honor cultural pride, bold design, and street intelligence.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ y: -10 }}
          className="about-card"
        >
          <Shirt className="about-icon" />
          <h3 className="about-card-title">Street Style</h3>
          <p className="about-card-text">
          We’re not chasing trends—we’re repping identity. Whether it’s Bronx hip-hop, Paris street fashion, or Craiova underground, our drops reflect the soul of the city. It’s fashion with attitude, music with motion, and a look that always speaks loud.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ y: -10 }}
          className="about-card"
        >
          <Headphones className="about-icon" />
          <h3 className="about-card-title">Cultural Fusion</h3>
          <p className="about-card-text">
          At CultureDrop, cultural fusion isn't an idea—it's our way of life. We take the individual voices of street cultures across the globe and merge them into a single pulsating platform, where fashion and music speak on equal terms. Every drop is a blend of styles, sounds, and stories—celebrating the uniqueness of each culture but bringing them together through the shared creative power.
          </p>
        </motion.div>
      </div>

      <div className="about-story">
        <h2 className="about-story-title">Our Story</h2>
        <p className="about-story-text">
        Founded in 2025, CultureDrop was born out of a deep respect for the convergence of music, fashion, and cultural identity. From concept, the company evolved into an online community where fashion is not just what you wear—it's who you are, 
        what music you listen to, and the culture you are.
        </p>
        <p className="about-story-text">
        We believe that streetwear isn't just clothing—it's attitude, heritage, and individuality sewn into the fabric. The baggy silhouettes, bold graphics, and coarse textures all speak the language of the streets and echo the beats and messages in the music that defines generations. Whether hip-hop and grime, techno and drill, 
        each look has a particular energy that influences the way we dress and the way we move.
        </p>
      </div>
    </motion.div>
  );
}

export default About;