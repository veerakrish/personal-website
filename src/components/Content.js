import React from 'react';
import Publications from './Publications';
import Projects from './Projects';
import LabManual from './LabManual';
import '../styles/Content.css';

const Content = () => {
  return (
    <div className="content-container">
      <section id="about" className="section">
        <h2>About Me</h2>
        <div className="about-content">
          <p>I am Mr. Viswanath Veera Krishna Maddinala, a dedicated Assistant Professor and Research Scholar. My research focuses on Large Language Models (LLMs), Computer Networks, and Data Science. I am passionate about advancing the field of AI and making complex technical concepts accessible to students through practical, hands-on learning experiences.</p>
          
          <div className="qualifications">
            <h3>Education & Qualifications</h3>
            <ul>
              <li>Ph.D. in Computer Science (Pursuing)</li>
              <li>M.Tech in Computer Science</li>
              <li>M.E in Embedded Systems</li>
              <li>B.Tech in Information Technology</li>
            </ul>
          </div>

          <div className="expertise-areas">
            <h3>Areas of Expertise</h3>
            <ul>
              <li>Large Language Models (LLMs) & Natural Language Processing</li>
              <li>Computer Networks & Network Security</li>
              <li>Data Science & Machine Learning</li>
              <li>Cloud Computing & Distributed Systems</li>
              <li>Full Stack Development & DevOps</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="lab-manual" className="section">
        <h2>Cloud Computing Lab Manual</h2>
        <div className="lab-manual-content">
          <p className="lab-intro">A comprehensive guide designed to provide hands-on experience with various cloud computing technologies and concepts. Each experiment includes detailed procedures, expected outcomes, and practical applications.</p>
          <LabManual />
        </div>
      </section>

      <section id="projects" className="section">
        <h2>Featured Projects</h2>
        <Projects />
      </section>

      <section id="publications" className="section">
        <h2>Research Publications</h2>
        <Publications />
      </section>

      <section id="courses" className="section">
        <h2>Course Materials</h2>
        <div className="courses-content">
          <div className="course-description">
            <p>Access comprehensive course materials designed to provide a strong foundation in cloud computing concepts and practical implementation. Materials are regularly updated to reflect the latest industry trends and technologies.</p>
          </div>

          <h3>Course Objectives</h3>
          <ul className="objectives-list">
            <li><strong>CO1:</strong> Understanding service types, delivery models, and cloud technologies</li>
            <li><strong>CO2:</strong> Mastering VM and container-based services</li>
            <li><strong>CO3:</strong> Addressing cloud application challenges</li>
            <li><strong>CO4:</strong> Implementing serverless computing and cloud simulation</li>
            <li><strong>CO5:</strong> Exploring cloud programming paradigms</li>
          </ul>
        </div>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        <div className="contact-content">
          <p>Feel free to reach out for any queries regarding course materials, lab experiments, or research collaborations.</p>
          
          <div className="contact-info">
            <p><strong>Email:</strong> veerukhannan@gmail.com</p>
            <p><strong>Office Hours:</strong> Monday - Friday, 10:00 AM - 4:00 PM</p>
            <p><strong>Location:</strong> Department of Computer Science and Engineering</p>
          </div>

          <div className="social-links">
            <h3>Professional Profiles</h3>
            <ul>
              <li><a href="https://github.com/veerakrish" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/veera-krishna-0a79084a/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li>
                <a 
                  href="https://orcid.org/0000-0001-5762-4955" 
                  target="orcid.widget" 
                  rel="me noopener noreferrer" 
                  className="orcid-link"
                >
                  <img
                    src="https://orcid.org/sites/default/files/images/orcid_16x16.png"
                    alt="ORCID iD icon"
                    className="orcid-icon"
                  />
                  ORCID Profile
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Content;
