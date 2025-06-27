import React, { useState } from "react";
import "./ExperienceCSS.css";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      role: "🧑‍💻 Machine Learning Intern",
      organization: "JOVAC, GLA University",
      duration: "June 2024-July 2024",
      details:
        "As a Machine Learning Intern at JOVAC, G.L.A University, I worked on enhancing real-world AI systems focused on food image analysis and nutritional intelligence. My contributions included improving existing deep learning models such as YOLOv8, CNN, VGG16, and ResNet, achieving a 15% boost in prediction accuracy for calorie estimation by intelligently restructuring the dataset into multiple food classes. I also applied a Decision Tree Classifier to reduce misclassification by 30%, significantly improving overall model reliability. In addition, I designed and implemented a Hybrid Recommendation System that suggests three nutritionally equivalent food alternatives based on micronutrients, macronutrients, and calorie content. This internship not only deepened my technical expertise in computer vision and model optimization but also strengthened my ability to apply machine learning creatively to solve real-world health and nutrition challenges."},
        {
      role: "🐦‍🔥 Founder ",
      organization: "TechVepra",
      duration: "Dec 2024 - Present",
      details:
        "Founding TechVepra, the first-ever tech community at our college, has been a transformative journey in leadership and community engagement. I started TechVepra with the aim of building a collaborative space where students passionate about technology could come together to learn, grow, and share opportunities.Our community focuses on sharing verified tech events, organizing workshops and peer-learning sessions, and promoting access to reliable resources. More than just a platform, TechVepra has become a workspace for like-minded individuals to collaborate on ideas, stay updated with the tech ecosystem, and build valuable connections.This initiative has taught me the true value of leading with purpose, building trust within a team, and sustaining a culture of knowledge-sharing. It has also helped me develop strong organizational, networking, and leadership skills, while creating a meaningful impact on my peers and college culture."
},
        {
      role: "🧑‍💻 Data Science and Analytics Intern",
      organization: "Zidio Development",
      duration: "May 2025 - July 2025",
      details:
        "As a Data Science and Analytics Intern at Zidio Development, I worked on building an AI-powered Health Assistant Application aimed at promoting personal wellness. My key contributions included developing a dashboard for calorie prediction, personalized diet recommendations, and health analysis based on user inputs and image data. I also integrated a chatbot to guide users with real-time suggestions and support. This experience enhanced my skills in AI, data analysis, and visualization while deepening my understanding of user-centric health tech solutions."},
    
  ];

  const [expanded, setExpanded] = useState({});

  const toggleExpanded = (index) => {
    setExpanded((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <section id="Experience" className="experience-section">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <i className="fa-solid fa-business-time"></i> Experience
      </motion.h2>
      <motion.div
        className="experience-timeline"
        initial="hidden"
        whileInView="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.2, // Add staggered animation for items
            },
          },
        }}
      >
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, x: -30 }} // Start from the left and invisible
            whileInView={{ opacity: 1, x: 0 }} // Move into place with full opacity
            transition={{
              duration: 0.6,
              type: "spring",
              stiffness: 100,
              damping: 25,
              delay: 0.15 * index, // Delay between items
            }}
          >
            <div className="timeline-content">
              <h3>{experience.role}</h3>
              <p className="organization">{experience.organization}</p>
              <span className="duration">{experience.duration}</span>
              <p className="details">
                {expanded[index]
                  ? experience.details
                  : `${experience.details.substring(0, 250)}...`}{" "}
                <span
                  className="toggle-button"
                  onClick={() => toggleExpanded(index)}
                  style={{ color: "#0078d4", cursor: "pointer" }}
                >
                  {expanded[index] ? "See Less" : "See More"}
                </span>
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;
