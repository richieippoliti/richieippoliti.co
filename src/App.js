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
                With experience in <strong>software development, cybersecurity, and artificial intelligence</strong>, I love tackling complex 
                problems and creating meaningful impact through technology.
              </p>
            </div>
          </div>
<div className="right-section">
  <div className="photo-wrapper">
    <div className="glow-circle"></div>
    <img 
      src="/headshot.jpg"
      alt="Richie Ippoliti Headshot"
      className="headshot"
    />
  </div>
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
        I’m from <strong>Long Island, New York.</strong> Outside of studying computer science and AI, I like spend time with friends and family, fish, surf, watch sports, and workout.
      </p>
      <p className="about-text">
        I am passionate about new experiences. My love for exploration reflects the same <strong>curiosity</strong>, <strong>drive</strong>, and <strong>adaptability</strong> I apply to solving real-world problems in the field of technology. Before I entered the industry, I was an <strong>Ocean Lifeguard</strong> for four summers at the beaches of the Town of Hempstead.
      </p>
    </div>
    </div>
</section>

{/* Projects Section */}
<section className="section projects" id="projects">
  <h2 className="section-title">Recent Projects</h2>
  <div className="projects-grid">

    {/* Project 1 */}
    <div className="project-card">
      <h3 className="project-title">"Save the World" Simulation Game in OCaml</h3>
      <img src="/savetheworld.png" alt="Cyber Map Screenshot" className="project-image" />
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

        {/* Project 3 */}
    <div className="project-card">
      <h3 className="project-title">WalletWize</h3>
      <img src="/walletwize.jpeg" alt="WalletWize" className="project-image" />
      <p className="project-description">
Through my Internship as a Full-Stack Developer at Revent Solutions, I contributed to the development of a smart budgeting app and AI Finance Tracker that makes managing your money effortless.
      </p>
      <div className="project-links">
        <a href="https://reventsolutions.com/walletwize" target="_blank" rel="noopener noreferrer">Read More</a>
      </div>
      <div className="project-links">
        <a href="https://apps.apple.com/us/app/ai-finance-tracker-walletwize/id6480011249" target="_blank" rel="noopener noreferrer"> Download</a>
      </div>
    </div>

    {/* Project 2 */}
    <div className="project-card">
      <h3 className="project-title">Global Cyber Intrusion Detection System</h3>
      <img src="/geoscript.png" alt="Cyber Map Screenshot" className="project-image" />
      <img src="/global2.png" alt="Cyber Map Screenshot" className="project-image" />
      <p className="project-description">
Developed a Global Cyber Threat Intelligence Map using Azure Sentinel and a honeypot VM to visualize real-time intrusion attempts. Extracted and geolocated attacker IPs with PowerShell and custom log queries to highlight global brute-force patterns.
      </p>
      <div className="project-links">
        <a href="https://www.linkedin.com/in/richard-ippoliti/details/projects/?profileUrn=urn%3Ali%3Afsd_profile%3AACoAAEZvB_cBmH3awA_ZEBhIkIlsbfymRvAwuxE" target="_blank" rel="noopener noreferrer">Read More</a>
      </div>
    </div>


  </div>
</section>


      <section className="section" id="experience">
  <h2 className="section-title">Experience</h2>

  <div className="experience-intro">
<p><strong>Software Engineering Intern</strong> at <a href="https://www.jahnelgroup.com" target="_blank" rel="noopener noreferrer"><strong>Jahnel Group</strong></a> (Summer 2025).</p>
    <img src="/jahnel.png" alt="Jahnel Group Logo" className="inline-logo" />
  </div>
  <div className="experience-intro">
  <p><strong>NME Teaching Assistant</strong> and <strong>Officer</strong> at <a href="https://www.cornellcyber.club" target="_blank" rel="noopener noreferrer"><strong>Cornell Cybersecurity Club</strong></a> (Sept. 2024 - Present).</p>
    <img src="/cornellcyber.png" alt="Cornell Cyber Logo" className="inline-logo" />
  </div>
  <div className="experience-intro">
    <p><strong>MC Class President</strong> and <strong>Executive Board Member</strong> at <a href="https://ktpcornell.com" target="_blank" rel="noopener noreferrer"><strong>Kappa Theta Pi, Cornell University Alpha Class</strong></a> (Jan. 2025 - Present).</p>
    <img src="/ktplogo.png" alt="Kappa Theta Pi Logo" className="inline-logo" />
  </div>
    <div className="experience-intro">
    <p><strong>Software Engineering Intern</strong> at <strong>Revent Solutions</strong>, Developing <a href="https://reventsolutions.com/walletwize" target="_blank" rel="noopener noreferrer"><strong>WalletWize</strong></a> (Jan. 2025 - March 2025).</p>
    <img src="/wizeicon.png" alt="WalletWize Logo" className="inline-logo" />
  </div>
    <div className="experience-intro">
    <p><strong>Top 1% of Users Worldwide</strong> on <strong>TryHackMe</strong> </p>
    <img src="/tryhackme.png" alt="TryHackMe Logo" className="inline-logo" />
  </div>

</section>




<section className="section" id="contact">
  <h2 className="section-title">Let's Connect</h2>
  <div className="contact-content">
    <p className="about-text">
      Interested in discussing new opportunities, potential collaborations, or have any questions? Reach out!</p>

    <div className="contact-form">
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
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="send-btn">Send Message</button>
      </form>
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