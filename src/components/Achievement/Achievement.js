import React from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations
import "./AchievementCSS.css";

const achievementsData = [
  {
    text: (
      <> 
        <span className="highlight2">Second Runner Up</span> of Internal SIH 2K24 (G.L.A University).
      </>
    ),
    link: "https://www.linkedin.com/posts/yashsharma0730_hackathon-sih2k24-glauniversity-activity-7237024247619969024-HqsJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD3PA7gBmzH_rbfjH_LParU8M_HqK7HLqaU",
  },
  {
    text: (
      <>
        <span className="highlight2">Winner</span> of Best Innovation Award in  <span className="highlight1">UHACK 3.0</span>(UCER Prayagraj).
      </>
    ),
    link: "https://www.linkedin.com/posts/yashsharma0730_hackathon-sih-machinelearning-activity-7261684651428126720-1ZDH?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD3PA7gBmzH_rbfjH_LParU8M_HqK7HLqaU",
  },
  {
    text: (
      <>
        <span className="highlight2">Winner </span> of Summer Synergy Showcase-S3 (G.L.A University).
      </>
    ),
    link: "https://www.linkedin.com/posts/yashsharma0730_innovation-artificialintelligence-healthcaretech-activity-7275063367088619522-mXkW?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD3PA7gBmzH_rbfjH_LParU8M_HqK7HLqaU",
  },
  {
    text: (
      <>
        Selected in Top-15 teams at Udgam 2025, IIT Guwahati’s flagship entrepreneurial summit.
      </>
    ),
    link: "https://www.linkedin.com/posts/yashsharma0730_iitguwahati-hackathon-tech-activity-7296534687441633282-NplE?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD3PA7gBmzH_rbfjH_LParU8M_HqK7HLqaU",
  },
  {
    text: (
      <>
        Solved <span className="highlight1">100+</span> DSA problems on LeetCode, GFG and more.
      </>
    ),
    link: "https://codolio.com/profile/yashsharma0730",
  },
];

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

const Achievements = () => {
  return (
    <div id="Achievement" className="achievements-section">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <i className="fa-solid fa-medal section-icon"></i> Achievements
      </motion.h2>

      <div className="achievements-container">
        {achievementsData.map((achievement, index) => (
          <motion.div
            key={index}
            className="achievement-item"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
          >
            <i className="fa-solid fa-award achievement-icon"></i>
            <p className="achievement-text">
              {achievement.text}{" "}
              <a
                href={achievement.link}
                target="_blank"
                rel="noopener noreferrer"
                className="achievement-link"
              >
                [Link]
              </a>
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;