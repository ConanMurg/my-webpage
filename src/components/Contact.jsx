import { Mail, Download } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Contact() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section id="contact" className="section section--alt" ref={ref}>
      <div className="container">
        <div className={`animate-in ${isVisible ? 'visible' : ''}`}>
          <div className="section-header">
            <div className="section-label">Contact</div>
            <h2 className="section-title">
              Contact <span className="gradient-text">Details</span>
            </h2>
          </div>

          <div className="contact-content">
            <p className="contact-description">
              I'm always interested in discussing new opportunities, 
              collaborations, or just talking about data and space science. 
              Feel free to reach out!
            </p>

            <div className="contact-links">
              <a
                href="mailto:conanmurg@gmail.com"
                className="contact-link contact-link--primary"
              >
                <Mail size={18} />
                Get in Touch
              </a>
              <a
                href="https://github.com/ConanMurg"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <GithubIcon size={18} />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/ConanMurg"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <LinkedinIcon size={18} />
                LinkedIn
              </a>
              <a
                href="/Conan_Murgatroyd_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <Download size={18} />
                Download CV
              </a>
            </div>

            <div className="contact-email">conanmurg@gmail.com</div>
          </div>
        </div>
      </div>
    </section>
  )
}
