import React from "react";
import "./AboutMeCSS.css";
import profileImage from "../../images/my.jpeg";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <>
      <div id="AboutMe" className="about-section">
        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <h1>
            <i className="fa-regular fa-user"></i> About Me
          </h1>
          <p>
            Hi, I'm <b style={{ color: '#4a90e2', fontSize: "1.2em" }}>Yash Sharma</b>.
            I'm a Machine Learning and Full Stack Developer with a deep passion for building intelligent
             and scalable applications. With a strong foundation in both backend and frontend technologies, 
             along with expertise in data science and AI, I love integrating smart ML solutions into real-world systems. 
             My journey began with a fascination for how data can drive decisions and how seamless user experiences are built. 
             Over time, this curiosity evolved into a rewarding career where I get to blend machine learning models with 
             dynamic web interfaces to solve meaningful problems and create impactful solutions.
          </p>
        </motion.div>
        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            type: "spring",
            stiffness: 80,
            damping: 11
          }}
        >
          <motion.img
            src={profileImage}
            alt="Profile"
            draggable="false"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 150 }}
          />
        </motion.div>
      </div>
    </>
  );
};

export default AboutMe;
