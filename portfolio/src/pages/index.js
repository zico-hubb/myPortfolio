import Head from 'next/head';
import { personalDetails, skills, projects } from '../data/details';

export default function Home() {
  return (
    <>
      <Head>
        <title>{personalDetails.name} | {personalDetails.role}</title>
        <meta name="description" content={personalDetails.bio} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="container">
        {/* Navbar */}
        <nav className="navbar">
          <div className="logo">&lt;Zico /&gt;</div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Work</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        {/* Hero Section */}
        <header id="about" className="hero">
          <h1>Hi, I'm <span>{personalDetails.name}</span></h1>
          <p>{personalDetails.role}</p>
          <p style={{ fontSize: '1rem', marginTop: '-20px' }}>{personalDetails.bio}</p>
          <div style={{ marginTop: '20px' }}>
            <a href="#projects" className="btn">View My Work</a>
          </div>
        </header>

        {/* Skills Section */}
        <section id="skills">
          <h2>Technical Arsenal</h2>
          <div className="skills-grid">
            {skills.map((skillSet, index) => (
              <div key={index} className="skill-category">
                <h3>{skillSet.category}</h3>
                <div className="tags">
                  {skillSet.items.map((item) => (
                    <span key={item} className="tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <h2>Projects Showcase</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags" style={{ marginBottom: '20px' }}>
                  {project.stack.map((tech) => (
                    <span key={tech} className="tag" style={{ fontSize: '0.8rem' }}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="link-icon">
                    GitHub ↗
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="link-icon">
                      Live Demo ↗
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact / Footer */}
        <section id="contact">
          <h2>Connect</h2>
          <p style={{ color: '#a0a0a0', marginBottom: '20px' }}>
            I am always open to discussing new Web3 or Data Science projects.
          </p>
          <div className="tags" style={{ justifyContent: 'start' }}>
             <a href={personalDetails.socials.linkedin} className="btn" style={{border: '1px solid #333', color: '#fff'}}>LinkedIn</a>
             <a href={personalDetails.socials.twitter} className="btn" style={{border: '1px solid #333', color: '#fff'}}>Twitter</a>
             <a href={personalDetails.socials.github} className="btn" style={{border: '1px solid #333', color: '#fff'}}>GitHub</a>
          </div>
          
          
        </section>

        <footer>
          <p>© {new Date().getFullYear()} {personalDetails.name}.</p>
        </footer>
      </div>
    </>
  );
}