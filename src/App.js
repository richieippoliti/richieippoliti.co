import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const roles = [
    "Software Engineer.",
    "Security Analyst.", 
    "AI Engineer."
  ];
  
  const [currentRole, setCurrentRole] = useState(0);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/xjkrbbjl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      alert('Something went wrong.');
      console.error(error);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
  // Add scroll-triggered animations and parallax effects
  const handleScroll = () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.3;
    
    // Parallax effect for hero backgrounds
    const heroElement = document.querySelector('.hero');
    if (heroElement) {
      heroElement.style.transform = `translateY(${rate}px)`;
    }
  };

  // Add scroll listener
  window.addEventListener('scroll', handleScroll);

  // Cleanup
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
<div className="logo">
<span className="diamond">◆</span>
  <span className="logo-text">Richie Ippoliti</span>
</div>
        <div className="nav-links">
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a>
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
          <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="left-section">
            <div>
              <h1 className="intro-text">I'm <span className="name">Richie Ippoliti,</span></h1>
              <div className="role-container">

                <span className="role-prefix">An Aspiring</span>
                <span key={currentRole} className="role-text fade">
                  {roles[currentRole]}
              </span>
          </div>

          <div className="social-icons">
              <a
                href="https://www.linkedin.com/in/richard-ippoliti/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                  <i className="fab fa-linkedin-in"></i>
            </a>
  <a
    href="https://github.com/richieippoliti"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
  >
    <i className="fab fa-github"></i>
  </a>
  <a href="mailto:rji9@cornell.edu" aria-label="Email">
    <i className="fas fa-envelope"></i>
  </a>
</div>
            </div>

            <div className="about-description">
              <div className="cornell-line">
              <img src="/cornell-logo.png" alt="Cornell Logo" className="cornell-logo-img" />
                <span>Rising Junior at</span>
                <span className="cornell-name">Cornell University, College of Engineering</span>
                <span></span>
              </div>
              <p className="about-text">
                At Cornell, I am pursuing a degree in <strong>Computer Science</strong> with a minor in <strong>Artificial Intelligence</strong> 
                . I'm passionate about building innovative solutions and exploring the intersection of 
                technology and human experience.
              </p>
              <p className="about-text">
                With experience in <strong>software development, cybersecurity, and artificial intelligence</strong>, I love tackling complex 
                problems and creating meaningful impact through technology.
              </p>
            </div>
          </div>
<div className="right-section">
  <div className="headshot-container">
    <div className="headshot-flip-card">
      <div className="headshot-flip-front">
        <img 
          src="/headshot.jpg"
          alt="Richie Ippoliti Professional Headshot"
          className="headshot"
        />
      </div>
      <div className="headshot-flip-back">
        <img 
          src="/casual-headshot.jpg"
          alt="Richie Ippoliti Casual Headshot"
          className="headshot"
        />
      </div>
    </div>
  </div>
</div>
        </div>
      </section>

      <section className="section about-me-section" id="about">
  <div className="about-me-grid">
    <div className="about-photo">
      <img
        src="/costarica.JPG"
        alt="Adventure in Costa Rica"
        className="about-image"
      />
    </div>
    <div>
      <h2 className="about-bio-title">About Me</h2>
      <div className="about-bio">
        <p className="about-text">
          I'm from <strong>Long Island, New York.</strong> Outside of studying computer science and AI, I like to spend time on the water with friends and family.
        </p>
        <p className="about-text">
          I am passionate about new experiences. I am <strong>curious</strong>, <strong>driven</strong>, and <strong>adaptable</strong>, with a drive to solve real-world problems in the field of technology. Before I entered the industry, I was an <strong>Ocean Lifeguard</strong> for four summers at the beaches of the Town of Hempstead.
        </p>
      </div>
      <div className="currently-section-inline">
        <h3 className="currently-title-inline">Currently:</h3>
        <div className="currently-card-inline">
          <div className="currently-content-inline">
            <div className="currently-text-inline">
              <strong>Software Engineering Intern</strong> <span className="currently-separator">|</span>
              <a
                href="https://www.jahnelgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="currently-company-blue"
              >
                Jahnel Group
              </a>
              <span className="currently-location" style={{ marginLeft: '10px', color: '#aaa', fontSize: '0.95em', fontStyle: 'italic' }}>Albany, NY</span>
            </div>
            <div className="currently-date-inline">As of June 2025</div>
          </div>
          <img src="/jahnel.png" alt="Jahnel Group Logo" className="currently-logo-inline" />
        </div>
      </div>
    </div>
  </div>
  <div className="technical-skills">
    <h3 className="skills-title">Technical Skills</h3>
    <div className="skills-grid">
      <div className="skill-item">
        <img src="/python.svg" alt="Python" className="skill-icon-img" />
        <span className="skill-name">Python</span>
      </div>
      <div className="skill-item">
        <img src="/javascript.svg" alt="JavaScript" className="skill-icon-img" />
        <span className="skill-name">JavaScript</span>
      </div>
      <div className="skill-item">
        <img src="/java.svg" alt="Java" className="skill-icon-img" />
        <span className="skill-name">Java</span>
      </div>
      <div className="skill-item">
        <img src="/mysql.svg" alt="MySQL" className="skill-icon-img" />
        <span className="skill-name">MySQL</span>
      </div>
      <div className="skill-item">
        <img src="/ocaml.svg" alt="OCaml" className="skill-icon-img" />
        <span className="skill-name">OCaml</span>
      </div>
      <div className="skill-item">
        <img src="/react.svg" alt="React" className="skill-icon-img" />
        <span className="skill-name">React</span>
      </div>
      <div className="skill-item">
        <img src="/aws.svg" alt="AWS" className="skill-icon-img" />
        <span className="skill-name">AWS</span>
      </div>
      <div className="skill-item">
        <img src="/htmlcss.svg" alt="HTML/CSS" className="skill-icon-img" />
        <span className="skill-name">HTML/CSS</span>
      </div>
    </div>
  </div>
