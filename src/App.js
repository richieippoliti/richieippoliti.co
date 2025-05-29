import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const roles = [
    "Software Engineer.",
    "Security Analyst.", 
    "AI Engineer."
  ];
  
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
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
          Richie Ippoliti
        </div>
        <div className="nav-links">
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
          <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a>
          <a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}>Experience</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="about">
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
                With experience in <strong>software development, cybersecurity, and AI research</strong>, I love tackling complex 
                problems and creating meaningful impact through technology.
              </p>
            </div>
          </div>
          <div className="right-section">
          <img 
            src="/headshot.jpg"
            alt="Richie Ippoliti Headshot"
            className="headshot"
          />
          </div>
        </div>
      </section>

      <section className="section about-me-section">
      <div className="about-me-grid">
        <div className="about-photo">
      <img
        src="/costarica.jpg" // or use imported image if you prefer
        alt="Adventure in Costa Rica"
        className="about-image"
      />
    </div>
    <div className="about-bio">
    <h2 className="about-bio-title">About Me</h2>
      <p className="about-text">
        I’m originally from Long Island, New York — and when I’m not building software or researching AI,
        you’ll find me exploring the outdoors, surfing, or capturing life through my camera lens.
      </p>
      <p className="about-text">
        My adventures, like this one in Costa Rica, reflect my passion for curiosity, challenge, and connection — the same values I bring to my work in tech.
      </p>
    </div>
    </div>
</section>

{/* Projects Section */}
<section className="section projects" id="projects">
  <h2 className="section-title">Featured Projects</h2>
  <div className="projects-grid">

    {/* Project 1 */}
    <div className="project-card">
      <h3 className="project-title">"Save the World" Simulation Game in OCaml</h3>
      <video className="project-video"     
      controls>
        <source src="/plaguedemo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p className="project-description">
        Real-time strategy simulation game inspired by Plague Inc., where players assume the role of global health institutions working to control a deadly outbreak across the seven continents.
      </p>
      <div className="project-links">
        <a href="https://github.coecis.cornell.edu/cl2632/cs3110final" target="_blank" rel="noopener noreferrer">Code is only accessible through Cornell Email, Reach out to me for Live Demo</a>
      </div>
    </div>

    {/* Project 2 */}
    <div className="project-card">
      <h3 className="project-title">Global Cyber Intrusion Detection System</h3>
      <img src="/geoscript.png" alt="Cyber Map Screenshot" className="project-image" />
      <p className="project-description">
Developed a global cyber threat intelligence map using Azure Sentinel and a honeypot VM to visualize real-time intrusion attempts. Extracted and geolocated attacker IPs with PowerShell and custom log queries to highlight global brute-force patterns.
      </p>
      <div className="project-links">
        <a href="https://www.linkedin.com/in/richard-ippoliti/details/projects/?profileUrn=urn%3Ali%3Afsd_profile%3AACoAAEZvB_cBmH3awA_ZEBhIkIlsbfymRvAwuxE" target="_blank" rel="noopener noreferrer">Read More</a>
      </div>
    </div>

    {/* Project 3 */}
    <div className="project-card">
      <h3 className="project-title">CUClassConnect iOS App</h3>
      <p className="project-description">
        Entered into 2023 AppDev Hack Challenge. Developed the iOS Front-End portion of an app designed for student discussions, information exchange, and effective collaboration through forums and study lobbies.
      </p>
      <div className="project-links">
        <a href="https://github.com/richieippoliti/Cornell-AppDev-Hack-Challenge" target="_blank" rel="noopener noreferrer">💻 Code</a>
      </div>
    </div>

  </div>
</section>


      <section className="section" id="experience">
  <h2 className="section-title">Experience</h2>

  <div className="experience-intro">
    <p><strong>Software Engineering Intern at Jahnel Group</strong> (Summer 2025).</p>
    <img src="/jahnel.png" alt="Jahnel Group Logo" className="inline-logo" />
  </div>
  <div className="experience-intro">
    <p><strong>NME Teaching Assistant and Officer at Cornell Cybersecurity Club</strong> (Sept. 2024 - Present).</p>
    <img src="/cornellcyber.png" alt="Cornell Cyber Logo" className="inline-logo" />
  </div>
  <div className="experience-intro">
    <p><strong>MC Class President and Executive Board Member at Kappa Theta Pi Cornell University Chapter</strong> (Jan. 2025 - Present).</p>
    <img src="/ktplogo.png" alt="Kappa Theta Pi Logo" className="inline-logo" />
  </div>

</section>


      {/* Contact Section */}
      <section className="section" id="contact">
        <h2 className="section-title">Let's Connect</h2>
        <div className="contact-content">
          <p className="about-text">
            I'm always open to discussing new opportunities, collaborations, or just having a conversation about technology.
          </p>
          
          <div className="contact-form">
            <form>
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="send-btn">Send Message</button>
            </form>
          </div>
          
          
        </div>
      </section>
    </div>
  );
}

export default App;