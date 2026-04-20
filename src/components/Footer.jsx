import { GithubIcon, LinkedinIcon } from './Icons'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div>© {year} Conan Murgatroyd. Built with React.</div>
          <div className="footer-links">
            <a
              href="https://github.com/ConanMurg"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              aria-label="GitHub"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href="https://linkedin.com/in/ConanMurg"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
