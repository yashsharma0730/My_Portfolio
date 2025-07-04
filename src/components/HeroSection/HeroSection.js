import React, { useState, useEffect } from "react";
import "./HeroSectionCSS.css";
// import heroImage from "../../images/myPhoto1.jpg";
import { motion } from "framer-motion";
import TechGlobe from "../TechGlobe/TechGlobe"

// Typing effect component
const TypingEffect = ({ text, speed, loop }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // eslint-disable-next-line
    let timeout;
    const typeText = () => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prevIndex) => prevIndex + 1);
      } else {
        if (loop) {
          timeout = setTimeout(() => {
            setDisplayedText("");
            setIndex(0);
          }, 2000);
        }
      }
    };

    const interval = setInterval(typeText, speed);

    return () => clearInterval(interval);
  }, [index, text, speed, loop]);

  return <motion.span>{displayedText}</motion.span>;
};

const HeroSection = () => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          } else {
            setIsInView(false);
          }
        });
      },
      { threshold: 0.3 }
    );

    const heroSection = document.querySelector(".hero-section");
    observer.observe(heroSection);

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <div className="availability-badge shine-button">
        <div className="ping-dot" />
        <p>Available for new projects and opportunities.</p>
      </div>
      <div className="hero-section">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
          >
            <TypingEffect text="Hi, I'm Yash Sharma." speed={150} loop={true} />
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
            transition={{ duration: 1.2, type: "spring", stiffness: 100 }}
          >
             I build intelligent systems with Machine Learning.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 1.5 }}
          >
          Dive into innovative solutions and projects crafted with purpose and precision.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 1.7 }}
          >
            <a
              href="https://drive.google.com/file/d/1g0wxJ0e2BsTHm9XXwEjJlCmXWCcL9IAS/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="join-button shine-button"
            >
              My Resume
            </a>
            <a href="mailto:sharma2004yash@gmail.com" className="contact-link shine-button">
              Mail Me
            </a>
          </motion.div>
        </div>
        <TechGlobe />
        {/* <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.8 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <img draggable="false" src={heroImage} alt="Hero" />
        </motion.div> */}
      </div>
    </div>
  );
};

export default HeroSection;
