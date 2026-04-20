import { ArrowDown, Download, ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="hero" id="hero">
      
      <div className="hero-bg">
        <div className="hero-orb hero-orb--1"></div>
        <div className="hero-orb hero-orb--2"></div>
        <div className="hero-orb hero-orb--3"></div>
        <div className="hero-grid"></div>
      </div>

      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot"></span>
          Open to opportunities
        </div>

        <h1 className="hero-name">
          Conan Murgatroyd
          <span>PhD</span>
        </h1>

        <p className="hero-title">
          Data Science &amp; Space Instrumentation &mdash; building analytical tools 
          with Python, C++, and SQL to solve complex problems.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn-primary">
            View Projects
            <ArrowDown size={16} />
          </a>
          <a
            href="/Conan_Murgatroyd_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <Download size={16} />
            Download CV
          </a>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <span>SCROLL</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  )
}
