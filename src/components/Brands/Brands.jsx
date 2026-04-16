import React from 'react';
import './Brands.css';
import { useState } from 'react';
import { HiArrowLongRight, HiArrowLongLeft } from "react-icons/hi2";
import { motion } from "motion/react";
const Brands = () => {
   
   
  const [products] = useState([
    { id: 1, name: 'Creative', price: '$59.0', img: 'https://cdn.shopify.com/s/files/1/0035/9989/2580/products/Creative-c1-2-edited_aec77e7a-1f34-43da-84b4-790e072b4ea2.jpg?v=1643648103' },
    { id: 2, name: 'Jesse Blue', price: '$59.0', img: 'https://cdn.shopify.com/s/files/1/0035/9989/2580/files/IMG_0808.jpg?v=1701808572' },
    { id: 3, name: 'Dayton Youth', price: '$59.0', img: 'https://cdn.shopify.com/s/files/1/0035/9989/2580/products/Dayton-C1-2-resized-1.jpg?v=1648059737' },
    { id: 4, name: 'Outloud', price: '$59.0', img: 'https://cdn.shopify.com/s/files/1/0035/9989/2580/products/Outloud-c2-2-resized.jpg?v=1654116486' },{ id: 5, name: 'Creative', price: '$59.0', img: 'https://cdn.shopify.com/s/files/1/0035/9989/2580/products/Creative-c1-2-edited_aec77e7a-1f34-43da-84b4-790e072b4ea2.jpg?v=1643648103' },
    { id: 6, name: 'Jesse Blue', price: '$59.0', img: 'https://cdn.shopify.com/s/files/1/0035/9989/2580/files/IMG_0808.jpg?v=1701808572' },
    { id: 7, name: 'Dayton Youth', price: '$59.0', img: 'https://cdn.shopify.com/s/files/1/0035/9989/2580/products/Dayton-C1-2-resized-1.jpg?v=1648059737' },
    { id: 8, name: 'Outloud', price: '$59.0', img: 'https://cdn.shopify.com/s/files/1/0035/9989/2580/products/Outloud-c2-2-resized.jpg?v=1654116486' },
  ]);

  const [activeIndex, setActiveIndex] = useState(1); // Set "Jesse Blue" as default center

  const moveSlide = (direction) => {
    if (direction === 'next' && activeIndex < products.length - 1) setActiveIndex(activeIndex + 1);
    if (direction === 'prev' && activeIndex > 0) setActiveIndex(activeIndex - 1);
  };

  return (
    <motion.section
      id="brands"
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <section className="brands-section">
        <motion.div
          className="brands-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="trending-text">TRENDING</h2>
          <h3 className="products-text">Brands</h3>
        </motion.div>
      </section>
      <motion.div
        className="slider-container"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.75, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="slider-wrap">
          <div className="slider">
            {products.map((item, index) => {
              const farFrom = index - activeIndex;
              const farFromAbs = Math.abs(farFrom);

              return (
                <div
                  key={item.id}
                  className={`slide ${farFrom === 0 ? '-active' : ''}`}
                  style={{
                    '--far-from': farFrom,
                    '--far-from-abs': farFromAbs,
                  }}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="product-card">
                    <figure className="brand-image">
                        Eyecon
                    </figure>
                    <figure className="product-image">
                      <img src={item.img} alt={item.name} />
                    </figure>
                    <footer>
                      <span className="product-name">{item.name}</span>
                      <span className="price">{item.price}</span>
                    </footer>
                    <div className="variants">
                      <span className="variant-dot">1</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="controls">
          <button onClick={() => moveSlide('prev')} className="nav-btn">
              <HiArrowLongLeft />
          </button>
          <button onClick={() => moveSlide('next')} className="nav-btn">
              <HiArrowLongRight />
          </button>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Brands;