</section>

{/* Projects Section */}
<section className="section projects" id="projects">
  <h2 className="section-title">Recent Projects</h2>
  <div className="projects-grid">

    {/* Project 0 */}
    <div className="project-card">
      <h3 className="project-title">IntervalScribe AI</h3>
      <p className="project-description">
      IntervalScribe AI is a productivity tool that automatically captures, OCRs, and summarizes your on-screen work at regular intervals. It helps you keep a detailed, time-stamped log of your daily activities, making it easy to review, summarize, and document your work sessions.
      </p>
      <div className="project-links">
        <a href="https://github.com/richieippoliti/IntervalScribeAI" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i> GitHub
        </a>
      </div>
      <div className="project-tags">
        <span className="tag">Python</span>
        <span className="tag">Tesseract OCR</span>
        <span className="tag">Gemini API</span>
      </div>
    </div>

    {/* Project 1 */}
    <div className="project-card">
      <h3 className="project-title">"Save the World" Plague Simulator</h3>
      <p className="project-description">
      Real-time strategy simulation game inspired by Plague Inc., where players assume the role of global health institutions working to control a deadly outbreak across the seven continents. Players must coordinate research efforts and manage limited resources while racing against time to prevent global catastrophe.
      </p>
      <div className="project-links">
        <a href="https://github.coecis.cornell.edu/cl2632/cs3110final" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i> GitHub
        </a>
      </div>
      <div className="project-tags">
        <span className="tag">Academia</span>
        <span className="tag">OCaml</span>
      </div>
    </div>

    {/* Project 2 */}
    <div className="project-card">
      <h3 className="project-title">WalletWize</h3>
      <p className="project-description">
      Smart budgeting app and AI Finance Tracker that makes managing your money effortless. Developed as a Software Engineer, featuring automated expense categorization, personalized spending insights, and intelligent budget recommendations to help users achieve their financial goals.
      </p>
      <div className="project-links">
        <a href="https://apps.apple.com/us/app/walletwize-budget-expense/id6480011249" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-mobile-alt"></i> Download on App Store
        </a>
      </div>
      <div className="project-tags">
        <span className="tag">React Native</span>
        <span className="tag">Node.js/Express</span>
        <span className="tag">MongoDB</span>
      </div>
    </div>

    {/* Project 3 */}
    <div className="project-card">
      <h3 className="project-title">Global Cyber Intrusion Detection System</h3>
      <p className="project-description">
      Cloud-based SIEM implementation using Azure Sentinel integrated with a deliberately exposed honeypot virtual machine to monitor and geolocate global RDP brute-force attack vectors. Deployed custom PowerShell scripts for automated log ingestion, IP geolocation mapping via third-party APIs, and real-time threat visualization dashboards to analyze global attack patterns.
      </p>
      <div className="project-links">
        <a href="https://www.linkedin.com/in/richard-ippoliti/details/projects/?profileUrn=urn%3Ali%3Afsd_profile%3AACoAAEZvB_cBmH3awA_ZEBhIkIlsbfymRvAwuxE" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-external-link-alt"></i> Read More
        </a>
      </div>
      <div className="project-tags">
        <span className="tag">Azure Sentinel</span>
        <span className="tag">PowerShell</span>
        <span className="tag">VMWare</span>
      </div>
    </div>

    {/* Project 4 */}
    <div className="project-card">
      <h3 className="project-title">richieippoliti.co</h3>
      <p className="project-description">
      My personal portfolio website, built with React and modern CSS, showcasing my projects and experience. Designed for a dynamic and responsive user experience with smooth animations and intuitive navigation across all devices.
      </p>
      <div className="project-links">
        <a href="https://github.com/richieippoliti/richieippoliti.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i> GitHub
        </a>
      </div>
      <div className="project-tags">
        <span className="tag">React</span>
        <span className="tag">HTML</span>
        <span className="tag">CSS</span>
      </div>
    </div>

    {/* Project: CUClassConnect */}
    <div className="project-card">
      <h3 className="project-title">CUClassConnect</h3>
      <p className="project-description">
      Connect, collaborate, and learn together with CUClassConnect – your interactive hub for educational engagement and peer discussions. Submitted to the Cornell AppDev 2023 Hack Challenge.
      </p>
      <div className="project-links">
        <a href="https://github.com/richieippoliti/Cornell-AppDev-Hack-Challenge" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i> GitHub
        </a>
      </div>
      <div className="project-tags">
        <span className="tag">Swift</span>
        <span className="tag">Academia</span>
        <span className="tag">Frontend</span>
      </div>
    </div>

  </div>
</section>


<section className="section contact-section-wide" id="contact">
  <div className="connect-outer-grid">
    <div className="contact-photo">
      <img src="/connect-photo.jpg" alt="Let's Connect" className="contact-image" />
    </div>
    <div className="connect-card">
      <h2 className="section-title">Let's Connect</h2>
      <div className="contact-content">
        <p className="about-text">
          Interested in discussing new opportunities, potential collaborations, or have any questions? Reach out!
        </p>
        <div className="contact-form small-clean-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="send-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

    <footer className="site-footer">
  <p>© 2025   Richard Ippoliti</p>
</footer>
    </div>
  );
}


export default App;