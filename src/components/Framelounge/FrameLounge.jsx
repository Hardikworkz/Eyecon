import React from 'react';
import './FrameLounge.css';
import { motion } from "motion/react";

const categoryData = [
  { 
    id: 1, 
    title: 'Eyeglasses', 
    count: '(201)', 
    imgUrl: 'https://cdn.shopify.com/s/files/1/0035/9989/2580/files/cat-1.webp?v=1710233216',
    height: '465px',
    marginTop: '10px'
  },
  { 
    id: 2, 
    title: 'Sunglasses', 
    count: '(211)', 
    imgUrl: 'https://cdn.shopify.com/s/files/1/0035/9989/2580/files/cat-2.webp?v=1710233216',
    height: '501px',
    marginTop: '0px' 
  },
  { 
    id: 3, 
    title: 'Readers', 
    count: '(203)', 
    imgUrl: 'https://cdn.shopify.com/s/files/1/0035/9989/2580/files/cat-3.webp?v=1710233216',
    height: '465px',
    marginTop: '5px'
  },
];

const FrameLounge = () => {
  return (
    <motion.section
      className="lounge-container"
      id="collections"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        className="lounge-header"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="subtitle">The</span>
        <h2 className="title">FRAME LOUNGE</h2>
      </motion.div>
      
      <section className="categories-section">
        <motion.div
          className="categories-wrapper"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
        >
          {categoryData.map((item) => (
            <motion.a 
              key={item.id} 
              href={`/collection/${item.title.toLowerCase()}`} 
              className="category-card"
              style={{ height: item.height, marginTop: item.marginTop }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: 0.12 + item.id * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <h3 className="cat-title">{item.title}</h3>
              
              <div className="cat-img-wrap">
                <img src={item.imgUrl} alt={item.title} />
              </div>

              <div className="cat-footer">
                <span className="cat-arrow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 16h5l8 -8" /><path d="M14 8h5v5" />
            </svg>
                </span>
                 <span className="cat-count">{item.count}</span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </section>
    </motion.section>
  );
};

export default FrameLounge;
