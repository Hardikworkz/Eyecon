import React, { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import './HeroSection.css';
import hero_img from '../../assets/herosection.jpg';

const products = [
  {
    name: "Allpoets Breton",
    url: "https://cdn.shopify.com/s/files/1/0035/9989/2580/products/Creative-c1-2-edited_aec77e7a-1f34-43da-84b4-790e072b4ea2.jpg?v=1643648103",
    link: "/product/breton"
  },
  {
    name: "Creative C1",
    url: "https://cdn.shopify.com/s/files/1/0035/9989/2580/products/Clifton.Red.Left.jpg?v=1646189221",
    link: "/product/creative"
  },
  {
    name: "Clifton Retro",
    url: "https://cdn.shopify.com/s/files/1/0035/9989/2580/products/Creative-c1-2-edited_aec77e7a-1f34-43da-84b4-790e072b4ea2.jpg?v=1643648103", // Replace with a 3rd image if you have one
    link: "/product/clifton"
  }
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const heroRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.08, 1]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 3000); // 3 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-container" id="hero" ref={heroRef}>
      <div className="hero-background">
        <motion.img src={hero_img} alt="Background" style={{ scale: heroScale }} />
      </div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
        >
          Elevate your<br/>vision
        </motion.h1>

        <motion.a
          href="#collections"
          className="hero-cta"
          aria-label="Shop eyewear collections"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={
            prefersReducedMotion
              ? undefined
              : {
                  y: -8,
                  rotate: -3,
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
                  transition: {
                    duration: 0.45,
                    delay: 0,
                    ease: [0.165, 0.84, 0.44, 1],
                  },
                }
          }
          whileTap={
            prefersReducedMotion
              ? undefined
              : {
                  scale: 0.985,
                  transition: { duration: 0.12, delay: 0 },
                }
          }
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="cta-label">SHOP NOW</span>
          
          <div className="frame-container">
            <span key={products[index].name} className="frame-name slide-up">
              Frame: {products[index].name}
            </span>
          </div>

          <span className="arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 16h5l8 -8" /><path d="M14 8h5v5" />
            </svg>
          </span>

          <div className="img-wrap">
            <figure className="img-container">
              <img 
                key={products[index].url}
                src={products[index].url} 
                alt={products[index].name} 
                className="fade-in"
              />
            </figure>
          </div>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
