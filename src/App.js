import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-brand">Mr. Viswanath Veera Krishna</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="hero-section">
        <div className="hero-content">
          <div className="hero-left">
            <div className="profile-image">
              <img src={process.env.PUBLIC_URL + '/profile.jpeg'} alt="Mr. Viswanath Veera Krishna" />
            </div>
          </div>
          <div className="hero-right">
            <h1>Mr. Viswanath Veera Krishna Maddinala</h1>
            <h2>Assistant Professor & Research Scholar</h2>
            <p className="hero-text">Specializing in LLMs, Computer Networks, and Data Science</p>
            <a href="#contact" className="cta-button">Get in Touch</a>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="section-content">
          <div className="about-grid">
            <div className="about-text">
              <h2>About Me</h2>
              <p>I am an Assistant Professor and Research Scholar with a focus on Large Language Models (LLMs). My expertise spans across various domains of computer science, including programming, data science, and computer networks. As a certified CCNA educator and Palo Alto Networks basic educator, I bring both theoretical knowledge and practical experience to my teaching.</p>
              <div className="stats-grid">
                <div className="stat-item">
                  <h3>2</h3>
                  <p>Master's Degrees</p>
                </div>
                <div className="stat-item">
                  <h3>CCNA</h3>
                  <p>Certified Educator</p>
                </div>
                <div className="stat-item">
                  <h3>PhD</h3>
                  <p>Research Scholar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="section dark">
        <div className="section-content">
          <h2>Education</h2>
          <div className="experience-grid">
            <div className="experience-card">
              <h3>Doctor of Philosophy (PhD)</h3>
              <p className="company">Andhra University</p>
              <p className="duration">Current</p>
              <p>Research focus on Large Language Models</p>
            </div>
            <div className="experience-card">
              <h3>M.Tech in Computer Science</h3>
              <p className="company">JNTU UCEK, Kakinada</p>
              <p className="duration">2015 - 2017</p>
            </div>
            <div className="experience-card">
              <h3>M.E in Embedded Systems</h3>
              <p className="company">SathyaBhama University, Chennai</p>
              <p className="duration">2009 - 2011</p>
            </div>
            <div className="experience-card">
              <h3>B.Tech in Computer Science</h3>
              <p className="company">Sri Sai Aditya Institute of Science and Technology</p>
              <p className="duration">2005 - 2008</p>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="section">
        <div className="section-content">
          <h2>Teaching Experience</h2>
          <div className="experience-grid">
            <div className="experience-card">
              <h3>Assistant Professor</h3>
              <p className="company">Current Institution</p>
              <ul className="responsibilities">
                <li>Programming in C</li>
                <li>Data Science through Python</li>
                <li>Computer Networks</li>
                <li>CCNA Certification Training</li>
                <li>Palo Alto Networks Basic Training</li>
              </ul>
            </div>
            <div className="experience-card">
              <h3>Research Focus</h3>
              <ul className="responsibilities">
                <li>Large Language Models (LLMs)</li>
                <li>Computer Networks</li>
                <li>Data Science</li>
                <li>Embedded Systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="research" className="section">
        <div className="section-content">
          <h2>Research Work</h2>
          <div className="research-content">
            <div className="orcid-profile">
              <h3>Research Profiles</h3>
              <div className="profile-links">
                <a href="https://orcid.org/0000-0001-5762-4955" target="_blank" rel="noopener noreferrer" className="orcid-button">
                  <img src="https://info.orcid.org/wp-content/uploads/2019/11/orcid_16x16.png" alt="ORCID iD" />
                  0000-0001-5762-4955
                </a>
                <p className="scopus-ids">
                  Scopus Author IDs: 58681233500, 59371774000
                </p>
              </div>
            </div>
            <div className="publications">
              <h3>Recent Publications</h3>
              <div className="publication-list">
                <div className="publication-item">
                  <h4>Fingerprint-based Blood Group Prediction: Advancing Personalized Healthcare</h4>
                  <p>Sustainable Materials, Structures and IoT [SMSI-2024] | 2025</p>
                  <p className="doi">DOI: 10.1201/9781003596776-23</p>
                </div>
                <div className="publication-item">
                  <h4>Machine Learning-Driven Exploration and Stages Classification of Liver Cirrhosis</h4>
                  <p>ICESC 2024 | 2024</p>
                  <p className="doi">DOI: 10.1109/ICESC60852.2024.10689808</p>
                </div>
                <div className="publication-item">
                  <h4>Novel Study Development of Classification Techniques for Gene Data Analysis using AI</h4>
                  <p>ICICT 2024 | 2024</p>
                  <p className="doi">DOI: 10.1109/ICICT60155.2024.10544832</p>
                </div>
              </div>
            </div>
            <div className="employment-history">
              <h3>Professional Experience</h3>
              <div className="employment-item">
                <h4>Cisco Systems</h4>
                <p>Advance Level Instructor (CSE)</p>
                <p className="duration">2020 - Present</p>
              </div>
              <div className="employment-item">
                <h4>JNTU UCEK, Kakinada</h4>
                <p>Lecturer (ECE)</p>
                <p className="duration">2012 - 2014</p>
              </div>
              <div className="employment-item">
                <h4>GDRCET, Bhilai</h4>
                <p>Assistant Professor (ECE)</p>
                <p className="duration">2011 - 2012</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section dark">
        <div className="section-content">
          <h2>Let's Connect</h2>
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-item">
                <h3>Email</h3>
                <p><a href="mailto:veerukhannan@gmail.com">veerukhannan@gmail.com</a></p>
              </div>
              <div className="contact-item">
                <h3>Phone</h3>
                <p><a href="tel:+919848826256">+91 98488 26256</a></p>
              </div>
              <div className="contact-item">
                <h3>LinkedIn</h3>
                <p><a href="https://www.linkedin.com/in/veera-krishna-0a79084" target="_blank" rel="noopener noreferrer">View Profile</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
