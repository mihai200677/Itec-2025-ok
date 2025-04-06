import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import '../styles/Contact.css';

function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="contact-container"
    >
      <div className="contact-header">
        <motion.h1
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="contact-title"
        >
          Contact Us
        </motion.h1>
        <p className="contact-subtitle">
          Get in touch with the Culture Drop team
        </p>
      </div>

      <div className="contact-content">
        <motion.div
          initial={{ x: -50 }}
          animate={{ x: 0 }}
          className="contact-info"
        >
          <div className="contact-item">
            <Mail className="contact-icon" />
            <div>
              <h3 className="contact-item-title">Email</h3>
              <p className="contact-item-text">support@culturedrop.ro</p>
            </div>
          </div>

          <div className="contact-item">
            <Phone className="contact-icon" />
            <div>
              <h3 className="contact-item-title">Phone</h3>
              <p className="contact-item-text">+40 774 028 113</p>
            </div>
          </div>

          <div className="contact-item">
            <MapPin className="contact-icon" />
            <div>
              <h3 className="contact-item-title">Location</h3>
              <p className="contact-item-text">Bulevardul Vasile Pârvan 4, Timișoara 300223</p>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ x: 50 }}
          animate={{ x: 0 }}
          onSubmit={handleSubmit}
          className="contact-form"
        >
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formState.name}
              onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              className="form-input"
            />
          </div>  

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formState.email}
              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              className="form-input"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="form-button"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </motion.div>
  );
}

export default Contact;