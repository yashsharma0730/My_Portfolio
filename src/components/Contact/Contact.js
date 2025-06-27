import React from "react";
import "./ContactCSS.css";

const Contact = () => {
  return (
    <>
      <div id="Contact" className="footer">
        <div className="footer-content">
          <div className="footer-ribbon">
            <div className="ribbon-top">YASH SHARMA</div>
            <div className="ribbon-bottom">Machine Learning and Full Stack Developer</div>
          </div>

          <div className="footer-icons">
            <p className="footer-find-text">You can find me here✌</p>
            <div className="icon-links">
              <a
                href="https://www.linkedin.com/in/yash-sharma-58834624b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin footer-icon"></i>
              </a>
              <a
                href="https://github.com/yashsharma0730"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github footer-icon"></i>
              </a>
              <a href="mailto:sharma2004yash@gmail.com">
                <i className="fa-solid fa-envelope footer-icon"></i>
              </a>
              <a
                href="https://codolio.com/profile/yashsharma0730"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-user footer-icon"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-border">
          <p className="footer-text">
            2025 ❤️ © Designed and built by Yash Sharma.
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
