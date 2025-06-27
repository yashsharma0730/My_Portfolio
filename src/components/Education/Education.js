import React from "react";
import { motion } from "framer-motion";
import "./EducationCSS.css";

const educationData = [
  {
    institute: "GLA University,Mathura",
    location: "Uttar Pradesh,India",
    degree: "B.Tech CSE with Specialization in AIML",
    year: "Bachelor's – 74.40%,2022 – 2026",
  },
  {
    institute: "D.A.V Public School,Sec-14,Faridabad",
    location: "Haryana,India",
    degree: "12th Grade",
    year: "Intermediate – 78.80%, May 2022",
  },
  {
    institute: "D.A.V Public School,Sec-14,Faridabad",
    location: "Haryana,India",
    degree: "10th Grade",
    year: "High School – 88.80%, May 2020",
  },
];

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
  hover: {
    y: -10,
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.5)",
    transition: { type: "spring", stiffness: 400, damping: 10 },
    borderRadius: "0px",
  },
};

const Education = () => {
  return (
    <div id="Education" className="education-section">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <i className="fa-solid fa-user-graduate"></i> Education
      </motion.h2>

      <div className="education-list">
        {educationData.map((item, index) => (
          <motion.div
            key={index}
            className="education-item"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ amount: 0.2 }}
          >
            <div className="education-row">
              <span className="institute">{item.institute}</span>
              <span className="location">{item.location}</span>
            </div>
            <div className="education-row">
              <span className="degree">{item.degree}</span>
              <span className="year">{item.year}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
